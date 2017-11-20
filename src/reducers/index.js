import {combineReducers} from "redux";

import unit from "./unitReducer";
import formation from "./formationReducer";

export default combineReducers({
    unit,
    formation,
})