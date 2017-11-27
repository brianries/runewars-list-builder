import {combineReducers} from "redux";

import unitList from "./unitReducer";
import formation from "./formationReducer";

export default combineReducers({
    unitList,
    formation,
})