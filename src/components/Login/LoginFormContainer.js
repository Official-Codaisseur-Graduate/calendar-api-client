import React from 'react';
import { login } from '../../actions/login';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
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
            <>
                <Typography component="h1" variant="h1" gutterBottom>
                    Codaisseur Academy Calendar
                </Typography>
                <LoginForm
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    values={this.state}
                    user={this.props.user}
                    error={this.props.error}
                />
            </>
        );
    }
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.user,
        error: reduxState.error,
    };
};

export default connect(mapStateToProps, { login })(LoginFormContainer);
