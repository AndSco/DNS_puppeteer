import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Login from "./components/Login";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logUserIn = () => setIsLoggedIn(true);
  const logUserOut = () => setIsLoggedIn(false);

  if (!isLoggedIn) return <Login logUserIn={logUserIn} />;
  return (
    <Router>
      <AuthContextProvider>
        <div className="App">
          <Navigation logUserOut={logUserOut} />
          <Main />
        </div>
      </AuthContextProvider>
    </Router>
  );
};

export default App;
