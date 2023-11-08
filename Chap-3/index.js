const express = require("express");
const app = express();
const carModel = require("./Handler/carHandler");

app.use(express.json());

app.get("/", carModel.getBasic);
app.get("/cars", carModel.getAllCars);
app.get("/cars/:id", carModel.getCarById);
app.post("/cars", carModel.createCars);
app.put("/cars/:id", carModel.updateCars);
app.delete("/cars/:id", carModel.deleteCars);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listening Port ${PORT}`);
});
