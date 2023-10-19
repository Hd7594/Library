//L'objectif de cette partie (books) de mon projet était d'utiliser la clé ayant pour référence le modèle library et montrer que tel livre appartient à telle librairie.

const express = require("express");
const router = express.Router();

const Books = require("../models/Books");

router.post("/books/add", async (req, res) => {
  try {
    const { title, author, edition, year, category, language, owner } =
      req.body;
    const newBook = new Books({
      title: title,
      author: author,
      edition: edition,
      year: year,
      category: category,
      language: language,
      owner: owner,
    });
    await newBook.save();
    res.json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/books/list", async (req, res) => {
  try {
    const booksList = await Books.find();
    res.json(booksList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/books/delete", async (req, res) => {
  try {
    await Books.findByIdAndDelete(req.body.id);
    if (req.body.id) {
      return res.json({ message: "book deleted" });
    }

    if (!req.body.id) {
      return res.json({ message: "missing id" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
