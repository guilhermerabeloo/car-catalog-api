import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  model: { type: String},
  make: { type: String},
  year: { type: Number},
  color: { type: String},
  price: { type: Number},
  mileage: { type: Number},
  fuel_type: { type: String},
  transmission: { type: String},
  image: { type: String},
  engine: {
    type: { type: String},
    horsepower: Number,
    torque: Number
  },
  features: { type: String},
  location: {
    city: String,
    state: String,
    country: String
  },
  status: { type: String, enum: ["Disponível", "Vendido"]}
});

const Car = mongoose.model("Car", CarSchema, "cars");

export default Car;
