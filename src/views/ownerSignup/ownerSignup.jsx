import React from 'react';
import { withTheme } from 'styled-components';

import { Parent, Title } from './ownerSignup.styles';
import flagShipImg from '../../assets/Garage-Gym.jpg';
import Routes from '../../router/routes';

class OwnerSignUpPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Parent>
				
				<div>
      <h1>Create your QuickFit Owner Account</h1>
			<h4>Please fill in this form to create an Account</h4>
      <form>
        <label>
          Name:
          <input />
        </label>
				<br/>

        <label>
          Email:
          <input />
					<br/>
        </label>
        <label>
          Password:
          <input />
					<br/>
				</label>
					<label>
          Confirm Password:
        <input />
					<br/>
        </label>
        <br/>
        <button>
          Sign Up!
        </button>
      </form>
    </div>
	




			</Parent>
		);
	}
}

export default withTheme(OwnerSignUpPage);
