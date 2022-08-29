/* LUCK SYSTEM:
chances in 10, every array has 10 items to determine probability
*/

//DOM reading
const itemFound = document.querySelector("#itemFound");
const searchBtn = document.querySelector("#search");

//DATABASE
//what kind of item is found on search
const itemstypes = [
    "melee weapon:", 
    "ranged weapon:", 
    "resources:", 
    "resources:", 
    "resources:",
    "resources:",
    "unit:",
    "unit:",
    "unit:",
    "unit:",
    "unit:",
    "unit:",
    "unit:",
    "unit:",
    "unit:",
    "unit:",
    "resources:",
    "resources:", 
    "resources:",  
    "special item:"

]
//what traits in a found weapon 
const traitsAmount = [0, 0, 0, 0, 1, 1, 1, 2, 2, 3];
//what amount in found upgrade pts for army (cant buy weapons, cumulative)
const amount = [5, 5, 5, 5, 5, 10, 10, 10, 10, 25];

const units = [
    "3 tacticals, with 1 missile launcher (scrap value, currency value), 1 storm bolter (scrap value, currency value), grants 2xp per killed model",
    "5 slugga boyz, with 1 big shoota (scrap value, currency value), 1 big choppa (scrap value, currency value), grants 1xp per killed model",
    "5 shoota boyz, with 1 big shoota (scrap value, currency value), 1 rokkit luncha (scrap value, currency value), grants 1xp per killed model",
    "5 fire warriors, with 1 marker ligth (scrap value, currency value), grants 1xp per killed model",
    "4 chaos marines, with 1 chain axe (scrap value, currency value), 1 plasma gun (scrap value, currency value), grants 2xp per killed model",
    "10 hormagaunts, grants 1xp per killed model",
    "10 termagaunts, grants 1xp per killed model",
    "2 tyranid warriors, with 1 deathspitter (scrap value, currency value), 1 bonesword and whip (scrap value, currency value), grants 3xp per killed model",
    "1 lictor, with 1 body lashes? (scrap value, currency value), grants 4xp",
    "2 ravenors, with 1 body lashes? (scrap value, currency value), grants 3xp",
    "6 pox walkers, grants 2 xp per killed model",
    "5 berserkers, with 1 chain axe (scrap value, currency value), 1 plasma pistol (scrap value, currency value), grants 2xp per killed model",
    "ork warboss in megarmor with 1 kombi rokit (scrap value, currency value), power klaw (scrap value, currency value), grants 10xp per killed model",
    "10 hormagaunts, grants 1xp per killed model",
    "10 termagaunts, grants 1xp per killed model",
    "2 tyranid warriors, with 1 deathspitter (scrap value, currency value), 1 bonesword and whip (scrap value, currency value), grants 3xp per killed model",
    "1 lictor, with 1 body lashes? (scrap value, currency value), grants 4xp",
    "2 ravenors, with 1 body lashes? (scrap value, currency value), grants 3xp",
    "6 pox walkers, grants 2 xp per killed model",
    "10 hormagaunts, grants 1xp per killed model",
    "10 termagaunts, grants 1xp per killed model",
    "2 tyranid warriors, with 1 deathspitter (scrap value, currency value), 1 bonesword and whip (scrap value, currency value), grants 3xp per killed model",
    "1 lictor, with 1 body lashes? (scrap value, currency value), grants 4xp",
    "2 ravenors, with 1 body lashes? (scrap value, currency value), grants 3xp",
    "6 pox walkers, grants 2 xp per killed model",
    "10 hormagaunts, grants 1xp per killed model",
    "10 termagaunts, grants 1xp per killed model",
    "2 tyranid warriors, with 1 deathspitter (scrap value, currency value), 1 bonesword and whip (scrap value, currency value), grants 3xp per killed model",
    "1 lictor, with 1 body lashes? (scrap value, currency value), grants 4xp",
    "2 ravenors, with 1 body lashes? (scrap value, currency value), grants 3xp",
    "6 pox walkers, grants 2 xp per killed model",
    "20 hormagaunts, grants 1xp per killed model",
    "20 termagaunts, grants 1xp per killed model",
    "20 hormagaunts, grants 1xp per killed model",
    "20 termagaunts, grants 1xp per killed model",
    "20 hormagaunts, grants 1xp per killed model",
    "20 termagaunts, grants 1xp per killed model",
    "25 hormagaunts, grants 1xp per killed model",
    "25 termagaunts, grants 1xp per killed model",
    "30 hormagaunts, grants 1xp per killed model",
    "30 termagaunts, grants 1xp per killed model",
    "Exocrine",
    "Haruspex",
    "Carnifex",
    "Harpy",
    "Hive Crone",
    "Hive Tyrant",
    "Malanthrope",
    "Maleceptor",
    "Mawloc",
    "Tervigon",
    "Toxicrene",
    "Trygon",
    "Trygon Prime",
    "Tyrannofex",
    "3 Biovores",
    "Broodlord",
    "3 Hive Guard",
    "10 Mieotic Spore",
    "10 Mucolid Spore",
    "3 Pyrovore",
    "3 Raveners",
    "3 Tyranid Warriors",
    "3 Tyranid Shrikes",
    "3 Zoanthropes",
    "10 Genestealers",
    "9 Rippers",
    "10 Gargoyles",
    "Genestealer Patriarch",
    "10 Hybrid Neophyte",
    "10 Acolyte Hybrid",
    "10 Hybrid Metamorph",
    "3 Genestealer Abominant",
    "3 Genestealer Aberrant",
    "Genestealer Magus",
    "Genestealer Primus",
    "Kelermorph",
    "Locus",

]

