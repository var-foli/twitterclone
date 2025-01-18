const Post = require("../model/Post");

const addNewPost = async (req, res) => {
  console.log("Adding new post...");
  date = new Date();
  let newPost = new Post({
    date_time: date,
    username: req.body.username,
    text: req.body.tweet
  });
  newPost.save();
  res.redirect("/");
}
/*
const addNewPost = async (req, res) => {
  console.log("Adding new post...");
  try {
    const result = await Post.create({
      date_time: new Date(),
      username: req.body.username,
      text: req.body.tweet
    });

    res.status(201).json(result);
  } catch (err) {
    console.error(err);
  }
}
  */

module.exports = {addNewPost}