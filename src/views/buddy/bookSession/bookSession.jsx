import React from 'react';
import { withTheme } from 'styled-components';

import Gyms from '../../../shared/Cards/gyms'

class BookSessions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		
		return (
			<Gyms />
		);
	}
}

export default withTheme(BookSessions);
