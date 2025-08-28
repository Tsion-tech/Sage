const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let shoes = [
  { id: 1, name: "Air Force 1", brand: "Nike" },
  { id: 2, name: "Superstar", brand: "Adidas" },
  { id: 3, name: "Classic Leather", brand: "Reebok" },
  { id: 4, name: "Old Skool", brand: "Vans" },
  { id: 5, name: "Rockstud", brand: "Valentino Garavani" },
  { id: 6, name: "So Kate ", brand: "Christian Louboutin" },

];


app.get("/shoes", (req, res) => {
  res.json(shoes);
});


app.get("/shoes/:id", (req, res) => {
  const shoe = shoes.find(s => s.id == req.params.id);
  if (!shoe) return res.status(404).send("Shoe not found");
  res.json(shoe);
});


app.post("/shoes", (req, res) => {
  const shoe = {
    id: shoes.length + 1,
    name: req.body.name,
    brand: req.body.brand
  };
  shoes.push(shoe);
  res.status(201).json(shoe);
});


app.put("/shoes/:id", (req, res) => {
  const shoe = shoes.find(s => s.id == req.params.id);
  if (!shoe) return res.status(404).send("Shoe not found");
  shoe.name = req.body.name;
  shoe.brand = req.body.brand;
  res.json(shoe);
});


app.delete("/shoes/:id", (req, res) => {
  shoes = shoes.filter(s => s.id != req.params.id);
  res.send("Shoe deleted");
});

app.listen(5000, () => console.log(" Server running on port 5000"));
