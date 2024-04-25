import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productRoutes);

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error("Connection failed!");
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
