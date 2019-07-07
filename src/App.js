import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {Redirect} from 'react-router-dom';

function App() {
  return (
    <Redirect to='/transaction' />
  );
}

export default App;
