import React, { useState } from 'react'
import "./RegistrationForm.css"

const RegistrationForm = () => {

  let [account, setAccount] = useState({
    username : "",
    email : "",
    password : "",
  });

  let handleRegistration = (event) => {
    let fieldset = event.target.name;
    let fieldvalue = event.target.value;
    setAccount((currentAccount) => {
      currentAccount[fieldset] = fieldvalue;
      return {...currentAccount};
    });
  };

  let registerAccount = () => {
    let regAccount = {
      username : account.username,
      email : account.email,
      password : account.password
    }

    console.log(regAccount);
  };

  let formdefault = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <h2>Create Your Account</h2>
      <form className='registrationForm' onClick={formdefault}>
        <label htmlFor="username">Enter Username</label>
        <input type="text" id='username' name='username' value={account.username} onChange={handleRegistration} />
        <label htmlFor="email">Enter Email</label>
        <input type="text" id='email' name='email' value={account.email} onChange={handleRegistration}/>
        <label htmlFor="password">Enter Password</label>
        <input type="password" id='password' name='password' value={account.password} onChange={handleRegistration}/>

        <button onClick={registerAccount} className='btn'>Register</button>
      </form>
    </div>
  )
}

export default RegistrationForm
