const multer = require("multer");

const storage = multer.memoryStorage();

const upload = multer({ storage }).single("image");

exports.uploadToMemory = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(500).json({
        status: "Fail",
        message: `Failed to upload image':${err.message}`,
      });
      return;
    }

    next();
  });
};
