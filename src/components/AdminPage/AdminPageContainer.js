import React, { Component } from 'react'
import AdminPage from './AdminPage'
import { connect } from 'react-redux'
import ConfigFormContainer from '../Config/ConfigFormContainer'
import CalendarIdFormContainer from '../CalendarId/CalendarIdFormContainer'
import MailVerificationFormContainer from '../MailVerification/MailVerificationFormContainer'
import lscache from 'lscache'
import { logout } from '../../actions_beta/logout'
import { fetchUsers } from '../../actions_beta/fetchUsers'
import { changeUserRank } from '../../actions_beta/changeUserRank'

class AdminPageContainer extends Component {
  componentDidMount() {
    const user = lscache.get('user')
    if(!user) {
        return this.props.history.push('/')
    }

    this.props.fetchUsers()
  }

  onSubmit = (event) => {
    event.preventDefault()
    // console.log('rank:', event.currentTarget.dataset.rank, 'user:', event.currentTarget.dataset.user_id)

    const userId = event.currentTarget.dataset.user_id
    const userRank = event.currentTarget.dataset.rank

    this.props.changeUserRank(userId, userRank)
  }

  onClickLogout = (event) => {
    this.props.logout();
    this.props.history.push('/')
  }

  render() {
    return (
      <>
        <p><button onClick={() => this.props.history.push('/')}>Go back</button></p>
        <p><button onClick={this.onClickLogout}>Logout</button></p>
        <AdminPage
          users={this.props.users}
          onSubmit={this.onSubmit}
         />
        <ConfigFormContainer/>
        <CalendarIdFormContainer />
        <MailVerificationFormContainer />
      </>
    )
  }
}

const mapDispatchToProps = {
  fetchUsers,
  logout,
  changeUserRank
}

const mapStateToProps = (reduxState) => {
  return {
    users: reduxState.users
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPageContainer)
