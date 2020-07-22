import React, {useState} from "react";
import { uploadFile, copyString } from "../utils";
import axios from "axios";
import ScreenView from "../components/ScreenView";
import Paragraph from "../components/Paragraph";
import PageHeader from "../components/PageHeader";
import Spinner from "../components/Spinner";


const LanguageOptions = ({changeLanguage, selectedLanguage}) => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          ...styles.flagContainer,
          opacity: selectedLanguage === "eng" ? 1 : 0.6
        }}
        onClick={() => changeLanguage("eng")}
      >
        <span role="img" aria-label="english">🇬🇧</span>
      </div>
      <div
        style={{
          ...styles.flagContainer,
          opacity: selectedLanguage === "mlt" ? 1 : 0.6
        }}
        onClick={() => changeLanguage("mlt")}
      >
        <span role="img" aria-label="maltese">🇲🇹</span>
      </div>
    </div>
  );
}

const TextExtractorPage = () => {
  const [imagePath, setImagePath] = useState("");
  const [extractedText, setExtractedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState("eng");
  const [hasCopiedText, setHasCopiedText] = useState(false);
  const changeLanguage = language => setLanguage(language);
 

  const onFileChange = async (e) => {
    try {
      const path = await uploadFile(e);
      setImagePath(path);
    } catch(err) {
      throw err;
    }
  };

  const onFileSubmit = async () => {
    if (imagePath === "") {
      return alert("Upload an image first!");
      
    };
    setIsLoading(true);
    const url =
      process.env.NODE_ENV === "production"
        ? "/api/textExtractor"
        : "http://localhost:8081/api/textExtractor";

    const {data: extractedText} = await axios.post(url, {filePath: imagePath, language: language});
    setExtractedText(extractedText);
    setIsLoading(false);    
  }

  if (isLoading) return <Spinner />


  return (
    <ScreenView>
      <PageHeader title="Text Extractor" />
      <Paragraph text="Choose the language of the article, then upload its picture to extract its text. To reduce errors to a minimum, insert pictures of each column at a time." />
      <LanguageOptions changeLanguage={changeLanguage} selectedLanguage={language} />
      <div style={styles.formContainer}>
        <input type="file" onChange={onFileChange} style={styles.input} />
        <button style={{...styles.button, backgroundColor: imagePath !== "" ? "rgb(75, 179, 253)" : "lightgrey"}} onClick={onFileSubmit}>
          Extract
        </button>
      </div>

      {extractedText.length > 0 && (
        <>
        <textarea
          cols={70}
          rows={30}
          style={styles.textarea}
          value={extractedText}
          readOnly
        />
        <button
          style={{
            ...styles.button,
            backgroundColor: "#ffe802",
            height: 40,
            width: 200,
            color: "black"
          }}
          onClick={() => {
            if (hasCopiedText) return;
            copyString(extractedText);
            setHasCopiedText(true);
          }}
        >
          {!hasCopiedText ? "COPY" : "TEXT COPIED TO CLIPBOARD"}
        </button>
        </>
      )}
    </ScreenView>
  );
}

const styles = {
  formContainer: {
    display: "flex",
    marginTop: "2rem"
  },
  input: {
    padding: "1rem",
    border: "1px solid lightgrey",
    backgroundColor: "#e8e7e8"
  },
  button: {
    color: "white",
    textTransform: "uppercase",
    padding: "0 1rem"
  },
  textarea: {
    marginTop: "2rem",
    padding: "1rem"
  },
  flagContainer: {
    padding: "0 1rem",
    fontSize: 30,
    cursor: "pointer"
  }
};

export default TextExtractorPage;