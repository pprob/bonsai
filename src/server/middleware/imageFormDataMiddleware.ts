import multer from 'multer';
import path from 'path';

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    const fileTypes = /jpeg|jpg|png/;

    const matchExt = fileTypes.test(
      path.extname(file.originalname.toLowerCase()),
    );

    const matchMime = fileTypes.test(file.mimetype);
    if (matchExt && matchMime) {
      return cb(null, true);
    }
    cb(new Error('Error - something went wrong'));
  },
});

export default upload;
