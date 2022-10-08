/* eslint-disable */

const getValue = (skill) => {
  let divider;
  if(skill.includes('+')){
    divider = '+';
  }else if(skill.includes('-')){
    divider = '-';
  }else{
    console.log("no divider found");
    return;
  }
  return parseInt(skill.split(divider)[1], 10);
}
export const heroTypes = {
  medic:"bonus heal",
  orator:"bonus luck",
  ingenier:"bonus build",
  figther:"bonus attack",
  tactician: "bonus defence"
}

export class Hero{
  is_hero = false
  hero_xp = []
  hero_level = []
  hero_skills = []

  constructor(type){
    this.type = type
  }
}

export class Unit {
    image = ""
    hero = null
    equipment = []
    constructor(id, unitName, models, point_const, skills){
      this.id = id
        this.name = unitName
        this.models = models
        this.point_const = point_const
        this.skills = skills
    }
    makeHero(type){
      this.hero = heroTypes[type]
    }
};

export class Formation {
  action_points = 1 //amount of actions a formation can do in a turn.
  work_force = 0 //points to complete the an action.
  damage = null
  defense = 0
  model_count = 0
  vision = 2
  Xp=0
  intelligence=1
  level= 0
  benefits=[]//this benefits come from the formation type if there is one 
  badges=[]//this are archievements as formation
  movement = 4
  type = undefined //this comes from the composition of the formation (old 40k formations rules)
  dedication=[] //this are enancements assigned to the formation by user
  color='white' //faction related
  subColor='white' //user choice
  is_listed = false
  point_const = 0  
  carry_capacity = 0 //from the units
  infantry_count = 0


  constructor(name, composition = [], s_description="", l_description="", image="", faction="", subfaction=""){
    this.name = name
    this.composition = composition
    this.s_description = s_description
    this.l_description = l_description
    this.image = image
    this.faction = faction
    this.subfaction = subfaction
    this.setPointCost() 
    this.setDamage()
    this.setMovement()
    this.setWorkForce()
    this.setModelCount()
    this.setMaxVision()
    this.setFaction()
    //action points?
    }

    setPointCost(){ // checked  
      this.composition.forEach(unit =>{
      this.point_const += unit.point_const
      });
    }

    setDamage(){ //checked
        this.damage = Math.floor(this.point_const / 10)
    }
    setWorkForce(){ //checked
      let apply_bonus = false;
      let bonus = 0;
      for (let unit of this.composition){
        if(unit.skills.type.includes("infantry")){
          this.work_force += unit.point_const;
        }
        unit.skills.passive.forEach(skill =>{
          if(skill.includes("work_force")){
            apply_bonus = true
            bonus = (parseInt(skill.split('+')[1], 10)/100);
          }
        });
      }
      if(apply_bonus){
        this.work_force += this.work_force * bonus;
      }
    }
    setMovement(){ //checked
      let isTransport = false;
      let transportCapacity = 0;
      let nonInfantryModelsMinMovement = 100;
      let slowestMovement = 100;

      //check each unit in the formation.
      this.composition.forEach(unit => {  
        //checks the slowest movement value in the formation.
        if (unit.skills.movement < slowestMovement) {
          slowestMovement = unit.skills.movement;
        }   
        //check how many infantry models.
        if(unit.skills.type.includes('infantry')){
          this.infantry_count += unit.models;
        };
        //what is the minimun movement value of all not infantry models in the formation.
        if(!unit.skills.type.includes('infantry')){
          if (unit.skills.movement < nonInfantryModelsMinMovement){
            nonInfantryModelsMinMovement = unit.skills.movement;
            }
        }
        //check if there is transport(s) and if true, whats the transport combine capacity.
        unit.skills.passive.forEach(skill => {
          if(skill.includes('transport')){
            isTransport = true;
            transportCapacity += parseInt(skill.split('+')[1], 10);  
          }
        })       
      })
      //is the transport capacity iqual or more that the infantry models. if yes min movement is taken from tranports else from the slowes unit in the formastion
      if(transportCapacity >= this.infantry_count){
        this.movement = nonInfantryModelsMinMovement;
      }else{
        this.movement = slowestMovement;
        }  
    }
    setModelCount(){ //checked
        this.composition.forEach(unit=>{
          this.model_count += unit.models;
        });
    }
    setMaxVision(){ //checked
      let bonusVision = 0;
      let tempBonus = 0;
      this.composition.forEach(unit => {//ok
        unit.skills.passive.forEach(skill => {//ok
          if (skill.includes('vision+')){ //ok
            tempBonus = getValue(skill);
            if(tempBonus > bonusVision){//ok
              bonusVision = tempBonus;
            };
          };
        });
        this.vision += bonusVision;
      });
    };
    setFaction(){
      switch (this.faction.name) {
        case "The Justice Aliance":
          this.defense = 10;
          this.color = "#309abb";
          break;
        case "damage%+10":
          this.damage += this.damage * 0.1;
          this.color = "#830202";
          break;
        case "The Death Machines":
          this.work_force *= 0.1;
          this.color = "#1fc778";
          //regeneration while still?
          break;
        case "The Beast Hordes":
          this.movement += 1;
          this.color = "#395B64";
          //less intelligent?
          break;
        case "The Advanced Humanoids":
          this.intelligence += 0.1;
          this.color = "#0F3D3E";
          break;
        case "The Infestation Bugs":
          for (let unit in this.units){
            unit.skills.passive.push('claim-tile');
          }
          this.color = "#D1512D";
          //low defence?
          break;
      
        default:
          break;
      }
    }

