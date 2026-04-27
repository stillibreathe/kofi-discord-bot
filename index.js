const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const DISCORD_WEBHOOK = "حط_رابط_الديسكورد";

app.post("/kofi", async (req, res) => {
  const data = JSON.parse(req.body.data);

  const name = data.from_name;

  await axios.post(DISCORD_WEBHOOK, {
    content: `🛒 شراء جديد من: ${name}`
  });

  res.sendStatus(200);
});

app.get("/", (req, res) => {
  res.send("Running");
});

app.listen(3000);
