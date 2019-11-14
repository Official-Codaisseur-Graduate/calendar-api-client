import React from 'react'
import { login } from '../../actions_beta/login'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
// import { Redirect } from 'react-router-dom'
// import lscache from 'lscache'

class LoginFormContainer extends React.Component {
    state = {
        email: '',
        password: ''
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state.email, this.state.password)
    }

    render() {
        // const JWT = lscache.get('JWT')
        // if(JWT) {
        //     return <Redirect to='/overview'/>
        // }

        return <LoginForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
            user = {this.props.user}
        />
    }
}

const mapStateToProps = (reduxState) => {
    // console.log('Redux state', reduxState);
    return {
      user: reduxState.user
    }
}

export default connect(mapStateToProps, {login})(LoginFormContainer);