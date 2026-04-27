const express = require("express");
const app = express();

app.use(express.json());

app.post("/webhook", (req, res) => {
  console.log("🔥 Ko-fi Event وصل:");
  console.log(req.body);

  res.send("OK");
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(3000, () => console.log("Running"));
