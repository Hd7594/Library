const express = require("express");
const router = express.Router();

const Library = require("../models/Library");

router.post("/library/create", async (req, res) => {
  try {
    const {
      name,
      address,
      website,
      links,
      booksNumber,
      docsNumber,
      categories,
    } = req.body;

    const newLibrary = new Library({
      name: name,
      address: address,
      website: website,
      links: links,
      booksNumber: booksNumber,
      docsNumber: docsNumber,
      categories: categories,
    });
    await newLibrary.save();
    res.json(newLibrary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/library/list", async (req, res) => {
  try {
    const libraryList = await Library.find();
    res.json(libraryList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/library/update", async (req, res) => {
  try {
    const updatedLibrary = await Library.findByIdAndUpdate(req.body.id, {
      categories: req.body.categories,
    });
    if (req.body.id && req.body.categories) {
      return res.json({ message: "library updated" });
    }
    await updatedLibrary.save();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/library/delete", async (req, res) => {
  await Library.findByIdAndDelete(req.body.id);
  if (!req.body.id) {
    return res.json({ message: "request failed" });
  }
  if (req.body.id) {
    return res.json({ message: "library deleted successfully" });
  }
});

module.exports = router;
