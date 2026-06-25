const express = require("express");
const router = express.Router();
const guides = require("../data/guides");

router.get("/", (req, res) => {
  res.json(guides);
});

router.get("/:id", (req, res) => {
  const guide = guides.find((g) => g.id === parseInt(req.params.id));
  if (!guide) {
    return res.status(404).json({ error: "Guide not found" });
  }
  res.json(guide);
});

module.exports = router;
