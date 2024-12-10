import React, { useState } from 'react'
import "./RegistrationForm.css"

const LoginForm = () => {

  let [account, setAccount] = useState({
    username: "",
    password: ""
  })

  let handleRegistration = (event) => {
    let fieldset = event.target.name;
    let fieldvalue = event.target.value;

    setAccount((currentAccount) => {
      currentAccount[fieldset] = fieldvalue
      return { ...currentAccount };
    })
  }

  let loginAccount = () => {
    let loginAccount = {
      username: account.username,
      password: account.password
    }

    console.log(loginAccount);
  }

  let formdefault = (event) => {
    event.preventDefault();
    account = {
      username: "",
      password: ""
    }
  }

  return (
    <div>
      <p>Login Your Account</p>
      <form className='registrationForm' onClick={formdefault}>
        <label htmlFor='username'>Enter Username</label>
        <input text='text' id='username' name='username' value={account.username} onChange={handleRegistration} />
        <label htmlFor='password'>Enter Password</label>
        <input type='password' is='password' name='password' value={account.password} onChange={handleRegistration} />

        <button className="btn" onClick={loginAccount} >Login</button>
      </form>
    </div>
  )
}

export default LoginForm
