import React from "react"
import { connect } from "react-redux"

import Message from "./Message"
import { clearMessage } from "../../actions"

class Notification extends React.Component {

  checkMessageTimeout = () => {
    const timeout = this.props.message.expires - new Date().getTime()
    if (timeout > 0) {
      setTimeout(this.checkMessageTimeout, timeout)
      return
    }
    this.props.clearMessage()
  }

  componentDidUpdate() {
    if (this.props.message.expires) {
      this.checkMessageTimeout()
    }
  }

  render() {
    if (!this.props.message.message) {
      return null
    }
    return <Message message={this.props.message} />
  }
}

const mapStateToProps = state =>
  ({ message: state.message })

const mapDispatchToProps =
  { clearMessage }

export default connect(mapStateToProps, mapDispatchToProps)(Notification)