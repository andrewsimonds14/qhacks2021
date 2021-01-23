import React from 'react';
import { withTheme } from 'styled-components';
import { TopBar, LogoWrapper, TextWrapper, NavText } from './NavBar.styles';
import logo from '../../assets/dumbbell.svg';



const dummyFunction = () => { };

const NavBar = (props) => (
    <TopBar onClick={() => (dummyFunction)} >
        <TextWrapper logo>
            <LogoWrapper src={logo} />
            <NavText logo>QuickFit</NavText>
        </TextWrapper>
        <TextWrapper>
            <NavText small>Become a host</NavText>
            <NavText small>Sign Up</NavText>
            <NavText>Login</NavText>
        </TextWrapper>
    </TopBar>
);
export default withTheme(NavBar);
