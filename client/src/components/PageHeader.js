import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

const PageHeader = props => {
  return (
    <div style={styles.topPart}>
      <h2>{props.title.toUpperCase()}</h2>
      <FontAwesomeIcon
        icon={props.dns ? faNewspaper : faEnvelopeOpenText}
        style={styles.icon}
        size="2x"
      />
    </div>
  );
}

const styles = {
  topPart: {
    display: "flex",
    // flexDirection: "column",
    textAlign: "left",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    marginTop: 30
  },
  icon: {
    padding: 20,
    border: "2px solid white",
    borderRadius: "50%",
    width: "20px", 
    height: "20px",
    marginLeft: ".4em"
  }
};

export default PageHeader;