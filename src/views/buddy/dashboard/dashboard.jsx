import React from 'react';
import { withTheme } from 'styled-components';
import { connect } from 'react-redux';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-red.css';

import { NavBar, Footer, Bookings, PastBookings } from '../../../shared';

import {
	Parent,
	Title,
	WelcomeMessage,
	SubTitle,
	ButtonWrapper,
} from './dashboard.styles';
import Routes from '../../../router/routes';

class BuddyDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const navToSearch = () => {
			this.props.history.push(Routes.toBuddySearch());
		};
		const navToAccount = () => {
			this.props.history.push(Routes.toBuddyAccount());
		};
		const navToDashboard = () => {
			this.props.history.push(Routes.toBuddyDashboard());
		};
		const navToLanding = () => {
			this.props.history.push(Routes.toLanding());
		};
		

		return (
			<Parent>
				<NavBar
					buddyLoggedIn
					navToSearch={navToSearch}
					navToAccount={navToAccount}
					navToDashboard={navToDashboard}
					navToLanding={navToLanding}
				/>
				<WelcomeMessage>
					<Title>{`Hey ${this.props.userName}, ready to get fit?`}</Title>
				</WelcomeMessage>
				<SubTitle>Upcoming Workouts</SubTitle>
				<Bookings mclovin />
				<SubTitle>Past Workouts</SubTitle>
				<PastBookings mclovin />
				<SubTitle>Ready to find your next lift?</SubTitle>
				<ButtonWrapper
					onClick={() => this.props.history.push(Routes.toBuddySearch())}
				>
					<AwesomeButton>Let's go!</AwesomeButton>
				</ButtonWrapper>
				<Footer />
			</Parent>
		);
	}
}

const mapStateToProps = (state) => ({
	userName: state.reducer.userList.buddies[1].name,
});

export default connect(mapStateToProps)(withTheme(BuddyDashboard));
