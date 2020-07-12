const express = require("express");
const router = express.Router();
const multer = require("multer");
const dates = require("../handlers/dateManagement");
const createDNS = require("../handlers/dnsCreator");
const createHtml = require("../handlers/htmlCreatorForWebsite");
const fs = require("fs");

const {saveAsWord, getHtml} = require("../handlers/dnsPuppeteer");


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function(req, file, cb) {
    cb(null, "DPR & DNS.html");
  }
});

const upload = multer({ storage: storage }).single("file");

router.post("/upload", async (req, res, next) => {
  await upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      return next(err);
    } else if (err) {
      return next(err);
    }
    res.status(200).json(req.file);
    createDNS();
  });
});


router.post("/createHtml", async (req, res, next) => {
  try {
    await upload(req, res, async function(err) {
      if (err instanceof multer.MulterError) {
        return next(err);
      } else if (err) {
        return next(err);
      }
      const htmlString = await createHtml();
      res.status(200).json(htmlString);
    });
  } catch (err) {
    return next(err);
  }
});


router.get("/download", (req, res, next) => {
  try {
    res.download(`public/output/DNS.docx`, `Daily News Summary - ${dates.formattedDate}.docx`);
  } catch (err) {
    return next(err);
  }
});



router.post("/dnsPuppeteerWord", async (req, res, next) => {
  try {
    const newsObject = await saveAsWord();
    res.status(200).json(newsObject);
  } catch(err) {
    return next(err);
  }
})


router.post("/dnsPuppeteerHtml", async (req, res, next) => {
  try {
    const createdHtml = await getHtml();
    res.status(200).json(createdHtml);
  } catch(err) {
    return next(err);
  }
})

module.exports = router;



// router.delete("/delete", async (req, res) => {
//   const filePath = "./input/DPR & DNS.html";
//   // Check if file exists
//   await fs.access(filePath, fs.F_OK, err => {
//     if (err) {
//       console.log("NO FILE OR ERROR");
//       return;
//     }
//     //file exists
//     fs.unlink(filePath, err => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       res.status(200).json("File deleted");
//       console.log("file removed");
//     });
//   });
//   return;
// });