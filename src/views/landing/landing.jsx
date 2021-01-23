import React from 'react';
import { Link } from 'react-router-dom';
import { withTheme } from 'styled-components';

import { NavBar } from '../../shared';

import {
    Parent,
} from './landing.styles';


import Routes from '../../router/routes';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Parent>
                <NavBar />
                <div>Hey</div>
            </Parent>


        )
    }
};

export default withTheme(HomeScreen);

