import React from "react";
import { Link } from "react-router-dom";

const Navigation = props => {
  console.log(props);
  return (
    <div style={styles.navContainer} id="navbar">
      <div style={styles.logoContainer}>
        <h3 style={styles.logo}>ECRep Tools</h3>
      </div>
      <div style={styles.linksContainer}>
        <ul style={styles.links}>
          <li>
            <Link to="/dns">
              DNS GENERATOR
            </Link>  
          </li>
          <li>
            <Link to="/newsletter">
              NEWSLETTER AUTOMATOR
            </Link>
          </li>
        </ul>
      </div>
    </div>   
  );
}

const styles = {
  navContainer: {
    height: "8vh",
    maxWidth: "100vw",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: 40,
    paddingRight: 40
  },
  logoContainer: {
    display: "flex",
    alignItems: "center"
  },
  logo: {
    fontWeight: "bold"
  },
  linksContainer: {
    height: "100%",
    width: "35%",
    maxWidth: 400,
    display: "flex",
    alignItems: "center"
  },
  links: {
    listStyle: "none",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    fontSize: 14,
    fontWeight: "bold",
    color: "#282c34"
  }
};

export default Navigation;