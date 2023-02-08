require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3500;

app.use(express.json());

app.use("/gpt", require("./routes/gptRoute"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
