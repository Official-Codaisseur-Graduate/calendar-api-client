import React, { Component } from 'react'
import AdminPage from './AdminPage'
import request from "superagent"
import { baseUrl } from "../../constants"
import { connect } from "react-redux"
import { handleResult } from "../../actions"
import ConfigFormContainer from '../Config/ConfigFormContainer'
import CalendarIdFormContainer from '../CalendarId/CalendarIdFormContainer'
import MailVerificationFormContainer from '../MailVerification/MailVerificationFormContainer'

class AdminPageContainer extends Component {

  onSubmit = (event) => {
    event.preventDefault()
    console.log('rank:', event.currentTarget.dataset.rank, 'user:', event.currentTarget.dataset.user_id)
    request.put(`${baseUrl}/userrank/${event.currentTarget.dataset.user_id}`)
      .set('Authorization', `Bearer ${this.props.user.jwt}`)
      .send({ rank: event.currentTarget.dataset.rank })
      .then(this.props.handleResult)
      .catch(error => this.props.handleResult(error.response))
  }

  componentDidMount() {
    request.get(`${baseUrl}/users`)
      .set('Authorization', `Bearer ${this.props.user.jwt}`)
      .then(this.props.handleResult)
      .catch(console.error)
  }

  render() {
    return (
      <div>
        <AdminPage
        users={this.props.users}
        onSubmit={this.onSubmit}
         />
        <ConfigFormContainer/>
        <CalendarIdFormContainer />
        <MailVerificationFormContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    users: state.users
  }
}


export default connect(mapStateToProps, { handleResult })(AdminPageContainer)