    increaseXP(increase){
      this.Xp += increase * this.intelligence;
    }
};

export class ArmyList {// all the models in the map from the same player.
    point_cost = 0
    color=null
    faction = null //this is an object with own properties, including faction color.

    constructor(name="", composition=""){
        this.name = name
        this.composition = composition //an array of all formations-objects.
        this.setPointCost()
    }

    setColor(color){
      this.composition.forEach(formation=> formation.color = color)
      this.color=color
    }

    setPointCost(){
      if (this.composition){
        this.composition.forEach(formation => this.point_cost += formation.pointCost)
      }
      
    }
}
export class User {
  
  type = "user"
  level = 0
  rank = "Conscript"
  badges = []
  battles = 0
  winRate = 0
  formations = []
  army_lists = new ArmyList()
  email = ""
  image = "conscript_red.png"
  images = ["conscript_red.png", "conscript_blue.png", "conscript_green.png", "conscript_yellow.png"]

  constructor(username, password=""){
      this.username = username
      this.password = password
  }
}
//Map objects:

class Terrain {
    image = undefined

  constructor(name, move_in_action, get_out_action, grants_cover, can_hIde_in, blocks_sight, can_build, actions, benefits){
    this.name = name

    this.move_in_action = move_in_action
    this.get_out_action = get_out_action
    this.grants_cover = grants_cover

    this.can_hIde_in = can_hIde_in
    this.is_blocks_sight = blocks_sight
    this.can_build = can_build

    this.actions = actions 
    this.benefits = benefits
    this.image = name
  }
}

const planes = new Terrain("planes", 1, 0, 0, false, false, true, [], null);
const hills = new Terrain("hills", 2, 1, 1, true, true, true, [], "vision+1");
const forest = new Terrain("forest", 2, 1, 2, true, true, false, [], "luck+4");
const swamps = new Terrain("swamps", 1, 2, -1, false, false, false, [], "luck+9");
const mountains = new Terrain("mountains", 5, 5, 3, true, true, false, [], null);

export const terrainType = {
  planes: planes,
  hills: hills,
  forest: forest,
  swamps: swamps,
  mountains: mountains
}

export class Tile {
    owned_by = undefined
    formation = null
    resources = []
    buildings = []
    objective = false
    actions = []
    image = undefined
    is_starting_position = false

    constructor(id, terrain){
        this.id = id,  
        this.terrain = terrainType[terrain],
        this.setImage()  
    }
    setImage(){
      this.image = this.terrain.image
    }

    toogle(){
      this.is_starting_position = !this.is_starting_position
    }
}
export class Map {
    maxPlayers = 0
    constructor(name, shape, dimensions, map, maxPlayers){
    this.name = name
    this.shape = shape
    this.dimensions = dimensions
    this.map = map// array of MapLines/bidimentional array
    this.setMaxPlayers();
    }
    getFormation(fromTileId){       
      this.map.map((row)=>{
          row.map((tile)=>{
              if (tile.id === fromTileId){
                  return tile.formation
              }
          })
      });
    }
    placeFormation(formation, tileId){
        this.map.map((row)=>{
            row.map((tile)=>{
                if (tile.id === tileId){
                    tile.formation = formation
                    return
                } 
            })
        })
    }
    deleteFormation(tileId){
        this.map.map((row)=>{
            row.map((tile)=>{
                if (tile.id === tileId){
                    tile.formation = null
                    return
                }
            })
        })
    }
    moveFormation(fromTileId, toTileId){
        const formation = this.getFormation(fromTileId);
        this.placeFormation(formation, toTileId);
        this.deleteFormation(fromTileId);
    }
    setMaxPlayers(){
      this.map.map(row => {
        row.map(tile => {
          if(tile.is_starting_position){
            this.maxPlayers += 1
          }
        })
      })
    }
}
export const campaign_Object = {
  //this is used in newCampaign, should be used the original class Campaign instead. 
    campaignName: "",
    armySize: null,
    map: {},
    playersAmount: null,
    factions: [],
    rounds: null,
    campaignCode: "",
}
export default class Campaign {
    isStarted = false
    isEnded = false
    rules = null
    players = []

