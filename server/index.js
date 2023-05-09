import dotenv from "dotenv";
dotenv.config();
import connectToDatabase from "./database.js";
import express from "express";
import path from "path";

//Our Routes
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

connectToDatabase();
const app = express();

app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.get("/", (req, res) => {
  res.send("Server is ready");
});
app.get("/api/config/paypal", (req, res) =>
  res.send("iyttr76uty76yut86765rtyr65rr765rtyr56r765ryt")
);

const port = process.env.PORT || 5000;

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV == "Production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.listen(port, () => {
  console.log(`Server runs on poooooort ${port}.`);
});