const resources = [
    "energy",
    "scrap parts",
    "energy", 
    "scrap parts", 
    "energy", 
    "scrap parts", 
    "game points", 
    "local currency",
    "local currency", 
    "local currency"
];

const rangedWeapons = [  
    "Deffgun",
    "Fusion Blaster",
    "Fusion Cannon",
    "Fusion Cascade",
    "Heat Ray",
    "Heat Cannon",
    "Multi-melta",
    "Melta Cannon",
    "Melta Destroyer", 
    "Inferno Pistol",
    "Combi-Melta",
    "Meltagun",
    "Melta Rifle",
    "Thermal Lance",
    "Magna-Melta",
    "Titan Melta Cannon",
    "Cyclonic Melta Lance",
    "Thermal Spear",
    "Conflagration Cannon",
    "Burst cannon",
    "Conversion beamer",
    "Cyclic ion blaster",
    "Fire Pike",
    "Fusion blaster",
    "Fusion gun",
    "Fusion pistol",
    "Inferno cannon",
    "Inferno Gun",
    "Inferno pistol",
    "Ion cannon",
    "Kroot gun",
    "Lasblasters",
    "Laser lance",
    "Meltabomb",
    "Meltagun",
    "Multi-melta",
    "Neutron blaster",
    "Particle accelerator",
    "Particle projector",
    "Particle whip",
    "Plasma Annihilator",
    "Plasma Blastgun",
    "Plasma Cannon",
    "Plasma Cannon (Titan)",
    "Plasma Destructor",
    "Plasma Destructor (Titan)",
    "Plasma gun",
    "Plasma missile",
    "Plasma pistol",
    "Plasma rifle",
    "Ranger long rifles",
    "Turbolaser Destructor",
    "Volcano Cannon",
    "Airbursting fragmentation launcher",
    "Animus Speculum", 
    "Anti-plant grenade",
    "Assault cannon",
    "Autocannon",
    "Autogun",
    "Autopistol",
    "Battle Cannon",
    "Blind grenade",
    "Bolt Pistol",
    "Bolt Weapons",
    "Boltgun",
    "Choke grenade",
    "Conqueror Cannon",
    "Cyclone missile launcher",
    "Deathstrike Cannon",
    "Demolisher Cannon",
    "Earthshaker Cannon",
    "Eldar melta bombs",
    "Executioner pistol",
    "Exitus pistol",
    "Exitus rifle",
    "Exorcist launcher",
    "Frag grenade",
    "Grenade Launcher",
    "Gauss flayer",
    "Gauss blaster",
    "Gauss cannon",
    "Gauss Flux Arc Projector",
    "Hallucinogen grenade",
    "Havoc launcher",
    "Haywire grenade",
    "Heavy Bolter",
    "Heavy Gauss cannon",
    "Heavy stubber", 
    "Heavy webber", 
    "Hellhammer Cannon",
    "Hunter-killer missile",
    "Hurricane bolter",
    "Krak grenade",
    "Mega Battle Cannon",
    "Mega bolter",
    "Missile launcher",
    "Missile pods",
    "Mole Mortar",
    "Mortar",
    "Needler",
    "Neural Shredder",
    "Photon Flash flare",
    "Plasma grenade",
    "Psycannon",
    "Psyk-Out grenade",
    "Rail gun",
    "Rail rifle",
    "Rad grenade",
    "Rapier",
    "Reaper Autocannon",
    "Ripper gun",
    "Sanctifier grenade",
    "Scare grenade",
    "Shotgun",
    "Shuriken pistols",
    "Shuriken catapults",
    "Shuriken cannons",
    "Smart missiles",
    "Smoke grenade",
    "Sniper rifles",
    "Sniper Weapons",
    "Stasis grenade",
    "Storm bolter",
    "Stub Pistol",
    "Tanglefoot",
    "Tarantula",
    "Thudd gun",
    "Toxin grenade",
    "Typhoon missile launcher",
    "Vanquisher Cannon",
    "Vibro-cannon",
    "Virus grenade",
    "Vortex grenade",
    "Web pistol",
    "Web weapons",
    "Webber",
    "Whirlwind launcher",
]

const meleeWeapons = [
    "Biting Blade",
    "C'tan Phase Sword",
    "Chainsabres",
    "Chainfist",
    "Chainsword",
    "Diresword",
    "Eviscerator",
    "Executioner",
    "Frost blade",
    "Hand flamer",
    "Harlequin's Kiss",
    "Hunting Lance",
    "Lightning Claw",
    "Neuro-Gauntlet",
    "Mandiblaster",
    "Mirrorswords",
    "Power Blades",
    "Power Maul",
    "Power Sword",
    "Powerfist",
    "Scorpion Chainsword",
    "Scorpion's Claw",
    "Shock Gauntlet",
    "Shock Maul",
    "Staff of Light",
    "Thunder Hammer",
    "Warscythe",
    "Witchblade",
    "Wraithsword",
]

