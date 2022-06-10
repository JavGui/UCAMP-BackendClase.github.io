const mongoose = require("mongoose");

const guitarraSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
});
const Guitarra = mongoose.model("Guitarra", guitarraSchema);

module.exports = Guitarra;
