import logo from './logo.svg';
import './App.css';
import Authen from "./Components/Authen";
import {database} from "./firebase-config";
import Login from "./Components/pages/Login";
import Googlemap from './Components/Googlemap';
import FetchData from './Components/FetchData';
import  {Realtimedata}  from './Components/Realtimedata';
import Navigationbar from './Components/pages/NavigationBar';
import {res} from "./Components/FetchData"
import { Routes,Route } from 'react-router-dom';
import DashBoard from './Components/pages/DashBoard';
function App() {
  return (
    <div className="App">
     {/* <FetchData/>
     <Realtimedata/>
     <Googlemap/>  */}
    <Navigationbar/>
     {/* <FetchData/>  */}
     <Routes>
      <Route path='/main' Component={DashBoard}></Route>
     </Routes>
    </div>
  );
}
export default App;
