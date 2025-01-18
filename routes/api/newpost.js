const express = require("express");
const router = express.Router();
const path = require("path");
const newPostController = require("../../controllers/newPostController");


router.post("/", newPostController.addNewPost);



module.exports = router;