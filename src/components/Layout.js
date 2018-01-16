import React, {Component} from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField'
import UnitList from './UnitList';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';

import {connect} from 'react-redux'
//import './Layout.css';

// Needed for onTouchTap (http://stackoverflow.com/a/34015469/988941)
import injectTapEventPlugin from 'react-tap-event-plugin'
import Menu, {MenuItem} from 'material-ui/Menu';
injectTapEventPlugin()


function importAllImages(r) {
	let images = {};
	r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
	return images;
}

var dialMap = importAllImages(require.context('../dials', false, /\.png/));

document.body.style.backgroundColor = "gray";

const styles = theme => ({
	root: {
		flexGrow: 1,
		justify: 'flex-start',
		spacing: 0,
	},
	card: {
	 // maxWidth: 400,
	},
	toolBar: {
		color: 'white',
		backgroundColor: '#1f2579'
	},
	appBarText: {
		color: 'white',
		marginLeft: 20,
		marginRight: 20,
	},
	media: {
	  width: 400,
	  height: 200,
	},
  });

		 
class Layout extends Component {
	render() {
		const { classes } = this.props;
		return (		
			<div>
				<AppBar position="static">				
					<ToolBar className={classes.toolBar}>
					{/*
						<Menu style={{fontSize: '200%', color: 'white'}} value={0}>
							<MenuItem key={"Daqan"}  value={0} primaryText={"Daqan"}/>    
							<MenuItem key={"Waiqar"} value={1} primaryText={"Waiqar"}/>    
							<MenuItem key={"Latari"} value={2} primaryText={"Latari"}/>    
							<MenuItem key={"Uthuk"}  value={3} primaryText={"Uthuk"}/>    
						</Menu>					
					*/}
						<Typography type="title" className={classes.appBarText}>
							List Name: {this.props.listName} 
						</Typography>	
						<Typography type="title" className={classes.appBarText}>
							List cost: {this.props.listCost}
						</Typography>	
					</ToolBar>
				</AppBar>
				
				<Grid container className={classes.root}>
					<Grid item xs={8}>
						<UnitList unitList={this.props.unitList} dispatch={this.props.dispatch} unitReferenceMap={this.props.unitReferenceMap} upgradeReferenceMap={this.props.upgradeReferenceMap}/>   
					</Grid>
					<Grid item xs={4}>
						<Card className={classes.card}>						
							<CardContent>
								<Typography type="headline" component="h2">				
									{getCardDisplayedTitle(this.props.cardDisplayed, this.props.unitReferenceMap, this.props.upgradeReferenceMap)}
								</Typography>
							</CardContent>
							<CardMedia 
								className={classes.media}
								image={getCardDisplayedDial(this.props.cardDisplayed, this.props.unitReferenceMap)}
								title={getCardDisplayedTitle(this.props.cardDisplayed, this.props.unitReferenceMap, this.props.upgradeReferenceMap)}
							/>
						</Card>
					</Grid>
				</Grid>
			</div>
		)
	}	
}

function getCardDisplayedTitle(cardDisplayed, unitReferenceMap, upgradeReferenceMap) {
	if (typeof cardDisplayed !== 'undefined') {
		if (cardDisplayed.type === 'unit' && cardDisplayed.id !== null) {
			return unitReferenceMap.units[cardDisplayed.id].name;
		}
		else if (cardDisplayed.type === 'upgrade' && cardDisplayed.id !== null) {
			return upgradeReferenceMap.upgrades[cardDisplayed.id].name;
		}
	}
	return "Nothing selected"
}

function getCardDisplayedDial(cardDisplayed, unitReferenceMap) {
	if (typeof cardDisplayed !== 'undefined') {
		if (cardDisplayed.type === 'unit' && cardDisplayed.id !== null) {
			return dialMap[unitReferenceMap.units[cardDisplayed.id].dial_image]
		}
	}
	return null;
}

function mapStateToProps(state) {
	return {
		listName: state.listName,
		listCost: state.unitList.listCost,
		unitList: state.unitList.units,
		cardDisplayed: state.cardDisplayed
	};
}

Layout.propTypes = {
	listName: PropTypes.string,
	listCost: PropTypes.number,
	unitList: PropTypes.arrayOf(PropTypes.object),
	dispatch: PropTypes.func,
	unitReferenceMap: PropTypes.object,
	upgradeReferenceMap: PropTypes.object
}

export default withStyles(styles)(connect(mapStateToProps)(Layout));
