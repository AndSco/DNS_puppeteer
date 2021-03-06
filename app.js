const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const dnsRoutes = require("./routes/dnsGenerator");
const newsletterRoutes = require("./routes/newsletter");
const loginRoute = require("./routes/login");
const textExtractorRoutes = require("./routes/textExtractor");

app.use(express.static(path.join(__dirname, "public")));

// BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use("/api/dns", dnsRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api", loginRoute);
app.use("/api/textExtractor", textExtractorRoutes);

// To serve both frontend and backend - catch ALL. Serve static assets only if in production.
if (process.env.NODE_ENV === "production") {
  console.log("PRODUCTION!!!!");
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.use((error, req, res, next) => {
  console.log("ERROR HANDLER", error.message);
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message || "Ooops, something went wrong!"
    }
  });
});

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`SERVER IS ON PORT ${port}`));
