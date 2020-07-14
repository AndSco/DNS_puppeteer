import React from "react";

const Spinner = () => {
  return (
    <div style={styles.modal}>
      <div className="spinner"></div>
    </div>  
  );
};

const styles = {
  modal: {
    width: "100vw", 
    height: "100vh", 
    position: "fixed", 
    top: 0, 
    left: 0, 
    backgroundColor: "grey", 
    opacity: .6
  }
}

export default Spinner;
