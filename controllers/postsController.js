const Post = require("../model/Post");

const getAllPosts = async (req, res) => {
  const posts = await Post.find();
  if (!posts) return res.status(204).json({"message": "No posts found."});
  console.log(posts);
  res.json(posts);
}

module.exports = {getAllPosts}