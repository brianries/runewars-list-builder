import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducer from "./reducers";

const initialState = {
    listName: "Unamed",
    unitList: {
        listCost: 0,
        units: []
    },
    cardDisplayed: {type: null, id: null} 
}

export default createStore(reducer, initialState, applyMiddleware(promise(), thunk, createLogger()));


/*-------------------------------------------------------------------------------------------------
Store Layout
{
    faction: "Daqan",
    listName: "Unnamed",
    unitList: {
        listCost: 200,
        units: [
            {
                unitId: 1,
                formationId: 2,
                upgradeIds: [1,2,3,4]
                cost: 0,
            }
        ]
    },
    cardDisplayed: { type: "unit", id: "0"}
}
-------------------------------------------------------------------------------------------------*/