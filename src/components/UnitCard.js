import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Card from 'material-ui/Card'
import SelectField from 'material-ui/SelectField'
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

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
				<div>
				<Card>
					<div className="topContainer">
						<div className="unitSelectContainer">
							<SelectField hintText="Select Unit ..." className="selectUnit" value={this.props.unitId} onChange={this.handleUnitChange}>
								{this.getUnitMenuItems()}
							</SelectField>
						</div>
					</div>	
				</Card>
				</div>
			);
		}
		else {
			return (
				<div>
				<Card>
				<div className="topContainer">
					<div className="unitSelectContainer">
						<SelectField hintText="Select Unit ..." className="selectUnit" value={this.props.unitId} onChange={this.handleUnitChange}>
							{this.getUnitMenuItems()}
						</SelectField>
						<SelectField hintText="Select Formation ..." className="selectUnit"	value={this.props.formationId} onChange={this.handleFormationChange}>
							{this.getFormationItems()}
						</SelectField>
					</div>
					<div className="unitCostContainer">			
						<Paper className="paper">
							<div className="costText">
								<h1>{this.props.cost}</h1>
							</div>
						</Paper>
					</div>	
					<div className="unitUpgradeContainer">
						{this.getUpgradeSelectFields()}
					</div>
					<div className="buttonContainer">
						<RaisedButton label="Remove" secondary={true} className="removeButton" onClick={this.handleRemove}/>
						<RaisedButton label="Copy" primary={true} className="copyButton" onClick={this.handleCopy}/>
					</div>
				</div>
				</Card>
				</div>
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

	getUpgradeSelectFields() {
		var selectFieldArray = [];
		if (typeof this.props.formationId !== 'undefined') {
			var unit = this.props.unitReferenceMap.units[this.props.unitId];
			var upgradeTypeArray = unit.formations[this.props.formationId].upgradeTypes;			
			for (var i = 0; i < upgradeTypeArray.length; i++) {
				var upgradeType = upgradeTypeArray[i];
				const index = i;
				selectFieldArray.push(
					<SelectField 
					    key={"upgradeSelectBox"+i}
						hintText={"Select " + upgradeType + " ..."}
						className="selectUpgrade" 
						value={getUpgradeId(this.props.upgradeIds, index)}
						onMouseOver={()=>console.log("Mouse over selected upgrade " + upgradeType)} 
						onChange={(event, key, value) => this.handleUpgradeChange(event, key, value, index)}
					//	selectionRenderer={this.upgradeSelectionRenderer}
					>
						{this.getUpgradeItems(upgradeType, unit.unit_type, unit.faction, unit.name)}
					</SelectField>
				);
			}
		}
		return selectFieldArray;
	}
	
	getUpgradeItems(upgradeType, unitType, faction, unitName) {
		return this.props.upgradeReferenceMap.upgrades.filter(getUpgradeFilter(upgradeType, unitType, faction, unitName)).map((upgrade) => (
			<MenuItem key={"upgrade"+upgrade.id} value={upgrade.id} primaryText={upgrade.name + " ("+ upgrade.cost + ")"}/>
		));
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