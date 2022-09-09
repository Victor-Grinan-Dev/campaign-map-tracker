/* eslint-disable */

export class Unit {//one single model.
    constructor(unitName, models, point_const, skills){
        this.name = unitName
        this.models = models
        this.point_const = point_const
        this.skills = skills
    }
}

export class Formation {//one or more models and/or squads in the same tile and from the same army. As a token in the map they move toguether.

  action_points=1
  damage = null
  model_count = 0
  vision = 2
  Xp=0
  level= 0
  benefits=[]
  badges=[]
  movement = 4
  type = undefined
  dedication=[]
  color='white'
  is_listed = false
  carry_capacity = undefined

  constructor(name, composition = [], s_description="", l_description="", image=""){
    this.name = name
    this.composition = composition
    this.s_description = s_description
    this.l_description = l_description
    this.image = image
    this.point_const = this.setPointCost() 
    this.setDamage()
    this.setMovement()
    }
        
    get pointCost (){
      let total = 0;
      this.composition.forEach(unit =>{
        this.point_const += unit.point_const
      }) 
      return total;
    }
    setPointCost(){
      let total = 0;
      /*
        this.composition.forEach(unit =>{
        total += unit.point_const
      })
      */
      return total;
    }
    
    setDamage(){
        this.damage = Math.ceil(this.point_const / 10)
    }

    setMovement(){
      let isTransport = false;
      let transportCapacity = 0;
      let isInfantryUnitsLessThanTransport = false;

      //check for transports
/**        this.composition.forEach(unit => {
          if(unit.type.includes('transport')){
            transportCapacity = unit.type.split('-')
          } 
        })

        this.composition.forEach(unit => {
          if(unit.movement < this.movement){
            this.movement=unit.movement;
          }
        })*/
      }
      setModelCount(){
        this.composition.forEach(unit=>{
          if(unit.type){
            console.log(unit)
          }
          
        })
      }
   

      increasePoint_const(increment){
        this.point_const+=increment;
      }
      increaseActionPoints(increment){
        this.actionsPoints+=increment;
      }
      increaseDamage(increment){
        this.damage+=increment;
      }
      increaseVision(increment){
        this.vision+=increment;
      }
      increaseXp(increment){
        this.Xp+=increment
      }
      increaseLevel(increment){
        this.level+=increment;
      }
      increaseAbilities(newAbility){
        this.abilities.push(newAbility);
      }
      increaseBadges(newBadge){
        this.badges.push(newBadge);
      }
      increaseMovement(increment){
        this.movement+=increment;
      }
      increaseType(newType){
        this.type.push(newType);
      }
      replaceType(newType){
        this.type=newType;
      }
      increaseDedication(newDedication){
        this.dedication.push(newDedication);
      }
      replaceDedication(newDedication, replacingOld=undefined){
        if(!replacingOld){
            this.dedication=new Array().fill(newDedication);
        }
        //todo: replace a dedication inside a multiple values array
      }
}

export class ArmyList {// all the models in the map from the same player.
    point_cost = 0
    color=null
    faction = null //this is an object with own properties, including faction color.

    constructor(name, composition){
        this.name = name
        this.composition = composition //an array of all formations-objects.
        this.setPointCost()
    }

    setColor(color){
      this.composition.forEach(formation=> formation.color = color)
      this.color=color
    }

    setPointCost(){
      this.composition.forEach(formation => this.point_cost += formation.pointCost)
    }
}
export class User {
  
  type = "Visitor"
  level = 0
  rank = "conscript"
  badges = []
  battles = 0
  winRate = 0
  formations = []
  army_lists = []

  constructor(id, username, email="", password=""){
      this.email = email
      this.username = username
      this.password = password
      this.id = id
  }
}
//Map objects:
export class Tile {
    move_in = 1
    is_cover = undefined
    can_hIde_in = undefined
    blocks_sight = undefined
    owned_by = undefined
    formation = null
    resources = []
    buildings = []
    objective = null
    actions = []

