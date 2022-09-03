/* eslint-disable */

/*{
  "id":1,
  "type":"infantry",
  "movement":2,
  "active_skills":["build", "set-defence", "ovrwatch"],
  "actions":2,
  "negative":[],
  "passive_skills":["hold-position", "all-terrain", "maxmove-1"]
},
{
  "id":2,
  "type":"light-infantry",
  "movement":2,
  "active_skills":["build","set-defence", "ovrwatch"],
  "actions":2,
  "negative":[],
  "passive_skills":["hold-position", "all-terrain", "maxmove-1"]
},
{
  "id":3,
  "type":"heavy-infantry",
  "movement":1,
  "active_skills":[ "build","set-defence", "ovrwatch"],
  "actions":2,
  "negative":[],
  "passive_skills":["hold-position", "all-terrain", "maxmove-1", "bonus-damage"]
},
{
  "id":4,
  "type":"jet-infantry",
  "movement":3,
  "active_skills":["deep-assault"],
  "actions":1,
  "negative":["No-water"],
  "passive_skills":["fly"]
},
{
  "id":5,
  "type":"rider",
  "movement":3,
  "active_skills":["hit&run", "turbo-boost"],
  "actions":1,
  "negative":["No-water", "no-Mountain", "hard-in-swamps" ],
  "passive_skills":["turbo-boost"]
},
{
  "id":6,
  "type":"armoured-transport",
  "movement":3,
  "active_skills":null,
  "actions":1,
  "negative":["No-water", "no-Mountain" ],
  "passive_skills":["transport-10"]
},
{
  "id":7,
  "type":"light-tank",
  "movement":3,
  "active_skills":null,
  "actions":1,
  "negative":["No-water", "no-Mountain" ],
  "passive_skills":[]
},
{
  "id":7.1,
  "type":"heavy-tank",
  "movement":3,
  "active_skills":null,
  "actions":1,
  "negative":["No-water", "no-Mountain" ],
  "passive_skills":[]
},

{
  "id":8,
  "type":"fast-hover-transport",
  "movement":4,
  "active_skills":null,
  "actions":1,
  "negative":["No-water", "low-defence"],
  "passive_skills":["fly", "transport-5"]
},
{
  "id":9,
  "type":"fast-hover",
  "movement":4,
  "active_skills":null,
  "actions":1,
  "negative":["No-water", "low-defence"],
  "passive_skills":["fly"]
},
{
  "id":10,
  "type":"walker-vehicle",
  "movement":2,
  "active_skills":null,
  "passive_skills":[],
  "actions":1,
  "negative":["no-water"]
}
*/
export class Faction {
    constructor(name, color){
        this.name = name
        this.color = color
    }
}
/**
   infantry:{
    "id":1,
    "type":"infantry",
    "movement":2,
    "active_skills":["build", "set-defence", "ovrwatch"],
    "actions":2,
    "negative":[],
    "passive_skills":["hold-position", "all-terrain", "maxmove-1"]
},
 */
export class Unit {//one single model.

    level = 0
    badges = []
    movement = 6
    
    constructor(id, unitName, models, point_const, type=unitType){
        this.id = id
        this.name = unitName
        this.models = models
        this.point_const = point_const
        this.type = type.type
    }

    getParams(){
        const params = {id:undefined, unitName:undefined, movement:undefined, models:undefined, point_const:undefined, type:undefined} 
        return params;
    }
}

export class Formation {//one or more models and/or squads in the same tile and from the same army. As a token in the map they move toguether.

    point_const = 0
    actionPoints=1
    damage = null
    modelCount = 0
    vision = 2
    Xp=0
    level= null
    abilities=[]
    badges=[]
    movement = 4
    type = undefined
    dedication=[]

    constructor(id, name, composition = [], sDescription="", lDescription="", image=""){
        this.id = id
        this.name = name
        this.composition = composition
        this.sDescription = sDescription
        this.lDescription = lDescription
        this.image = image
        this.setPointCost()
        this.setDamage()
        this.setMovement()
        }

    setPointCost(){
      if (typeof(this.composition === 'array')){
        //map the array
      }
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
   
      getParams(){
        const params = {id:undefined, formationName:undefined, composition:undefined, sDescription:"", lDescription:"", image:""} 
        return params;
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

export class ArmyList {// all the models inthe map from the same player.
    point_cost = 0
    constructor(name, composition){
        this.name = name
        this.composition = composition //all formations-objects inside.
        this.setPointCost()
    }

    setPointCost(){
      this.composition.forEach(formation => this.point_cost += formation.pointCost)
    }
}

export class User {
    id = undefined
    type = "Visitor"
    level = 0
    rank = "conscript"
    badges = []
    battles = 0
    winRate = 0
    formations = []

    constructor( username, email="", password=""){
        this.email = email
        this.username = username
        this.password = password
    }
    setId(){
        return username + `${Math.random()}`
    }
}
//Map objects:

export const tile_object = {
    id:"",
    image:"",
    move_in:null,
    is_cover:false,
    is_starting_position:false
}

export const nullTile = {
    id:null,
    image:null,
    move_in:null,
    cover:null,
    is_starting_position:null,
    posY:null,
    posX:null
    }

export class Tile {
    move_in = 1
    is_cover = undefined
    can_hIde_in = undefined
    blocks_sight = undefined
    owned_by = undefined
    formations_in = []
    resources_in = []
    buildings_in = []
    objective = null
    actions = []

    constructor(id, image, is_starting_position = false){
        this.id = id,  
        this.image = image,    
        this.is_starting_position = is_starting_position
    }
}

export class MapLine {//i think this is not necesary... for now.
    constructor(position, line){
        this.position = position, //the index in the map line?
        this.line = line // each line is a row of tiles-objects.
    }
}

export const map_object = {
    name:"",
    shape:null,
    dimensions: null,
    map:[],
    maxPlayers:null
}

export class Map {
    constructor(name, shape, dimensions, map, maxPlayers){
    this.name = name
    this.shape = shape
    this.dimensions = dimensions
    this.map = map// array of MapLines/bidimentional array
    this.maxPlayers = maxPlayers
    }
}

export const campaign_Object = {
    campaignName: "",
    armySize: null,
    map: {},
    playersAmount: null,
    factions: [
        {id:"ja",name:"The Justice Aliance", color:"#309abb"},
        {id:"df",name:"The Dark Forces", color:"#830202"},
        {id:"ae",name:"The Aliens and ET's", color:"#1fc778"},
        {id:"dm",name:"The Death Machines", color:"#395B64"},
        {id:"bh",name:"The Beast Hordes", color:"#0F3D3E"},
        {id:"ib",name:"The Infestation Bugs", color:"#D1512D"},
],
    rounds: null,
    campaignCode: "",
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

export const abilities = {
    '':'', 
    '':'', 
    '':'', 
    '':'', 
    '':'', 
    '':'',
    '':'',
    '':'',
}

export default class Campaign {
    isStarted = false
    isEnded = false
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

/**
 * export {
    campaign_Object,
    Faction,
    Unit,
    Formation,
    ArmyList,
    User,
    tile_object,
    nullTile,
    Tile,
    MapLine,
    map_object,
    Map,
    dedications
}
 */

