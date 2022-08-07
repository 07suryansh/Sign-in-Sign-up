import {BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";

function App() {
  
  return (
    
    <>
       <BrowserRouter> 
      <Routes>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Signin/Signup" element={<Signup/>}/>
      </Routes> 
   
      <Signin/>
      </BrowserRouter>
    </>
  );
}

export default App;
