import React from 'react';
import { withTheme } from 'styled-components';
import 'react-awesome-button/dist/themes/theme-red.css';
import { MapContainer } from '../../../shared';
import Routes from '../../../router/routes';
import {
	SignUpContainer,
} from './search.styles';



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
  return (


<div>
				<SignUpContainer>
        <MapContainer 
      navToOwner={navToOwner}
      navToDashboard={navToDashboard}
      />
				</SignUpContainer>
			</div>
		);
	}
}

export default withTheme(Search);
