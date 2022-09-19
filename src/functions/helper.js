//TO RUN THI FILE, WRITE IN CONSOLE: npm run helper 
'use strict'
const data = require('../../db2.json');

const database = data.database;
const campaings = database.campaings;
const maps = database.maps;
const factions = database.factions;
const badges = database.badges;
const active_skills = database.active_skills;
const passive_skills = database.passive_skills;
const negative = database.negative;
const objects = database.objects;
const users = database.users;

export default endPoints = {

    campaings:'/database.campaigns',
    maps:'/database.maps',
    factions:'/database.factions',
    badges:'/database.badges',
    active_skills:'/database.active_skills',
    passive_skills:'/database.passive_skills',
    negative:'/database.negative',
    objects:'/database.objects',
    users:'/database.users',

    values:[
        campaings,
        maps,
        factions,
        badges,
        active_skills,
        passive_skills,
        negative,
        objects,
        users
    ]
}
