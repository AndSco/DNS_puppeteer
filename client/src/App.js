import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from './components/Navigation';
import Main from './components/Main';
import Login from "./components/Login";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const logUserIn = () => setIsLoggedIn(true);
  const logUserOut = () => setIsLoggedIn(false);

  if (!isLoggedIn) return <Login logUserIn={logUserIn} />
  return (
    <Router>
    <div className="App">
      <Navigation logUserOut={logUserOut} />
      <Main />
    </div>
    </Router>
  );
}
 

export default App;
