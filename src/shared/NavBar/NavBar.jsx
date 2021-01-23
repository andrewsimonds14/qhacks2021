import React from 'react';
import { withTheme } from 'styled-components';
import { TopBar, LogoWrapper, TextWrapper, NavText } from './NavBar.styles';
import logo from '../../assets/dumbbell.svg';

const dummyFunction = () => {
	console.log('Hi');
};

const NavBar = (props) => (
	<div>
		{props.default && (
			<TopBar onClick={() => dummyFunction}>
				<TextWrapper logo onClick={() => props.navToLanding()}>
					<LogoWrapper src={logo} />
					<NavText logo>QuickFit</NavText>
				</TextWrapper>
				<TextWrapper>
					<NavText small onClick={() => props.navToOwnerSignUp()}>
						Become a host
					</NavText>
					<NavText small onClick={() => props.navToSignUp()}>
						Sign Up
					</NavText>
					<NavText onClick={() => props.navToLogin()}>Login</NavText>
				</TextWrapper>
			</TopBar>
		)}
		{props.buddyLoggedIn && (
			<TopBar onClick={() => dummyFunction}>
				<TextWrapper logo onClick={() => props.navToLanding()}>
					<LogoWrapper src={logo} />
					<NavText logo>QuickFit</NavText>
				</TextWrapper>
				<TextWrapper>
					<NavText small onClick={() => props.navToDashboard()}>
						Dashboard
					</NavText>
					<NavText small onClick={() => props.navToSearch()}>
						Search
					</NavText>
					<NavText small onClick={() => props.navToAccount()}>
						Account
					</NavText>
					<NavText onClick={() => props.navToLanding()}>Logout</NavText>
				</TextWrapper>
			</TopBar>
		)}
		{props.ownerLoggedIn && (
			<TopBar onClick={() => dummyFunction}>
				<TextWrapper logo onClick={() => props.navToLanding()}>
					<LogoWrapper src={logo} />
					<NavText logo>QuickFit</NavText>
				</TextWrapper>
				<TextWrapper>
					<NavText small onClick={() => props.navToOwnerSignUp()}>
						Become a host
					</NavText>
					<NavText small onClick={() => props.navToSignUp()}>
						Sign Up
					</NavText>
					<NavText onClick={() => props.navToLogin()}>Login</NavText>
				</TextWrapper>
			</TopBar>
		)}
	</div>
);
export default withTheme(NavBar);
