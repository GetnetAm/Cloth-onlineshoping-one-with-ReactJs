import React from 'react'
import './Css/LoginSignup.css'

function LoginSignup() {
  return (
    <div className="loginsignup">
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder='Your Name' />
          <input type='email' placeholder='Email Address' />
          <input type='password' placeholder='Password' />


        </div>

        <button>Continue</button>
        <p className='loginsignup-login'>Already you have an Account ? <span>Login</span></p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id='' />
          <p>By continuning i agree to the terms of use & privacy plicy</p>

        </div>

      </div>
    
    </div>
  )
}

export default LoginSignup