const rangedWeaponSpecialRules = {
    Blind:`Any unit hit by one or more models or weapons with this special rule must take an Initiative test at the end of the current phase. If the test is passed, all is well a shouted warning has caused the warriors to avert their gaze. If the Initiative test is failed, all models in the unit are reduced to Weapon Skill and Ballistic Skill 1 until the end of their next turn. Should the attacking unit hit themselves, we assume they are prepared and they automatically pass the test. Any model that does not have an Initiative characteristic (for example, non-Walker vehicles, buildings etc.) is unaffected by this special rule.`,

    Armourbane:`If a model makes a shooting attack with a weapon that has this special rule, it rolls an additional D6 for armour penetration. In either case, this special rule has no effect against non-vehicle models.`,

    Concussive:`A model that suffers one or more unsaved Wounds from a weapon with this special rule is reduced to Initiative 1 until the end of the following Assault phase.`,

    Fleshbane:`If a model has this special rule, or is attacking with a Melee weapon that has this special rule, they always Wound on a 2+ in close combat.
    Similarly, if a model makes a shooting attack with a weapon that has this special rule, they always Wound on a 2+.
    
    In either case, this special rule has no effect against vehicles or buildings.`,

    Gets_Hot:`When firing a weapon that Gets Hot, roll To Hit as normal. For each To Hit roll of 1, the firing model immediately suffers a Wound (armour or invulnerable saves can be taken) this Wound cannot be allocated to any other model in the unit. A character cannot make a Look Out, Sir attempt to avoid a Wound caused by the Gets Hot special rule. A vehicle instead rolls a D6 for each roll of a 1 to hit. On a roll of a 1, 2 or 3 it suffers a glancing hit.`,

    Ignores_Cover:`Cover saves cannot be taken against Wounds, glancing hits or penetrating hits caused by weapons with the Ignores Cover special rule.`,

    Instant_Death:`If a model suffers an unsaved Wound from an attack with this special rule, it is reduced to 0 Wounds and is removed as a casualty.`,

    Interceptor:`At the end of the enemy Movement phase, a weapon with the Interceptor special rule can be fired at any one unit that has arrived from Reserve within its range and line of sight. If this rule is used, the weapon cannot be fired in the next turn, but the firing model can shoot a different weapon if it has one.`,

    Master_crafted:`Weapons with the Master-crafted special rule allow the bearer to re-roll one failed roll To Hit per turn with that weapon.`,

    Pinning:`If a non-vehicle unit suffers one or more unsaved Wounds from a weapon with the Pinning special rule, it must take a Leadership test once the firing unit has finished its shooting attacks for that phase. This is called a Pinning test.
    If the unit fails the test, it is Pinned and must immediately Go to Ground. As the unit has already taken its saves, Going to Ground does not protect it against the fire of the Pinning weapon that caused the test it's too late!
    
    As long as the test is passed, a unit can be called upon to take multiple Pinning tests in a single turn, but only once for each unit shooting at them. If a unit has already Gone to Ground, no further Pinning tests are taken.
    
    If the special rules of a unit specify that the unit can never be Pinned, the unit automatically passes Pinning tests. Such units can still Go to Ground voluntarily if they wish.`,

    Poisoned:`If a model has the Poisoned special rule, or is attacking with a Melee weapon that has the Poisoned special rule, it always wounds on a fixed number (generally shown in brackets), unless a lower result would be required, when attacking in close combat. In addition, if the Strength of the wielder (or the Poisoned weapon) is higher than the Toughness of the victim, the wielder must re-roll failed rolls To Wound in close combat.
    Similarly, if a model makes a shooting attack with a weapon that has the Poisoned special rule, it always wounds on a fixed number (generally shown in brackets), unless a lower result would be required. If no number is shown in brackets, the rule is Poisoned (4+).
    
    Unless otherwise stated, Poisoned weapons are treated as having a Strength of 1. The Poisoned special rule has no effect against vehicles.`,

    Precision_Shots:`If a model with this special rule, or attacking with a weapon with this special rule, rolls a 6 To Hit with a shooting attack, that shot is a 'Precision Shot'.
    Wounds from Precision Shots are allocated against a model (or models) of your choice in the target unit, as long as it is in range and line of sight of the firer, rather than following the normal rules for Wound allocation. A character that has a Precision Shot Wound allocated to it can still make a Look Out, Sir roll.
    
    Note that Snap Shots and shots from weapons that scatter, or do not roll To Hit, can never be Precision Shots.`,

    Rending:`Re roll the wound roll or higger AP, cant remember`,

    Shred:`If a model has the Shred special rule, or is attacking with a Melee weapon that has the Shred special rule, it re-rolls failed To Wound rolls in close combat.
    Similarly, if a model makes a shooting attack with a weapon that has the Shred special rule, it re-rolls its failed To Wound rolls.`,

    Skyfire:`A model with this special rule, or that is firing a weapon with this special rule, fires using its normal Ballistic Skill when shooting at Flyers, Flying Monstrous Creatures and Skimmers, but it can only fire Snap Shots against other targets.`,

    Sniper:`If a weapon has the Sniper special rule, or is fired by a model with the Sniper special rule, and rolls a 6 To Hit, that shot is a 'Precision Shot'. Wounds from Precision Shots are allocated against a model (or models) of your choice in the target unit, as long as it is in range and line of sight of the firer, rather than following the normal rules for Wound allocation. A character that has a Precision Shot Wound allocated to it can still make a Look Out, Sir roll. Note that Snap Shots can never be Precision Shots.
    If a weapon has the Sniper special rule, or is fired by a model with the Sniper special rule, its shooting attacks always wound on a To Wound roll of 4+, regardless of the victim's Toughness. In addition, any To Wound roll of a 6 is resolved at AP2.
    
    Against vehicles, shooting attacks from weapons and models with the Sniper special rule count as Strength 4.`,

    Soul_Blaze:`If a unit suffers one or more unsaved Wounds from an attack with this special rule, it is set ablaze and continues to burn mark it with a coin or counter as a reminder.
    At the end of each turn, roll a D6 for each unit with a Soul Blaze counter on it. On a 3 or less, the flames die out and the unit is no longer ablaze remove your reminder counter. On a 4+, the unit takes D3 Strength 4 AP5 hits with the Ignores Cover special rule. These Wounds are Randomly Allocated. A unit cannot have more than one Soul Blaze counter on it at a time.`,

    Specialist_Weapon:`A model fighting with this weapon does not receive +1 Attack for fighting with two weapons unless it is armed with two or more Melee weapons with the Specialist Weapon rule.`,

    Vortex:`A weapon with this special rule is a Destroyer weapon and uses a blast marker of some type (e.g. blast, large blast, massive blast, etc). Place the appropriate marker, roll for scatter and apply damage. For determining Wound allocation, always assume the shot is coming from the centre of the marker, in the same manner as a Barrage weapon.
    The marker for a Vortex weapon is not removed from play after damage has been resolved. Leave it in play on the tabletop. The marker is impassable terrain as long as it remains in play.
    
    At the beginning of every subsequent player turn, the marker scatters 2D6" (use the little arrow if you roll a Hit!). If a double is rolled, the marker is removed from play instead. Any unit under the marker's new location is hit. Apply damage as described above.`,  
}

