import React from 'react';
import { connect } from 'react-redux';

import Validation from './Validation';
import { validateRegistration } from '../../actions/validateRegistration';
import { fetchValidationType } from '../../actions/fetchValidationType';

class ValidationContainer extends React.Component {
  state = {
    name: '',
    password: ''
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.validateRegistration(
      this.props.match.params.code,
      this.state.name,
      this.state.password
    );
    this.props.history.push('/login');
  };

  componentDidMount() {
    this.props.fetchValidationType(this.props.match.params.code);
  }

  render() {
    return (
      <div>
        <Validation
          validationType={this.props.validationType}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  validateRegistration,
  fetchValidationType
};

const mapStateToProps = reduxState => {
  return {
    validationType: reduxState.validationType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ValidationContainer);
