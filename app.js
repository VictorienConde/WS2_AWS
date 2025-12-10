const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello depuis ecr-nodejs-app 🚀 (Docker + AWS ECR)");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});