import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Signedin() {

  let navigate = useNavigate();

  return (
    <div className="wel">
        <h1 className="display-1">Successfully Signed In</h1>
        <hr className="border border-primary border-3 opacity-75"></hr>
        <button type="submit" onClick={()=>navigate("/")} className="btn btn-primary">Back to Home</button>
    </div>
  )
}
