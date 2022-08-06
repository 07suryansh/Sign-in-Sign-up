import React from 'react'

export default function SIgnin() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="heading1">Sign In</h1>
        <form action="">
    <div className="input1">
      <input className="email" type="text" name="email" id="email" placeholder="Enter Email" required/>
    </div>
    <div className="input2">
      <input className="password" type="password" name="password" id="password" placeholder="EnterPassword" required/>
    </div>
    <div className="forgot">
    <a href="#">Forgot Password?</a>
    </div>
    <button type="submit" className="btn btn-primary">Sign In</button>
    <div className="forgot">
    <a href="#">Create Account</a>
    </div>
    </form>
      </div>
      
    </div>
  )
}
