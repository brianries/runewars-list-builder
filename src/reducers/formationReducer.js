export default function reducer(state=[], action) {
    switch(action.type) {
        case "SET_FORMATION": {
            return {...state, formation: action.payload}
        }

        default: {
            return state;
        }
    }    
}    