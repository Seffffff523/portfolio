import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();

const allowedOrigins = [
  process.env.CLIENT_ORIGIN,
  "http://localhost:3000",
  "http://127.0.0.1:3000",
].filter(Boolean);

app.use(
  cors({
    origin(origin, cb) {
      if (!origin) return cb(null, true);
      if (allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error(`CORS blocked for origin: ${origin}`));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Accept"],
  })
);

// ✅ Express 5 preflight fix (NO "*")
app.options("/api/contact", cors());

app.use(express.json({ limit: "1mb" }));

function isEmail(x) {
  return typeof x === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x);
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (m) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[m]));
}

// ✅ health check so we can verify server is reachable
app.get("/health", (req, res) => {
  res.json({ ok: true, port: Number(process.env.PORT || 8787) });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};
  console.log("CONTACT HIT:", req.body);

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Missing fields" });
  }
  if (!isEmail(email)) {
    return res.status(400).json({ ok: false, error: "Invalid email" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO || process.env.SMTP_USER,
      replyTo: `${name} <${email}>`,
      subject: "New portfolio message",
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: ui-sans-serif, system-ui;">
          <h2>New portfolio message</h2>
          <p><b>Name:</b> ${escapeHtml(name)}</p>
          <p><b>Email:</b> ${escapeHtml(email)}</p>
          <p><b>Message:</b></p>
          <pre style="white-space:pre-wrap; font-family:inherit;">${escapeHtml(message)}</pre>
        </div>
      `,
    });

    return res.json({ ok: true });
  } catch (err) {
  console.error("MAIL ERROR:", err);
  return res.status(500).json({
    ok: false,
    error: err?.message || "Failed to send",
    code: err?.code,
    response: err?.response,
  });
}
});

const port = Number(process.env.PORT || 8787);
app.listen(port, () => console.log(`API running on http://localhost:${port}`));