const meleeWeaponsSpecialRules = {
    Blind:`Any unit hit by one or more models or weapons with this special rule must take an Initiative test at the end of the current phase. If the test is passed, all is well a shouted warning has caused the warriors to avert their gaze. If the Initiative test is failed, all models in the unit are reduced to Weapon Skill and Ballistic Skill 1 until the end of their next turn. Should the attacking unit hit themselves, we assume they are prepared and they automatically pass the test. Any model that does not have an Initiative characteristic (for example, non-Walker vehicles, buildings etc.) is unaffected by this special rule.`,

    Armourbane:`If a model makes a shooting attack with a weapon that has this special rule, it rolls an additional D6 for armour penetration. In either case, this special rule has no effect against non-vehicle models.`,

    Concussive:`A model that suffers one or more unsaved Wounds from a weapon with this special rule is reduced to Initiative 1 until the end of the following Assault phase.`,

    Fleshbane:`If a model has this special rule, or is attacking with a Melee weapon that has this special rule, they always Wound on a 2+ in close combat.
    Similarly, if a model makes a shooting attack with a weapon that has this special rule, they always Wound on a 2+.
    
    In either case, this special rule has no effect against vehicles or buildings.`,

    Gets_Hot:`When firing a weapon that Gets Hot, roll To Hit as normal. For each To Hit roll of 1, the firing model immediately suffers a Wound (armour or invulnerable saves can be taken) this Wound cannot be allocated to any other model in the unit. A character cannot make a Look Out, Sir attempt to avoid a Wound caused by the Gets Hot special rule. A vehicle instead rolls a D6 for each roll of a 1 to hit. On a roll of a 1, 2 or 3 it suffers a glancing hit.`,

    Instant_Death:`If a model suffers an unsaved Wound from an attack with this special rule, it is reduced to 0 Wounds and is removed as a casualty.`,

    Master_crafted:`Weapons with the Master-crafted special rule allow the bearer to re-roll one failed roll To Hit per turn with that weapon.`,

    Poisoned:`If a model has the Poisoned special rule, or is attacking with a Melee weapon that has the Poisoned special rule, it always wounds on a fixed number (generally shown in brackets), unless a lower result would be required, when attacking in close combat. In addition, if the Strength of the wielder (or the Poisoned weapon) is higher than the Toughness of the victim, the wielder must re-roll failed rolls To Wound in close combat.
    Similarly, if a model makes a shooting attack with a weapon that has the Poisoned special rule, it always wounds on a fixed number (generally shown in brackets), unless a lower result would be required. If no number is shown in brackets, the rule is Poisoned (4+).
    
    Unless otherwise stated, Poisoned weapons are treated as having a Strength of 1. The Poisoned special rule has no effect against vehicles.`,

    Precision_Strikes:`If a model with this special rule, or attacking with a weapon with this special rule, rolls a 6 To Hit with a melee attack, that hit is a 'Precision Strike'.
    Wounds from Precision Strikes are allocated against an engaged model (or models) of your choice in the unit you are attacking, rather than following the normal rules for Wound allocation. If a Precision Strike Wound is allocated to a character, they can still make their Look Out, Sir roll.`,

    Rending:`Models disembarking from Access Points on a building can charge on the turn they do so, even on a turn the building was destroyed.`,

    Shred:`If a model has the Shred special rule, or is attacking with a Melee weapon that has the Shred special rule, it re-rolls failed To Wound rolls in close combat.
    Similarly, if a model makes a shooting attack with a weapon that has the Shred special rule, it re-rolls its failed To Wound rolls.`,

    Soul_Blaze:`If a unit suffers one or more unsaved Wounds from an attack with this special rule, it is set ablaze and continues to burn mark it with a coin or counter as a reminder.
    At the end of each turn, roll a D6 for each unit with a Soul Blaze counter on it. On a 3 or less, the flames die out and the unit is no longer ablaze remove your reminder counter. On a 4+, the unit takes D3 Strength 4 AP5 hits with the Ignores Cover special rule. These Wounds are Randomly Allocated. A unit cannot have more than one Soul Blaze counter on it at a time.`,

    Specialist_Weapon:`A model fighting with this weapon does not receive +1 Attack for fighting with two weapons unless it is armed with two or more Melee weapons with the Specialist Weapon rule.`,

    Two_Handed:`A model attacking with this weapon never receives +1 Attack for fighting with two Melee weapons.`,

    Unwieldy:`A model attacking with this weapon Piles In and fights at Initiative step 1, unless it is a Monstrous Creature or a Walker.`,

    Vortex:`A weapon with this special rule is a Destroyer weapon and uses a blast marker of some type (e.g. blast, large blast, massive blast, etc). Place the appropriate marker, roll for scatter and apply damage. For determining Wound allocation, always assume the shot is coming from the centre of the marker, in the same manner as a Barrage weapon.
    The marker for a Vortex weapon is not removed from play after damage has been resolved. Leave it in play on the tabletop. The marker is impassable terrain as long as it remains in play.
    
    At the beginning of every subsequent player turn, the marker scatters 2D6" (use the little arrow if you roll a Hit!). If a double is rolled, the marker is removed from play instead. Any unit under the marker's new location is hit. Apply damage as described above.`,
}

