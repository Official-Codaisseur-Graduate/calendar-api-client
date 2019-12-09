import React from 'react';
import { connect } from 'react-redux';

import ConfigForm from './ConfigForm';
import { GoogleCalendarApiConfig } from '../../actions/GoogleCalendarApiConfig';
import { clearMessage } from '../../actions/messages';

class ConfigFormContainer extends React.Component {
  state = {
    client_email: '',
    private_key: '',
    password: ''
  };

  componentDidMount() {
    this.props.clearMessage();
  }

  onSubmit = event => {
    event.preventDefault();

    this.props.GoogleCalendarApiConfig(
      this.state.client_email,
      this.state.private_key,
      this.state.password
    );

    this.setState({
      client_email: '',
      private_key: '',
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
      <ConfigForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
        user={this.props.user}
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

const mapDispatchToProps = {
  GoogleCalendarApiConfig,
  clearMessage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigFormContainer);
