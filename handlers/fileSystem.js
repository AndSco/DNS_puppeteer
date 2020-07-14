const path = require("path");
const fs = require("fs");
const directory = "public/uploads";

const goOnAndDelete = () => {
  fs.readdir(directory, (err, files) => {
    if (err) throw err;
    
    if (files.length === 0) {
      console.log("Folder is empty!");
      return;
    }

    for (const file of files) {
      fs.unlink(path.join(directory, file), err => {
        if (err) throw err;
      });
    }
  });
}

exports.deleteAllImagesInUploadsFolder = () => {
  //check if folder exists 
  fs.access(directory, error => {
    if (error) {
      console.log("Directory does not exist.");
      return;
    } else {
      console.log("Directory exists.");
      goOnAndDelete();
    }
  });
}


// exports.deleteAllImagesInUploadsFolder = (req, res, next) => {
//   try {
//     fs.readdir(directory, (err, files) => {
//       if (err) throw err;

//       for (const file of files) {
//         fs.unlink(path.join(directory, file), err => {
//           if (err) throw err;
//         });
//       }
//     });

//     res
//       .status(200)
//       .json({ message: "All images in uploads folder cleared up" });
//   } catch (err) {
//     return next(err);
//   }
// };