import React, {Component} from 'react';

import UnitCard from './UnitCard';

class UnitList extends Component {	
	constructor(props) {
		super(props);									
		this.handleUnitChange = this.handleUnitChange.bind(this);
		this.state = {
			units: []
		};
	}
	
	render() {	
		const lastCardIndex = this.state.units.length;		
		const existingCards = this.state.units.map((element, index) => (
			<UnitCard cardIndex={index} unitValue={element.unitValue} onUnitChange={this.handleUnitChange}/>	    
		));
		
		return (
			<div>
				{existingCards}
				<UnitCard cardIndex={lastCardIndex} unitValue={null} onUnitChange={this.handleUnitChange}/>	    
			</div>
		)
	}
	
	
	handleUnitChange(cardIndex, value) {	
		var unitsCopy = this.state.units.slice();
		unitsCopy[cardIndex] = {unitValue: value};
		this.setState({units: unitsCopy});	
	}	
}

export default UnitList;