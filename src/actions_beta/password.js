import request from "superagent"
import { baseUrl } from "../constants"
import { handleResult } from '../actions'

export const forgotPassword = (email) => (dispatch) => {
  console.log("EMAIL FROM FORGOT PASWORD", email)
  request
    .post(`${baseUrl}/forgot-password`)
    .send({
      email: email
    })
    .then(response => {
      console.log("FORGOT PASSWORD", response)
      dispatch(handleResult(response))
    })
    .catch(console.error)
}



export const resetPassword = (validation_code, email, new_password) => (dispatch) => {
  // console.log("RESETPASS", email, validation_code, new_password)
  request
    .post(`${baseUrl}/reset-password`)
    .set('validation', validation_code)
    .send({
      email: email,
      new_password: new_password
    })
    .then(response => {
      console.log("RESET PASSWORD", response)
      dispatch(handleResult(response))
    })
    .catch(console.error)
}

