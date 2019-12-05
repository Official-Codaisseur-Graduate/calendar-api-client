import React from 'react';
import MailVerificationForm from './MailVerificationForm';
import { connect } from 'react-redux';
import { configMailService } from '../../actions/configMailService';
import { clearMessage } from '../../actions/messages';

class MailVerificationFormContainer extends React.Component {
  state = { send_email: '', send_password: '', password: '' };

  componentDidMount() {
    this.props.clearMessage();
  }

  onSubmit = event => {
    event.preventDefault();

    this.props.configMailService(
      this.state.send_email,
      this.state.send_password,
      this.state.password
    );

    this.setState({
      send_email: '',
      send_password: '',
      password: ''
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <MailVerificationForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
        user={this.props.user}
        message={this.props.message}
      />
    );
  }
}

const mapDispatchToProps = {
  configMailService,
  clearMessage
};

const mapStateToProps = reduxState => {
  return {
    message: reduxState.message
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MailVerificationFormContainer);