    constructor(id, image, is_starting_position = false){
        this.id = id,  
        this.image = image,    
        this.is_starting_position = is_starting_position
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

export const skills_by_unit_type = {
  infantry:{
  
    movement:2,
    active:["build", "set-defence"],
    actions:2,
    negative:[],
    passive:["claim-tile", "all-terrain"]
  },
  light_infantry:{
    movement:2,
    active:["build", "conceal", "get-ready",
    "claim-tile"],
    actions:2,
    negative:["defense(-10)", "damage(-10)"],
    passive:["hold-position", "all-terrain", "move(+1)" ]
  },
  heavy_infantry:{
    movement:1,
    active:[ "build","set-defence", "ovrwatch"],
    actions:2,
    negative:[],
    passive:["hold-position", "all-terrain", "maxmove-1", "bonus-damage"]
  },
  jetInfantry:{
    movement:3,
    active:["deep-assault"],
    actions:1,
    negative:["No-water"],
    passive:["fly"]
  },
  rider:{
    movement:3,
    active:["hit&run", "turbo-boost"],
    actions:1,
    negative:["No-water", "no-Mountain", "hard-in-swamps" ],
    passive:["turbo-boost"]
  },

  transport_tank:{
    movement:3,
    active:null,
    actions:1,
    negative:["No-water", "no-Mountain" ],
    passive:["transport-10"]
  },
  light_tank:{
    movement:3,
    active:null,
    actions:1,
    negative:["No-water", "no-Mountain" ],
    passive:[]
  },
  heavy_tank:{
    movement:3,
    active:null,
    actions:1,
    negative:["No-water", "no-Mountain" ],
    passive:[]
  },

  fast_hover_transport:{
    movement:4,
    active:null,
    actions:1,
    negative:["No-water", "low-defence"],
    passive:["fly", "transport-5"]
  },
  fast_fover:{
    movement:4,
    active:null,
    actions:1,
    negative:[ "low-defence"],
    passive:["fly"]
  },
  walker_wehicle:{
    movement:2,
    active:null,
    actions:[],
    negative:1,
    passive:["no-water"]
  },
  artillery_tank:{
    movement:4,
    active:['deploy', "barage"],
    actions:[],
    negative:1,
    passive:["no-water"]
  },

  artillery_battery:{
    movement:1,
    active:['deploy'],
    actions:[],
    negative:1,
    passive:["no-water"]
  },

  warsuit:{
    movement:3,
    active:[],
    actions:[],
    negative:[],
    passive:["no-water"]
  }
}

export const factions = [
  {
      id:"ja",
      name:"The Justice Aliance",
      color:"#309abb"},
  {
      id:"df",
      name:"The Dark Forces",
      color:"#830202"},
  {
      id:"ae",
      name:"The Aliens and ET's",
      color:"#1fc778"},
  {
      id:"dm",
      name:"The Death Machines",
      color:"#395B64"},
  {
      id:"bh",
      name:"The Beast Hordes",
      color:"#0F3D3E"},
  {
      id:"ib",
      name:"The Infestation Bugs",
      color:"#D1512D"
  }
]
export const dedications = {
  'anti-infantry':'+10% damage vs infantry', 
  'anti-tank':'+10% damage vs tank', 
  'spotter':'+1 vision', 
  'speeder':'+1 movement', 
  'tank':'-5% damage recieve', 
  'tracker':'10% luck on search',
  'hard-worker':'+1 actionPoints',
  'analizer':'+10% Xp',
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
export const active_skills =[
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
export const negative =[
  "no-waters", "no-swamps"
]
export const passive_skills =[
  "all-terrain", 
  "no-minus-move", 
  "tranport_capacity()", 
  "carry_capacity()",
  "ocupy-position", //means that ocupies the tile while standind in it
  "bonus-damage()",
  "fly"
]
 
