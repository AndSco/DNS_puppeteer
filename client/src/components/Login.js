import React, {useState} from "react";
import axios from "axios";
import Input from "./Input";

const Login = ({logUserIn}) => {
  
  const tryLogin = async (input) => {
    const url =
      process.env.NODE_ENV === "production"
        ? "/api/login"
        : "http://localhost:8081/api/login";
    
    const response = await axios.post(url, {password: input});    
    const isValid = response.data;

    if (isValid) {
      logUserIn();
    } else {
      alert("Wrong password!")
    }
  }


  return (
    <Input
      inputExplanation="Enter password to log in"
      type="password"
      functionOnSubmit={tryLogin}
      buttonText="access"
    />
  );
}



export default Login;