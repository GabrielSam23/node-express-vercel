const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", async (req, res, next) => {
  // Caminho para o arquivo HTML
  const htmlPath = path.join(__dirname, "index.html");

  // Renderiza o arquivo HTML usando o pacote 'ejs'
  res.render(htmlPath);
});

module.exports = router;
