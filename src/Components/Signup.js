import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

export default function Signup() {

  return (
    <div className="App">
      <div className="container">
        <h1 className="heading">Sign Up</h1>
        <form action="">
        <div className='name1'>
            <input className='name' type="text" name="name" id="name" placeholder='Enter your name' required/>
        </div>
    <div className="input1">
      <input className="email" type="email" name="email" id="email-id" placeholder="Enter Email" required/>
    </div>
    <div className="input2">
      <input className="password" type="password" name="password" id="new-password" placeholder="Enter Password" required/>
    </div>
    <div className="input2">
      <input className="password" type="password" name="password" id="new-re-password" placeholder="Re-Enter Password" required/>
    </div>
   <div className="dob1">
    <input className='dob' type="date" name="" id="" placeholder="Enter date of birth" required  />
   </div>
    <button  type="submit" className="btn btn-primary">Sign Up</button>
    <button type="reset" className="btn btn-primary">Reset</button>
    </form>
      </div>
      
    </div>
  )
}
