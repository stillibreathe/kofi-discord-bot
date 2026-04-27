const express = require("express");
const app = express();

app.use(express.json());

const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1498432904038977546/qAuY8nsSjQbEfZLWCpADNd7xhYBFEU7NA2ZRvecBGuzK1EEIUGw5iFa4P0tHVoa-9mFw;

app.post("/webhook", async (req, res) => {
  console.log("🔥 Event received:", req.body);

  // إرسال إلى Discord
  await fetch(DISCORD_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: "💰 دعم جديد وصل!"
    })
  });

  res.send("OK");
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Running on", PORT);
});
