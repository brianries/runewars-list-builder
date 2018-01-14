import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Card from 'material-ui/Card';
import Select from 'material-ui/Select';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Menu, {MenuItem} from 'material-ui/Menu';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import './UnitCard.css';
import InputAdornment from 'material-ui/Input/InputAdornment';
import HighlightOff from 'material-ui-icons/HighlightOff';
import ContentCopy from 'material-ui-icons/ContentCopy';
import RemoveCircle from 'material-ui-icons/RemoveCircle';
import Typography from 'material-ui/Typography/Typography';

const styles = theme => ({
	root: {
		//flexGrow: 1,
	},
	container: {
	  display: 'flex',
	  flexWrap: 'wrap',
	},

	formControl: {
	  margin: theme.spacing.unit,
	  minWidth: 200,
	},
	removeButton: {
		color: 'white',
		backgroundColor: '#B71C1C',
		maxWidth: 100,
		marginTop: theme.spacing.unit * 3,
	},
	copyButton: {
		color: 'white',
		backgroundColor: 'blue',
		maxWidth: 100,
		marginTop: theme.spacing.unit * 3,
		marginLeft: theme.spacing.unit,
	},
	paperCost: {
		paddingTop: 16,
		paddingBottom: 16,
		textAlign: 'center',
		marginTop: theme.spacing.unit * 3,
	},
	gridItem0: {
	//	backgroundColor: 'red',
	},
	gridItem1: {
	//	backgroundColor: 'green'
	},
	gridItem2: {
	//	backgroundColor: 'blue'
	},
	gridItem3: {
	//	backgroundColor: 'yellow'
	},
	rightIcon: {
		marginLeft: theme.spacing.unit,
	  },
  });

class UnitCard extends Component {	
	constructor(props) {
		super(props);									
		this.handleUnitChange = this.handleUnitChange.bind(this);
		this.handleFormationChange = this.handleFormationChange.bind(this);
		this.handleUpgradeChange = this.handleUpgradeChange.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleCopy = this.handleCopy.bind(this);
		this.handleRemoveUpgrade = this.handleRemoveUpgrade.bind(this);
	}
	
	render() {
		const { classes } = this.props;

		if (this.props.isNewOption) {
			return (
				<Card>
				<Grid container className={classes.root}>
					<Grid item xs={3}>				
						<FormControl className={classes.formControl}>
							<InputLabel htmlFor="unit-simple">Select Unit ...</InputLabel>							
							<Select value={this.props.unitId} onChange={this.handleUnitChange}>
								{this.getUnitMenuItems()}
							</Select>
						</FormControl>	
					</Grid>
				</Grid>	
				</Card>
			);
		}
		else {
			return (
				<Card>
				<Grid container className={classes.root} justify="flex-start">
					<Grid item xs={3} className={classes.gridItem0}>
					   	<Grid container xs={12} className={classes.gridItem2} direction="column" alignContent="stretch">
							<Grid item xs={12}>
								<FormControl className={classes.formControl}>
									<InputLabel htmlFor="unit-simple" hidden={this.props.unitId !== null ? true : false} >Select Unit ...</InputLabel>
									<Select value={this.props.unitId} onMouseOver={()=>console.log("Mouse over unit ")} onChange={this.handleUnitChange}>
										{this.getUnitMenuItems()}
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<FormControl className={classes.formControl}>
									<InputLabel htmlFor="formation-simple" hidden={this.props.formationId !== null ? true : false} >Select Formation ...</InputLabel>
									<Select value={this.props.formationId} onChange={this.handleFormationChange} input={<Input name="formation" id="formation-simple"/>} >
										{this.getFormationItems()}
									</Select>
								</FormControl>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={1} className={classes.gridItem1}>
						<Paper className={classes.paperCost} elevation={4}>
							<Typography type="headline" component="h1">
								{this.props.cost}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={3} className={classes.gridItem0}>
						{this.getUpgradeSelectFields(true)}
					</Grid>
					<Grid item xs={3} className={classes.gridItem1}>
						{this.getUpgradeSelectFields(false)}
					</Grid>
					<Grid item xs={2} className={classes.gridItem0}>
						<Button raised dense className={classes.removeButton} onClick={this.handleRemove}>
							<RemoveCircle/>
						</Button>
						<Button raised dense className={classes.copyButton} onClick={this.handleCopy}>
							<ContentCopy className={classes.rightIcon}/>
						</Button>
					</Grid>
				</Grid>	
				</Card>
			);		
		}
	}
		
	handleRemove(event) {
		this.props.onRemove(this.props.cardIndex);
	}
	
	handleCopy(event) {
		this.props.onCopy(this.props.cardIndex);
	}
	
	handleUnitChange(event) {
		this.props.onUnitChange(this.props.cardIndex, event.target.value);		 
	}

