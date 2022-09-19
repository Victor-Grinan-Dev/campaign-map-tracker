/* eslint-disable */

export const unitTypesObject = {
    infantry:{
      id:1,
      type:"infantry",
      movement:2,
      active_skills:["build", "set-defence", "ovrwatch"],
      actions:2,
      negative:[],
      passive_skills:["hold-position", "all-terrain", "maxmove-1"]
    },
    lightInfantry:{
      id:2,
      type:"light-infantry",
      movement:2,
      active_skills:["build","set-defence", "ovrwatch"],
      actions:2,
      negative:[],
      passive_skills:["hold-position", "all-terrain", "maxmove-1"]
    },
    heavyInfantry:{
      id:3,
      type:"heavy-infantry",
      movement:1,
      active_skills:[ "build","set-defence", "ovrwatch"],
      actions:2,
      negative:[],
      passive_skills:["hold-position", "all-terrain", "maxmove-1", "bonus-damage"]
    },
    jetInfantry:{
      id:4,
      type:"jet-infantry",
      movement:3,
      active_skills:["deep-assault"],
      actions:1,
      negative:["No-water"],
      passive_skills:["fly"]
    },
    rider:{
      id:5,
      type:"rider",
      movement:3,
      active_skills:["hit&run", "turbo-boost"],
      actions:1,
      negative:["No-water", "no-Mountain", "hard-in-swamps" ],
      passive_skills:["turbo-boost"]
    },
  
    armouredTransport:{
      id:6,
      type:"armoured-transport",
      movement:3,
      active_skills:null,
      actions:1,
      negative:["No-water", "no-Mountain" ],
      passive_skills:["transport-10"]
    },
    lightTank:{
      id:7,
      type:"light-tank",
      movement:3,
      active_skills:null,
      actions:1,
      negative:["No-water", "no-Mountain" ],
      passive_skills:[]
    },
    heavyTank:{
      id:7.1,
      type:"heavy-tank",
      movement:3,
      active_skills:null,
      actions:1,
      negative:["No-water", "no-Mountain" ],
      passive_skills:[]
    },
  
    fastHoverTransport:{
      id:8,
      type:"fast-hover-transport",
      movement:4,
      active_skills:null,
      actions:1,
      negative:["No-water", "low-defence"],
      passive_skills:["fly", "transport-5"]
    },
    fastHover:{
      id:9,
      type:"fast-hover",
      movement:4,
      active_skills:null,
      actions:1,
      negative:["No-water", "low-defence"],
      passive_skills:["fly"]
    },
    walkerVehicle:{
      id:10,
      type:"walker-vehicle",
      movement:2,
      active_skills:null,
      actions:[],
      negative:1,
      passive_skills:["no-water"]
    },
    artilleryTank:{
      id:11,
      type:"artillery-tank",
      movement:4,
      active_skills:['deploy'],
      actions:[],
      negative:1,
      passive_skills:["no-water"]
    }
  }
export const unitTypesArray = [
    {
      id:1,
      type:"infantry",
      movement:2,
      active_skills:["build", "set-defence", "ovrwatch"],
      actions:2,
      negative:[],
      passive_skills:["hold-position", "all-terrain", "maxmove-1"]
    },
    {
      id:2,
      type:"light-infantry",
      movement:2,
      active_skills:["build","set-defence", "ovrwatch"],
      actions:2,
      negative:[],
      passive_skills:["hold-position", "all-terrain", "maxmove-1"]
    },
    {
      id:3,
      type:"heavy-infantry",
      movement:1,
      active_skills:[ "build","set-defence", "ovrwatch"],
      actions:2,
      negative:[],
      passive_skills:["hold-position", "all-terrain", "maxmove-1", "bonus-damage"]
    },
    {
      id:4,
      type:"jet-infantry",
      movement:3,
      active_skills:["deep-assault"],
      actions:1,
      negative:["No-water"],
      passive_skills:["fly"]
    },
    {
      id:5,
      type:"rider",
      movement:3,
      active_skills:["hit&run", "turbo-boost"],
      actions:1,
      negative:["No-water", "no-Mountain", "hard-in-swamps" ],
      passive_skills:["turbo-boost"]
    },
  
    {
      id:6,
      type:"armoured-transport",
      movement:3,
      active_skills:null,
      actions:1,
      negative:["No-water", "no-Mountain" ],
      passive_skills:["transport-10"]
    },
    {
      id:7,
      type:"light-tank",
      movement:3,
      active_skills:null,
      actions:1,
      negative:["No-water", "no-Mountain" ],
      passive_skills:[]
    },
    {
      id:7.1,
      type:"heavy-tank",
      movement:3,
      active_skills:null,
      actions:1,
      negative:["No-water", "no-Mountain" ],
      passive_skills:[]
    },
  
    {
      id:8,
      type:"fast-hover-transport",
      movement:4,
      active_skills:null,
      actions:1,
      negative:["No-water", "low-defence"],
      passive_skills:["fly", "transport-5"]
    },
    {
      id:9,
      type:"fast-hover",
      movement:4,
      active_skills:null,
      actions:1,
      negative:["No-water", "low-defence"],
      passive_skills:["fly"]
    },
    {
      id:10,
      type:"walker-vehicle",
      movement:2,
      active_skills:null,
      actions:[],
      negative:1,
      passive_skills:["no-water"]
    },
    {
      id:11,
      type:"artillery-tank",
      movement:4,
      active_skills:['deploy'],
      actions:[],
      negative:1,
      passive_skills:["no-water"]
    }
  ]
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

export const active_skills ={

}
export const negative ={

}
export const passive_skills ={

}