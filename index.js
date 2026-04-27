const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

// 🔐 حط Discord Webhook هنا
const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1498432904038977546/qAuY8nsSjQbEfZLWCpADNd7xhYBFEU7NA2ZRvecBGuzK1EEIUGw5iFa4P0tHVoa-9mFw";

app.post("/kofi", async (req, res) => {
  try {
    const data = req.body;

    const name = data.from_name || "Unknown";
    const amount = data.amount || "N/A";
    const type = data.type || "Purchase";
    const message = data.message || "No message";

    await axios.post(DISCORD_WEBHOOK, {
      embeds: [
        {
          title: "🛒 New Support!",
          color: 7a0005,
          fields: [
            { name: "👤 Name", value: name, inline: true },
            { name: "💰 Amount", value: amount, inline: true },
            { name: "📦 Type", value: type, inline: true },
            { name: "💬 Message", value: message }
          ],
          footer: {
            text: "Ko-fi → Discord System"
          },
          timestamp: new Date()
        }
      ]
    });

    res.sendStatus(200);

  } catch (err) {
    console.log("ERROR:", err);
    res.sendStatus(500);
  }
});

// اختبار السيرفر
app.get("/", (req, res) => {
  res.send("Bot is running 🚀");
});

// PORT مهم لـ Render
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
