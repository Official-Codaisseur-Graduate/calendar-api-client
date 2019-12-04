import React from 'react';
import { connect } from 'react-redux';
import { editProfile } from '../../actions/editProfile';
import lscache from 'lscache';
import { fetchUsers } from '../../actions/fetchUsers';

class MyProfile extends React.Component {
  state = {
    name: '',
    profilePic: '',
    editView: false,
    changes: false
  };

  componentDidMount() {
    const user = lscache.get('user');
    if (user) {
      this.props.fetchUsers();
    } else {
      this.props.history.push('/');
    }
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.editProfile(this.state.name, this.state.profilePic);
    this.setState({
      name: '',
      profilePic: '',
      editView: false,
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
  loggedInUser = lscache.get('user');
  render() {
    const allUsers = this.props.users;
    console.log('allUsers', allUsers);
    const myInfo = allUsers.find(
      user => user.email === this.loggedInUser.email
    );
    console.log('myinfo', myInfo);
    const user = myInfo;

    if (user) {
      return (
        <div>
          {!this.state.editView && (
            <div>
              {this.state.changes && <p>Changes saved succesfully !</p>}
              <div>
                <img src={user.profilePic} alt='profilePic' />
              </div>
              <p>Your Name : {user.name}</p>
              {user.rank === 0 && (
                <p>Your Rank : {user.rank} - Unauthorized </p>
              )}
              {user.rank === 1 && <p>Your Rank : {user.rank} - Student </p>}
              {user.rank === 2 && <p>Your Rank : {user.rank} - Assistant </p>}
              {user.rank === 3 && <p>Your Rank : {user.rank} - Teacher </p>}
              {user.rank === 4 && <p>Your Rank : {user.rank} - Admin </p>}

              <button onClick={() => this.editMode()}>Edit your profile</button>
            </div>
          )}
          {this.state.editView && (
            <div>
              <form onSubmit={this.onSubmit}>
                <label>
                  New name:            
                  <input
                    type='text'
                    value={this.state.name}
                    name='name'
                    placeholder={user.name}
                    onChange={this.onChange}
                  />
                </label>
                <label>
                  Profile Pic:            
                  <input
                    type='text'
                    value={this.state.profilePic}
                    name='profilePic'
                    placeholder='Image link here...'
                    onChange={this.onChange}
                  />
                </label>
                <button type='submit'>Confirm</button>
              </form>
              <button onClick={() => this.backToProfile()}>
                Back to Profile
              </button>
            </div>
          )}
        </div>
      );
    } else {
      return 'Loading';
    }
  }
}

const mapStateToProps = reduxState => {
  return {
    users: reduxState.users
  };
};

const mapDispatchToProps = {
  editProfile,
  fetchUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
