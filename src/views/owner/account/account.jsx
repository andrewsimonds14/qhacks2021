import React from 'react';
import { connect } from 'react-redux';
import { NavBar, Footer } from '../../../shared/';
import { Grid } from '@material-ui/core';
import Owner from '../../../shared/Cards/owner';
import Routes from '../../../router/routes';
import {
	Parent,
	Title,
	WelcomeMessage,
	SubTitle,
	ButtonWrapper,
} from '../dashboard/dashboard.styles';
class OwnerProfile extends React.Component {
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
					<Title>{`Owner Profile`}</Title>
				</WelcomeMessage>
				<Grid container justify='center' spacing={4}>
					<Grid item key={this.props.owner.gid} xs={12} sm={6} md={4} lg={3}>
						<Owner owner={this.props.owner} />
					</Grid>
				</Grid>

				<Footer />
			</Parent>
		);
	}
}

const mapStateToProps = (state) => ({
	owner: state.reducer.userList.owners[0],
});

export default connect(mapStateToProps)(OwnerProfile);
