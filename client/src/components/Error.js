import React from "react";

const Error = errorMessage => <h3 style={styles.error}>{errorMessage}</h3>;

const styles = {
  error: {
    color: "red",
    fontWeight: "bold",
    alignSelf: "center"
  }
};

export default Error;
