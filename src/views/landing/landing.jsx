import React from 'react';
import { withTheme } from 'styled-components';

import { NavBar } from '../../shared';

import { Parent } from './landing.styles';
import flagShipImg from '../../assets/Garage-Gym.jpg';
import Routes from '../../router/routes';

class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const navToHostReg = () => {
			this.props.history.push(Routes.toHostReg());
		};
		const navToSignUp = () => {
			this.props.history.push(Routes.toSignUp());
		};
		const navToLogin = () => {
			this.props.history.push(Routes.toLogin());
		};
		return (
			<Parent>
				<NavBar
					navToHostReg={navToHostReg}
					navToSignUp={navToSignUp}
					navToLogin={navToLogin}
				/>
				<img src={flagShipImg} width='100%' height='80%' alt='Garage Gym' />
			</Parent>
		);
	}
}

export default withTheme(LandingPage);
