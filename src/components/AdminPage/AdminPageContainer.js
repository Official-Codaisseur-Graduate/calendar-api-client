import React, { Component } from 'react';
import { connect } from 'react-redux';
import lscache from 'lscache';
import { Button } from 'react-bootstrap';
import ConfigFormContainer from '../Config/ConfigFormContainer';
import CalendarIdFormContainer from '../CalendarId/CalendarIdFormContainer';
import MailVerificationFormContainer from '../MailVerification/MailVerificationFormContainer';
import DocumentTitle from '../DocumentTitle/DocumentTitle';
import { Redirect } from 'react-router-dom';
import './adminpage.css';

class AdminPageContainer extends Component {
  user = lscache.get('user');
  state = {
    form: null
  };
  changeForms(formName) {
    this.setState({ form: formName });
  }
  render() {
    if (this.user && this.user.rank === 4) {
      return (
        <>
          <DocumentTitle title='App Settings' />
          <h2 className='header-settings'>App settings</h2>
          <p>
            If you setup your service account you get a client email and a
            private key. You need both, plus your own password for this website
            to make a connection with the Google Calendar API.
          </p>
          <p>
            <strong>
              You can get all the information from the .json file you got
              earlier. Copy what's between the double quotes and paste them
              here.
            </strong>
          </p>
          <nav className='forms-nav'>
            <Button onClick={() => this.changeForms(1)} variant='danger'>
              Calendar API
            </Button>
            <Button onClick={() => this.changeForms(2)} variant='danger'>
              Calendar ID
            </Button>
            <Button onClick={() => this.changeForms(3)} variant='danger'>
              Mail verification
            </Button>
          </nav>
          {this.state.form === 1 && <ConfigFormContainer />}
          {this.state.form === 2 && <CalendarIdFormContainer />}
          {this.state.form === 3 && <MailVerificationFormContainer />}
        </>
      );
    } else {
      return <Redirect to='/' />;
    }
  }
}
const mapDispatchToProps = {};

const mapStateToProps = reduxState => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPageContainer);
