import Campaign from "../functions/Objects";
import { factions } from "../functions/objectsGame";
import { miniMapHx } from "./tinyHexMap";
import { DemoArmies } from "./armies";

const maxModelCost = 75;
const maxUnitCost = 150;
const maxFormCost = 300;
const maxArmyCost = 500;

const map = miniMapHx;
const factionSelection = factions;
const playerRed = DemoArmies[0];
const playerBlue = DemoArmies[1];

const rules = [
    [`* no single-model can cost more than ${maxModelCost}pts in the creation.`],
    [`* no unit can cost more than ${maxUnitCost}pts in the creation.`],
    [`* no formation can cost more than ${maxFormCost}pts in the creation.`],
    [`* no army can cost more than ${maxArmyCost}pts in the creation.`],
    ['* no model can be a unique type.'],
    ['* divide the original movement in inches by 3 rounded down to a min of 1 to get the in-campaign movement result'] ,
    ['* each player need to have at least 1 independent character to be your campaign leader.'],
    ['* do not give a warlord trait but select your warlord'] ,
    ['* do not give a relic to any of your models.']
];

const testCampaign = new Campaign('chorizoMix', maxArmyCost, map.shape, map.dimensions, map.map, map.maxPlayers, factionSelection, 4, 1, 'week', '000000');

testCampaign.players = [playerRed, playerBlue];
testCampaign.rules = rules
export default testCampaign;