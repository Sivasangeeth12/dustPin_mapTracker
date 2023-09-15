import logo from './logo.svg';
import './App.css';
import Authen from "./Components/Authen";
import {database} from "./firebase-config";
import { useState } from 'react';
function App() {
  const[map,setMap]=useState();
  return (
    <div className="App">
      <Authen/>
       
    </div>
  );
}

export default App;
