import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem';
import {Card} from 'material-ui/Card';


import MainPage from './MainPage';

// Needed for onTouchTap (http://stackoverflow.com/a/34015469/988941)
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

//<MainPage options={['Test1', 'Test2', 'Test3']}/>			

const style = {
  margin: 12,
};

document.body.style.backgroundColor = "gray";
  
const App = () => {
	return (
		<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
		<AppBar title="Runewars List Builder" /> 		 
	    <Card>
			<SelectField floatingLabelText="Select Unit ..." floatingLabelStyle={{color: 'white'}}  style={style}>
				<MenuItem value={1} primaryText="Spearmen" />
				<MenuItem value={2} primaryText="Oathsworn Cavalry" />
				<MenuItem value={3} primaryText="Rune Golem" />
				<MenuItem value={4} primaryText="Heavy Crossbowmen" />
				<MenuItem value={5} primaryText="Kari Wraithstalker" />
				<MenuItem value={6} primaryText="Lord Hawthorne" />
			</SelectField>
			<br/>
			<SelectField floatingLabelText="Select Formation ..." floatingLabelStyle={{color: 'white'}}  style={style}>
				<MenuItem value={1} primaryText="1x1" />
				<MenuItem value={2} primaryText="2x2" />
				<MenuItem value={3} primaryText="3x2" />
				<MenuItem value={4} primaryText="3x3" />
				<MenuItem value={5} primaryText="4x3" />
			</SelectField>
		</Card>
		</MuiThemeProvider>
	)
}

export default App;
