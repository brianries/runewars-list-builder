export default function reducer(state=[], action) {
    var copiedState = copyState(state);
    switch(action.type) {
        case "MOUSE_OVER_UNIT": 
            copiedState.type="unit";
            copiedState.id=action.payload.unitId;
            return copiedState;
        case "MOUSE_OVER_UPGRADE":
            copiedState.type="upgrade";
            copiedState.id=action.payload.upgradeId;
            return copiedState;
        default: {
            return state;
        }
    }    
}    

function copyState(state) {
    // the unitlist state has very simple data types -- so stringify'ing for JSON works here to clone properly
    var clonedState = JSON.parse(JSON.stringify(state));
    return clonedState;
}