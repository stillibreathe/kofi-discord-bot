const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.post("https://discord.com/api/webhooks/1498432904038977546/qAuY8nsSjQbEfZLWCpADNd7xhYBFEU7NA2ZRvecBGuzK1EEIUGw5iFa4P0tHVoa-9mFw", (req, res) => {
  console.log("🔥 Event received:");
  console.log(req.body);

  res.send("OK");
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Running on port", PORT);
});
