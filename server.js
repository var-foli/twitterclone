require('dotenv').config();
const express = require("express");
const app = express();
const path = require('path');
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const PORT = process.env.PORT || 3500;


//connecting to MongoDB
connectDB();

//built-in middleware to handle url encoded form data
app.use(express.urlencoded({extended: false}));

//built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//serve static files
app.use(express.static(path.join(__dirname, "/public")));

//routes
app.use("/", require("./routes/root"));
app.use("/posts", require("./routes/api/posts"));
app.use("/newpost", require("./routes/api/newpost"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")){
      res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
      res.json({error: "404 Not Found"});
  } else {
      res.type("txt").send("404 Not Found");
  }
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});