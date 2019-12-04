import React from 'react';
import { connect } from 'react-redux';
import { editProfile } from '../../actions/editProfile';
import lscache from 'lscache';
import { fetchUsers } from '../../actions/fetchUsers';
import Profile from './Profile';
import { Redirect } from 'react-router-dom';

class ProfileContainer extends React.Component {
    user = lscache.get('user');

    state = {
        name: '',
        profilePic: '',
        editView: false,
        changes: false,
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onSubmit = event => {
        event.preventDefault();
        this.props.editProfile(this.state.name, this.state.profilePic);
        this.setState({
            name: '',
            profilePic: '',
            editView: false,
            changes: true,
        });
    };

    editMode = () => {
        this.setState({
            editView: true,
        });
    };

    backToProfile = () => {
        this.setState({
            editView: false,
            changes: false,
        });
    };

    componentDidMount() {
        if (this.user) {
            this.props.fetchUsers();
        } else {
            this.props.history.push('/');
        }
    }
    render() {
        if (!this.user) {
            return <Redirect to="/" />;
        }
        const findUser = this.props.users.find(
            user => user.email === this.user.email
        );

        const user = findUser;
        console.log(findUser);
        return (
            <Profile
                user={user}
                editView={this.state.editView}
                changes={this.state.changes}
                name={this.state.name}
                profilePic={this.state.profilePic}
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                backToProfile={this.backToProfile}
                editMode={this.editMode}
            />
        );
    }
}

const mapStateToProps = reduxState => {
    return {
        users: reduxState.users,
    };
};

const mapDispatchToProps = {
    editProfile,
    fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
