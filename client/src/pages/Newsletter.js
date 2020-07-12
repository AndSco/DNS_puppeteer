import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import InputAndButton from "../components/InputAndButton";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import ScreenView from "../components/ScreenView";
import Paragraph from "../components/Paragraph";


const NewsletterPage = props => {
  const [newsSection, setNewsSection] = useState("");
  const [newsIndex, setNewsIndex] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [newsToUpload, setNewsToUpload] = useState([]);

  useEffect(() => console.log(newsToUpload), [newsToUpload])

  const resetForm = () => {
    setNewsSection("");
    setNewsIndex("");
    setImagePath("");
  }

  const setSection = selection => {
    setNewsSection(selection);
  }

  const setIndex = index => {
    setNewsIndex(index);
  }

  const saveImagePath = path => {
    setImagePath(path);
  }
  

  const getNews = () => {
    if (newsIndex === "" || newsSection === "" || imagePath === "") {
      alert("Enter an index and a section!");
      return;
    }
    const url =
      process.env.NODE_ENV === "production"
        ? "/api/newsletter/createJsonNews"
        : "http://localhost:8081/api/newsletter/createJsonNews";
    
    axios.get(url, {
      params: {
        index: newsIndex, 
        section: newsSection, 
        imagePath: imagePath
      }
    })
    .then(res => {
      const newsObject = res.data;
      newsObject.imagePath = imagePath;
      setNewsToUpload([...newsToUpload, newsObject]);
      resetForm();
    })
    .catch(err => console.log(err))
  }

  const removeNewsFromList = newsItem => {
    const filteredList = newsToUpload.filter(news => news.title !== newsItem.title);
    setNewsToUpload(filteredList);
  }

  const handleNewsUpload = async () => {
    const url =
      process.env.NODE_ENV === "production"
        ? "/api/newsletter/uploadNews"
        : "http://localhost:8081/api/newsletter/uploadNews";
    
    const response = await axios.post(url, {newsItems: newsToUpload});

    const operationResult = await response.data;
    console.log("oper res", operationResult);
  }

  return (
    <ScreenView>
      <PageHeader title="Newsletter Automator" />
      <Paragraph text="Select the index of the news to insert as per their order on https://ec.europa.eu/malta/news_en, choose the newsletter section and an accompanying photo. When all news are selected, upload them automatically to the Newsletter platform." />
      <InputAndButton
        onSelectFunction={setSection}
        onIndexFunction={setIndex}
        onClickFunction={getNews}
        onImagePathFunction={saveImagePath}
        index={newsIndex}
        section={newsSection}
        imagePath={imagePath}
      />

      {newsToUpload.length > 0 &&
        newsToUpload.map(news => (
          <NewsCard
            key={news.title}
            newsItem={news}
            removeNewsFromList={removeNewsFromList}
          />
        ))}

      {newsToUpload.length > 0 && (
        <button style={styles.buttonCopy} onClick={() => handleNewsUpload()}>
          UPLOAD NEWS TO NEWSLETTER
        </button>
      )}
    </ScreenView>
  );
}

const styles = {
  buttonCopy: {
    width: 840,
    height: 60,
    color: "white",
    backgroundColor: "#E5391E"
  }
};

export default NewsletterPage;