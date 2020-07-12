import React, { useState } from "react";
import axios from "axios";
import HtmlContainer from "../components/HtmlContainer";
import PageHeader from "../components/PageHeader";
import ActionButton from "../components/ActionButton";
import Spinner from "../components/Spinner";
import ScreenView from "../components/ScreenView";
import Paragraph from "../components/Paragraph";


function DnsGenerator() {
  const [isDnsWordReady, setIsDnsWordReady] = useState(false);
  const [htmlString, setHtmlString] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  const createWordDoc = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const url =
      process.env.NODE_ENV === "production"
        ? "/api/dns/dnsPuppeteerWord"
        : "http://localhost:8081/api/dns/dnsPuppeteerWord";

    await axios.post(url);
    console.log("Conversion done")
    setIsDnsWordReady(true);
    setIsLoading(false);
  };


  const fetchHtml = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const url =
      process.env.NODE_ENV === "production"
        ? "/api/dns//dnsPuppeteerHtml"
        : "http://localhost:8081/api/dns//dnsPuppeteerHtml";
    
    const {data} = await axios.post(url);
    console.log("HTML", data);  
    setHtmlString(data); 
    setIsLoading(false);
  }


  const onCopyHtml = () => {
    navigator.clipboard.writeText(htmlString);
  };


  // How to trigger download from frontend using express res.download in the backend
  const onDownloadHandler = () => {
    const downloadUrl =
      process.env.NODE_ENV === "production"
        ? "/api/dns/download"
        : "http://localhost:8081/api/dns/download";

    
    setTimeout(() => {
      const response = {
        file: downloadUrl
      };
      window.open(response.file, "_blank");
    }, 100);
  };


  return (
    <ScreenView>
      <PageHeader title="DNS GENERATOR" icon="faNewspaper" dns />
      <Paragraph text="Automatically format the Daily News Summary for Malta and either save it as a Word doc ready to be emailed, or extract the formatted HTML to upload it on the website" />
      <main style={styles.mainContainer}>
        <div style={styles.buttonsContainer}>
          <ActionButton
            text={isDnsWordReady ? "DOWNLOAD WORD DOC!" : "SAVE THE DNS AS WORD"}
            onClickFunction={isDnsWordReady ? onDownloadHandler : createWordDoc}
            isReady={isDnsWordReady}
          />

          <h5>OR</h5>

          <ActionButton
            text={htmlString ? "COPY HTML" : "FETCH HTML FOR WEBSITE"}
            onClickFunction={htmlString ? onCopyHtml : fetchHtml}
            isReady={htmlString}
          />
        </div>
        {isLoading && <Spinner />}

        {htmlString && 
          <div>
            <HtmlContainer contentString={htmlString} />
          </div>  
        }
      </main>
    </ScreenView>
  );
}

const styles = {
  mainContainer: {
    display: "flex", 
    flexDirection: "column" 
  },

  buttonsContainer: {
    display: "flex", 
    alignItems: "center"
  }
};

export default DnsGenerator;

