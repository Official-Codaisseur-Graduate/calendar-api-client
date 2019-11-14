import React, { Component } from 'react'
import AdminPage from './AdminPage'
import request from "superagent"
import { baseUrl } from "../../constants"
import { connect } from "react-redux"
import { handleResult } from "../../actions"
import ConfigFormContainer from '../Config/ConfigFormContainer'
import CalendarIdFormContainer from '../CalendarId/CalendarIdFormContainer'
import MailVerificationFormContainer from '../MailVerification/MailVerificationFormContainer'
import lscache from 'lscache'
import { logout } from '../../actions_beta/logout'

class AdminPageContainer extends Component {

  componentDidMount() {
    const user = lscache.get('user')
    if(!user) {
        return this.props.history.push('/')
    }
    request.get(`${baseUrl}/users`)
      .set('Authorization', `Bearer ${user.jwt}`)
      .then(this.props.handleResult)
      .catch(console.error)
  }

  onSubmit = (event) => {
    event.preventDefault()
    
    const user = lscache.get('user')

    console.log('rank:', event.currentTarget.dataset.rank, 'user:', event.currentTarget.dataset.user_id)

    request.put(`${baseUrl}/userrank/${event.currentTarget.dataset.user_id}`)
      .set('Authorization', `Bearer ${user.jwt}`)
      .send({ rank: event.currentTarget.dataset.rank })
      .then(this.props.handleResult)
      .catch(error => this.props.handleResult(error.response))
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
  handleResult,
  logout
}

const mapStateToProps = (reduxState) => {
  return {
    user: reduxState.user,
    users: reduxState.users
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPageContainer)
