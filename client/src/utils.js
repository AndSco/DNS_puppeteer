import axios from "axios";

export const extractIndexes = string => {
  const { input } = string.match(/\d+/);
  if (!input) return null;
  return input.split(", ").map(item => +item);
};

export const uploadFile = async e => {
  try {
    const url =
      process.env.NODE_ENV === "production"
        ? "/api/newsletter/uploadImage"
        : "http://localhost:8081/api/newsletter/uploadImage";

    const imageData = new FormData();
    const fileToUpload = e.target.files[0];
    imageData.append("imageFile", fileToUpload);
    const response = await axios.post(url, imageData);
    const { data: path } = response;
    return path;
  } catch (err) {
    console.error(err);
  }
};

export const copyString = text => {
  navigator.clipboard.writeText(text);
};

export const saveInStorage = (key, value) =>
  sessionStorage.setItem(key, JSON.stringify(value));

const isInStorage = key => !!sessionStorage.getItem(key);

export const getFromStorage = key => {
  try {
    return isInStorage(key) ? JSON.parse(sessionStorage.getItem(key)) : null;
  } catch (err) {
    return null;
  }
};

export const deleteFromStorage = key => sessionStorage.removeItem(key);
