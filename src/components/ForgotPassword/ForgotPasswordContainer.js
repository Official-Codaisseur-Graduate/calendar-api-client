import React from 'react';
import { connect } from 'react-redux';

import ForgotPassword from './ForgotPassword';
import { forgotPassword } from '../../actions/password';
import { clearMessage } from '../../actions/messages';

class ForgotPasswordContainer extends React.Component {
  state = {
    email: ''
  };

  componentDidMount() {
    this.props.clearMessage();
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.forgotPassword(this.state.email);
  };

  cancel = event => {
    event.preventDefault();
    this.props.history.push('/');
  };

  render() {
    return (
      <ForgotPassword
        onChange={this.onChange}
        values={this.state}
        onSubmit={this.onSubmit}
        cancel={this.cancel}
        message={this.props.message}
      />
    );
  }
}
const mapStateToProps = reduxState => {
  return {
    message: reduxState.message
  };
};

export default connect(mapStateToProps, { forgotPassword, clearMessage })(
  ForgotPasswordContainer
);
