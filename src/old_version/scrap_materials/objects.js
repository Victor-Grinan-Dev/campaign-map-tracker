//tokens are the chips that represent in the map the differents formations wich your army is divided

class Formation {

    constructor (named, fieldTask, faction, color, strenght, stats, upgrades, level, currentPosition){
        this.named = named;            
        this.fieldTask = fieldTask;        
        this.faction = faction;        
        this.color = color;        
        this.strenght = strenght;        
        this.stats = stats;        
        this.upgrades = upgrades;        
        this.level = level;        
        this.currentPosition = currentPosition; 
        this.actions = 2;
    }
}

class Army {

    constructor (named, color, campaingPoints, formations, overallStrength){
        this.named = named;
        this.color = color;   
        this.campaingPoints = campaingPoints;        
        this.formations = formations;    //a list of objects tokens that compose the army 
        this.overallStrength = overallStrength;                 
    }
}

class User {

    constructor (named, email, armies){
        this.named = named;
        this.email = email;
        this.armies = armies; //array of all armies
    }
}


class map {

    constructor (named, listOfTilesObjects = null){

        if (listOfTilesObjects){
            "follow the tiles given"
        }else{
            this.createMap = function () {
                console.log("Map on the making")
           }
        }
        
        this.named = named;
        this.image = image; //url
        this.shape = shape;
        this.x = x;
        this.y = y;
        this.coords = {}; //object of all the top.left px of the 
    }
}

class Tile {

    constructor (id, image, position){ //, passable = Boolean, energyEnter = Number, energyExit = Number, modifyAttributes = Array){
        this.id = id;
        this.image = image; //url string
        this.topLeftCoords = position; //top, left object coords
        this.top = this.topLeftCoords[0];
        this.left = this.topLeftCoords[1];

        //OTHER GAME ATTRIBUTES:
        //this.passable = passable; 
        //this.energyEnter = energyEnter;
        //this.energyExit = energyExit;
        //this.modifyAttributes = modifyAttributes;
    };
};

const forest = "/WarCampaignMaster/images/forest.png.png";
const hills = "/WarCampaignMaster/images/hills.png.png";
const mountains = "/WarCampaignMaster/images/mountains.png.png";
const planes = "/WarCampaignMaster/images/planes.png.png";
const swamp = "/WarCampaignMaster/images/swamp.png.png";

const tiles = [forest, hills, mountains, planes, swamp];


