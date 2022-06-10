const express = require('express')
const app = express.Router()
const Guitarra = require("../models/guitarra");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Tu endpoint esta corriendo correctamente");
});

app.get("/obtener-guitarras", async (req, res) => {
  try {
    const guitarras = await Guitarra.find({})
    console.log('Regreso Get; ', guitarras);
    res.json(guitarras)
  } catch (error) {
      res.status(500).json({ msg: 'Hubo un error obteniendo los datos' })
  }
})

app.post("/crear-guitarra", async (req, res) => {
  const { nombre, precio } = req.body
  console.log('Recibido POST: ', nombre, precio);
  try{
    const guitars = await Guitarra.create({ nombre, precio })
    console.log('Creó: ', guitars);
    res.json(guitars);
  }catch (error) {
    res.status(500).json({ msg: "Error loading data from Database" });
  }
})

app.put("/actualiza-guitarra", async (req, res) => {
  const { id, nombre, precio } = req.body;
  try {
    const guitarras = await Guitarra.findByIdAndUpdate( id, { nombre, precio }, { new: true });
    // res.json(guitars);    
  } catch (error) {
    res.status(500).json({
      msg: "Error loading data from Database",
    });
  }
});

app.delete("/borra-guitarra", async (req, res) => {
  const { id } = req.body;
  try {
    await guitarras.findByIdAndRemove({ _id : id });
    // res.json(guitars);
  } catch (error) {
    res.status(500).json({
      msg: "Error loading data from Database",
    });
  }
});

module.exports = app;
