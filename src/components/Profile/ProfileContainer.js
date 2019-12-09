import lscache from 'lscache';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Profile from './Profile';
import { editProfile } from '../../actions/editProfile';
import { fetchUsers } from '../../actions/fetchUsers';
import { clearMessage } from '../../actions/messages';

class ProfileContainer extends React.Component {
  user = lscache.get('user');

  state = {
    name: '',
    profilePic: '',
    editView: false,
    changes: false
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.editProfile(this.state.name, this.state.profilePic);
    this.setState({
      changes: true
    });
  };

  editMode = () => {
    this.setState({
      editView: true
    });
  };

  backToProfile = () => {
    this.setState({
      editView: false,
      changes: false
    });
  };

  componentDidMount() {
    this.props.clearMessage();
    if (!this.user) {
      this.props.history.push('/');
    }
  }

  render() {
    if (!this.user) {
      return <Redirect to='/' />;
    }

    return (
      <Profile
        user={this.user}
        editView={this.state.editView}
        changes={this.state.changes}
        name={this.state.name}
        profilePic={this.state.profilePic}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        backToProfile={this.backToProfile}
        editMode={this.editMode}
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
  editProfile,
  fetchUsers,
  clearMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
