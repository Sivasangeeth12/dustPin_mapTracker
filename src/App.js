import logo from './logo.svg';
import './App.css';
import Authen from "./Components/Authen";
import {database} from "./firebase-config";
import { useState } from 'react';
import Navbar from './Components/pages/Navbar';
import Login from "./Components/pages/Login";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Login/>
    </div>
  );
}
export default App;
