const mongoose = require("mongoose");
const Books = mongoose.model("Books", {
  title: String,
  author: String,
  edition: String,
  year: Number,
  category: String,
  language: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Library",
  },
});

module.exports = Books;
