import React from 'react';
import { withTheme } from 'styled-components';

import { Parent } from './signup.styles';
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
				<img src={flagShipImg} width='100%' height='80%' alt='Garage Gym' />
			</Parent>
		);
	}
}

export default withTheme(SignUpPage);
