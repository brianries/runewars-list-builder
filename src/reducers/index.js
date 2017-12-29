import {combineReducers} from "redux";

import listName from "./listNameReducer";
import listCost from "./listCostReducer";
import unitList from "./unitReducer";
import cardDisplayed from "./cardDisplayedReducer";

export default combineReducers({
    listName,
    listCost,
    unitList,
    cardDisplayed,
})