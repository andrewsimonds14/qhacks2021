import React from 'react';
import {connect} from 'react-redux';
import { NavBar, Footer } from '../../../shared/';
import { Grid } from '@material-ui/core';
import Buddy from '../../../shared/Cards/buddy';
import Routes from '../../../router/routes';
import {
	Parent,
	Title,
	WelcomeMessage,
	SubTitle,
	ButtonWrapper,
} from '../dashboard/dashboard.styles';
class BuddyProfile extends React.Component {
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
					<Title>{`Profile`}</Title>
				</WelcomeMessage>
				<Grid container justify="center" spacing={4}>
                    <Grid item key={this.props.buddy.uid} xs={12} sm={6} md={4} lg={3}>
                        <Buddy buddy={this.props.buddy} />
                    </Grid>
                </Grid>

				<Footer />
			</Parent>
		);
	}
}

const mapStateToProps = (state) => ({
	buddy: state.reducer.userList.buddies[0]
});

export default connect(mapStateToProps)(BuddyProfile);
