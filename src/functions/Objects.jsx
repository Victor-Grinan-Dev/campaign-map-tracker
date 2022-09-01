/* eslint-disable */

class Faction {
    constructor(name, color){
        this.name = name
        this.color = color
    }
}

class Unit {//one single model.

    constructor(id, unitName, movement, models, point_const, type){
        this.id = id
        this.name = unitName
        this.movement = movement
        this.models = models
        this.point_const = point_const
        this.type = type // array of tags describing the unit.


    }

    getParams(){
        const params = {id:undefined, unitName:undefined, movement:undefined, models:undefined, point_const:undefined, type:undefined} 
        return params;
    }
}

/* //cant implement this for now!
class Squad{//2 or more models that act toguether.
    constructor(name, movement, point_const, composition){
        this.name = name,
        this.movement = movement, //lowest movement value of the units inside
        this.point_const = point_const,// the sum of all point cost of all units in it 
        this.composition = composition // units-objects in an arrray
    }

}
*/
class Formation {//one or more models and/or squads in the same tile and from the same army. As a token in the map they move toguether.

    point_const= null
    damage = null
    X=0
    level= null
    abilities=[]
    badges=[]
    movement = null
    type = undefined

    constructor(id, name, composition, sDescription="", lDescription="", image=""){
        this.id = id
        this.name = name
        this.composition = composition
        this.sDescription = sDescription
        this.lDescription = lDescription
        this.image = image
        }

    pointCostCalc(){
        let total = 0;
        if(this.composition){
          this.composition.forEach(item => {
            total += item.pointCost
          })
        }
        return total;
      }
    
      damageCalc(){
        let totalDamge = 0;
        if(this.point_const){
          totalDamge = Math.ceil(this.point_const / 10)
        }
        return totalDamge;
      }

      movementCalc(){
        let movement;
        //Todo:
        if(this.composition){
            this.composition.forEach(unit => {
                //if there is a transpor that can carry all the models, use the transport movement else use the min movement among the formation's units.
            })
        }
      }

      getParams(){
        const params = {id:undefined, formationName:undefined, composition:undefined, sDescription:"", lDescription:"", image:""} 
        return params;
    }
}

class ArmyList {// all the models inthe map from the same player.
    constructor(name, point_cost, composition){
        this.name = name
        this.point_cost = point_cost, //the sum of the point of all the formations inside.
        this.composition = composition //all formations-objects inside.
    }
}

class User {
    constructor(id, email, username, password, type, formations, army_in_game, stats){
        this.id = id,
        this.email = email,
        this.username = username,
        this.password = password,
        this.type = type,
        this.formations = formations, //all formations created by this user.
        this.army_in_game = army_in_game, //army list object in relation to a campaing-object.
        this.stats = stats//played hours wins and defeats played games ...
    }
}
//Map objects:

const tile_object = {
    id:"",
    image:"",
    move_in:null,
    is_cover:false,
    is_starting_position:false
}

const nullTile = {
    id:null,
    image:null,
    move_in:null,
    cover:null,
    is_starting_position:null,
    posY:null,
    posX:null
    }

class Tile {
    constructor(id, image, move_in = 1, cover = false, is_starting_position = false, posY = null, posX = null){
        this.id = id,  
        this.image = image, 
        this.move_in = move_in, 
        this.is_cover = cover,
        this.is_starting_position = is_starting_position,
        this.posY = posY,
        this.posX = posX
        this.can_hIde_in = false,
        this.blocks_sight = false,
        this.owned_by = "free",
        this.formations_in = [],
        this.resources_in = [],
        this.buildings_in = []
    }
}

class MapLine {//i think this is not necesary... for now.
    constructor(position, line){
        this.position = position, //the index in the map line?
        this.line = line // each line is a row of tiles-objects.
    }
}

const map_object = {
    name:"",
    shape:null,
    dimensions: null,
    map:[],
    maxPlayers:null
}

class Map {
    constructor(name, shape, dimensions, map, maxPlayers){
    this.name = name
    this.shape = shape
    this.dimensions = dimensions
    this.map = map// array of MapLines/bidimentional array
    this.maxPlayers = maxPlayers
    }
}

const campaign_Object = {
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

class Campaign {
    isStarted = false
    isEnded = false
    constructor(name, armySize, mapShape, mapSize, map = {}, playersAmount = 2, factions = [], rounds = 4, campaignCode = "") {
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
        
        this.campaignCode = campaignCode
    }
}
export default Campaign;

export {
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
    Map
}

