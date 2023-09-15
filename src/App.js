import logo from './logo.svg';
import './App.css';
import Authen from "./Components/Authen";
import {database} from "./firebase-config";
import { useState } from 'react';
import Navbar from './Components/pages/Navbar';
function App() {
  const[map,setMap]=useState();
  return (
    <div className="App">
      <Authen/>
      <Navbar/>
    </div>
  );
}

export default App;
