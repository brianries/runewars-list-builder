import React, {Component} from 'react';

import UnitCard from './UnitCard';

class UnitList extends Component {	
	constructor(props) {
		super(props);									
		this.handleUnitChange = this.handleUnitChange.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleCopy = this.handleCopy.bind(this);
		this.state = {
			units: []
		};
	}
	
	render() {	
		const lastCardIndex = this.state.units.length;		
		const existingCards = this.state.units.map((element, index) => (
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
		var unitsCopy = this.state.units.slice();
		unitsCopy[cardIndex] = {unitValue: value};
		this.setState({units: unitsCopy});	
	}	
	
	handleRemove(cardIndex) {
		if (cardIndex !== this.state.units.length) {
			this.setState({
				units: this.state.units.filter((_, i) => i !== cardIndex)
			});
		}
	}
	
	handleCopy(cardIndex) {
		if (cardIndex !== this.state.units.length) {
		    var unit = this.state.units[cardIndex];
			var unitsCopy = this.state.units.slice();
			unitsCopy.push(unit);
			this.setState({units: unitsCopy});
		}
	}
}

export default UnitList;