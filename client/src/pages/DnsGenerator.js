import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileWord } from "@fortawesome/free-solid-svg-icons";
import HtmlContainer from "../components/HtmlContainer";
import PageHeader from "../components/PageHeader";
import Number from "../components/Number";

function DnsGenerator() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [htmlContent, setHtmlContent] = useState(null);
  const [copied, setCopied] = useState(false);

  const reset = () => {
    setLoaded(false);
    setHtmlContent(null);
    setCopied(false);
  };


  const onChangeHandler = e => {
    const fileToUpload = e.target.files[0];
    if (
      fileToUpload.name !== "DPR & DNS.html" &&
      fileToUpload.name !== "DPR & DNS.htm"
    ) {
      alert(
        "This is not the right file! It should be named 'DPR & DNS.html' or 'DPR & DNS.htm'"
      );
      return;
    }
    setSelectedFile(fileToUpload);
  };


  const onUploadHandler = () => {
    const uploadUrl =
      process.env.NODE_ENV === "production"
        ? "/api/dns/upload"
        : "http://localhost:8081/api/dns/upload";

    if (!selectedFile) {
      alert("Select a file first");
      return;
    }
    setLoaded(true);
    const data = new FormData();
    data.append("file", selectedFile);
    axios.post(uploadUrl, data).then(res => {
      console.log(res.statusText);
    });
  };

  const onHtmlHandler = () => {
    if (!selectedFile) {
      alert("Select a file first");
      return;
    }
    const data = new FormData();
    data.append("file", selectedFile);
    const htmlUrl =
      process.env.NODE_ENV === "production"
        ? "/api/dns/createHtml"
        : "http://localhost:8081/api/dns/createHtml";
    axios
      .post(htmlUrl, data)
      .then(res => setHtmlContent(res.data))
      .catch(err => console.log(err));
  };


  const onCopyHtml = () => {
    navigator.clipboard.writeText(htmlContent);
    setCopied(true);
    setHtmlContent(null);
  };


  // How to trigger download from frontend using express res.download in the backend
  const onDownloadHandler = () => {
    const downloadUrl =
      process.env.NODE_ENV === "production"
        ? "/api/dns/download"
        : "http://localhost:8081/api/dns/download";

    if (!selectedFile) {
      alert("Upload a file first!");
      return;
    }
    if (!loaded) {
      alert("Click 'Convert to Word' first!");
      return;
    }
    setTimeout(() => {
      const response = {
        file: downloadUrl
      };
      window.open(response.file, "_blank");
    }, 100);
    setLoaded(false);
    setSelectedFile(null);
  };


  return (
    <header className="screen-view">
      <PageHeader title="DNS GENERATOR" icon="faNewspaper" dns />
      <main id="content">
        <div style={styles.divContainer}>
          <Number number="1" />
          <p>
            Visit the &nbsp;
            <a
              href="https://news4me.eu/NewsBrief/dns/en/MT_latest.html?ticket=ST-39992796-ohNyeOwZnhNRr5GSnByn38ygjMioR2d62XziqLcueVhFrhKzfIFFPS3ZaXX34jAWv5MOzwKadzN3w5MMBeYjdjy-rS0vSrmBGYCaUhCSZJTKh8-Z8bBPeNVDDak1dFemIznTrP0RezX7VCFxqWWjTPFTboG"
              target="_blank"
              rel="noopener noreferrer"
            >
              DNS Website
            </a>
            , right-click on the page and select <strong>Save as html</strong> -
            use Chrome!
          </p>
        </div>

        <div style={{ ...styles.divContainer, ...styles.divWInput }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Number number="2" />
            <p>
              Click on <strong>Choose file</strong> and select the file you just
              saved (<strong>DPR & DNS.html</strong>), then{" "}
              <strong>Convert to Word</strong>
            </p>
          </div>
          {!loaded ? (
            <div style={styles.fileInputContainer}>
              <input
                type="file"
                name="file"
                onChange={onChangeHandler}
                onClick={reset}
                style={{ color: "black" }}
              />
              <button
                style={{
                  ...styles.button,
                  backgroundColor: selectedFile ? "#E5391E" : "#F2F3F4",
                  color: selectedFile ? "white" : ""
                }}
                onClick={onUploadHandler}
              >
                CONVERT TO WORD
              </button>
              <button
                style={{
                  ...styles.button,
                  backgroundColor: selectedFile ? "#F5B041" : "#F2F3F4",
                  color: selectedFile ? "white" : ""
                }}
                onClick={
                  !htmlContent && !copied
                    ? onHtmlHandler
                    : !copied
                    ? onCopyHtml
                    : () => alert("Html already copied")
                }
              >
                {!htmlContent && !copied
                  ? "GET HTML"
                  : !copied
                  ? "COPY HTML"
                  : "HTML COPIED!"}
              </button>
            </div>
          ) : (
            <h5 style={{ color: "#E5391E", alignSelf: "center", margin: 0 }}>
              WORD DOCUMENT READY! Move to step 3
            </h5>
          )}
          {htmlContent && <HtmlContainer contentString={htmlContent} />}
        </div>

        <div style={{ ...styles.divContainer, ...styles.divWInput }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Number number="3" />
            <p>
              Click below to generate & download the formatted Word document,
              ready to be e-mailed
            </p>
          </div>
          <button
            style={{
              ...styles.buttonSubmit,
              backgroundColor: loaded ? "#E5391E" : "#F2F3F4",
              color: loaded ? "white" : "grey"
            }}
            onClick={onDownloadHandler}
          >
            {loaded ? "GET THE WORD DOCUMENT" : "NO FILE YET"}{" "}
            <FontAwesomeIcon icon={faFileWord} style={{ marginLeft: 10 }} />
          </button>
        </div>
      </main>
    </header>
  );
}

const styles = {
  divContainer: {
    maxWidth: 1200,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20
  },
  fileInputContainer: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    paddingLeft: 10,
    alignSelf: "center",
    alignItems: "center"
  },
  divWInput: {
    flexDirection: "column",
    alignItems: "flex-start"
  },
  button: {
    height: 30,
    paddingLeft: "15px",
    paddingRight: "15px"
  },
  buttonSubmit: {
    width: 320,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 16,
    fontWeight: "bold",
    border: "none",
    alignSelf: "center"
  }
};

export default DnsGenerator;


// useEffect(() => {
//   console.log("EFFECT");
//   const deleteUrl =
//     process.env.NODE_ENV === "production"
//       ? "/api/dns/delete"
//       : "http://localhost:8081/api/dns/delete";
//   axios
//     .delete(deleteUrl)
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
// }, []);