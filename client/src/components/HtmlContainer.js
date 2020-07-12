import React from "react";

const HtmlContainer = props => {
  return (
    <textarea className="code" style={{...styles.container, ...props.style}} rows={30} value={props.contentString} readOnly />
  );
}

const styles = {
  container: {
    width: 800,
    padding: 40,
    fontSize: 12,
    textAlign: "left"
  }
};

export default HtmlContainer;