import React, {Component} from 'react';

import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import UnitList from './UnitList';

import {connect} from 'react-redux'

import './Layout.css';

// Needed for onTouchTap (http://stackoverflow.com/a/34015469/988941)
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

document.body.style.backgroundColor = "gray";

class Layout extends Component {
	render() {
		return (		
			<div>	
				<AppBar title="Runewars List Builder" /> 		 
				<div className="mainPanel">
					<div className="unitContainer">
						<UnitList/>   
					</div>
					<div className="descriptionContainer">
						<Paper className="paper" style={{backgroundColor: 'white', color: 'black', padding: 20}}>
							Unit Title
							<br/>
							Description
						</Paper>
					</div>						
				</div>			
			</div>
		)
	}	
}

function mapStoreToProps(store) {
	return {
		units: store.units
	};
}


export default connect(mapStoreToProps)(Layout);
