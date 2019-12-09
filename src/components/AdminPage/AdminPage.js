import React from 'react';
import { Redirect } from 'react-router-dom';

import ConfigFormContainer from '../Config/ConfigFormContainer';
import CalendarIdFormContainer from '../CalendarId/CalendarIdFormContainer';
import MailVerificationFormContainer from '../MailVerification/MailVerificationFormContainer';
import DocumentTitle from '../DocumentTitle/DocumentTitle';

import './adminpage.css';

export default function AdminPage(props) {
  if (props.user && props.user.rank === 4) {
    return (
      <>
        <DocumentTitle title='Login' />
        <h1 className='header-setting'>App settings</h1>
        <p>
          If you setup your service account you get a client email and a private
          key. You need both, plus your own password for this website to make a
          connection with the Google Calendar API.
        </p>
        <p>
          <strong>
            You can get all the information from the .json file you got earlier.
            Copy what's between the double quotes and paste them here.
          </strong>
        </p>
        <ConfigFormContainer />
        <CalendarIdFormContainer />
        <MailVerificationFormContainer />
      </>
    );
  } else {
    return <Redirect to='/' />;
  }
}
