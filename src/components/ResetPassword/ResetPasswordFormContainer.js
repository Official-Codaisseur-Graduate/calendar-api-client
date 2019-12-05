import React from 'react';
import { connect } from 'react-redux';
import ResetPasswordForm from './ResetPasswordForm';
import { resetPassword } from '../../actions/password';
import { clearMessage } from '../../actions/messages';

class ResetPasswordFormContainer extends React.Component {
    state = {
        new_password: '',
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onSubmit = event => {
        event.preventDefault();
        this.props.resetPassword(
            this.props.match.params.code,
            this.props.match.params.email,
            this.state.new_password
        );
        setTimeout(() => {
            this.props.history.push('/login');
        }, 3000);

        this.setState({
            new_password: '',
        });
    };

    componentDidMount() {
        this.props.clearMessage();
    }

    render() {
        return (
            <ResetPasswordForm
                onChange={this.onChange}
                values={this.state}
                onSubmit={this.onSubmit}
                message={this.props.message}
            />
        );
    }
}

const mapStateToProps = reduxState => {
    return {
        message: reduxState.message,
    };
};

export default connect(mapStateToProps, { resetPassword, clearMessage })(
    ResetPasswordFormContainer
);
