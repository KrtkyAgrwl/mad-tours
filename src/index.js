const express = require("express");
const path = require("path");
const guidesRouter = require("./routes/guides");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/guides", guidesRouter);

app.listen(PORT, () => {
  console.log(`MAD Tours running at http://localhost:${PORT}`);
});

module.exports = app;
