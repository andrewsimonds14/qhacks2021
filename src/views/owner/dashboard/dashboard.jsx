import React from 'react';
import { withTheme } from 'styled-components';
import { connect } from 'react-redux';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-red.css';

import { NavBar, Footer, Sessions } from '../../../shared';

import {
	Parent,
	Title,
	WelcomeMessage,
	SubTitle,
	ButtonWrapper,
} from './dashboard.styles';
import Routes from '../../../router/routes';

class OwnerDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const navToEditGym = () => {
			this.props.history.push(Routes.toEditGym());
		};
		const navToAccount = () => {
			this.props.history.push(Routes.toOwnerAccount());
		};
		const navToDashboard = () => {
			this.props.history.push(Routes.toOwnerDashboard());
		};
		const navToLanding = () => {
			this.props.history.push(Routes.toLanding());
		};

		return (
			<Parent>
				<NavBar
					ownerLoggedIn
					navToEditGym={navToEditGym}
					navToAccount={navToAccount}
					navToDashboard={navToDashboard}
					navToLanding={navToLanding}
				/>
				<WelcomeMessage>
					<Title>{`Hey ${this.props.ownerName}, how's the gym?`}</Title>
				</WelcomeMessage>
				<SubTitle dark>{`${this.props.gymName} | Upcoming Bookings`}</SubTitle>
				<Sessions />

				<Footer />
			</Parent>
		);
	}
}

const mapStateToProps = (state) => ({
	gymName: state.reducer.userList.owners[0].gymName,
	ownerName: state.reducer.userList.owners[0].name,
});

export default connect(mapStateToProps)(withTheme(OwnerDashboard));
