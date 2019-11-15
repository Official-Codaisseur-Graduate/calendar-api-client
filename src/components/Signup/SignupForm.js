import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

export default class SignupForm extends React.Component {
  
  render(props) {
    return <>
     
      <form onSubmit={this.props.onSubmit}>
        <h2>Sign up</h2>
        <p>
          <label>Email:</label><br/>
          <input
            type='text'
            value={this.props.email}
            name='email'
            placeholder='enter email'
            onChange={this.props.onChange}
          />
        </p>
          <Button variant="contained" color="primary" type='submit'> Submit</Button>
          <div><br></br>
            <Button variant="contained" color="primary" type='submit'>
              <Link to={'/'}>Go back</Link>
            </Button>
          </div>
      </form>
    </>
  }
}