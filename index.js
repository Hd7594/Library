require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

const libraryRoutes = require("./routes/library");
app.use(libraryRoutes);

const booksRoutes = require("./routes/books");
app.use(booksRoutes);

app.listen(process.env.PORT, (req, res) => {
  console.log("server started");
});
