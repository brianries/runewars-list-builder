import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';
import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';

import './index.css';

import store from "./store";
import Layout from './components/Layout';

import registerServiceWorker from './registerServiceWorker';

import unitReferenceMap from './data/unitData';
import upgradeReferenceMap from './data/upgradeData';

const theme = createMuiTheme({
	palette: {
		type: 'light',
    },
	status: {
		danger: 'orange',
	},
});

ReactDOM.render(
    <Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<div>
				<Layout unitReferenceMap={unitReferenceMap} upgradeReferenceMap={upgradeReferenceMap}/>
			</div>
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
