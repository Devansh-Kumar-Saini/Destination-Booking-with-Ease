// backend/server.js
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
app.use(express.json({ limit: "10mb" }));

app.post("/api/send-receipt", async (req, res) => {
  const { email, pdfBase64 } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your@gmail.com",
      pass: "your-app-password", // Use an App Password for Gmail
    },
  });
  await transporter.sendMail({
    from: "your@gmail.com",
    to: email,
    subject: "Your Receipt",
    text: "Thank you for your purchase!",
    attachments: [
      {
        filename: "receipt.pdf",
        content: pdfBase64.split(",")[1],
        encoding: "base64",
      },
    ],
  });
  res.sendStatus(200);
});

app.listen(5000, () => console.log("Server running on port 5000"));