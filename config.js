require("dotenv").config(); // loads any environment variable into process.env

module.exports = {
  URL_NLETTER: process.env.URL_NLETTER,
  URL_DNS: process.env.URL_DNS,
  ACCESS_PWORD: process.env.ACCESS_PWORD
};
