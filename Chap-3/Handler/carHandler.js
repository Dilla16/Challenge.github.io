const { v4: uuidv4 } = require("uuid");
const carsData = require("../Data/cars");

// Get "/"
exports.getBasic = (req, res) => {
  res.status(200).send({ Message: "Ping Successfully" });
};

// get list cars
exports.getAllCars = (req, res) => {
  res.json(carsData);
};

// get car by id
exports.getCarById = (req, res) => {
  const carId = req.params.id;
  const car = carsData.find((car) => car.id == carId);

  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ message: "Data Mobil Tidak Ditemukan " });
  }
};

// create cars
exports.createCars = (req, res) => {
  const { image, rentPerDay, capacity, description, availableAt } = req.body;
  const newCar = {
    id: uuidv4(),
    image,
    rentPerDay,
    capacity,
    description,
    availableAt,
  };
  carsData.push(newCar);
  res.status(201).json({ message: "Data berhasil ditambahkan!", data: newCar });
};

// update data cars by id
exports.updateCars = (req, res) => {
  const carId = req.params.id;
  const curentData = carsData.find((car) => car.id == carId);
  const newData = req.body;
  const updateData = { ...curentData, ...newData };

  const existingId = carsData.findIndex((car) => car.id == carId);

  if (existingId !== -1) {
    carsData[existingId] = updateData;
    res.status(200).json({ data: updateData });
  } else {
    res.json("Data Tidak Ditemukan");
  }
};

// delete data cars
exports.deleteCars = (req, res) => {
  const carId = req.params.id;
  const deleteProces = carsData.filter((car) => car.id == carId);

  if (deleteProces !== -1) {
    carsData.splice(deleteProces, 1);
    res.json({ message: "Data berhasil dihapus!", data: deleteProces });
  } else {
    res.status(404).json({ message: "Data tidak ditemukan" });
  }
};
