import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import loanRoute from "./routes/loanroutes.js";

const app = express();
dotenv.config();

// Middleware to parse JSON
app.use(express.json());

// CORS Configuration (Only Local for Now)
const allowedOrigins = [
  "http://localhost:5173",// Local frontend for testing
  "https://loan-ok.vercel.app/",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

app.use("/api/rout", loanRoute);

app.listen(8800, () => {
  connect();
  console.log("Connected to backend");
});