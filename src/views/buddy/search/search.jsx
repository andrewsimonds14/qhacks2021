import React from 'react';
import { withTheme } from 'styled-components';
import 'react-awesome-button/dist/themes/theme-red.css';
import { MapContainer, NavBar, Footer } from '../../../shared';
import Routes from '../../../router/routes';
import { SignUpContainer, Parent } from './search.styles';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const navToOwner = () => {
			this.props.history.push(Routes.toLanding());
		};
		const navToDashboard = () => {
			this.props.history.push(Routes.toBuddyDashboard());
		};
		const navToSearch = () => {
			this.props.history.push(Routes.toBuddySearch());
		};
		const navToAccount = () => {
			this.props.history.push(Routes.toBuddyAccount());
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
				<SignUpContainer>
					<MapContainer
						navToOwner={navToOwner}
						navToDashboard={navToDashboard}
					/>
				</SignUpContainer>
				<Footer />
			</Parent>
		);
	}
}

export default withTheme(Search);
