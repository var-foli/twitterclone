const express = require("express");
const router = express.Router();
const path = require('path');
const postsController = require("../../controllers/postsController");

router.route("/")
  .get(postsController.getAllPosts)


module.exports = router;