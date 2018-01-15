import React, {Component} from 'react';
import * as mouseOverAction from "../actions/mouseOverActions";
import * as unitAction from "../actions/unitActions";
import * as formationAction from "../actions/formationActions";
import * as upgradeAction from "../actions/upgradeActions";
import UnitCard from './UnitCard';

class UnitList extends Component {	
	constructor(props) {
		super(props);									
		this.handleUnitChange = this.handleUnitChange.bind(this);
		this.handleFormationChange = this.handleFormationChange.bind(this);
		this.handleUpgradeChange = this.handleUpgradeChange.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleCopy = this.handleCopy.bind(this);
		this.handleMouseOverUnit = this.handleMouseOverUnit.bind(this);
	}
	
	render() {	
		const lastCardIndex = this.props.unitList.length;		
		const existingCards = this.props.unitList.map((element, index) => (
			<UnitCard 
			    key={"UnitCard"+index}
				cardIndex={index} 
				unitReferenceMap={this.props.unitReferenceMap}
				upgradeReferenceMap={this.props.upgradeReferenceMap}
				unitId={element.unitId} 								
				formationId={element.formationId}
				upgradeIds={element.upgradeIds}
				cost={element.cost}
				onUnitChange={(cardIndex, value) => this.handleUnitChange(cardIndex, value, false)} 			
				onFormationChange={this.handleFormationChange} 
				onUpgradeChange={this.handleUpgradeChange} 
				onRemove={this.handleRemove} 
				onCopy={this.handleCopy}
				onMouseOverUnit={this.handleMouseOverUnit}
			/>	    
		));
		
		return (
			<div>
				{existingCards}
				<UnitCard 
				    key={"NewUnitCard"}
					cardIndex={lastCardIndex} 
					unitReferenceMap={this.props.unitReferenceMap}
					upgradeReferenceMap={this.props.upgradeReferenceMap}
					unitId={null}
					formationId={null}
					upgradeIds={null}
					cost={0}
					onUnitChange={(cardIndex, value) => this.handleUnitChange(cardIndex, value, true)} 			
					isNewOption={true}
				/>	    
			</div>
		)
	}
	
	
	handleUnitChange(cardIndex, value, isNew) {	
		// Dispatch a unit action to the Redux store
		this.props.dispatch(unitAction.setUnit(cardIndex, value, isNew));
	}	

	handleFormationChange(cardIndex, value) {
		// Dispatch a formation action to the Redux store
		this.props.dispatch(formationAction.setFormation(cardIndex, this.props.unitList[cardIndex].unitId, value));
	}

	handleUpgradeChange(cardIndex, upgradeIndex, value) {
		// Dispatch an upgrade action to the Redux store
		this.props.dispatch(upgradeAction.setUpgrade(cardIndex, upgradeIndex, value));
	}
	
	handleRemove(cardIndex) {
		// Dispatch a remove action to the Redux store
		if (cardIndex !== this.props.unitList.length) {
			this.props.dispatch(unitAction.removeUnit(cardIndex));			
		}
	}
	
	handleCopy(cardIndex) {
		if (cardIndex !== this.props.unitList.length) {
			this.props.dispatch(unitAction.copyUnit(cardIndex));
		}
	}

	handleMouseOverUnit(unitId) {
		if (unitId >= 0) {
			this.props.dispatch(mouseOverAction.mouseOverUnit(unitId));
		}
	}
}

export default UnitList;
