await axios.post(process.env.DISCORD_WEBHOOK, {
  embeds: [
    {
      title: "🛒 عملية شراء جديدة!",
      color: 0x00ff99,
      fields: [
        {
          name: "👤 اسم العميل",
          value: data.from_name || "غير معروف",
          inline: true
        },
        {
          name: "💰 المبلغ",
          value: data.amount || "غير معروف",
          inline: true
        },
        {
          name: "📦 نوع العملية",
          value: data.type || "Purchase",
          inline: true
        },
        {
          name: "💬 رسالة العميل",
          value: data.message || "لا يوجد",
        }
      ],
      footer: {
        text: "Ko-fi Notifications System"
      },
      timestamp: new Date()
    }
  ]
});
