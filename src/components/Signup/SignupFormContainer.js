import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/signup';
import SignupForm from './SignupForm';
import { clearMessage } from '../../actions/messages';

class SignupFormContainer extends React.Component {
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
    this.props.signup(this.state.email);
  };

  render() {
    return (
      <SignupForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
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

export default connect(mapStateToProps, { signup, clearMessage })(
  SignupFormContainer
);
