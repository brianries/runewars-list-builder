import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Card from 'material-ui/Card'
import SelectField from 'material-ui/SelectField'
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

import './UnitCard.css';


class UnitCard extends Component {	
	constructor(props) {
		super(props);									
		this.handleUnitChange = this.handleUnitChange.bind(this);
		this.handleFormationChange = this.handleFormationChange.bind(this);
		this.handleUpgradeChange = this.handleUpgradeChange.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleCopy = this.handleCopy.bind(this);
	}
	
	render() {
		let panel = null;
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
								0
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
			<MenuItem value={unit.id} primaryText={unit.name} onMouseOver={()=>console.log("Mouseover unit id = " + unit.id)} />    
		));
	}
	
	getFormationItems() {
		return this.props.unitReferenceMap.units[this.props.unitId].formations.map((formation) => (
			<MenuItem value={formation.id} primaryText={formation.size + " (" + formation.cost + ")"}/>    
		));
	}

	getUpgradeSelectFields() {
		var selectFieldArray = [];
		if (typeof this.props.formationId != 'undefined') {
			var upgradeTypeArray = this.props.unitReferenceMap.units[this.props.unitId].formations[this.props.formationId].upgradeTypes;			
			for (var i = 0; i < upgradeTypeArray.length; i++) {
				var upgradeType = upgradeTypeArray[i];
				selectFieldArray.push(
					<SelectField 
						hintText={"Select " + upgradeType + " ..."}
						className="selectUpgrade" 
						value={(typeof this.props.upgradeIds != 'undefined') ? this.props.upgradeIds[i] : null}
						onMouseOver={()=>console.log("Mouse over selected upgrade " + upgradeType)} 
						onChange={(event, key, value) => this.handleUpgradeChange(event, key, value, i)}>
						{this.getUpgradeItems(upgradeType)}
					</SelectField>
				);
			}
		}
		return selectFieldArray;
	}
	
	getUpgradeItems(upgradeType) {
		/* Need to loop through the relevant upgrade types here -- filtering on faction, unitName, unitType, and uniqueness
		/*
		return this.props.unitReferenceMap.units[this.props.unitId].formations.map((element) => (
			<MenuItem value={element.value} primaryText={element.primaryText}/>    
		));*/

		return <MenuItem value={0} primaryText={"Dummy Upgrade"}/>;
	}
}

UnitCard.propTypes = {
	cardIndex: PropTypes.number.isRequired,
	unitReferenceMap: PropTypes.object.isRequired,
	unitId: PropTypes.number,
	formationId: PropTypes.number,
	upgradeIds: PropTypes.arrayOf(PropTypes.number),
	onUnitChange: PropTypes.func.isRequired,
	onFormationChange: PropTypes.func,
	onUpgradeChange: PropTypes.func,
	onRemove: PropTypes.func,
	onCopy: PropTypes.func,
	isNewOption: PropTypes.bool
  };

export default UnitCard;