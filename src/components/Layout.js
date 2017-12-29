import React, {Component} from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/Toolbar';
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup';
import ToolbarTitle from 'material-ui/Toolbar/ToolbarTitle';
import ToolbarSeparator from 'material-ui/Toolbar/ToolbarSeparator';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem';
import UnitList from './UnitList';

import {connect} from 'react-redux'
import './Layout.css';

// Needed for onTouchTap (http://stackoverflow.com/a/34015469/988941)
import injectTapEventPlugin from 'react-tap-event-plugin'
import { DropDownMenu } from 'material-ui';
injectTapEventPlugin()


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
				<ToolBar className="toolBarDaqan">
					<ToolbarGroup>
						<DropDownMenu style={{fontSize: '200%', color: 'white'}} value={0}>
							<MenuItem key={"Daqan"} value={0} primaryText={"Daqan"}/>    
							<MenuItem key={"Waiqar"} value={1} primaryText={"Waiqar"}/>    
							<MenuItem key={"Latari"} value={2} primaryText={"Latari"}/>    
							<MenuItem key={"Uthuk"} value={3} primaryText={"Uthuk"}/>    
						</DropDownMenu>
					</ToolbarGroup>				
					<ToolbarGroup>
						<ToolbarTitle text={"List Name: "+this.props.listName} style={{color: 'white'}}/>
					</ToolbarGroup>	
						<ToolbarTitle text={"List cost: "+this.props.listCost} style={{color: 'white'}}/>
					<ToolbarGroup>
					</ToolbarGroup>	
				</ToolBar>
				<div className="mainPanel">
					<div className="unitContainer">
						<UnitList unitList={this.props.unitList} dispatch={this.props.dispatch} unitReferenceMap={this.props.unitReferenceMap} upgradeReferenceMap={this.props.upgradeReferenceMap}/>   
					</div>
					<div className="descriptionContainer">
						<Paper className="paper" style={{backgroundColor: 'white', color: 'black', padding: 20}}>
							Unit Title
							<br/>
							{/*	<img src={dialMap[unitReferenceMap.units[0].dial_image]}/> */}
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
		listName: state.listName,
		listCost: state.unitList.listCost,
		unitList: state.unitList.units,
	};
}

function mapDispatchToPros(dispatch) {
	return {

	}
}

Layout.propTypes = {
	listName: PropTypes.string,
	listCost: PropTypes.number,
	unitList: PropTypes.arrayOf(PropTypes.object),
	dispatch: PropTypes.func,
	unitReferenceMap: PropTypes.object,
	upgradeReferenceMap: PropTypes.object
}

export default connect(mapStateToProps)(Layout);
