import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

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
  const [token, setToken] = 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
