import React from 'react';
import { withTheme } from 'styled-components';
import { TopBar, LogoWrapper, TextWrapper, NavText } from './NavBar.styles';
import logo from '../../assets/dumbbell.svg';
import Routes from '../../router/routes';

const dummyFunction = () => {
	console.log('Hi');
};

const NavBar = (props) => (
	<TopBar onClick={() => dummyFunction}>
		<TextWrapper logo>
			<LogoWrapper src={logo} />
			<NavText logo>QuickFit</NavText>
		</TextWrapper>
		<TextWrapper>
			<NavText small onClick={() => props.navToHostReg()}>
				Become a host
			</NavText>
			<NavText small onClick={() => props.navToSignUp()}>
				Sign Up
			</NavText>
			<NavText onClick={() => props.navToLogin()}>Login</NavText>
		</TextWrapper>
	</TopBar>
);
export default withTheme(NavBar);
