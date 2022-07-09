require("dotenv").config();
const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
const File = require("./models/File");

// Configure multer.
const upload = multer({ dest: "uploads" });

// Connect to DB.
mongoose.connect(process.env.DATABASE_URL, () => console.log("Connected to DB"));

// Set view engine.
app.set("view engine", "ejs");

// Load public files.
app.use(express.static(__dirname + "/dist"));
app.use(express.static(__dirname + "/assets"));

// Set routes.
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("file"), async (req, res) => {
  const fileData = {
    path: req.file.path,
    originalName: req.file.originalname,
  };

  if (req.body.password !== null && req.body.password !== "") {
    fileData.password = await bcrypt.hash(req.body.password, 10);
  }

  const file = await File.create(fileData);
  res.render("index", { fileLink: `${req.headers.origin}/file/${file._id}` });
});

app.route("/file/:id").get(handleDownload).post(handleDownload);

async function handleDownload(req, res) {
  const file = await File.findById(req.params.id);

  if (file.password != null) {
    if (req.body.password == null) {
      res.render("password", { home: `${req.protocol}://${req.headers.host}` });
      return;
    }
    if (!(await bcrypt.compare(req.body.password, file.password))) {
      res.render("password", { error: true, home: `${req.protocol}://${req.headers.host}` });
      return;
    }
  }

  file.downloadCount++;
  await file.save();

  res.download(file.path, file.originalName);
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
