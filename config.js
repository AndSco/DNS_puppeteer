require("dotenv").config(); // loads any environment variable into process.env

module.exports = {
  USERNAME: process.env.USERNAME,
  PASSWORD: process.env.PASSWORD, 
  URL: process.env.URL
};
