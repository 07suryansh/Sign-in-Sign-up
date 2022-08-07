import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Welcome from "./Components/Welcome"
import Signedin from "./Components/Signedin"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/Signedin/Welcome" element={<Welcome />} />
          <Route path="/Signin/Signedin" element={<Signedin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
