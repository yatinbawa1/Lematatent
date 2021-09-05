import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});
app.get("/", (req, res) => {
  res.send("Request Recived");
});

app.listen(5000);
