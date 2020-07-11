import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from './components/Navigation';
import Main from './components/Main';


const App = () => {
  return (
    <Router>
    <div className="App">
      <Navigation />
      <Main />
    </div>
    </Router>
  );
}
 

export default App;
