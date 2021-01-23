import React from 'react';
import { withTheme } from 'styled-components';

import { NavBar, Footer } from '../../shared';

import { BackgroundImage, Parent } from './landing.styles';
import flagShipImg from '../../assets/Garage-Gym.png';
import Routes from '../../router/routes';

class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const navToSignUp = () => {
			this.props.history.push(Routes.toSignUp());
		};
		const navToLogin = () => {
			this.props.history.push(Routes.toLogin());
		};
		const navToOwnerSignUp = () => {
			this.props.history.push(Routes.toOwnerSignUp());
		};
		const navToLanding = () => {
			this.props.history.push(Routes.toLanding());
		};
		return (
			<Parent>
				<NavBar
					default
					navToOwnerSignUp={navToOwnerSignUp}
					navToSignUp={navToSignUp}
					navToLogin={navToLogin}
					navToLanding={navToLanding}
				/>
				<BackgroundImage background={flagShipImg} />
				<Footer landing />
			</Parent>
		);
	}
}

export default withTheme(LandingPage);