const rulesFromMWG = {
    Homing:"Does not require line of sight to fire",
    Crippling:"Unmodified hit rolls of 6 cause 1 mortal wound to the target in addition to any other damage.",
    Armourbane:"+1 Strength, +1 AP, and +1 Damage against Vehicles and Monsters",
    Decreased_Damage:"-1 Damage (Minimum 1)",
    Crushing:"+2 damage against targets with a Save characteristic of 3+ or better",
    Penetrating:"Improve the AP of the weapon by 1 (e.g. AP 0 becomes -1, AP -2 becomes -3)",
    Sniper:"Ignores Look out Sir!",
    Tracking:"+1 to hit units with the Fly keyword",
    Deadly_at_Close_Range:"+1 Strength and +1 AP if the target is within half the range of this weapon",
    Multi_attack:"Make 2 hit rolls for every shot / attack this weapon normally does",
    Cursed:"Unmodified hit rolls of 1 from this weapon inflict 1 mortal wound each on the firer (after all attacks have been resolved).  This is in addition to any other overheating rules the weapon might have.",
    Inaccurate:"-1 to hit rolls",
    Wounding:"+1 to wound rolls",
    Shorter_Range:` -3" range if Pistol or Grenade (minimum 1")
                    -6" range if Assault or Rapid Fire
                    -12" range if Heavy`,
    Master_crafted:"An unmodified hit roll of 6+ automatically wounds the target (do not make a wound roll).",
    Longer_Range:`  +3" range if Grenade or Pistol
                    +6" range if Assault or Rapid Fire
                    +12" range if Heavy`,
    Accurate:"+1 to hit rolls",
    Stronger:`  +1 Strength
                If a weapon has a Strength Multiplier (e.g. x2) then apply this +1 BEFORE the multiplication`,
    Lesser_Poison:"Always wounds on a 4+ unless the target is a Vehicle or Titanic.",
               
    Increased_Damage:"+1 Damage",
    Blinding:"If a target is hit by one or more weapons with the Blinding trait they must subtract 1 from all hit rolls until the end of their next turn.",
    Penetrating:"Improve the AP of the weapon by 1 (e.g. AP 0 becomes -1, AP -2 becomes -3)",
    Extra_Attack:"+1 Attack with this weapon (e.g. Rapid Fire 2 becomes Rapid Fire 3, Melee weapons gain only one extra hit roll when Fighting)",
    Weaker:"-1 Strength",
    Phasing:"Target must reroll successful invulnerable saves against this weapon",
    Poisoned:"Always wounds on a 2+ except against Vehicles, in which case use its normal Strength",

}

/* //diferent project
const ranged_weapons_attacks = ["-1 min 1", "+1", "+1", "+1", "+d3", "+d6"];
const ranged_weapons_range = ["-6", "-3", "3", "3", "6", "6"];
const ranged_weapons_type = ["pistol", "heavy", "one use", "assault", "rapid fire", "twinlinked"];
const ranged_weapons_strength = ["-1 min 1", "+1", "+1", "+1", "+d3", "+d6"];
const ranged_weapons_damage = ["-1 min 1", "+1", "+1", "+1", "+d3", "+d6"];
const ranged_weapons_AP = ["1 worse min 1", "1 better", "1 better", "1 better", "1 better", "+d3"];
const melee_weapon_strength=  ["-1 min 1", "+1", "+1", "+1", "+d3", "+d6"]
const melee_weapon_damage= ["-1 min 1", "+1", "+1", "+1", "+d3", "+d6"]   
const melee_weapons_AP = ["1 worse min 1", "1 better", "1 better", "1 better", "1 better", "+d3"];
const rangeWeaponCaracteristics = {
    attacks: ranged_weapons_attacks,
    range: ranged_weapons_range,
    type: ranged_weapons_type,
    strength: ranged_weapons_strength,
    damage: ranged_weapons_damage,
    AP: ranged_weapons_AP,
    specialRules: rangedWeaponSpecialRules,
    optional: rulesFromMWG
}
const meleeWeaponCaracteristics = {
    strength: melee_weapons_strength,
    damage: melee_weapons_damage,
    AP: melee_weapons_AP,
    specialRules: meleeWeaponsSpecialRules,
    optional: rulesFromMWG
}
*/

