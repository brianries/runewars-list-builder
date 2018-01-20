export default
{
    "units": [
        {
            "id": 0,
            "name": "Kari Wraithstalker",
            "faction": "Daqan",
            "unit_type": "Infantry",
            "unique": true,
            "defense": 3,
            "wound_threshold": 4,
            "melee_attack": ["White", "Blue"],
            "ranged_attack": ["White", "Blue"],
            "special_abilities": [0],
            "enhancements": ["Brutal 1", "Precise 1"],
            "deployment_ability": "Aymhelin Allies: Your army can include 1 non-unique infantry unit from the Latari Elves.",
            "card_image": "kari_wraithstalker_card.png",
            "dial_image": "kari_wraithstalker.png",
            "formations": [
                { "id": 0, "size": "1x1", "cost": 32, "upgradeTypes": ["Artifact", "Unique"]}
            ]
        },
        {
            "id": 1,
            "name": "Lord Hawthorne",
            "faction": "Daqan",
            "unit_type": "Cavalry",
            "unique": true,
            "defense": 3,
            "wound_threshold": 4,
            "melee_attack": ["White", "Red"],
            "ranged_attack": null,
            "special_abilities": [1,2,3],
            "enhancements": ["Brutal 1"],
            "deployment_ability": "Lessons of Seargart Allies: Your army can include 1 non-unique infantry unit from the Latari Elves.",
            "card_image": "lord_hawthorne_card.png",
            "dial_image": "lord_hawthorne.png",
            "formations": [
                { "id": 0, "size": "1x1", "cost": 34, "upgradeTypes": ["Artifact", "Unique"]}
            ]
        },
        {
            "id": 2,
            "name": "Spearmen",
            "faction": "Daqan",
            "unit_type": "Infantry",
            "unique": false,
            "defense": 1,
            "wound_threshold": 1,
            "melee_attack": ["Red", "Blue"],
            "ranged_attack": null,
            "special_abilities": [1],
            "enhancements": null,
            "deployment_ability": null,
            "card_image": "spearmen_card.png",
            "dial_image": "spearmen.png",
            "formations": [
                { "id": 0, "size": "2x1", "cost": 18, "upgradeTypes": ["Equipment", "Music"] },
                { "id": 1, "size": "2x2", "cost": 30, "upgradeTypes": ["Equipment", "Music", "Champion"] },
                { "id": 2, "size": "3x2", "cost": 40, "upgradeTypes": ["Equipment", "Music", "Champion", "Heraldry"] },
                { "id": 3, "size": "3x3", "cost": 59, "upgradeTypes": ["Equipment", "Music", "Champion", "Heraldry", "Heavy"] }
            ]
        },
        {
            "id": 3,
            "name": "Oathsworn Cavalry",
            "faction": "Daqan",
            "unit_type": "Cavalry",
            "unique": false,
            "defense": 2,
            "wound_threshold": 1,
            "melee_attack": ["Red", "Red", "Blue"],
            "ranged_attack": null,
            "special_abilities": [1],
            "enhancements": ["Impact 1"],
            "deployment_ability": null,
            "card_image": "oathsworn_cavalry_card.png",
            "dial_image": "oathsworn_cavalry.png",
            "formations": [
                { "id": 0, "size": "2x1", "cost": 20, "upgradeTypes": ["Equipment", "Skill"] },
                { "id": 1, "size": "2x2", "cost": 34, "upgradeTypes": ["Equipment", "Skill", "Heraldry"] },
                { "id": 2, "size": "2x3", "cost": 46, "upgradeTypes": ["Equipment", "Skill", "Heraldry", "Champion"] },
                { "id": 3, "size": "3x3", "cost": 68, "upgradeTypes": ["Equipment", "Skill", "Heraldry", "Champion"] }
            ]
        },
        {
            "id": 4,
            "name": "Rune Golems",
            "faction": "Daqan",
            "unit_type": "Siege",
            "unique": false,
            "defense": 4,
            "wound_threshold": 2,
            "melee_attack": ["Red", "Red"],
            "ranged_attack": null,
            "special_abilities": [4],
            "enhancements": ["Brutal {Stable Energy}"],
            "deployment_ability": null,
            "card_image": "rune_golems_card.png",
            "dial_image": "rune_golems.png",
            "formations": [
                { "id": 0, "size": "1x1", "cost": 17, "upgradeTypes": [] },
                { "id": 1, "size": "2x1", "cost": 28, "upgradeTypes": ["Equipment"] },
                { "id": 2, "size": "2x2", "cost": 50, "upgradeTypes": ["Equipment", "Heraldry"] },
                { "id": 3, "size": "3x2", "cost": 74, "upgradeTypes": ["Equipment", "Heraldry"] }
            ]
        },
        {
            "id": 5,
            "name": "Heavy Crossbowmen",
            "faction": "Daqan",
            "unit_type": "Infantry",
            "unique": false,
            "defense": 1,
            "wound_threshold": 1,
            "melee_attack": ["Blue"],
            "ranged_attack": ["Red", "Blue"],
            "special_abilities": [5],
            "enhancements": ["Protected 1"],
            "deployment_ability": null,
            "card_image": "heavy_crossbowmen_card.png",
            "dial_image": "heavy_crossbowmen.png",
            "formations": [
                { "id": 0, "size": "2x1", "cost": 19, "upgradeTypes": ["Skill"] },
                { "id": 1, "size": "3x1", "cost": 27, "upgradeTypes": ["Skill", "Equipment", "Music"] },
                { "id": 2, "size": "3x2", "cost": 48, "upgradeTypes": ["Skill", "Equipment", "Music", "Champion"] }
            ]
        },
        {
            "id": 6,
            "name": "Outland Scouts",
            "faction": "Daqan",
            "unit_type": "Infantry",
            "unique": false,
            "defense": 1,
            "wound_threshold": 1,
            "melee_attack": ["Blue", "Blue"],
            "ranged_attack": null,
            "special_abilities": [6],
            "enhancements": null,
            "deployment_ability": "Scout: Deploy after the 'Deploy Units' step of setup. You may then perform any blue action and matching modifier",
            "card_image": "outland_scouts_card.png",
            "dial_image": "outland_scouts.png",
            "formations": [
                { "id": 0, "size": "2x1", "cost": 21, "upgradeTypes": ["Skill"] },
                { "id": 1, "size": "2x2", "cost": 32, "upgradeTypes": ["Skill", "Champion"] },
                { "id": 2, "size": "3x2", "cost": 43, "upgradeTypes": ["Skill", "Champion"] }
            ]
        },
        {
            "id": 7,
            "name": "Reanimate Archers",
            "faction": "Waiqar",
            "unit_type": "Infantry",
            "unique": false,
            "defense": 1,
            "wound_threshold": 1,
            "melee_attack": ["Red"],
            "ranged_attack": ["Red","Blue"],
            "special_abilities": [7],
            "enhancements": ["Steadfast [Doubt]"],
            "deployment_ability": null,
            "card_image": "reanimate_archers_card.png",
            "dial_image": "reanimate_archers.png",
            "formations": [
                { "id": 0, "size": "2x1", "cost": 18, "upgradeTypes": ["Skill"] },
                { "id": 1, "size": "2x2", "cost": 32, "upgradeTypes": ["Skill", "Equipment"] },
                { "id": 2, "size": "3x2", "cost": 45, "upgradeTypes": ["Skill", "Equipment", "Heraldry"] }
            ]
        },
        {
            "id": 8,
            "name": "Ardus IxErebus",
            "faction": "Waiqar",
            "unit_type": "Infantry",
            "unique": true,
            "defense": 3,
            "wound_threshold": 4,
            "melee_attack": ["White","White"],
            "ranged_attack": null,
            "special_abilities": [8],
            "enhancements": ["Brutal 1", "Steadfast [Doubt,Fear]"],
            "deployment_ability": "Host of Crows: Each unit in your army is treated as having the available upgrades in the row of its cositng table with the next highest cost (ignore this if there is no higher-cost row in the unit's table",
            "card_image": "ardus_ixerebus_card.png",
            "dial_image": "ardus_ixerebus.png",
            "formations": [
                { "id": 0, "size": "1x1", "cost": 37, "upgradeTypes": ["Artifact", "Unique"] },
            ]
        },
        {
            "id": 9,
            "name": "Carrion Lancers",
            "faction": "Waiqar",
            "unit_type": "Siege",
            "unique": false,
            "defense": 3,
            "wound_threshold": 3,
            "melee_attack": ["Red","Blue","Blue"],
            "ranged_attack": null,
            "special_abilities": [9,10],
            "enhancements": ["Steadfast [Doubt]"],
            "deployment_ability": null,
            "card_image": "carrion_lancers_card.png",
            "dial_image": "carrion_lancers.png",
            "formations": [
                { "id": 0, "size": "1x1", "cost": 15, "upgradeTypes": ["Skill"] },
                { "id": 1, "size": "2x1", "cost": 27, "upgradeTypes": ["Skill"] },
                { "id": 2, "size": "2x2", "cost": 46, "upgradeTypes": ["Skill", "Equipment"] },
                { "id": 3, "size": "3x2", "cost": 68, "upgradeTypes": ["Skill", "Equipment"] },
            ]
        },
        {
            "id": 9,
            "name": "Reanimates",
            "faction": "Waiqar",
            "unit_type": "Infantry",
            "unique": false,
            "defense": 1,
            "wound_threshold": 1,
            "melee_attack": ["Red","Red"],
            "ranged_attack": null,
            "special_abilities": [11],
            "enhancements": ["Steadfast [Doubt]"],
            "deployment_ability": null,
            "card_image": "reanimates_card.png",
            "dial_image": "reanimates.png",
            "formations": [
                { "id": 0, "size": "2x1", "cost": 16, "upgradeTypes": ["Music"] },
                { "id": 1, "size": "2x2", "cost": 26, "upgradeTypes": ["Music", "Heraldry"] },
                { "id": 2, "size": "3x2", "cost": 35, "upgradeTypes": ["Music", "Heraldry", "Champion"] },
                { "id": 3, "size": "3x3", "cost": 50, "upgradeTypes": ["Music", "Heraldry", "Champion", "Skill", "Heavy"] },
                { "id": 4, "size": "4x3", "cost": 64, "upgradeTypes": ["Music", "Heraldry", "Champion", "Skill", "Heavy"] },
            ]
        },
        {
            "id": 10,
            "name": "Ankaur Maro",
            "faction": "Waiqar",
            "unit_type": "Cavalry",
            "unique": true,
            "defense": 2,
            "wound_threshold": 5,
            "melee_attack": ["White"],
            "ranged_attack": ["White {Unstable Energy}"],
            "special_abilities": [12,13],
            "enhancements": null,
            "deployment_ability": "Forbidden Lore of the Shadow Council: Your army can include 1 non-unique unit from any other faction. After setup, that unit receives 2 blight tokens.",
            "card_image": "ankaur_maro_card.png",
            "dial_image": "ankaur_maro.png",
            "formations": [
                { "id": 0, "size": "1x1", "cost": 40, "upgradeTypes": ["Artifact", "Unique"] },
            ]
        },
        {
            "id": 11,
            "name": "Death Knights",
            "faction": "Waiqar",
            "unit_type": "Cavalry",
            "unique": false,
            "defense": 3,
            "wound_threshold": 1,
            "melee_attack": ["Red","Red","Blue"],
            "ranged_attack": null,
            "special_abilities": [14],
            "enhancements": ["Impact {Stable Energy}", "Steadfast [Fear]"],
            "deployment_ability": null,
            "card_image": "death_knights_card.png",
            "dial_image": "death_knights.png",
            "formations": [
                { "id": 0, "size": "2x1", "cost": 24, "upgradeTypes": ["Artifact", "Skill"] },
                { "id": 1, "size": "2x2", "cost": 42, "upgradeTypes": ["Artifact", "Skill", "Champion"] },
                { "id": 2, "size": "2x3", "cost": 55, "upgradeTypes": ["Artifact", "Skill", "Champion", "Heraldry"] },
            ]
        },
        {
            "id": 12,
            "name": "Wraiths",
            "faction": "Waiqar",
            "unit_type": "Cavalry",
            "unique": false,
            "defense": 1,
            "wound_threshold": 2,
            "melee_attack": ["Red","Blue"],
            "ranged_attack": null,
            "special_abilities": [15,16,17],
            "enhancements": null,
            "deployment_ability": null,
            "card_image": "wraiths_card.png",
            "dial_image": "wraiths.png",
            "formations": [
                { "id": 0, "size": "2x1", "cost": 17, "upgradeTypes": ["Unique"] },
                { "id": 1, "size": "3x1", "cost": 24, "upgradeTypes": ["Unique", "Music"] },
                { "id": 2, "size": "2x2", "cost": 30, "upgradeTypes": ["Unique", "Music", "Heraldry"] },
            ]
        },
    ],

    "special-abilities": [
        {
            "id" : 0,
            "name": "Kari: Fan of blades",
            "type": "Melee",
            "surge-modifier": "Surge Plus",
            "description": "Choose another enemy unit at range 1-5 That enemy suffers 2 damage per {surge} spent."
        },
        {
            "id" : 1,
            "name": "Daqan inspiration",
            "type": "Melee",
            "surge-modifier": "Double Surge",
            "description": "Receive 1 inspiration token."
        },
        {
            "id": 2,
            "name": "Hawthorne: Multi-attack",
            "type": null,
            "surge-modifier": null,
            "description": "After you perform a {Melee} you may perform a {Melee} against another enemy that has not been targeted by your {Melee} during this activation."
        },
        {
            "id": 3,
            "name": "Hawthorne: Inspiration AoE",
            "type": "Skill",
            "surge-modifier": null,
            "description": "Each other ally at range 1-3 receives 1 inspiration token."
        },
        {
            "id": 4,
            "name": "Rune Golem: Stun",
            "type": "Skill",
            "surge-modifier": null,
            "description": "Each enemy unit engaged with you receives {Stable Rune} stun tokens"
        },
        {
            "id": 5,
            "name": "Heavy Crossbowmen: Short Range Shot",
            "type": "Ranged",
            "surge-modifier": "Double Unique Surge",
            "description": "If the defender is at range 1-3 add {Mortal Strike}"
        },
        {
            "id": 6,
            "name": "Outland Scouts: Surge damage",
            "type": "Melee",
            "surge-modifier": "Double Surge",
            "description": "Add {Hit}"
        },
        {
            "id": 7,
            "name": "Reanimate Archers: Blight",
            "type": "Ranged",
            "surge-modifier": "Double Surge",
            "description": "The defender receives 1 blight token."
        },
        {
            "id": 8,
            "name": "Ardus: Ability Borrow",
            "type": "Melee",
            "surge-modifier": null,
            "description": "{Melee} This attack is treated as having the {Surge} abilities (both {Melee} and {Ranged} of allies at range 1-3."
        },
        {
            "id": 9,
            "name": "Carrion Lancers: Mortal Strike",
            "type": "Melee",
            "surge-modifier": "Surge",
            "description": "Add {Mortal Strike} if the defender has a blight token"
        },
        {
            "id": 10,
            "name": "Carrion Lancers: Blight Spit",
            "type": "Skill",
            "surge-modifier": null,
            "description": "Choose 1 unengaged enemy unit at range 1-5 and in line of sight.  That unit receives 1 blight token."
        },
        {
            "id": 11,
            "name": "Reanimates: Regeneration",
            "type": null,
            "surge-modifier": null,
            "description": "Regenerate {Natural Energy} (At the end of the Activation Phase, if there are any empty slots in your trays, place up to {Natural Energy} new Reanimate figures in the empty slots.)"
        },
        {
            "id": 12,
            "name": "Ankaur Maro: Heal",
            "type": "Ranged",
            "surge-modifier": "Double Surge",
            "description": "Remove 1 wound.  Roll a number of white dice equal to {Unstable Energy}"
        },
        {
            "id": 13,
            "name": "Ankaur Maro: Raise Dead",
            "type": "Skill",
            "surge-modifier": null,
            "description": "Add up to {Stable Energy} full trays to a Waiqar infantry unit at range 1-5.  Then, suffer wounds equal to the number of trays added."
        },
        {
            "id": 14,
            "name": "Death Knights: Defense",
            "type": null,
            "surge-modifier": null,
            "description": "While defending, subtract {Mortal Strike}"
        },
        {
            "id": 15,
            "name": "Wraiths: Glide",
            "type": null,
            "surge-modifier": null,
            "description": "During a {March} or {Shift} you may ignore any number of units and terrain"
        },
        {
            "id": 16,
            "name": "Wraiths: Spin",
            "type": null,
            "surge-modifier": null,
            "description": "After you perform a {March} or {Shift}, perform a {Reform}"
        },
        {
            "id": 17,
            "name": "Wraiths: Corporeal",
            "type": null,
            "surge-modifier": null,
            "description": "While defending, before the attacker rerolls, reroll up to {Stable Energy} dice."
        },
    ]    
}