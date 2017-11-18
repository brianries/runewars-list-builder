import React, {Component} from 'react';

import Card from 'material-ui/Card'
import SelectField from 'material-ui/SelectField'
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem'

import './MainPage.css'


const style = {
  margin: 12,
};

class UnitCard extends Component {	
	constructor(props) {
		super(props);									
		this.handleUnitChange = this.handleUnitChange.bind(this);
	}
	
	render() {				
		return (
			<div>
				<Card>
				<SelectField hintText="Select Unit ..." style={style}			
					value={this.props.unitValue} 										
					onChange={this.handleUnitChange}>
					<MenuItem value={1} primaryText="Spearmen" />
					<MenuItem value={2} primaryText="Oathsworn Cavalry" />
					<MenuItem value={3} primaryText="Rune Golem" />
					<MenuItem value={4} primaryText="Heavy Crossbowmen" />
					<MenuItem value={5} primaryText="Kari Wraithstalker" />
					<MenuItem value={6} primaryText="Lord Hawthorne" />
				</SelectField>
				</Card>
			</div>
		);		
	}	
	
	handleUnitChange(event, key, value) {
		this.props.onUnitChange(this.props.cardIndex, value);		 
	}
}

export default UnitCard;