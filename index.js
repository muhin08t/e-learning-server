const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
const products = require("./data/courseDetails.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Bootcamp E-Learning Server is Running");
});


app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  id = req.params.id;
  console.log(id);
  const selectedProducts = products.find((n) => n._id === id);
  res.send(selectedProducts);
});


app.listen(port, () => {
  console.log(`Bootcamp E-Learning Server is Running on ${port}`);
});
