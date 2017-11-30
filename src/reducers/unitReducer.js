export default function reducer(state=[], action) {
    switch(action.type) {
        case "SET_UNIT": {
            // Slice copies
            var arrCopy = state.slice();
            // Splice with 0 does no deletes, and inserts
            arrCopy.splice(action.cardIndex, 0, {unitId: action.payload.unitId});
            return arrCopy;
        }       
        case "SET_FORMATION": {
            var arrCopy = state.slice();
            arrCopy[action.cardIndex].formationId = action.payload.formationId;
            return arrCopy;
        }
        case 'REMOVE_UNIT': {
            
        }
        case 'COPY_UNIT': {
            
        }
        default: {
            return state;
        }

    }    
}    