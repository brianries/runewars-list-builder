import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton';
import './MainPage.css'


class MainPage extends Component {	
	constructor(props) {
		super(props);							
		this.state = {value: null};
	}
	
	render() {
		const options = this.props.options.map(item => {
			return <MenuItem value={item} primaryText={item} />
		});
		
		return (
			<div>
				<SelectField
					floatingLabelText="Select Unit" 
					floatingLabelStyle={{color: 'red'}}
					value={this.state.value} 										
					onChange={ (event, key, value) => this.setState({value: value})}>
					{options}
				</SelectField>
				<button type="submit">Create List</button> 
			</div>
		);
	}		
}

export default MainPage;
