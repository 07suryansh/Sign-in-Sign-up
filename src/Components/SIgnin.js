import React from 'react'
import {Link,useNavigate} from 'react-router-dom'


export default function Signin() {
let navigate=useNavigate()
  return (
    
    <div className="App">
      <div className="container">
        <h1 className="heading1">Sign In</h1>
        <form action="" onSubmit={()=>navigate("Signedin")} >
    <div className="input1">
      <input className="email" type="email" name="email" id="email" placeholder="Enter Email" required/>
    </div>
    <div className="input2">
      <input className="password" type="password" name="password" id="password" placeholder="EnterPassword" required/>
    </div>
    <div className="forgot">
    <a href="">Forgot Password?</a>
    </div>
    <button type="submit"  className="btn btn-primary">Sign In</button>
    <div className="forgot">
    <nav>
    <Link to="/Signup">Create Account</Link>
    </nav>
    </div>
    </form>
      </div>
      
    </div>
    
  )
}
