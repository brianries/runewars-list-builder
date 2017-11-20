import {combinedReducers, createStore } from "redux";

const reducer = function(state, action) {
	if (action.type === "INC") {
		return state + action.payload;
	}
	if (action.type === "DEC") {
		return state - action.payload;;
	}
	else {
		return state;		
	}
}

let store = createStore(reducer, {
	user: {
		name: "Will",
		age: 35,
		
	},
	tweets: []
});

store.subscribe(() => {
	console.log("store changed", store.getState(0);
});

store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "DEC", payload: 1})
