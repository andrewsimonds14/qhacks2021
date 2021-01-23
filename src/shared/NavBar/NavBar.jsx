import React from 'react';
import { withTheme } from 'styled-components';
import { TopBar, LogoWrapper, TextWrapper, NavText } from './NavBar.styles';
import iconBlack from '../../assets/Fleece.png';
import iconPurp from '../../assets/Fleece-Purple.png';



const dummyFunction = () => { };

const NavBar = (props) => (
    <TopBar onClick={() => (dummyFunction)} >
        <TextWrapper logo>
            <LogoWrapper src={iconPurp} />
            <NavText logo>Fleece</NavText>
        </TextWrapper>
        <TextWrapper>
            <NavText>About</NavText>
            <NavText>Team</NavText>
            <NavText>Shop</NavText>
        </TextWrapper>
    </TopBar>
);
export default withTheme(NavBar);
