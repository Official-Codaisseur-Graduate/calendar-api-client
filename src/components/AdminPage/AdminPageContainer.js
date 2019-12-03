import React, { Component } from 'react';
import AdminPage from './AdminPage';
import { connect } from 'react-redux';
import ConfigFormContainer from '../Config/ConfigFormContainer';
import CalendarIdFormContainer from '../CalendarId/CalendarIdFormContainer';
import MailVerificationFormContainer from '../MailVerification/MailVerificationFormContainer';
import lscache from 'lscache';
import { logout } from '../../actions/logout';
import { fetchUsers } from '../../actions/fetchUsers';
import { changeUserRank } from '../../actions/changeUserRank';

class AdminPageContainer extends Component {
    state = {
        rank: '',
    };
    componentDidMount() {
        const user = lscache.get('user');
        if (!user) {
            return this.props.history.push('/');
        }

        this.props.fetchUsers();
    }
    onChange = event => {
        this.setState({ rank: event.target.value });
    };
    onSubmit = event => {
        event.preventDefault();
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
                <AdminPage
                    users={this.props.users}
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                />
                <ConfigFormContainer />
                <CalendarIdFormContainer />
                <MailVerificationFormContainer />
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPageContainer);
