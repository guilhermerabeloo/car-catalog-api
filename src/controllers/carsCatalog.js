import Car from "../models/carsCatalog.js";

class CarCatalogController {
    static getAllCars = async (req, res) => {
        try {
            const cars = await Car.find();
            res.json(cars);
        } catch (error) {
            res.status(500).json({ error: "Erro ao buscar os carros" });
        }
    };
}

export default CarCatalogController;
