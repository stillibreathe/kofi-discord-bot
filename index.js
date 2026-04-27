const express = require("express");
const app = express();

app.use(express.json());

// اختبار السيرفر
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Webhook
app.post("/webhook", (req, res) => {
  console.log("🔥 Event received:");
  console.log(JSON.stringify(req.body, null, 2));

  res.status(200).send("OK");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("🚀 Running on port", PORT);
});
