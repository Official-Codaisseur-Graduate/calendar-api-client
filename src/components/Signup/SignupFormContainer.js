import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/signup';
import SignupForm from './SignupForm';
import Typography from '@material-ui/core/Typography';

class SignupFormContainer extends React.Component {
    state = {
        email: '',
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onSubmit = event => {
        event.preventDefault();
        this.props.signup(this.state.email);
    };

    render() {
        return (
            <SignupForm
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state}
            />
        );
    }
}

const mapDispatchToProps = {
    signup,
};

export default connect(null, mapDispatchToProps)(SignupFormContainer);
