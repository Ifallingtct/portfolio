
/* eslint-disable */
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// DATA DEMO
let posts = [
  {
    id: 1,
    title: "Phòng trọ Cầu Giấy",
    content: "Giá 2tr, gần đại học, có điều hòa",
    comments: [],
  },
];

// GET LIST
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// CREATE POST
app.post("/api/posts", (req, res) => {
  const { title, content } = req.body;

  const newPost = {
    id: Date.now(),
    title,
    content,
    comments: [],
  };

  posts.unshift(newPost);

  res.json(newPost);
});

app.listen(5000, () => {
  console.log("Server running http://localhost:5000");
});