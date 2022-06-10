const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

// const Guitarra = require("./models/guitarra");
const connectDB = require("./config/db");

require("dotenv").config();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

connectDB();

app.use("/", require("./router/webRoutes"));
app.get("/", (req, res) => res.send("UCAMP API"))

app.listen(process.env.PORT, () => {
  console.log("El servidor esta corriendo en el puerto 4000");
});
