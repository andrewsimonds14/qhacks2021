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
		const navToSignUp = () => {
			this.props.history.push(Routes.toSignUp());
		};
		const navToLogin = () => {
			this.props.history.push(Routes.toLogin());
		};
		const navToOwnerSignUp = () => {
			this.props.history.push(Routes.toOwnerSignUp());
		};
		return (
			<Parent>
				<NavBar
					navToOwnerSignUp={navToOwnerSignUp}
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
