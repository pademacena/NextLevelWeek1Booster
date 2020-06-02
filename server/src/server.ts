import express from "express";

const app = express();

app.get("/users", (req, res) => {
  console.log("supHero");

  res.json(["Diego", "Fernando", "Robson", "Daniel"]);
});

app.listen(3333);
