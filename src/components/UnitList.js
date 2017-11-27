import React, {Component} from 'react';
import * as unitAction from "../actions/unitActions";
import UnitCard from './UnitCard';

var unitData = require("../data/unitData.json");

class UnitList extends Component {	
	constructor(props) {
		super(props);									
		this.handleUnitChange = this.handleUnitChange.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleCopy = this.handleCopy.bind(this);
	}
	
	render() {	
		const lastCardIndex = this.props.units.length;		
		const existingCards = this.props.units.map((element, index) => (
			<UnitCard 
				cardIndex={index} 
				unitValue={element.unitValue} 								
				onUnitChange={this.handleUnitChange} 
				onRemove={this.handleRemove} 
				onCopy={this.handleCopy}
			/>	    
		));
		
		return (
			<div>
				{existingCards}
				<UnitCard cardIndex={lastCardIndex} unitValue={null} onUnitChange={this.handleUnitChange} isNewOption={true}/>	    
			</div>
		)
	}
	
	
	handleUnitChange(cardIndex, value) {	
		var unitsCopy = this.props.units.slice();
		unitsCopy[cardIndex] = {unitValue: value};
		this.props.dispatch(unitAction.setUnit(cardIndex, value));
	}	
	
	handleRemove(cardIndex) {
		if (cardIndex !== this.props.units.length) {
			this.props.dispatch(unitAction.removeUnit(cardIndex));			
		}
	}
	
	handleCopy(cardIndex) {
		if (cardIndex !== this.props.units.length) {
			this.props.dispatch(unitAction.copyUnit(cardIndex));
			/*
		    var unit = this.props.units[cardIndex];
			var unitsCopy = this.props.units.slice();
			unitsCopy.push(unit);
			this.setState({units: unitsCopy});
			*/
		}
	}
}

/*
function mapStoreToProps(store) {
	return {
		units: store.units,
		store: store
	};
}


export default connect(mapStoreToProps)(UnitList);
*/
export default UnitList;
