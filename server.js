const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const oldPath = path.join(__dirname, req.file.path);
  const newPath = path.join(__dirname, 'public/images', req.file.originalname);

  fs.rename(oldPath, newPath, err => {
    if (err) {
      return res.status(500).send(err);
    }

    res.send('File uploaded and moved!');
  });
});

app.listen(3000, () => console.log('Server started on port 3000'));
