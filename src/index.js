import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
}

const activeStyles = {
  background: "#BAD9E8",
  color: "E8E6A2"
}

function NavBar(){
  return (
    <div>
      <NavLink to="/" exact style={linkStyles} activeStyle={{background: "darkblue",}} >Home</NavLink>
      <NavLink to="/about" exact style={linkStyles} activeStyle={{background: "darkblue",}} >About</NavLink>
      <NavLink to="/login" exact style={linkStyles} activeStyle={{background: "darkblue",}} >Login</NavLink>
      <NavLink to="/signup" exact style={linkStyles} activeStyle={{background: "darkblue",}} >Signup</NavLink>
    </div>

  )
}

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function About(){
  return(
    <div>
      <h1>This is my about component!</h1>
    </div>
  )
}

function Login() {
  return(
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

function Signup() {
  return (
    <div>
      <div>
        <input type="text" name="name" placeholder="Name" />
      </div>
      <div>
        <input type="text" name="username" placeholder="Username" />
      </div>
      <input type="button" name="buttonything" value="Buttonize-it" />
    </div>
  )
}
function App() {
 return (
   <div>
     <NavBar />
     <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
   </div>
   )
  }

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
document.getElementById("root")
);
