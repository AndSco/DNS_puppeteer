import React from "react";

const HtmlContainer = props => {
  return (
    <textarea style={{...styles.container, ...props.style}} rows={10} value={props.contentString} readOnly />
  );
}

const styles = {
  container: {
    width: 800,
    padding: 20,
    fontSize: 12,
    textAlign: "left"
  }
};

export default HtmlContainer;