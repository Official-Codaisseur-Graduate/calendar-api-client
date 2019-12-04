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
                    currentUser={this.user}
                />
                {this.user && this.user.rank === 4 && (
                    <>
                        <h2 className="header-settings">App settings</h2>
                        <p>
                            If you setup your service account you get a client
                            email and a private key. You need both, plus your
                            own password for this website to make a connection
                            with the Google Calendar API.
                        </p>
                        <p>
                            <strong>
                                You can get all the information from the .json
                                file you got earlier. Copy what's between the
                                double qoutes and paste them here.
                            </strong>
                        </p>
                        <ConfigFormContainer />
                        <CalendarIdFormContainer />
                        <MailVerificationFormContainer />
                    </>
                )}
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
