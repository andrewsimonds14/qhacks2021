import React from 'react';
import { withTheme } from 'styled-components';

import { NavBar } from '../../shared';

import { BackgroundImage, Parent, MainText, TitleTextWrapper } from './landing.styles';
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
				<BackgroundImage background={flagShipImg}>
					<TitleTextWrapper> 
						<MainText>A whole Gym, all to yourself</MainText>
					</TitleTextWrapper>
				</BackgroundImage>
			</Parent>
		);
	}
}

export default withTheme(LandingPage);
