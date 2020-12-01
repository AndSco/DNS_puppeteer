import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const CredentialsForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { saveEcasCredentials } = useContext(AuthContext);

  const handleChange = target => input =>
    target === "username" ? setUsername(input) : setPassword(input);

  const changeUsername = handleChange("username");
  const changePassword = handleChange("password");

  React.useEffect(() => {
    console.log(username, password);
  }, [username, password]);

  const handleSubmit = (usernameInput, passwordInput) => {
    if (!usernameInput.length || !passwordInput.length) {
      alert("Enter your ecas credentials!");
      return;
    }

    saveEcasCredentials(usernameInput, passwordInput);
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit(username, password);
      }}
      style={styles.form}
    >
      <input
        type="text"
        placeholder="ECAS Username"
        value={username}
        onChange={e => changeUsername(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="ECAS Password"
        value={password}
        onChange={e => changePassword(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        CONTINUE
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column"
  },
  input: {
    width: 300,
    padding: ".5rem 1rem",
    margin: ".6rem 0"
  },
  button: {
    height: 50,
    padding: "0 30px",
    marginTop: 30,
    backgroundColor: "#4BB3FD",
    color: "white"
  }
};