const supportItems = {
    Recovery_Stimulant_Kit: `1 use per game.  At the end of your movement phase a model equipped with a Recovery Stimulant Kit can use the kit to heal 1d3 wounds to a friendly model within 3".  If that friendly model has wound tokens allocated to it then it will instead remove up to 1d3 wound tokens.`,
    chip_of_combat_reflexes_1:`Can Heroically intervene 6", and can Heroically intervene if there is an enemy model within 6"`,
    chip_of_combat_reflexes_2:"This model ignores all negative modifiers when Fighting.",
    chip_of_combat_reflexes_3:`+1 attack per enemy model within 2" of this model (maximum 3 extra attacks)`,
    combat_drugs_injector:"+1 to the feel no pain roll, or grants 6+ fnp",
    bionic_eye_implant:"This model ignores all negative modifiers when shooting.",
    extra_armor_plate_piece:"+1 armor save",
    bionics_legs_kit: "+2 to advance and charge rolls",
    combat_drug_ration:"for this game, At the beginning of your turn this model regains 1 lost wound.",
    Banner_of_Haste:`All friendly models within 6" gain +1 to their Movement characteristic.  Any friendly models that are within 6" of this model in the Charge phase can charge even if they advanced.`,
    Banner_of_Hatred:`All friendly models within 6" reroll 1s in the Fight Phase.`,
    Banner_of_The_Black_Rage:`Friendly models within 6" of this banner in the Fight Phase gain +1 Attack and +1 to their hit rolls.  However, for each unmodified hit roll a 1 roll a d6.  On a 4+ they suffer 1 mortal wound.`,
    Teleport_Pack:`one use, a unit/formation of up to 10 models can teleport to any tile in the map, if the models are not made specifically for teleportation, they are removed from play on a 4+`,
    Teleport_Homer:`during combat, A model with a Teleport Pack can teleport within 3" of a model with a Teleport Homer and more than 1" from enemy models instead of moving.  This counts as a Movement, and counts as Falling Back if the model started within 1" of an enemy model.`,
    teleport_suit: "Grants to one model the ability to be teleported without risk",
    Shield_dome_generator: 'one use, 3+ invulnerable 6" around bearer for a game',
    mine_exploisive_kit: "one use, set minefield in a tile, causes N amount of strength pts in damage to the enemy entering",
    boobyTrap_kit: "one use, set boobyTrap in a tile, causes 1 entering enemy model to get reduced to 0 wound, victime owner choose",
    remote_fused_demolition_charge: "one use, set demolition_charge in a tile, move away 1 tile away and detonate the charge. causes  big amount of strength pts in damage to all models in the tile victime choose, one building gets removed automatically, attacker choose",
    hand_delivered_demolition_charge: 'one use, the model carryng it is removed from play and all models 12" around suffer d3 mortal wounds',
    advance_scan_device: "detects and reveal, all resources, enemies and items for 1 turn, 2 tiles away, needs 1 full turn to recharge",

    backpack_upgrade_kit: "grants 1 extra space for models to carry",
    knowledge_chip_medic: "medic knowledge lvl + 1, (need to be defined still)",
    knowledge_chip_mechanic: "mechanic knowledge lvl + 1, ingeniering the ability to analyze items vehicles or buildings to be reproduce?",
    knowledge_chip_inspirator: "inspirator knowledge lvl + 1, can carry banners, auras or recite hyms or canticles (need to be defined still) ",
    knowledge_chip_psyker: "psyker/magician knowledge lvl + 1 (1 basic power, or +1 if already psyker)", //"fighter", "XP",  heavy
}