    constructor(name, armySize, mapShape, mapSize, map = {}, playersAmount = 2, factions = [], rounds=4, duration=4, timeLapse="weeks", campaignCode = "") {
        this.name = name
        this.armySize = armySize
        this.mapShape = mapShape
        this.mapSize = mapSize
        this.map = map
        this.playersAmount = playersAmount
        this.factions = factions
        if (rounds < 4){
            rounds = 4
        }else{
            this.rounds = rounds
        }
        this.duration=duration
        this.timeLapse=timeLapse
        this.campaignCode = campaignCode
    }
}

export const skills_by_unit_type = {//TODO?: smarter change all this to separate tags?
  infantry:{
    type:"infantry",
    image: "/public/assets/unit_infantry.png",
    movement:2,
    active:["build", "set_defence", "get_ready"],
    negative:[],
    passive:["claim_tile", "all_terrain", "work_force%+20"]
  },
  light_infantry:{
    type:"light_infantry",
    image: "/public/assets/unit_infantry.png",
    movement:2,
    active:["conceal", "get_ready", "claim_tile"],
    negative:["defense-10", "damage-10"],
    passive:["hold_position", "all_terrain", "movement+1" ]
  },
  heavy_armoured_infantry:{
    type:"heavy_armoured_infantry",
    image: "/public/assets/unit_heavy_infantry.png",
    movement:1,
    active:[ "set_defence", "get_ready", "claim_tile"],
    negative:[],
    passive:["hold_position", "all_terrain", "defense+5"]
  },
  heavy_weapons_infantry:{
    type:"heavy_weapons_infantry",
    image: "/public/assets/unit_heavy_infantry.png",
    movement:1,
    active:[ "set_defence", "get_ready", "claim_tile"],
    negative:[],
    passive:["hold_position", "all_terrain", "damage+5"]
  },
  jet_infantry:{
    type:"jet_infantry",
    image: "/public/assets/unit_transport_copter.png",
    movement:4,
    active:["deep_assault", "jump"],
    negative:["No_water", "recharge_jets"],
    passive:["fly"]
  },
  rider:{
    type:"rider",
    movement:5,
    image: "/public/assets/unit_recon.png",
    active:["hit&run"],
    negative:["No_water", "no_Mountain", "hard_in_swamps" ],
    passive:["turbo_boost"]
  },
  beast_rider:{
    type:"beast_rider",
    image: "/public/assets/unit_recon.png",
    movement:3,
    active:["hit&run", "turbo_boost"],
    negative:["No_water"],
    passive:["vision+1"]
  },

  transport_tank:{
    type:"transport_tank",
    image: "/public/assets/unit_apc.png",
    movement:4,
    active:null,
    negative:["No_water", "no_Mountain" ],
    passive:["transport+10"]
  },

  transport_armoured_tank:{
    type:"transport_heavy_weapon_tank",
    image: "/public/assets/unit_ligth_tank.png",
    movement:4,
    active:null,
    negative:["No_water", "no_Mountain" ],
    passive:["transport+6"]
  },

  light_tank:{
    type:"light_tank",
    image: "/public/assets/unit_ligth_tank.png",
    movement:4,
    active:null,
    negative:["No_water", "no_Mountain", "low_defence" ],
    passive:[]
  },

  tank:{
    type:"heavy_tank",
    image: "/public/assets/unit_mid_tank.png",
    movement:4,
    active:null,
    negative:["No_water", "no_Mountain"],
    passive:["defense+5", "damage+5"]
  },

  heavy_tank:{
    type:"heavy_tank",
    image: "/public/assets/unit_big_tank.png",
    movement:3,
    active:null,
    negative:["No_water", "no_Mountain"],
    passive:["defense+10", "damage+10"]
  },

  fast_hover_transport:{
    type:"fast_hover_transport",
    image: "/public/assets/unit_transport_copter.png",
    movement:6,
    active:null,
    negative:["low_defence"],
    passive:["fly", "transport+5"]
  },

  fast_fover:{
    type:"fast_fover",
    image: "/public/assets/unit_copter.png",
    movement:6,
    active:null,
    negative:[ "low_defence"],
    passive:["fly"]
  },

  walker_wehicle:{
    type:"walker_wehicle",
    image: "/public/assets/unit_heavy_hover_tank.png",
    movement:2,
    active:null,
    negative:["no_water", "no_swamp"],
    passive:[]
  },

  artillery_tank:{
    type:"artillery_tank",
    image: "/public/assets/unit_rockets.png",
    movement:4,
    active:['deploy', "barage"],
    negative:["no_water"],
    passive:[]
  },

  artillery_battery:{
    type:"artillery_battery",
    image: "/public/assets/unit_artillery.png",
    movement:1,
    active:['deploy', "barage"],
    negative:["no_water"],
    passive:[]
  },

  warsuit:{
    type:"warsuit",
    image: "/public/assets/unit_heavy_hover_tank.png",
    movement:3,
    active:[],
    negative:["no_water"],
    passive:[]
  },

  monster:{
    type:"monster",
    image: "/public/assets/unit_heavy_hover_tank.png",
    movement:3,
    active:[],
    negative:[],
    passive:[]
  },
  beast:{ 
    type:"beast",
    image: "/public/assets/unit_recon.png",
    movement:3,
    active:[],
    negative:[],
    passive:["vision+1"]
  },

  flying_beast:{
    type:"flying_beast",
    image: "/public/assets/unit_copter.png",
    movement:6,
    active:[],
    negative:[],
    passive:["vision+2"]
  },
};

