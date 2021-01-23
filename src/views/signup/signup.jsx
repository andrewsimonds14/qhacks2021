import React from 'react';
import { withTheme } from 'styled-components';

import { Parent, Title } from './signup.styles';
import flagShipImg from '../../assets/Garage-Gym.jpg';
import Routes from '../../router/routes';

class SignUpPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Parent>
				<Title>Become a Workout Buddy Today!</Title>
			</Parent>
		);
	}
}

export default withTheme(SignUpPage);
