const express = require("express");
const router = express.Router();
const path = require('path');
const postsController = require("../controllers/postsController");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,  "..", "views", "posts.html"));
});



module.exports = router;