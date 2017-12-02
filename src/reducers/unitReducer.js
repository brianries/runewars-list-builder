export default function reducer(state=[], action) {
    switch(action.type) {
        case "SET_UNIT": {
            var copiedList = copyList(state);
            // Splice with 0 does no deletes, and inserts
            copiedList.splice(action.payload.cardIndex, 0, {unitId: action.payload.unitId, formationId: 0}); // set the first formation by default
            return copiedList;
        }       
        case "SET_FORMATION": {
            var copiedList = copyList(state);
            copiedList[action.payload.cardIndex].formationId = action.payload.formationId;
            return copiedList;
        }
        case 'REMOVE_UNIT': {
            var copiedList = copyList(state);
            return copiedList.splice(action.payload.cardIndex, 1);
        }
        case 'COPY_UNIT': {
            var copiedList = copyList(state);
            var copiedUnit = copyUnit(copiedList[action.payload.cardIndex]);
            copiedList.push(copiedUnit);
            return copiedList;
        }
        default: {
            return state;
        }
    }    
}    

function copyList(unitList) {
    // unitList has very simple data types -- so stringify'ing for JSON works here to clone properly
    var clonedArray = JSON.parse(JSON.stringify(unitList));
    return clonedArray;
}

function copyUnit(unit) {
    // unit has very simple data types -- so stringify'ing for JSON works here to clone properly
    var clonedUnit = JSON.parse(JSON.stringify(unit));
    return clonedUnit;
}