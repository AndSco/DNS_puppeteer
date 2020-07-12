import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileWord, faCode } from "@fortawesome/free-solid-svg-icons";



const ActionButton = ({text, onClickFunction, isReady, icon}) => {
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
      <h5>
        <FontAwesomeIcon icon={icon === "word" ? faFileWord : faCode} style={styles.icon} />
        {text}
      </h5>
    </div>
  );
}

const styles = {
  button: {
    cursor: "pointer", 
    margin: "2rem", 
    padding: "0 2rem", 
    width: 330, 
    borderRadius: "50px"
  }, 
  icon: {
    marginRight: 10, 
    opacity: .7, 
    fontSize: 23
  }
}

export default ActionButton;