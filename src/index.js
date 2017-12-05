import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import RootReducer from './reducers/RootReducer';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';


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

let store = createStore(reducer, 0);

store.subscribe(() => {
	console.log("store changed", store.getState(0);
});

store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "DEC", payload: 1})

ReactDOM.render(
    <Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
