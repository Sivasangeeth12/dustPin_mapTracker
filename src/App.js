import logo from './logo.svg';
import './App.css';
import Authen from "./Components/Authen";
import {database} from "./firebase-config";
import Login from "./Components/pages/Login";
import Googlemap from './Components/Googlemap';
import FetchData from './Components/FetchData';
import  {Realtimedata}  from './Components/Realtimedata';
import Navigationbar from './Components/pages/NavigationBar';
function App() {
  
  return (
    <div className="App">
     {/* <FetchData/>
     <Realtimedata/>
     <Googlemap/> */}
     <Navigationbar/>
    </div>
  );
}
export default App;
