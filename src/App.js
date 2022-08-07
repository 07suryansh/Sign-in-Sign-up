import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
