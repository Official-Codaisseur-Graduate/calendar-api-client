import React from 'react';
import { login } from '../../actions/login';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import Typography from '@material-ui/core/Typography';

class LoginFormContainer extends React.Component {
  state = {
    email: '',
    password: ''
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  render() {
    return (
      <>
        <Typography component='h1' variant='h1' gutterBottom>
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
    error: reduxState.error
  };
};

export default connect(mapStateToProps, { login })(LoginFormContainer);
