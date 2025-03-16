import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import loanRoute from "./routes/loanroutes.js";

const app = express();
dotenv.config();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

const connect = async () => {
  try{
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb");
  }
  catch(error){
    throw error;
  }
};

app.use("/api/rout", loanRoute);

app.listen(8800, ()=>{
  connect()
  console.log("connected to backend");
})