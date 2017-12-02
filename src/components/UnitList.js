import React, {Component} from 'react';
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
	}
	
	render() {	
		const lastCardIndex = this.props.unitList.length;		
		const existingCards = this.props.unitList.map((element, index) => (
			<UnitCard 
				cardIndex={index} 
				unitReferenceMap={this.props.unitReferenceMap}
				unitId={element.unitId} 								
				formationId={element.formationId}
				upgradeIds={element.upgradeIds}
				onUnitChange={this.handleUnitChange} 			
				onFormationChange={this.handleFormationChange} 
				onUpgradeChange={this.handleUpgradeChange} 
				onRemove={this.handleRemove} 
				onCopy={this.handleCopy}
			/>	    
		));
		
		return (
			<div>
				{existingCards}
				<UnitCard 
					cardIndex={lastCardIndex} 
					unitReferenceMap={this.props.unitReferenceMap}
					unitId={null}
					formationId={null}
					upgradeIds={null}
					onUnitChange={this.handleUnitChange} 			
					isNewOption={true}
					/>	    
			</div>
		)
	}
	
	
	handleUnitChange(cardIndex, value) {	
		// Dispatch a unit action to the Redux store
		this.props.dispatch(unitAction.setUnit(cardIndex, value));
	}	

	handleFormationChange(cardIndex, value) {
		// Dispatch a formation action to the Redux store
		this.props.dispatch(formationAction.setFormation(cardIndex, value));
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
}

export default UnitList;
