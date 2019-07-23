import React from 'react';
import ReactDOM from "react-dom";
import { Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Food from './Components/Food';
import Login from "./Components/Login";
import logo from './logo.svg';
import './App.css';
import { useLocalStorage } from './Hooks/useLocalStorage';

const PrivateRoute =({ component: Component, ...rest }) => (
  <Route {...rest}
   render={props =>
    localStorage.getItem("token") ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  }
 />
);

function App() {
  const [token, setToken] = useLocalStorage('token')
  return (
    <div className="App">
      <Route exact path="/" render={(props) => <Login {...props} setToken={setToken} token={token} />}/>
      <PrivateRoute exact path="/food" component={Food} />
    </div>
  );
}

export default App;