/*
const vehicleSpecialRules = {
    Assault_Vehicle:`Passengers disembarking from Access Points on a vehicle with this special rule can charge on the turn they do so (even in a turn that the vehicle was destroyed, or in the following turn) unless the vehicle arrived from Reserve that turn.`,
    Jink:`When a unit with any models with the Jink special rule is selected as a target for a shooting attack, you may declare that it will Jink. The decision must be made before any To Hit rolls have been made. If the unit Jinks, all models in the unit with this special rule gain a 4+ cover save until the start of their next Movement phase, but they can only fire Snap Shots until the end of their next turn.`,
    Strafing_Run:`When shooting Assault, Heavy, Rapid Fire or Salvo weapons at Artillery, Beasts, Bikes, Cavalry, Infantry, Monstrous Creatures and vehicles without the Flyer or Skimmer type, this vehicle has +1 Ballistic Skill.`,
    Supersonic:`A Supersonic vehicle that moves Flat Out must move at least 18" and can move up to 36".`,
}
const unitUpgrades = {
    Acute_Senses:`If a unit contains at least one model with this special rule, and that unit arrives on a random table edge (due to Outflank, or other special rules), then you can re-roll to see which table edge they arrive from.`,
    Adamantium_Will:`A unit that contains at least one model with this special rule receives a +1 bonus to Deny the Witch tests.`,
    Counter_attack:`If a unit contains at least one model with this special rule, and that unit is charged, every model with the Counter-attack special rule in the unit gets +1 Attack until the end of the phase.
    If, when charged, the unit was already locked in combat, the Counter-attack special rule has no effect.`,
    Crusader:`Models with the Daemon special rule have a 5+ invulnerable save, and also have the Fear special rule.`,
    Eternal_Warrior:`If a model with this special rule suffers an unsaved Wound from an attack that inflicts Instant Death, it only reduces its Wounds by 1, instead of automatically reducing its Wounds to 0.`,
    Fear:`At the start of each Fight sub-phase, a unit in base contact with one or more enemy models that cause Fear must take a Leadership test (called a Fear test) before any blows are struck. If the test is passed, all is well and there is no effect. If the test is failed, the unit succumbs to fear all models in the unit have their Weapon Skill reduced to 1 for the remainder of that Fight sub-phase. Note that a model that causes Fear is not itself immune to Fear, and will still need to take a Fear test if it is base contact with any enemy models that cause Fear.`,
    Fearless:`Units containing one or more models with the Fearless special rule automatically pass Pinning, Fear, Regroup tests and Morale checks, but cannot Go to Ground and cannot choose to fail a Morale check due to the Our Weapons Are Useless rule. If a unit has Gone to Ground and then gains the Fearless special rule, all the effects of Go to Ground are immediately cancelled.`,
    Fleet:`A unit composed entirely of models with this special rule can re-roll one or more of the dice when determining Run moves and charge ranges (such as a single D6 from a charge range roll, for example).`,
    Furious_Charge:`In a turn in which a model with this special rule charges into combat, it adds +1 to its Strength characteristic until the end of the Assault phase. A model that has made a disordered charge that turn receives no benefit from Furious Charge.`,
    Hammer_of_Wrath:
    `If a model with this special rule ends its charge move in base or hull contact with an enemy model, it makes one additional Attack that hits automatically and is resolved at the model’s unmodified Strength with AP-. This Attack does not benefit from any of the model's special rules (such as Furious Charge, Rending etc.). This Attack is resolved during the Fight sub-phase at the Initiative 10 step, but does not grant the model an additional Pile In move. If a model with this special rule charges a Walker, the hit is resolved against the Front Armour Facing unless the Walker is Immobilised, in which case it is resolved against the Armour Value of the facing the charging model is touching.
    If a model with this special rule charges a building or vehicle, the hit is resolved against the Armour Value of the facing the charging model is touching. If a model with this special rule charges a building or vehicle that is a Transport or a Chariot, the hit is resolved against the building or vehicle, not the occupants or the rider.`,
    Hatred:`This rule is often presented as Hatred (X) where X identifies a specific type of foe. If the special rule does not specify a type of foe, then the unit has Hatred against everyone. This can refer to a Faction, or a specific unit. For example, Hatred (Orks) means any model with the Ork Faction, whilst Hatred (Big Meks) means only Big Meks. A model striking a hated foe in close combat re-rolls all failed To Hit rolls during the first round of each close combat.`,
    Hit_and_Run:`A unit that contains at least one model with this special rule that is locked in combat can choose to leave close combat at the end of any Assault phase. If the unit wishes to do so, it must take an Initiative test.
    If the test is failed, nothing happens and the models remain locked in the fight.
    
    If the test is passed, choose a direction then roll 3D6. As long as the distance rolled, in inches, is sufficient to allow the entire unit to move over 1" away from all of the enemy units they are locked in combat with, the unit breaks away from combat and must immediately move a number of inches in the chosen direction equal to the 3D6 result, ignoring the models they were locked in combat with. No Sweeping Advance rolls are made. Enemy units that are no longer locked in combat immediately Consolidate D6".
    
    A Hit & Run move is not slowed by difficult terrain, but takes Dangerous Terrain tests as normal. It may not be used to move into base or hull contact with enemy units, and models instead stop 1" away. If there are units with this rule on both sides who wish to disengage, roll-off to determine who goes first and then alternate disengaging them. If the last of these ends up no longer in combat, it Consolidates instead.`,
    Infiltrate:`You may choose to deploy units that contain at least one model with this special rule last, after all other units (friend and foe) have been deployed. If both players have such units and choose to do so, the players roll-off and the winner decides who goes first, then alternate deploying these units.
    Units that Infiltrate in this way can be set up anywhere on the table that is more than 12" from any enemy unit, as long as no deployed enemy unit can draw line of sight to them. This includes in a building, as long as the building is more than 12" from any enemy unit. Alternatively, they can be set up anywhere on the table more than 18" from any enemy unit, even in plain sight.
    
    If a unit with Infiltrate deploys inside a Dedicated Transport, the same rules apply when setting up their Transport.
    
    A unit that deploys using these rules cannot charge in their first turn.
    
    Having Infiltrate also confers the Outflank special rule to units of Infiltrators that are kept as Reserves.`,
    It_Will_Not_Die:`At the end of each of your turns, roll a D6 for each of your models with this special rule that has less than its starting number of Wounds or Hull Points, but has not been removed as a casualty or destroyed. On a roll of 5+, that model regains a Wound, or Hull Point, lost earlier in the game.`,
    Monster_Hunter:`A unit that contains at least one model with this special rule re-rolls all failed To Wound rolls against Monstrous Creatures.`,
    Move_Through_Cover:`A unit that contains at least one model with this special rule rolls an extra D6 when rolling to move through difficult terrain and is not slowed by charging through difficult terrain. In most circumstances, this will mean that, when moving, the unit rolls 3D6 and picks the highest roll. Furthermore, a model with the Move Through Cover special rule automatically passes Dangerous Terrain tests.`,
    Night_Vision:`A unit that contains at least one model with this special rule ignores the effects of Night Fighting.`,
    Outflank:`During deployment, players can declare that any unit that contains at least one model with this special rule is attempting to Outflank the enemy. This means they are making a wide sweeping move to get behind enemy lines or come at the foe from an unexpected direction.
    When an Outflanking unit arrives from Reserves, but not Ongoing Reserve, the controlling player rolls a D6: on a 1-2, the unit comes in from the table edge to the left of their controlling player’s own table edge; on a 3-4, they come on from the right; on a 5-6, the player can choose left or right. Models move onto the table as described for other Reserves. If such a unit deploys inside a Dedicated Transport, they may Outflank along with their Transport.`,
    Rage:`In a turn in which a model with this special rule charges into combat, it gains +2 Attacks for charging, rather than +1. A model that has made a disordered charge that turn receives no benefit from Rage.`,
    Rampage:`At the start of any Fight sub-phase, models with the Rampage special rule gain +D3 attacks if the combat they are in contains more enemy models than friendly models count all models locked in the combat, not just those models that are engaged. Roll once to determine the number of bonus Attacks all Rampaging models involved in that combat receive that phase. A model that has made a disordered charge that turn receives no benefit from Rampage.`,
    Relentless:`Relentless models can shoot with Heavy, Salvo or Ordnance weapons, counting as stationary, even if they moved in the previous Movement phase. They are also allowed to charge in the same turn they fire Heavy, Ordnance, Rapid Fire or Salvo weapons.`,
    Scout: `After both sides have deployed (including Infiltrators), but before the first player begins his first turn, a unit containing at least one model with this special rule can choose to redeploy. If the unit is Infantry, Artillery, a Walker or a Monstrous Creature, each model can redeploy anywhere entirely within 6" of its current position. If it is any other unit type, each model can instead redeploy anywhere entirely within 12" of its current position. During this redeployment, Scouts can move outside the owning player's deployment zone, but must remain more than 12" away from any enemy unit. A unit that makes a Scout redeployment cannot charge in the first game turn. A unit cannot embark or disembark as part of a Scout redeployment.
    If both sides have Scouts, roll-off; the winner decides who redeploys first. Then alternate redeploying Scout units.
    
    If a unit with this special rule is deployed inside a Dedicated Transport, it confers the Scout special rule to the Transport (though a disembarkation cannot be performed as part of the redeployment). Note that a Transport with this special rule does not lose it if a unit without this special rule is embarked upon it. Having Scout also confers the Outflank special rule to units of Scouts that are kept as Reserves.`,
    Shrouded:`A unit that contains at least one model with this special rule counts its cover save as being 2 points better than normal. Note that this means a model with the Shrouded special rule always has a cover save of at least 5+, even if it's in the open.
    Cover save bonuses from the Shrouded and Stealth special rules are cumulative (to a maximum of a 2+ cover save).`,
    Skilled_Rider:`A unit that contains at least one model with this special rule automatically passes Dangerous Terrain tests, and receives +1 to its Jink cover saves (other cover saves are unaffected).`,
    Slow_and_Purposeful:`A unit that contains at least one model with this special rule cannot Run, Turbo-boost, move Flat Out, perform Sweeping Advances or fire Overwatch. However, they can shoot with Heavy, Salvo and Ordnance weapons, counting as stationary even if they moved in the previous Movement phase. They are also allowed to charge in the same turn they fire Heavy, Ordnance, Rapid Fire or Salvo weapons.`,
    Stealth:`A unit that contains at least one model with this special rule counts its cover saves as being 1 point better than normal. Note that this means that a model with the Stealth special rule always has a cover save of at least 6+, even if it is in the open. This rule is often presented as Stealth (X) where X indicates a specific type of terrain, such as Stealth (Woods) or Stealth (Ruins). If this is the case, the unit only gains the benefit whilst it is in terrain of the specified type.
    Cover save bonuses from the Shrouded and Stealth special rules are cumulative (to a maximum of a 2+ cover save).`,
    Stubborn:`When a unit that contains at least one model with this special rule takes Morale checks or Pinning tests, they ignore any negative Leadership modifiers. If a unit is both Fearless and Stubborn, it uses the rules for Fearless instead.`,
    Tank_Hunters:`A unit that contains at least one model with this special rule re-rolls failed armour penetration rolls against vehicles (both with shooting and in close combat) and can choose to re-roll glancing hits, in an attempt to instead get a penetrating hit – but the second result must be kept.`,
    Zealot:`A unit containing one or more models with the Zealot special rule automatically passes Pinning, Fear and Regroup tests and Morale checks, but cannot Go to Ground and cannot choose to fail a Morale check due to the Our Weapons Are Useless rule. If a unit gains the Zealot special rule when it has Gone to Ground, all the effects of Go to Ground are immediately cancelled.
    In addition, units containing one or more models with the Zealot special rule re-roll all failed To Hit rolls during the first round of each close combat they do not get to re-roll failed To Hit rolls in subsequent rounds.`,
}
const vehicleSpecialRulesList = Object.keys(vehicleSpecialRules);
const unitUpgradesList = Object.keys(unitUpgrades);
*/

