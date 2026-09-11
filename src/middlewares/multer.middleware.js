import multer from "multer";


// Handling File Uploads using Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

export const upload = multer({ 
    storage,
});