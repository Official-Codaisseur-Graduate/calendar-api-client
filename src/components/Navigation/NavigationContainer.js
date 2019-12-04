import React, { Component } from 'react';
import Navigation from './Navigation';
import { connect } from 'react-redux';

import { logout } from '../../actions/logout';
import lscache from 'lscache';

class NavigationContainer extends Component {
    user = lscache.get('user');
    onClickLogout = event => {
        this.props.logout();
        this.props.history.push('/');
    };
    render() {
        return <Navigation user={this.user} logout={this.onClickLogout} />;
    }
}
const mapStateToProps = reduxState => {
    return {
        error: reduxState.error,
    };
};

const mapDispatchToProps = {
    logout,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationContainer);
