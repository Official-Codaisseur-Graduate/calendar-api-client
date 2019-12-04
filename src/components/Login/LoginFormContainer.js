import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { login } from '../../actions/login';
import LoginForm from './LoginForm';
import lscache from 'lscache';

class LoginFormContainer extends React.Component {
    user = lscache.get('user');

    state = {
        email: '',
        password: '',
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onSubmit = event => {
        event.preventDefault();
        this.props.login(this.state.email, this.state.password);
    };

    render() {
        if (this.user) {
            return <Redirect to="/" />;
        }
        return (
            <LoginForm
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state}
                error={this.props.error}
            />
        );
    }
}

const mapStateToProps = reduxState => {
    return {
        error: reduxState.error,
    };
};

export default connect(mapStateToProps, { login })(LoginFormContainer);
