import React, {useState} from "react";
import axios from "axios";

const Login = ({logUserIn}) => {
  const [userInput, setUserInput] = useState("");
  const handleChange = e => {
    setUserInput(e.target.value);
  }

  const tryLogin = async () => {
    const url =
      process.env.NODE_ENV === "production"
        ? "/api/login"
        : "http://localhost:8081/api/login";
    
    const response = await axios.post(url, {password: userInput});    
    const isValid = response.data;

    if (isValid) {
      logUserIn();
    } else {
      alert("Wrong password!")
    }
  }


  return (
    <div style={styles.container}>
      <h2>Enter password to log in</h2>
      <div style={{display: "flex", alignItems: "flex-end"}}>
        <input type="password" style={styles.input} value={userInput} onChange={handleChange} />
        <button style={styles.button} onClick={tryLogin}>Access</button>
      </div>  
    </div>  
  )
}

const styles = {
  container: {
    width: "100vw", 
    height: "100vh",
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "center"
  }, 
  input: {
    width: 300, 
    borderBottom: "1px solid",
    marginTop: 30, 
    padding: 6, 
    fontSize: 25
  }, 
  button: {
    height: 40, 
    padding: "0 30px", 
    marginLeft: 20
  }
}

export default Login;