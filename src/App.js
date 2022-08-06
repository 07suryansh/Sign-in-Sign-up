import {BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signedin from "./Components/Signedin";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Welcome from "./Components/Welcome";

function App() {
  return (
    
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/Welcome" element={<Welcome/>}/>
        <Route path="/Signedin" element={<Signedin/>}/>
      </Routes>
      </BrowserRouter>
    {/* <Welcome/> */}
    {/* <Signin/> */}
    {/* <Signup/> */}
    {/* <SignedIn/> */}
    </>
  );
}

export default App;
