import React from "react";

const ActionButton = ({text, onClickFunction, isReady}) => {
  return (
    <div
      style={{
        ...styles.button,
        backgroundColor: isReady ? "rgb(172, 255, 9)" : "#4BB3FD",
        color: isReady ? "#1C2833" : "#F7F9F9"
      }}
      onClick={onClickFunction}
      className="action-button"
    >
      <h5>{text}</h5>
    </div>
  );
}

const styles = {
  button: {
    cursor: "pointer", 
    margin: "2rem", 
    padding: "0 2rem", 
    width: 300, 
    borderRadius: "50px"
  }
}

export default ActionButton;