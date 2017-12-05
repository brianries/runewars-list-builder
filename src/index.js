import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './index.css';

import store from "./store";
import Layout from './components/Layout';

import registerServiceWorker from './registerServiceWorker';

var unitReferenceMap = require("./data/unitData.json");
var upgradeReferenceMap = require("./data/upgradeData.json");

ReactDOM.render(
    <Provider store={store}>
		<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
			<div>
				<Layout unitReferenceMap={unitReferenceMap} upgradeReferenceMap={upgradeReferenceMap}/>
			</div>
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
