import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import HtmlContainer from "../components/HtmlContainer";
import PageHeader from "../components/PageHeader";
import ActionButton from "../components/ActionButton";
import Spinner from "../components/Spinner";
import ScreenView from "../components/ScreenView";
import Paragraph from "../components/Paragraph";
import DnsItemsNumberForm from "../components/DnsItemsNumberForm";
import { extractIndexes } from "../utils";
import { AuthContext } from "../context/AuthContext";
import { EcasAuthentication } from "./EcasAuthentication";

function DnsGenerator() {
  const [isDnsWordReady, setIsDnsWordReady] = useState(false);
  const [htmlString, setHtmlString] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isIndexFormOpen, setIsIndexFormOpen] = useState(false);
  const [isDnsDateRight, setIsDnsDateRight] = useState(true);

  const { ecasUsername, ecasPassword, insertedEcasCredentials } = useContext(
    AuthContext
  );

  useEffect(() => {
    if (!isDnsDateRight) {
      alert(
        "This DNS does not seem to be the one for today. Double-check before sending it out!"
      );
    }
  }, [isDnsDateRight]);

  const openNewsIndexForm = () => {
    setIsIndexFormOpen(true);
  };

  const closeNewsIndexForm = input => {
    const indexesToUpload = extractIndexes(input);
    if (!indexesToUpload) {
      alert("Enter at least one index!");
      return;
    }
    setIsIndexFormOpen(false);
    fetchHtml(indexesToUpload);
  };

  const createWordDoc = async () => {
    try {
      if (isLoading) return;
      setIsLoading(true);
      const url =
        process.env.NODE_ENV === "production"
          ? "/api/dns/dnsPuppeteerWord"
          : "http://localhost:8081/api/dns/dnsPuppeteerWord";

      const response = await axios.post(url, { ecasUsername, ecasPassword });
      const { isDateRight } = response.data;
      console.log(isDateRight);
      setIsDnsWordReady(true);
      setIsLoading(false);
      setIsDnsDateRight(isDateRight);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchHtml = async newsIndexes => {
    if (isLoading) return;
    setIsLoading(true);
    const url =
      process.env.NODE_ENV === "production"
        ? "/api/dns/dnsPuppeteerHtml"
        : "http://localhost:8081/api/dns//dnsPuppeteerHtml";

    const { data } = await axios.post(url, {
      newsIndexes: newsIndexes,
      ecasUsername,
      ecasPassword
    });
    console.log("HTML", data);
    setHtmlString(data);
    setIsLoading(false);
  };

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

  if (!insertedEcasCredentials) {
    return <EcasAuthentication />;
  }

  if (isIndexFormOpen) {
    return <DnsItemsNumberForm closeNewsIndexForm={closeNewsIndexForm} />;
  }

  return (
    <ScreenView>
      <PageHeader title="DNS GENERATOR" icon="faNewspaper" dns />
      <Paragraph text="Format automatically the Daily News Summary for Malta and either save it as a Word doc ready to be e-mailed, or generate the structured HTML to upload it on the website" />

      <main style={styles.mainContainer}>
        <div style={styles.buttonsContainer}>
          <ActionButton
            text={
              isDnsWordReady ? "DOWNLOAD WORD DOC!" : "SAVE THE DNS AS WORD"
            }
            onClickFunction={isDnsWordReady ? onDownloadHandler : createWordDoc}
            isReady={isDnsWordReady}
            icon="word"
          />

          <h5>OR</h5>

          <ActionButton
            text={htmlString ? "COPY HTML" : "FETCH HTML FOR WEBSITE"}
            onClickFunction={htmlString ? onCopyHtml : openNewsIndexForm}
            isReady={htmlString}
            icon="code"
          />
        </div>
        {isLoading && <Spinner />}

        {htmlString && (
          <div>
            <HtmlContainer contentString={htmlString} />
          </div>
        )}
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
    alignItems: "center",
    marginTop: 30
  }
};

export default DnsGenerator;
