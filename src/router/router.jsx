/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
	LandingPage,
	SignUpPage,
	LoginPage,
	OwnerSignUpPage,
	BookSessions,
	BuddyDashboard,
} from '../views';

import Routes from './routes';

class RouterApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			/* hasError: false */
		};
	}

	componentDidCatch() {
		// this.setState(() => ({ hasError: true }));
	}

	// eslint-disable-next-line react/sort-comp
	renderPublicRoute(path, ComponentToRender, exact = true) {
		return (
			<Route
				exact={exact}
				path={path}
				render={(props) => <ComponentToRender {...props} />}
			/>
		);
	}

	renderNotFoundRoute(component) {
		return <Route component={component} />;
	}

	onErrorAcknowledge() {
		// this.setState({ hasError: false });
	}

	/* renderErrorRoute() {
		return (
			<Route
				render={(props) => (
					<ErrorPage
						onErrorAcknowledge={() => this.onErrorAcknowledge()}
						{...props}
					/>
				)}
			/>
		);
	} */
	render() {
		/* if (this.state.hasError) {
			return <Router>{this.renderErrorRoute()}</Router>;
		} */
		return (
			<Router>
				<Switch>
					{this.renderPublicRoute(Routes.toLanding(), LandingPage)}
					{this.renderPublicRoute(Routes.toLogin(), LoginPage)}
					{this.renderPublicRoute(Routes.toSignUp(), SignUpPage)}
					{this.renderPublicRoute(Routes.toOwnerSignUp(), OwnerSignUpPage)}
					{this.renderPublicRoute(Routes.toBooking(), BookSessions)}
					{this.renderPublicRoute(Routes.toBuddyDashboard(), BuddyDashboard)}
				</Switch>
			</Router>
		);
	}
}

export default RouterApp;
