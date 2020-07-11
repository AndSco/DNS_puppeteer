import React from "react";



const InputAndButton = props => {
  return (
    <div style={styles.container}>
      <input
        type="number"
        placeholder="enter news index"
        style={styles.input}
        onChange={e => {
          props.onIndexFunction(e.target.value);
        }}
        value={props.index}
      />
      <select
        name="news-section"
        id="section-select"
        style={styles.select}
        onChange={e => {
          props.onSelectFunction(e.target.value);
        }}
        value={props.section}
      >
        <option value="">-- Choose section --</option>
        <option value="Recent and Upcoming Events">
          Recent and Upcoming Events
        </option>
        <option value="EU Top News">EU Top News</option>
        <option value="Economic Governance">Economic Governance</option>
        <option value="Europe Direct Corner">Europe Direct Corner</option>
      </select>
      <input
        type="text"
        placeholder="copy image path"
        style={{...styles.input, flex: 3}}
        onChange={e => {
          props.onImagePathFunction(e.target.value);
        }}
        value={props.imagePath}
      />
      <button style={styles.button} onClick={props.onClickFunction}>
        ADD NEWS
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: 50,
    width: 840,
    backgroundColor: "white"
  },
  input: {
    flex: 0.5,
    paddingLeft: 15,
    borderLeft: "3px solid",
  },
  select: {
    flex: 2,
    height: 50,
    border: "none",
    borderLeft: "3px solid",
    paddingLeft: "1rem", 
    marginRight: "1rem"
  },
  button: {
    flex: 1,
    backgroundColor: "#7F8C8D",
    color: "white"
  }
};

export default InputAndButton;