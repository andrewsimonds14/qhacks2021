import React from 'react';
import { withTheme } from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-red.css';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { MapContainer } from '../../../shared';
import Routes from '../../../router/routes';



class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

render() {
  return (
    <div>
    <h1>HELLO</h1>
      <MapContainer></MapContainer>
      </div>
  );
}

}
export default withTheme(Search);
