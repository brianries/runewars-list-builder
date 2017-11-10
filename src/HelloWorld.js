import React, {Component} from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './HelloWorld.css';

class HelloWorld extends Component {	
	constructor(props) {
		super(props);
		this.state = { unitCount: props.unit, selectedValue: 'Select Unit'};		
		this.removeGreeting = this.removeGreeting.bind(this);
		this.selectChange = this.selectChange.bind(this);
	
		this.options = [ 
			{value: 'Spearmen', label: 'Spearmen'}, 
			{value: 'Cavalry', label: 'Oathsworn Cavalry'}, 
		];
	}
	
	render() {
		return (
			<div className="HelloWorld">
				Unit {this.state.unitCount}
				<br/>				
				<Select
					name="form-field-name"
					value={this.state.selectedValue}
					options={this.options}
					onChange={this.selectChange}
					id="unit"
				/>	
				<br/>
				<button onClick={this.removeGreeting}>Remove Me!</button>
			</div>
		);
	}	
	
	removeGreeting() {
		this.props.removeGreeting(this.props.name);
	}
	
	selectChange(item) {
		this.setState({ selectedValue: item });
	}
}

export default HelloWorld;