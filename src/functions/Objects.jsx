/* eslint-disable */


export class Faction {
    constructor(name, color){
        this.name = name
        this.color = color
    }
};

export class Unit {//one single model.

    level = 0
    badges = []
    
    constructor(id, unitName, models, point_const, unitType){
        this.id = id
        this.name = unitName
        this.models = models
        this.point_const = point_const
        this.unitType = unitType
    }
}

export class Formation {//one or more models and/or squads in the same tile and from the same army. As a token in the map they move toguether.

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
    color='white'

    constructor(id, name, composition = [], sDescription="", lDescription="", image=""){
        this.id = id
        this.name = name
        this.composition = composition
        this.sDescription = sDescription
        this.lDescription = lDescription
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
      this.composition.forEach(unit =>{
        total += unit.point_const
      })
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

