await axios.post(process.env.https://discord.com/api/webhooks/1498432904038977546/qAuY8nsSjQbEfZLWCpADNd7xhYBFEU7NA2ZRvecBGuzK1EEIUGw5iFa4P0tHVoa-9mFw, {
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
