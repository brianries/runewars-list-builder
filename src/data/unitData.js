export default
{
    "units": [
        {
            "id": 0,
            "name": "Kari Wraithstalker",
            "faction": "Daqan",
            "unit_type": "Infantry",
            "defense": 3,
            "wound_threshold": 4,
            "melee_attack": ["White", "Blue"],
            "ranged_attack": ["White", "Blue"],
            "special_abilities": [0],
            "enhancements": ["Brutal 1", "Precise 1"],
            "deployment_ability": "Aymhelin Allies: Your army can include 1 non-unique infantry unit from the Latari Elves.",
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
            "defense": 3,
            "wound_threshold": 4,
            "melee_attack": ["White", "Red"],
            "ranged_attack": null,
            "special_abilities": [1,2,3],
            "enhancements": ["Brutal 1"],
            "deployment_ability": "Lessons of Seargart Allies: Your army can include 1 non-unique infantry unit from the Latari Elves.",
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
            "defense": 1,
            "wound_threshold": 1,
            "melee_attack": ["Red", "Blue"],
            "ranged_attack": null,
            "special_abilities": [1],
            "enhancements": null,
            "deployment_ability": null,
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
            "defense": 2,
            "wound_threshold": 1,
            "melee_attack": ["Red", "Red", "Blue"],
            "ranged_attack": null,
            "special_abilities": [1],
            "enhancements": ["Impact 1"],
            "deployment_ability": null,
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
            "defense": 4,
            "wound_threshold": 2,
            "melee_attack": ["Red", "Red"],
            "ranged_attack": null,
            "special_abilities": [4],
            "enhancements": ["Brutal {Stable Energy}"],
            "deployment_ability": null,
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
            "defense": 1,
            "wound_threshold": 1,
            "melee_attack": ["Blue"],
            "ranged_attack": ["Red", "Blue"],
            "special_abilities": [5],
            "enhancements": ["Protected 1"],
            "deployment_ability": null,
            "dial_image": "heavy_crossbowmen.png",
            "formations": [
                { "id": 0, "size": "2x1", "cost": 19, "upgradeTypes": ["Skill"] },
                { "id": 1, "size": "3x1", "cost": 27, "upgradeTypes": ["Skill", "Equipment", "Music"] },
                { "id": 2, "size": "3x2", "cost": 48, "upgradeTypes": ["Skill", "Equipment", "Music", "Champion"] }
            ]
        }
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
        }
    ]    
}