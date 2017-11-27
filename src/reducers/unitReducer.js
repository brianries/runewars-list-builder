export default function reducer(state=[], action) {
    switch(action.type) {
        case "SET_UNIT": {
            // Slice copies
            var arrCopy = state.slice();
            // Splice with 0 does no deletes, and inserts
            arrCopy.splice(action.cardIndex, 0, action.payload);                       
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