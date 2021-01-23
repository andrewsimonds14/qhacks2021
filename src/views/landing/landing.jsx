import React from 'react';
import { Link } from 'react-router-dom';
import { withTheme } from 'styled-components';

import { NavBar } from '../../shared';

import { Parent } from './landing.styles';
import flagShipImg from "../../assets/Garage-Gym.jpg"
import Routes from '../../router/routes';

class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Parent>
				<NavBar />
				<img src= {flagShipImg} width = "100%" height = "80%" alt ="Garage Gym"/>
			</Parent>
		);
	}
}

export default withTheme(LandingPage);
