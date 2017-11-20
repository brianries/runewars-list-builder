export default function reducer(state={formation: null}, action) {
    switch(action.type) {
        case "SET_FORMATION": {
            return {...state, formation: action.payload}
        }

        default: {
            return state;
        }
    }    
}    