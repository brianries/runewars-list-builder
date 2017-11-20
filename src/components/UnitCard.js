import React, {Component} from 'react';

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
		this.handleRemove = this.handleRemove.bind(this);
		this.handleCopy = this.handleCopy.bind(this);
		this.state = {
			unitList: [
				{value:0, primaryText:"Spearmen"},
				{value:1, primaryText:"Oathsworn Cavalry"},
				{value:2, primaryText:"Rune Golem"},
				{value:3, primaryText:"Heavy Crossbowmen"},
				{value:4, primaryText:"Kari Wraithstalker"},
				{value:5, primaryText:"Lord Hawthorne"},
			],
			
			formationList: [
				{value:0, primaryText:"1x1"},
				{value:1, primaryText:"1x2"},
				{value:2, primaryText:"1x3"},
				{value:3, primaryText:"1x4"},
				{value:4, primaryText:"2x1"},
				{value:5, primaryText:"2x2"},
				{value:6, primaryText:"2x3"},
				{value:7, primaryText:"2x4"},
				{value:9, primaryText:"3x1"},
				{value:10, primaryText:"3x2"},
				{value:11, primaryText:"3x3"},
				{value:12, primaryText:"3x4"},
				{value:13, primaryText:"4x1"},
				{value:14, primaryText:"4x2"},
				{value:15, primaryText:"4x3"},
				{value:16, primaryText:"4x4"},
			],
			
			upgradeList: [
				{value:0, primaryText:"Tempered Steel"},
				{value:1, primaryText:"Rank Discipline"},
				{value:2, primaryText:"Wind Rune"},
			],
		};
	}
	
	render() {
		let panel = null;
		if (this.props.isNewOption) {
			return (
				<div>
				<Card>
					<div className="topContainer">
						<div className="unitSelectContainer">
							<SelectField hintText="Select Unit ..." className="selectUnit" value={this.props.unitValue} onChange={this.handleUnitChange}>
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
						<SelectField hintText="Select Unit ..." className="selectUnit" value={this.props.unitValue} onChange={this.handleUnitChange}>
							{this.getUnitMenuItems()}
						</SelectField>
						<SelectField hintText="Select Formation ..." className="selectUnit"	value={this.props.unitValue} onChange={this.handleUnitChange}>
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
						<SelectField hintText="Select Upgrade ..."  className="selectUpgrade" value={this.props.unitValue} onChange={this.handleUnitChange}>
							{this.getUpgradeItems()}
						</SelectField>				
						<SelectField hintText="Select Upgrade ..." className="selectUpgrade" value={this.props.unitValue} onChange={this.handleUnitChange}>
							{this.getUpgradeItems()}
						</SelectField>
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
	
	getUnitMenuItems() {
		return this.state.unitList.map((element) => (
			<MenuItem value={element.value} primaryText={element.primaryText}/>    
		));
	}
	
	getFormationItems() {
		return this.state.formationList.map((element) => (
			<MenuItem value={element.value} primaryText={element.primaryText}/>    
		));
	}
	
	getUpgradeItems() {
		return this.state.upgradeList.map((element) => (
			<MenuItem value={element.value} primaryText={element.primaryText}/>    
		));
	}
}

export default UnitCard;