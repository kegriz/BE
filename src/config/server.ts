import express from "express";

const app = express();
const PORT: string | number = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("express works!");
});

app.listen(PORT, () =>
  console.log(`server started at http://localhost:${PORT}`)
);
