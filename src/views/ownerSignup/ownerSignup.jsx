import React from 'react';
import { withTheme } from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-red.css';
import { NavBar, Footer } from '../../shared';

import {
	Parent,
	Title,
	OwnerSignUpContainer,
	SquatImage,
	OwnerSignUpFormWrapper,
	OwnerSignUpText,
} from './ownerSignup.styles';
import Squat from '../../assets/Squat.png';
import Routes from '../../router/routes';

class OwnerSignUpPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		const navToSignUp = () => {
			this.props.history.push(Routes.toSignUp());
		};
		const navToLogin = () => {
			this.props.history.push(Routes.toLogin());
		};
		const navToOwnerSignUp = () => {
			this.props.history.push(Routes.toOwnerSignUp());
		};
		const navToLanding = () => {
			this.props.history.push(Routes.toLanding());
		};
		return (
			<Parent>
				<NavBar
					default
					navToOwnerSignUp={navToOwnerSignUp}
					navToSignUp={navToSignUp}
					navToLogin={navToLogin}
					navToLanding={navToLanding}
				/>
				<Title>Become a QuickFit Host!</Title>
				<OwnerSignUpContainer>
					<SquatImage src={Squat}></SquatImage>
					<OwnerSignUpFormWrapper>
						<Formik
							initialValues={{ email: '', password: '' }}
							validate={(values) => {
								let errors = {};
								if (values.email === '') {
									errors.email = 'Email is required';
								} else if (!emailTest.test(values.email)) {
									errors.email = 'Invalid email address format';
								}
								if (values.password === '') {
									errors.password = 'Password is required';
								} else if (values.password.length < 3) {
									errors.password = 'Password must be 3 characters at minimum';
								}
								return errors;
							}}
							onSubmit={() => {
								this.props.history.push(Routes.toOwnerDashboard());
							}}
						>
							{({ touched, errors, isSubmitting }) => (
								<Form>
									<div className='form-group'>
										<OwnerSignUpText htmlFor='email'>Name</OwnerSignUpText>
										<Field
											type='name'
											name='name'
											placeholder='Enter name'
											className={`form-control ${
												touched.password && errors.password ? 'is-invalid' : ''
											}`}
										/>
									</div>

									<div className='form-group'>
										<OwnerSignUpText htmlFor='email'>Address</OwnerSignUpText>
										<Field
											type='name'
											name='name'
											placeholder='Street name'
											className={`form-control ${
												touched.password && errors.password ? 'is-invalid' : ''
											}`}
										/>
										<br />
										<Field
											type='name'
											name='name'
											placeholder='Postal Code'
											className={`form-control ${
												touched.password && errors.password ? 'is-invalid' : ''
											}`}
										/>
										<br />
										<Field
											type='name'
											name='name'
											placeholder='Province'
											className={`form-control ${
												touched.password && errors.password ? 'is-invalid' : ''
											}`}
										/>
									</div>

									<div className='form-group'>
										<OwnerSignUpText htmlFor='email'>Email</OwnerSignUpText>
										<Field
											type='email'
											name='email'
											placeholder='Enter email'
											className={`form-control ${
												touched.email && errors.email ? 'is-invalid' : ''
											}`}
										/>
										<ErrorMessage
											component='div'
											name='email'
											className='invalid-feedback'
										/>
									</div>

									<div className='form-group'>
										<OwnerSignUpText htmlFor='password'>
											Password
										</OwnerSignUpText>
										<Field
											type='password'
											name='password'
											placeholder='Enter password'
											className={`form-control ${
												touched.password && errors.password ? 'is-invalid' : ''
											}`}
										/>
										<ErrorMessage
											component='div'
											name='password'
											className='invalid-feedback'
										/>
									</div>

									<AwesomeButton
										type='primary'
										className='btn btn-primary btn-block'
										disabled={isSubmitting}
										style={{
											marginTop: '3em',
											width: '95%',
										}}
									>
										{isSubmitting ? 'Please wait...' : 'Submit'}
									</AwesomeButton>
								</Form>
							)}
						</Formik>
					</OwnerSignUpFormWrapper>
				</OwnerSignUpContainer>
				<Footer />
			</Parent>
		);
	}
}

export default withTheme(OwnerSignUpPage);
