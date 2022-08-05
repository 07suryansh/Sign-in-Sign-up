import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="heading">Sign In</h1>
{/* 
      <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div> */}
    <div className="input1">
      <input className="email" type="text" name="email" id="email" placeholder="Email"/>
    </div>
    <div className="input2">
      <input className="password" type="password" name="password" id="password" placeholder="Password"/>
    </div>
    <div className="forgot">
    <a href="#">Forgot Password?</a>
    </div>
    <button type="button" className="btn btn-primary">Sign In</button>
      </div>
      
    </div>
  );
}

export default App;
