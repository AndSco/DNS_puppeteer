import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const NewsCard = ({newsItem, removeNewsFromList}) => {
  const {title, link, teaser, section, imagePath} = newsItem;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <h4 style={styles.detail}>{link}</h4>
      <p style={styles.teaser}>{teaser}</p>
      <h4 style={styles.detail}>{section}</h4>
      <h4 style={styles.detail}>{imagePath.slice(0, 40)}...</h4>
      <FontAwesomeIcon icon={faTrashAlt} style={{alignSelf: "flex-end", cursor: "pointer"}} onClick={() => removeNewsFromList(newsItem)} />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    textAlign: "left",
    color: "#282c34",
    backgroundColor: "white",
    padding: "2rem",
    margin: "2rem"
  },
  title: {
    fontSize: 15,
    fontWeight: 300
  },
  detail: {
    fontSize: 11,
    fontWeight: 100
  },
  teaser: {
    fontSize: 12,
    fontWeight: 200
  }
};


export default NewsCard;