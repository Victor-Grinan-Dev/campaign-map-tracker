
import { User, Unit, Formation, ArmyList} from "../functions/Objects";
import { unitTypesObject } from "../functions/objectsGame";

//user1 (hard coded):
const user1 = new User('user1', 'user1@campaign.com', 123456);

const elgir = new Unit('user1-0', 'Elgir BladeClaw', 1, 55, unitTypesObject.infantry);
const grey_hunters = new Unit('user1-1', 'Elgir\'s Grey Hunters', 2, 5, 90, unitTypesObject.infantry);
const wolf_scouts = new Unit('user1-2', 'Shadow Wolves', 5, 95, unitTypesObject.infantry);
const ciberwolf = new Unit('user1-3', "WhiteFang", 1, 15, 'beast');//beast cant do actions
const thunderwolf_cavalry = new Unit('user1-0', "Thunder Riders", 3, 3, 145, unitTypesObject.rider);
const razor_back = new Unit('user1-4', "IronBite", 1, 125, unitTypesObject.armouredTransport)

const formation1 = new Formation('f01U1', 'Elgir\'s Patrol', [elgir, grey_hunters, razor_back], 'the archiver group', ' this group will be use for holding and archieving objectives', undefined )

const formation2 = new Formation('f02U1', 'Elgir\'s Scouts', [wolf_scouts], 'spotters', ' this group will be use for spying on the enemy, holding easy objectives', undefined); 

const formation3 = new Formation('f03U1', 'WhiteFang', [ciberwolf], 'scout', ' this will be acouting and searching for items', undefined);

const formation4 = new Formation('f04U1', 'Thunder Riders', [thunderwolf_cavalry], 'Harrasment', 'this will be harassing enemy weak formations', undefined);

const user1Army = new ArmyList("Elgir's Finests", [formation1, formation2, formation3, formation4]);


//user 2 ():
const user2 = new User('user2', 'user2@campaign.com', 654321);

const user2ArmyItems = [
    [ 'user2-0',"Commander", 1, 40, unitTypesObject.infantry],
    [ 'user2-1',"command squad", 4, 40, unitTypesObject.infantry],
    [ 'user2-2',"infantry squad Alpha", 10, 60, unitTypesObject.infantry],
    [ 'user2-3',"infantry squad Beta", 10, 60, unitTypesObject.infantry],
    [ 'user2-4',"Hellhound", 1, 100, unitTypesObject.lightTank],
    [ 'user2-5',"Basillisk", 1, 125, unitTypesObject.artilleryTank],
    [ 'user2-6',"Chimera", 1, 75, unitTypesObject.transportTank],
];

const commander = new Unit('user2-0',"Commander", 1, 40, unitTypesObject.infantry);
const command_squad = new Unit('user2-1',"command squad", 4, 40, unitTypesObject.infantryy);
const squad_alpha = new Unit('user2-2',"infantry squad Alpha", 10, 60, unitTypesObject.infantry);
const squad_beta = new Unit('user2-3',"infantry squad Beta", 10, 60, unitTypesObject.infantry);//beast cant do actions
const hellhound = new Unit('user2-4',"Hellhound", 1, 100, unitTypesObject.lightTank);
const basillisk = new Unit('user2-5',"Basillisk", 1, 125, unitTypesObject.artilleryTank)
const chimera = new Unit('user2-6',"Chimera", 1, 75, unitTypesObject.transportTank)
/** DEMO DATA **/

//wolves:
const wolfForm150ptsDemo = new Formation(1, 'Wolves', [elgir, grey_hunters])
const wolfDemoArmy = new ArmyList("Elgir's Finests", [wolfForm150ptsDemo]);

//astra:
command_squad.point_cost += 10;
const astraForm150Demo = new Formation(2,'235 platoon', [commander, command_squad, squad_alpha]);
const AstraDemoArmy = new ArmyList('235 platoon', [astraForm150Demo]);



/**
const astraArmy = DemoArmies[0]; 
const wolvesArmy = DemoArmies[1];
const astraToken = astraArmy.formation;
const wolvesToken = wolvesArmy.formation;
 */

  

export const DemoArmies = [AstraDemoArmy, wolfDemoArmy]