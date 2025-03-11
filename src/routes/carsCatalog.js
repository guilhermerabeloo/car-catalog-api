import express from "express";
import CarCatalogController from "../controllers/carsCatalog.js";

const router = express.Router();

router
    .get('/catalogoCarros', CarCatalogController.getAllCars)
    .post('/cadastroCarro', CarCatalogController.createCar);

export default router;