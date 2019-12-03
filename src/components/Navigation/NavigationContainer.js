import React, { Component } from 'react';
import Navigation from './Navigation';

import lscache from 'lscache';

export default class NavigationContainer extends Component {
    user = lscache.get('user');

    render() {
        return <Navigation user={this.user} />;
    }
}
