import React, {useState} from "react";

const Input = ({inputExplanation, type, functionOnSubmit, buttonText}) => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = e => {
    setUserInput(e.target.value);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{inputExplanation}</h2>
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <input
          type={type}
          style={styles.input}
          value={userInput}
          onChange={handleInputChange}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              functionOnSubmit(userInput);
            }
          }}
        />

        <button style={styles.button} onClick={() => functionOnSubmit(userInput)}>
          {buttonText.toUpperCase()}
        </button>
      </div>
    </div>
  );
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
  title: {
    width: 900, 
    marginBottom: 40,
    textAlign: "center"
  },
  input: {
    width: 300,
    borderBottom: "1px solid",
    marginTop: 30,
    padding: 6,
    fontSize: 25
  },
  button: {
    height: 50,
    padding: "0 30px",
    marginLeft: 20,
    backgroundColor: "#4BB3FD",
    color: "white"
  }
};

export default Input;