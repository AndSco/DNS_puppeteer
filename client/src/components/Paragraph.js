import React from "react";

const Paragraph = ({text}) => {
  return (
    <div style={styles.container}>
      <p className="code">{text}</p>
    </div>
  )
}

const styles = {
  container: {
    width: "60%", 
    color: "#1E2019", 
    fontSize: 14, 
  }
}

export default Paragraph;