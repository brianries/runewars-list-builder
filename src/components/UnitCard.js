import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Card from 'material-ui/Card'
import SelectField from 'material-ui/SelectField'
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import {Grid, Row, Col} from 'react-flexbox-grid';

import ContentClear from 'material-ui/svg-icons/content/clear'

import './UnitCard.css';



class UnitCard extends Component {	
	constructor(props) {
		super(props);									
		this.handleUnitChange = this.handleUnitChange.bind(this);
		this.handleFormationChange = this.handleFormationChange.bind(this);
		this.handleUpgradeChange = this.handleUpgradeChange.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleCopy = this.handleCopy.bind(this);
		this.upgradeSelectionRenderer = this.upgradeSelectionRenderer.bind(this);
	}
	
	render() {
		if (this.props.isNewOption) {
			return (
				<Card>
				<Grid fluid>
					<Row>
						<Col xs={12}>
							<SelectField hintText="Select Unit ..." value={this.props.unitId} onChange={this.handleUnitChange}>
								{this.getUnitMenuItems()}
							</SelectField>
						</Col>
					</Row>
				</Grid>	
				</Card>
			);
		}
		else {
			return (
				<Card>
				<Grid fluid>
					<Row>
						<Col xs={3}>
							<Row>
								<SelectField hintText="Select Unit ..."  value={this.props.unitId} onChange={this.handleUnitChange}>
									{this.getUnitMenuItems()}
								</SelectField>
							</Row>
							<Row>
								<SelectField hintText="Select Formation ..." value={this.props.formationId} onChange={this.handleFormationChange}>
									{this.getFormationItems()}
								</SelectField>
							</Row>	
						</Col>
						<Col xs={1}>
							<Paper >
								<div className="costText">
									<h1>{this.props.cost}</h1>
								</div>
							</Paper>
						</Col>
						<Col xs={3}>
							{this.getUpgradeSelectFields(true)}
						</Col>
						<Col xs={3}>
							{this.getUpgradeSelectFields(false)}
						</Col>
						<Col xs={1}>
							<RaisedButton label="Remove" secondary={true} onClick={this.handleRemove}/>
						</Col>
						<Col xs={1}>
							<RaisedButton label="Copy" primary={true} onClick={this.handleCopy}/>
						</Col>
					</Row>	
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
	
	handleUnitChange(event, key, value) {
		this.props.onUnitChange(this.props.cardIndex, value);		 
	}

	handleFormationChange(event, key, value) {
		this.props.onFormationChange(this.props.cardIndex, value);		 
	}

	handleUpgradeChange(event, key, value, upgradeIndex) {
		this.props.onUpgradeChange(this.props.cardIndex, upgradeIndex, value);
	}
	
	getUnitMenuItems() {
		return this.props.unitReferenceMap.units.map((unit) => (
			<MenuItem key={"unit"+unit.id} value={unit.id} primaryText={unit.name} onMouseOver={()=>console.log("Mouseover unit id = " + unit.id)} />    
		));
	}
	
	getFormationItems() {
		return this.props.unitReferenceMap.units[this.props.unitId].formations.map((formation) => (
			<MenuItem key={"formation"+formation.id} value={formation.id} primaryText={formation.size + " (" + formation.cost + ")"}/>    
		));
	}

	wrapUpgradesInGrid(colNum, selectFields) {
		for (var i = 0; i < selectFields.length; i++) {

		}
	}

	getUpgradeSelectFields(selectLeft) {
		var selectFieldArray = [];
		if (typeof this.props.formationId !== 'undefined') {
			var unit = this.props.unitReferenceMap.units[this.props.unitId];
			var upgradeTypeArray = unit.formations[this.props.formationId].upgradeTypes;			
			for (var i = 0; i < upgradeTypeArray.length; i++) {
				var upgradeType = upgradeTypeArray[i];
				const index = i;
				if ((i % 2 === 1 && !selectLeft) || (i % 2 === 0 && selectLeft)) {
					selectFieldArray.push(
						<SelectField 
							key={"upgradeSelectBox"+i}
							hintText={"Select " + upgradeType + " ..."}
							//className="selectUpgrade" 
							value={getUpgradeId(this.props.upgradeIds, index)}
							onMouseOver={()=>console.log("Mouse over selected upgrade " + upgradeType)} 
							onChange={(event, key, value) => this.handleUpgradeChange(event, key, value, index)}
						>
							{this.getUpgradeItems(upgradeType, unit.unit_type, unit.faction, unit.name)}
						</SelectField>
					);
				}
			}
		}
		return selectFieldArray;
	}
	
	getUpgradeItems(upgradeType, unitType, faction, unitName) {
		var result = this.props.upgradeReferenceMap.upgrades.filter(getUpgradeFilter(upgradeType, unitType, faction, unitName)).map((upgrade) => (
			<MenuItem key={"upgrade"+upgrade.id} value={upgrade.id} primaryText={upgrade.name + " ("+ upgrade.cost + ")"}/>
		));
		result.unshift(<MenuItem value={null} primaryText=""/>)
		return result;
	}

	upgradeSelectionRenderer(value, menuItem) {
		return <div> {this.props.upgradeReferenceMap.upgrades[value].name} <ContentClear onClick={()=>console.log("Cleared item!")}/> </div>
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

export default UnitCard;