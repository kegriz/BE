import express from "express";

const app = express();
const PORT: string | number = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("express works!");
});

app.listen(PORT, () =>
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${PORT}`)
);
