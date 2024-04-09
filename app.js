require("dotenv").config();
const express = require("express");
const server = express();


server.use(express.json());

// Get path
server.get("/", (req, res) => {
  res.status(200).send({ message: "Server Start " });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(
    `\n Server Start on port ${PORT} ___🚀___ http://localhost:8080/`
  );
});
