import React from 'react';
import { withTheme } from 'styled-components';

import { NavBar, Footer, HomeCard } from '../../shared';

import {
	BackgroundImage,
	Parent,
	AboutSubTitle,
	AboutTitle,
	AboutWrapper,
	CardWrapper,
} from './landing.styles';
import flagShipImg from '../../assets/Garage-Gym.png';
import { Social, Capture, Gear } from '../../assets';
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
				<AboutWrapper>
					<AboutTitle>About QuickFit</AboutTitle>
					<AboutSubTitle>
						QuickFit is the gateway to the optimal hassle free workout you've
						been searching for
					</AboutSubTitle>
					<CardWrapper>
						<HomeCard
							img={<Capture fill={this.props.theme.colors.darkRed} />}
							action='Customizable'
							more='Select your workout based on various factors each gym offers'
						/>
						<HomeCard
							img={<Social fill={this.props.theme.colors.darkRed} />}
							action='Sociable'
							more='Friendly owners who take pride in their communication skills'
						/>
						<HomeCard
							img={<Gear fill={this.props.theme.colors.darkRed} />}
							action='Easy to Use'
							more='State of the art booking and searching technology'
						/>
					</CardWrapper>
				</AboutWrapper>
				<Footer landing />
			</Parent>
		);
	}
}

export default withTheme(LandingPage);
