import { Unit, Formation, ArmyList, Campaign, User  } from "./Objects";
import { unitTypes } from "./objectsGame";
//user1 (hard coded):
const user1 = new User('user1', 'user1@campaign.com', 123456);

const elgir = new Unit('user1-0', 'Elgir BladeClaw', 2, 1, 55, unitTypes.infantry);
const grey_hunters = new Unit('user1-1', 'Elgir\'s Grey Hunters', 2, 5, 90, unitTypes.infantry);
const wolf_scouts = new Unit('user1-2', 'Shadow Wolves', 2, 5, 95, unitTypes.infantry);
const ciberwolf = new Unit('user1-3', "WhiteFang", 4, 1, 15, 'beast');//beast cant do actions
const thunderwolf_cavalry = new Unit('user1-0', "Thunder Riders", 3, 3, 145, unitTypes.rider);
const razor_back = new Unit('user1-4', "IronBite", 4, 1, 125, unitTypes.armoured_transport)

const formation1 = new Formation('f01U1', 'Elgir\'s Patrol', [elgir, grey_hunters, razor_back], 'the archiver group', ' this group will be use for holding and archieving objectives', undefined )

const formation2 = new Formation('f02U1', 'Elgir\'s Scouts', [wolf_scouts], 'spotters', ' this group will be use for spying on the enemy, holding easy objectives', undefined); 

const formation3 = new Formation('f03U1', 'WhiteFang', [ciberwolf], 'scout', ' this will be acouting and searching for items', undefined);

const formation4 = new Formation('f04U1', 'Thunder Riders', [thunderwolf_cavalry], 'Harrasment', 'this will be harassing enemy weak formations', undefined);

const user1Army = new ArmyList("Elgir's Finests", [formation1, formation2, formation3, formation4]);


//user 2 ():
const user2 = new User('user2', 'user2@campaign.com', 654321);

const user2ArmyItems = [
    [ 'user2-0',"Commander", 2, 1, 40, 'infantry'],
    [ 'user2-1',"command squad", 2, 4, 40, 'infantry'],
    [ 'user2-2',"infantry squad Alpha", 2, 10, 60, 'infantry'],
    [ 'user2-3',"infantry squad Beta", 2, 10, 60, 'infantry'],
    [ 'user2-4',"Hellhound", 4, 1, 100, 'tank'],
    [ 'user2-5',"Basillisk", 4, 1, 125, 'artillery-tank'],
    [ 'user2-6',"Chimera", 4, 1, 75, 'transport-tank(12)'],
];

const user2Units = [];
user2ArmyItems.map((item)=>(
    user2Units.push(new Unit(item[0], item[1], item[2], item[3], item[4], item[5])
)));


/** DEMO DATA **/

//wolves:
const wolfForm150ptsDemo = new Formation(1, 'Wolves', [elgir, grey_hunters])
const wolfDemoArmy = new ArmyList("Elgir's Finests", [wolfForm150ptsDemo]);

//astra:
user2Units[1].point_cost += 10;
const astraForm150Demo = new Formation(2,'235 platoon', [user2Units[0], user2Units[1], user2Units[2]]);
const AstraDemoArmy = new ArmyList('235 platoon', [astraForm150Demo]);

export const DemoArmies = [AstraDemoArmy, wolfDemoArmy]