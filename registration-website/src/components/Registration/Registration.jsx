import React, { useState } from 'react'
import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm'
import "./Registration.css"

const Registration = () => {

  let [page, setpage] = useState(false);

  let loginAccount = () => {
    setpage(false);
    console.log(page);
  }
  let registerAccount = () => {
    setpage(true);
    console.log(page);
  }

  return (
    <>
      <h1>Registration and Login</h1>

      <div className='boundry'>
        <div className='main'>
          <div className='btn-div'>
            <button onClick={loginAccount}>Login</button>
            <button onClick={registerAccount}>Register</button>
          </div>
          <div>
            {
              page ? <RegistrationForm /> : <LoginForm />

            }
          </div>
        </div>
      </div>

    </>
  )
}

export default Registration
