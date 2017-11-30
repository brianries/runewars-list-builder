import {combineReducers} from "redux";

import unitList from "./unitReducer";
import cardDisplayed from "./cardDisplayedReducer";

export default combineReducers({
    unitList,
    cardDisplayed,
})