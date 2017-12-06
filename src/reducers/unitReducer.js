export default function reducer(state=[], action) {
    var copiedList = copyList(state);
    switch(action.type) {
        case "SET_UNIT": {
            // Splice with 0 does no deletes, and inserts
            if (action.payload.isNew === true) {
                copiedList.splice(action.payload.cardIndex, 0, {unitId: action.payload.unitId, formationId: 0}); // set the first formation by default
            }
            else {
                copiedList[action.payload.cardIndex] = {unitId: action.payload.unitId, formationId: 0};
            }
            return copiedList;
        }       
        case "SET_FORMATION": {
            copiedList[action.payload.cardIndex].formationId = action.payload.formationId;
            return copiedList;
        }
        //  payload: {cardIndex, upgradeIndex, upgradeId}
        case 'SET_UPGRADE': {
            copiedList[action.payload.cardIndex].upgradeIds = copyArraySetItem(copiedList[action.payload.cardIndex].upgradeIds, action.payload.upgradeIndex, action.payload.upgradeId);
            return copiedList;
        }
        case 'REMOVE_UNIT': {
            copiedList.splice(action.payload.cardIndex, 1);
            return copiedList;
        }
        case 'COPY_UNIT': {
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

function copyArraySetItem(array, index, item) {
    var arrLength = typeof array === 'undefined' ? 0 : array.length;
    var newArray = new Array(Math.max(arrLength, index+1)).fill(null);
    for (var i = 0; i < arrLength; i++) {
        newArray[i] = array[i];
    }
    newArray[index] = item;
    return newArray;
}