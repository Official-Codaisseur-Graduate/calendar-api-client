import React, { Component } from 'react';
import { connect } from 'react-redux';

import lscache from 'lscache';
import { logout } from '../../actions/logout';
import { fetchUsers } from '../../actions/fetchUsers';
import { changeUserRank } from '../../actions/changeUserRank';
import UsersList from './UsersList';

class UsersListContainer extends Component {
    user = lscache.get('user');
    state = {
        rank: '',
    };
    componentDidMount() {
        if (!this.user) {
            return this.props.history.push('/');
        }

        this.props.fetchUsers();
    }
    onChange = event => {
        this.setState({ rank: event.target.value });
    };
    onSubmit = event => {
        if (!this.state.rank) {
            event.preventDefault();
        }

        console.log(
            'rank:',
            this.state.rank,
            'user:',
            event.currentTarget.dataset.user_id,
            'event',
            event.target.rank
        );

        const userId = event.currentTarget.dataset.user_id;
        const userRank = this.state.rank;

        this.props.changeUserRank(userId, userRank);
    };

    onClickLogout = event => {
        this.props.logout();
        this.props.history.push('/');
    };

    render() {
        return (
            <>
                <UsersList
                    users={this.props.users}
                    unauthorizedUsers={this.props.unauthorizedUsers}
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    currentUser={this.user}
                />{' '}
            </>
        );
    }
}

const mapDispatchToProps = {
    fetchUsers,
    logout,
    changeUserRank,
};

const mapStateToProps = reduxState => {
    return {
        users: reduxState.users,
        unauthorizedUsers: reduxState.users.reduce((users, user) => {
            if (user.rank === 0) {
                users.push(user);
            }
            return users;
        }, []),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);
