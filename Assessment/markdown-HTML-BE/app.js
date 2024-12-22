const express = require("express");
const app = express();
const cors = require("cors");
const marked = require("marked");
const PORT = require("./constants");
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, './public/dist')));

app.post("/convert", (req, res) => {
  try {
    const convertedToHTML = marked.parse(req.body.markDownText);
    res.send(convertedToHTML);
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
