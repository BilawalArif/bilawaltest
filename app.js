const express = require("express");
const app = express();
const collection = require("./mongo");
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


//First Endpoint for Login
app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({ email: email });
    if (check) {
      res.json("Exist");
    } else res.json("Does not exist");
  } catch (err) {
    console.error(err);
  }
});


//Second Endpoint for SignUp
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const data = {
    email: email,
    password: password,
  };

  try {
    const check = await collection.findOne({ email: email });
    if (check) {
      res.json("Exist");
    } else {
      res.json("Does not exist");
      await collection.insertMany([data]);
    }
  } catch (err) {
    console.error(err);
  }
});

app.listen(8000, () => {
  console.log(`listening on http://localhost:8000`);
});