export const factions = {
  justice_aliance:{
    id:"ja",
    name:"The Justice Aliance",
    color:"#309abb",
    benefit:["defence+10"]
  },
      
  dark_forces:{
    id:"df",
    name:"The Dark Forces",
    color:"#830202",
    benefit:["damage%+10"]
  },
  advanced_humanoids:{
    id:"ae",
    name:"The Advanced Humanoids",
    color:"#1fc778",
    benefit:['XP%+10']
  },
  death_machines:{
    id:"dm",
    name:"The Death Machines",
    color:"#395B64",
    benefit:["build%+10"]},
  beast_hordes:{
    id:"bh",
    name:"The Beast Hordes",
    color:"#0F3D3E",
    benefit:["movement+1"]
  },
  infestation_bugs:{
    id:"ib",
    name:"The Infestation Bugs",
    color:"#D1512D",
    benefit:["pasive: claim_tile"]
  }
}
export const dedications = {
  'anti-infantry':'+10% damage vs infantry', 
  'anti-tank':'+10% damage vs tank', 
  'spotter':'+1 vision', 
  'speeder':'+1 movement', 
  'tank':'-5% damage recieve', 
  'tracker':'10% luck on search',
  'hard-worker':'+1 actionPoints',
  'analizer':'+10% Xp',
  'anti-air':"+10% damage vs fly"
}
export const badges = {
  '':'', 
  '':'', 
  '':'', 
  '':'', 
  '':'', 
  '':'',
  '':'',
  '':'',
}
export const active_skills = [
  "build", 
  "get-ready",
  "claim-tile",
  "build", 
  "set-defence",
  "ambush",
  "build", 
  "conceal",
  "build",
  "set-defence", 
  "ovrwatch",
  "deep-assault",
  "hit&run", 
  "turbo-boost",
  "deploy",
  "jump"
]
export const negative = [
  "no-waters", "no-swamps"
]
export const passive_skills = [
  "all-terrain", 
  "no-minus-move", 
  "tranport_capacity()", 
  "carry_capacity()",
  "ocupy-position", //means that ocupies the tile while standind in it
  "bonus-damage()",
  "fly"
]
export const buildings = {
  fortification:{
    //player fortify a tile and each time value increase as tile contains all the fortified elements listed here, defense values are cumulatives.
    level_1:{
      name:"observation post",
      work_force_cost:50,
      defence:0
    },
    level_2:{
      name:"trench",
      work_force_cost:100,
      defence:5
      },
    level_3:{
      name:"bunker1",
      work_force_cost:200,
      defence:10
    },
    level_4:{
      name:"bunker2",
      work_force_cost:200,
      defence:10
    },
    level_5:{
      name:"bunker2",
      work_force_cost:400,
      defence:20
    },
  },
  field_nursery:{
    name:"field_nursery",
    work_force_cost:200,
    defence:0,
    benefit:"heal 10pts per turn of a formation in it up to original pts if contains infantry models"
  },
  bootCamp:{
    name:"bootCamp",
    work_force_cost:100,
    defence:0,
    benefit:"adds 1XP per turn to the formation ocupying it"
  },
  work_shop:{
    name:"bootCamp",
    work_force_cost:200,
    defence:0,
    benefit:"heal 10pts per turn of a formation in it up to original pts if contains vehicle models"
  }
}

  