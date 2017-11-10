import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';
import './HelloWorldList.css';


class HelloWorldList extends Component {
	constructor(props) {
		super(props);
		this.state = { units: ['1', '2', '3'] };
		this.addUnit = this.addUnit.bind(this);
		this.removeUnit = this.removeUnit.bind(this);
	}
	
	render() {
		return (
		  <div className="HelloWorldList">
		    <AddGreeter addGreeting={this.addGreeting}/>
			{this.renderGreetings()}
		  </div>
		);
	}
	
	renderGreetings() {
		return this.state.units.map(unit => (
			<HelloWorld 
				key={unit} 
				unit={unit}
				removeUnit={this.removeUnit}
			/>
		));
	}
	
	addUnit(newName) {
		this.setState({ units: [...this.state.units, newName] });
	}
	
	removeUnit(removeName) {
		const filteredUnits = this.state.units.filter(name => {
			return name !== removeName;
		});
		this.setState({ units: filteredUnits });
	}
}

export default HelloWorldList;
