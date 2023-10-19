const mongoose = require("mongoose");

const Library = mongoose.model("library", {
  name: String,
  address: String,
  website: Boolean,
  links: Boolean,
  booksNumber: Number,
  docsNumber: Number,
  categories: String,
});

module.exports = Library;
