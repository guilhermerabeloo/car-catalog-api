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

    static createCar = async (req, res) => {
        try {
            const novoCarro = new Car(req.body);
            const carroSalvo = await novoCarro.save();
            res.status(200).json(carroSalvo);
        } catch (error) {
            res.status(400).json({ error: "Erro ao cadastrar o carro", detalhes: error.message });
        }
    };

    static deleteCar = async (req, res) => {
        try {
            const { id } = req.params;
            const deletedCar = await Car.findByIdAndDelete(id);

            if (!deletedCar) {
                return res.status(404).json({ error: "Carro não encontrado" });
            }

            res.json({ message: "Carro excluído com sucesso" });
        } catch (error) {
            res.status(500).json({ error: "Erro ao excluir o carro" });
        }
    };

    static updateCar = async (req, res) => {
        try {
            const { id } = req.params;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ error: "ID inválido" });
            }

            const updatedCar = await Car.findByIdAndUpdate(id, req.body, { new: true });


            if (!updatedCar) {
                return res.status(404).json({ error: "Carronode ser não encontrado" });
            }

            res.json(updatedCar);
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "Erro ao atualizar o carro" });
        }
    };
}

export default CarCatalogController;
