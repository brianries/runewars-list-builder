import unitReferenceMap from '../data/unitData';
import upgradeReferenceMap from '../data/upgradeData';

export default function reducer(state=[], action) {
    var copiedState = copyState(state);
    switch(action.type) {
        case "SET_UNIT": {
            // Splice with 0 does no deletes, and inserts
            if (action.payload.isNew === true) {
                copiedState.units.splice(action.payload.cardIndex, 0, {unitId: action.payload.unitId, formationId: 0}); // set the first formation by default
            }
            else {
                copiedState.units[action.payload.cardIndex] = {unitId: action.payload.unitId, formationId: 0};
            }
            trimUpgradeList(copiedState.units[action.payload.cardIndex]);
            recalculateUnitCost(copiedState.units[action.payload.cardIndex]);
            break;
        }       
        case "SET_FORMATION": {
            copiedState.units[action.payload.cardIndex].formationId = action.payload.formationId;
            trimUpgradeList(copiedState.units[action.payload.cardIndex]);
            recalculateUnitCost(copiedState.units[action.payload.cardIndex]);            
            break;
        }
        //  payload: {cardIndex, upgradeIndex, upgradeId}
        case 'SET_UPGRADE': {
            copiedState.units[action.payload.cardIndex].upgradeIds = copyArrayAndSetItem(copiedState.units[action.payload.cardIndex].upgradeIds, action.payload.upgradeIndex, action.payload.upgradeId);
            recalculateUnitCost(copiedState.units[action.payload.cardIndex]);          
            break;
        }
        case 'REMOVE_UNIT': {
            copiedState.units.splice(action.payload.cardIndex, 1);
            break;
        }
        case 'COPY_UNIT': {
            var copiedUnit = copyUnit(copiedState.units[action.payload.cardIndex]);
            copiedState.units.push(copiedUnit);
            break;
        }
        default: {
            return state;
        }
    }    

    recalculateTotalCost(copiedState);
    return copiedState;
}    

function copyState(state) {
    // the unitlist state has very simple data types -- so stringify'ing for JSON works here to clone properly
    var clonedState = JSON.parse(JSON.stringify(state));
    return clonedState;
}

function copyUnit(unit) {
    // a unit has very simple data types -- so stringify'ing for JSON works here to clone properly
    var clonedUnit = JSON.parse(JSON.stringify(unit));
    return clonedUnit;
}

function copyArrayAndSetItem(array, index, item) {
    var arrLength = typeof array === 'undefined' ? 0 : array.length;
    var newArray = new Array(Math.max(arrLength, index+1)).fill(null);
    for (var i = 0; i < arrLength; i++) {
        newArray[i] = array[i];
    }
    newArray[index] = item;
    return newArray;
}

function trimUpgradeList(unitList) {
    if (typeof unitList.upgradeIds !== 'undefined') {
        var currentUpgradeCount = unitList.upgradeIds.length;
        var expectedUpgradeCount = unitReferenceMap.units[unitList.unitId].formations[unitList.formationId].upgradeTypes.length;
        if (currentUpgradeCount > expectedUpgradeCount) {            
            unitList.upgradeIds = unitList.upgradeIds.slice(0, expectedUpgradeCount);
        }
    }
}

function recalculateUnitCost(unitList) {
    var totalCost = 0;
    if (typeof unitList.upgradeIds !== 'undefined') {
        unitList.upgradeIds.forEach(element => {
            if (element !== null) {
                totalCost += upgradeReferenceMap.upgrades[element].cost;
            }
        });
    }
    totalCost += unitReferenceMap.units[unitList.unitId].formations[unitList.formationId].cost;   
    unitList.cost = totalCost;    
}

function recalculateTotalCost(state) {
    var newCost = 0;
    for (var i = 0; i < state.units.length; i++) {
        newCost += state.units[i].cost;
    }
    state.listCost = newCost;
}