/*Functions*/
const chooseFrom = (array) => array[Math.floor(Math.random() * array.length)];
const rollADie = () => Math.floor(Math.random() * 6)
const generate = () =>{
    
    let find = chooseFrom(itemstypes);
    //let find = "ranged weapon:";
    const level = chooseFrom(traitsAmount)
    let finding = find;
    let traitRules = "";

    if (find === "ranged weapon:"){

        const weapon = chooseFrom(rangedWeapons);

        finding += " " + weapon;

        for (let i = 0; i < level; i++){
            const value = chooseFrom(Object.keys(rangedWeaponSpecialRules))
            const traitRule = rangedWeaponSpecialRules[value];
            traitRules += `<br> ${value}: <br>  -  ${traitRule} <br>`
        }
        finding += traitRules;

        
    } else if (find === "melee weapon:"){
        const weapon = chooseFrom(meleeWeapons);

        finding += " " + weapon;

        for (let i = 0; i < level; i++){
            const value = chooseFrom(Object.keys(rangedWeaponSpecialRules))
            const traitRule = rangedWeaponSpecialRules[value];            
            traitRules += `<br> ${value}: <br>  -  ${traitRule} <br>`
        }
        finding += traitRules;

    } else if (find === "special item:"){
        const chosen = chooseFrom(Object.keys(supportItems))
        const rules = supportItems[chosen];
        finding += ` ${chosen}: <br> ${rules}`;


    }else if (find === "unit:"){

        `TO DO:
        generate a random unit, if the unit shares faction with u joins you else a combat must be resolved
        depending on factions on play and infestation in planet`
        const stance = chooseFrom([" agresive ", " passive "])
        finding += stance;
        finding += chooseFrom(units);

        
    } else {
        finding += ` +${chooseFrom(amount)} ${chooseFrom(resources)}`
    }
    
    //itemFound.textContent = finding;
    itemFound.innerHTML = `${finding}`;
    return finding;
}

generate();

//DOM 
searchBtn.addEventListener("click", generate);