import React, {Component} from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import UnitList from './UnitList';

import {connect} from 'react-redux'
import './Layout.css';

// Needed for onTouchTap (http://stackoverflow.com/a/34015469/988941)
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

var unitData = require("../data/unitData.json");


function importAllImages(r) {
	let images = {};
	r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
	return images;
}

var dialMap = importAllImages(require.context('../dials', false, /\.png/));

document.body.style.backgroundColor = "gray";

class Layout extends Component {
	
	render() {
		return (		
			<div>	
				<AppBar title="Runewars List Builder" /> 		 
				<div className="mainPanel">
					<div className="unitContainer">
						<UnitList units={this.props.units} dispatch={this.props.dispatch}/>   
					</div>
					<div className="descriptionContainer">
						<Paper className="paper" style={{backgroundColor: 'white', color: 'black', padding: 20}}>
							Unit Title
							<br/>
							<img src={dialMap[unitData.units[0].dial_image]}/>
							Description
						</Paper>
					</div>						
				</div>			
			</div>
		)
	}	
}

function mapStateToProps(state) {
	return {
		units: state.unitList,
		store: state
	};
}

function mapDispatchToPros(dispatch) {
	return {

	}
}

export default connect(mapStateToProps)(Layout);
