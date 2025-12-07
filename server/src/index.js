import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// test route
app.get("/health", (req, res) => {
  res.json({
    ok: true,
    service: "ChittaMitra API",
    time: new Date().toISOString(),
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