	handleFormationChange(event) {
		this.props.onFormationChange(this.props.cardIndex, event.target.value);		 
	}

	handleUpgradeChange(upgradeIndex, event) {
		this.props.onUpgradeChange(this.props.cardIndex, upgradeIndex, event.target.value);
	}

	handleRemoveUpgrade(upgradeIndex, event) {
		this.props.onUpgradeChange(this.props.cardIndex, upgradeIndex, null);
	}
	
	getUnitMenuItems() {
		return this.props.unitReferenceMap.units.map((unit) => (
			<MenuItem value={unit.id} onMouseOver={()=>console.log("Mouseover unit id = " + unit.id)}>{unit.name}</MenuItem>    
		));
	}
	
	getFormationItems() {
		return this.props.unitReferenceMap.units[this.props.unitId].formations.map((formation) => (
			<MenuItem value={formation.id}>{formation.size + " (" + formation.cost + ")"}</MenuItem>
		));
	}

	wrapUpgradesInGrid(colNum, selectFields) {
		for (var i = 0; i < selectFields.length; i++) {

		}
	}

	
	
	
	getUpgradeSelectFields(selectLeft) {
		const { classes } = this.props;
		var selectFieldArray = [];
		if (typeof this.props.formationId !== 'undefined') {
			var unit = this.props.unitReferenceMap.units[this.props.unitId];
			var upgradeTypeArray = unit.formations[this.props.formationId].upgradeTypes;			
			for (var i = 0; i < upgradeTypeArray.length; i++) {
				var upgradeType = upgradeTypeArray[i];
				const index = i;
				if ((i % 2 === 1 && !selectLeft) || (i % 2 === 0 && selectLeft)) {
					var hasValSelected = getUpgradeId(this.props.upgradeIds, index) !== null ? true : false;
					selectFieldArray.push(
					<Grid item xs={12}>
						<FormControl className={classes.formControl}>
							<InputLabel shrink={hasValSelected} hidden={hasValSelected}>Select {upgradeType} ...</InputLabel>						
							<Select 
								value={getUpgradeId(this.props.upgradeIds, index)} 
								onMouseOver={()=>console.log("Mouse over selected upgrade " + upgradeType)}
								onChange={(event) => this.handleUpgradeChange(index, event)} 
								input={<Input endAdornment={this.getEndAdornment(this.props.upgradeIds, index)}/>}							
							>
								{this.getUpgradeItems(upgradeType, unit.unit_type, unit.faction, unit.name)}
							</Select>
						</FormControl>
					</Grid>
					);
				}
			}
		}
		return selectFieldArray;
	}

	getEndAdornment(upgradeIdArray, index) {
		var value = getUpgradeId(upgradeIdArray, index);
		if (typeof value !== 'undefined' && value !== null) {
			return <InputAdornment position="end"> <IconButton onClick={(event) => this.handleRemoveUpgrade(index, event)}><HighlightOff/></IconButton></InputAdornment>
		}
		else {
			return null;
		}
	}

	getUpgradeItems(upgradeType, unitType, faction, unitName) {
		var result = this.props.upgradeReferenceMap.upgrades.filter(getUpgradeFilter(upgradeType, unitType, faction, unitName)).map((upgrade) => (
			<MenuItem value={upgrade.id}>{upgrade.name + " ("+ upgrade.cost + ")"}</MenuItem>
		));
		result.unshift(<MenuItem value={null} primaryText=""/>)
		return result;
	}
}

function getUpgradeFilter(upgradeType, unitType, faction, unitName) {
	return ((upgrade) => {
		if ((upgrade.upgrade_type === upgradeType) && (upgrade.unit_type === 'Any' || upgrade.unit_type === unitType) &&
			  (upgrade.faction === 'Any' || upgrade.faction === faction) && (upgrade.unique_unit === null || upgrade.unique_unit === unitName)) {
			return true;
		} 
		return false;
	});
}



function getUpgradeId(upgradeIdArray, index) {
	if (typeof upgradeIdArray !== 'undefined' && index < upgradeIdArray.length) {
		return upgradeIdArray[index];
	}
	else {
		return null;
	}
}

UnitCard.propTypes = {
	cardIndex: PropTypes.number.isRequired,
	unitReferenceMap: PropTypes.object.isRequired,
	unitId: PropTypes.number,
	formationId: PropTypes.number,
	cost: PropTypes.number,
	upgradeIds: PropTypes.arrayOf(PropTypes.number),
	onUnitChange: PropTypes.func.isRequired,
	onFormationChange: PropTypes.func,
	onUpgradeChange: PropTypes.func,
	onRemove: PropTypes.func,
	onCopy: PropTypes.func,
	isNewOption: PropTypes.bool
  };

  export default withStyles(styles)(UnitCard);