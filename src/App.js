import './App.scss';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route  
} from "react-router-dom";
import Home from './pages/home/Home';

function App() {
  return(
    <Home/>  
)
}

export default App;
