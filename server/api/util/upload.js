const util = require("util");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

const uri = process.env.ATLAS_URI

const storage = new GridFsStorage({
  url: uri,
  options: { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  },
  file: (req, file) => {
    const imageTypes = ["image/png", "image/jpeg"];

    if (imageTypes.includes(file.mimetype)) {
      const filename = `${Date.now()}-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: "profile_img",
      filename: `${Date.now()}-${file.originalname}`
    };
  }
});

const uploadFiles = multer({ storage }).single("profileimg");
const uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;