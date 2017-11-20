export default function reducer(state={unit: null}, action) {
    switch(action.type) {
        case "SET_UNIT_NAME": {
            return {...state, unit: action.payload}
        }
        default: {
            return state;
        }

    }    
}    