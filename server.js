const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// API route for calculation
app.post("/api/calculate", (req, res) => {
  const { num1, num2, operation } = req.body;

  let result;

  switch (operation) {
    case "add":
      result = Number(num1) + Number(num2);
      break;
    case "subtract":
      result = Number(num1) - Number(num2);
      break;
    case "multiply":
      result = Number(num1) * Number(num2);
      break;
    case "divide":
      result = Number(num2) === 0 ? "Cannot divide by zero" : Number(num1) / Number(num2);
      break;
    default:
      result = "Invalid Operation";
  }

  res.json({ result });
});

app.listen(3000, () => console.log("App running at http://localhost:3000"));
