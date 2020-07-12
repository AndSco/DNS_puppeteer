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
        size="3x"
        className="title-icon"
      />
    </div>
  );
}

const styles = {
  topPart: {
    display: "flex",
    textAlign: "left",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "5px solid #4BB3FD", 
    marginBottom: 30, 
    padding: "0 50px"

  },
  icon: {
    padding: 20,
    marginLeft: ".3em"
  }
};

export default PageHeader;