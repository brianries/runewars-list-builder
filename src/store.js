import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducer from "./reducers";

const initialState = {
    unitList: [],
    formation: []
}

export default createStore(reducer,  initialState, applyMiddleware(promise(), thunk, createLogger()));


/*-------------------------------------------------------------------------------------------------
Store Layout

units: {
    byId: {
        "Kari WraithStalker" : {
            name: "Kari WraithStalker",
            formation: "1x1",
            cost: 34,            
            unique: true,
            faction: "Daqan",
            unitType: "Infantry",
            upgrades: ["Tempered Steel"],
        }

        ...
    },
    allUnits : ["Kari WraithStalker", ... ]
}

upgrades: {
    byId: {
        "Tempered Steel": {
            name: "Tempered Steel",
            type: "Equipment",
            cost: 3,
            faction: "Neutral",
            unitType: "All"
        }

        ...
    }
}


{
    entities: {
        units: {
            1 : { name: "Kari WraithStalker", formation: "1x1"},
            2 : { name: "Spearmen", formation: "2x2"}
        }
        formation: {
            1 : { unit: 1, name: "1x1", cost: 34, upgrades: ["Equipment", "Champion", "Skill"]},
            2 : { unit: 2, name: "2x2", cost: 15, upgrades: []}
        }
        upgrades: {
            1: {name: "Tempered Steel", cost: 3},
            2: {name: "Wind Rune", cost: 5}
        }
    }

    allUnits: [1, 2];
}

-------------------------------------------------------------------------------------------------*/