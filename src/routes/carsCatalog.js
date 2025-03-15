import express from "express";
import CarCatalogController from "../controllers/carsCatalog.js";

const router = express.Router();

router
    .get('/catalogoCarros', CarCatalogController.getAllCars)
    .post('/cadastroCarro', CarCatalogController.createCar)
    .delete('/excluirCarro/:id', CarCatalogController.deleteCar)

export default router;
