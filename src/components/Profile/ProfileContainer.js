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
        name: this.user.name || '',
        profilePic: this.user.profilePic || '',
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
        if (!this.user) {
            this.props.history.push('/');
        }
    }
    render() {
        if (!this.user) {
            return <Redirect to="/" />;
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
            />
        );
    }
}

const mapDispatchToProps = {
    editProfile,
    fetchUsers,
};

export default connect(null, mapDispatchToProps)(ProfileContainer);
