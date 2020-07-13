const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const dnsRoutes = require("./routes/dnsGenerator");
const newsletterRoutes = require("./routes/newsletter");
const loginRoute = require("./routes/login");



app.use(express.static(path.join(__dirname, "public")));

// BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use("/api/dns", dnsRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api", loginRoute);

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















// const url =
//   "https://news4me.eu/NewsBrief/dns/en/MT_latest.html?ticket=ST-36909089-g1WeAyd4OvnDCZaZCKuifKgIYIzKkoUHHOESwgPf6zxOdDjQqpuAQvNiFshWOyONW8HAJBKUl9ElhEwMmlrYbb-rS0vSrmBGYCaUhCSZJTKh8-qojYQGdzjzWol4I0xE7qH2D91F3BxHWB8VRXmOR99szy";

// axios
//   .get(url)
//   .then(res => {
//     const { data } = res;
//     const $ = cheerio.load(data, {
//       xml: {
//         normalizeWhitespace: true
//       }
//     });
//     // console.log(data);
//     // console.log("html", $.html());
//     // $("#header_title");
//   })
//   .catch(err => console.log("error", err.mesage));