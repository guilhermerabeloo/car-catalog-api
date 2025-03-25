import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  model: { type: String, required: true },
  make: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  price: { type: Number, required: true },
  mileage: { type: Number, required: true },
  fuel_type: { type: String, required: true },
  transmission: { type: String, required: true },
  engine: {
    type: { type: String, required: true },
    horsepower: Number,
    torque: Number
  },
  features: [String],
  location: {
    city: String,
    state: String,
    country: String
  },
  status: { type: String, enum: ["Disponível", "Vendido"], required: true },
  image: { type: String } 
});

const Car = mongoose.model("Car", CarSchema, "cars");

export default Car;
