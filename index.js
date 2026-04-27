const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

// 🔐 Discord Webhook من Render Environment Variables
const DISCORD_WEBHOOK = process.env.https://discord.com/api/webhooks/1498432904038977546/qAuY8nsSjQbEfZLWCpADNd7xhYBFEU7NA2ZRvecBGuzK1EEIUGw5iFa4P0tHVoa-9mFw;

app.post("/kofi", async (req, res) => {
  try {
    const data = JSON.parse(req.body.data);

    const name = data.from_name || "Unknown";
    const amount = data.amount || "N/A";
    const type = data.type || "Purchase";
    const message = data.message || "No message";

    await axios.post(https://discord.com/api/webhooks/1498432904038977546/qAuY8nsSjQbEfZLWCpADNd7xhYBFEU7NA2ZRvecBGuzK1EEIUGw5iFa4P0tHVoa-9mFw, {
      embeds: [
        {
          title: "🛒 New Ko-fi Order!",
          color: 0x00ff99,
          fields: [
            {
              name: "👤 Name",
              value: name,
              inline: true
            },
            {
              name: "💰 Amount",
              value: amount,
              inline: true
            },
            {
              name: "📦 Type",
              value: type,
              inline: true
            },
            {
              name: "💬 Message",
              value: message
            }
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
    console.log(err);
    res.sendStatus(500);
  }
});

app.get("/", (req, res) => {
  res.send("Bot is running 🚀");
});

app.listen(3000, () => console.log("Server running on port 3000"));
