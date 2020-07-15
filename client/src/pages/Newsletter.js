import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import InputAndButton from "../components/InputAndButton";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import ScreenView from "../components/ScreenView";
import Paragraph from "../components/Paragraph";
import Spinner from "../components/Spinner";


const NewsletterPage = props => {
  const [newsSection, setNewsSection] = useState("");
  const [newsIndex, setNewsIndex] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [newsToUpload, setNewsToUpload] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isNewsUploadOver, setIsNewsUploadOver] = useState(false);

  useEffect(() => console.log("path", imagePath), [imagePath])

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


  const uploadImage = async (e) => {
    try {
      const url =
        process.env.NODE_ENV === "production"
          ? "/api/newsletter/uploadImage"
          : "http://localhost:8081/api/newsletter/uploadImage";
          
          
      const imageData = new FormData();
      const fileToUpload = e.target.files[0];;
      imageData.append("imageFile", fileToUpload);
      const response = await axios.post(url, imageData);
      const { data: path } = response;
      setImagePath(path);

    } catch(err) {
      console.error(err);
      
    }
  }
  

  const getNews = () => {
    if (newsIndex === "" || newsSection === "" || imagePath === "") {
      alert("Enter an index, a section and an image!");
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
    setIsLoading(true);
    const url =
      process.env.NODE_ENV === "production"
        ? "/api/newsletter/uploadNews"
        : "http://localhost:8081/api/newsletter/uploadNews";
    
    // const response = await axios.post(url, {newsItems: newsToUpload});
    const response = await axios({
      method: 'post',
      url: url, 
      data: {
        newsItems: newsToUpload
      }, 
      timeout: 6 * 60 * 1000
    });

    const operationResult = await response.data;
    console.log("oper res", operationResult);
    setIsLoading(false);
    setIsNewsUploadOver(true);
  }

  return (
    <ScreenView>
      <PageHeader title="Newsletter Automator" />
      <Paragraph text="Select the index of the news to insert, as listed on https://ec.europa.eu/malta/news_en, choose the newsletter section & an accompanying photo. When all news are selected, upload them automatically to the Newsletter platform." />
      <InputAndButton
        onSelectFunction={setSection}
        onIndexFunction={setIndex}
        onClickFunction={getNews}
        index={newsIndex}
        section={newsSection}
        uploadImage={uploadImage}
      />
      
      {isNewsUploadOver && (
      <h2
        style={{ cursor: "pointer", marginTop: 50 }}
        onClick={() => {
          setIsNewsUploadOver(false);
          setNewsToUpload([]);
        }}
      >
        News uploaded! <strong>Load more</strong>
      </h2>
      )}

      <div style={styles.cardContainer}>
        {isLoading && <Spinner />}
        {newsToUpload.length > 0 &&
          newsToUpload.map(news => (
            <NewsCard
              key={news.title}
              newsItem={news}
              removeNewsFromList={removeNewsFromList}
            />
          ))}

        {newsToUpload.length > 0 && !isNewsUploadOver && !isLoading && (
          <button style={styles.buttonCopy} onClick={() => handleNewsUpload()}>
            UPLOAD
          </button>
        )}
      </div>
    </ScreenView>
  );
}

const styles = {
  buttonCopy: {
    width: 100,
    height: 100,
    color: "#1E2019",
    backgroundColor: "#FFE800", 
    position: "absolute", 
    top: 30,
    left: "90%", 
    borderRadius: "50%"
  },

  cardContainer: {
    position: "relative", 
    width: "80%", 
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem 0"
  }
};

export default NewsletterPage;