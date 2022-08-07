import React from 'react'
import {BrowserRouter,Routes,Route,Link,useNavigate, Router} from 'react-router-dom'

export default function Welcome() {

  let navigate = useNavigate();

  return (
    <div className="wel">
        <h1 className="display-1">Welcome</h1>
        <hr className="border border-primary border-3 opacity-75"></hr>
        <button type="submit"onClick={()=>navigate("Signin")} className="btn btn-primary">Let's Start</button>
    </div>
  )
}
