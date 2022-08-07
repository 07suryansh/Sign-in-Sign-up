import {BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";

function App() {
  
  return (
    
    <>
    
       <BrowserRouter> 

      <Signin/>
      <Routes>
      <Route path="/Signin" element={<Signin/>}/>
        <Route path="/Signup" element={<Signup/>}/>
       
      </Routes> 
   
      
      {/* <Signup/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
