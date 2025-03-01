import express from "express";
import CarCatalogController from "../controllers/carsCatalog.js";

const router = express.Router();

router
    .get('/catalogoCarros', CarCatalogController.getAllCars)

export default router;