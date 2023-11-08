const carServices = require("./../services/car");

// Get "/"
// const getBasic = (req, res) => {
//   res.status(200).send({ Message: "Ping Successfully" });
// };

const list = async (req, res) => {
  try {
    const { name } = req.query;

    const data = await carServices.listCars(name);
    res.json({
      status: 200,
      message: "Success",
      data,
    });
  } catch (err) {
    res.status(err.statusCode).json({
      status: "FAIL GET LIST CARS",
      message: err.message,
    });
  }
};

const create = async (req, res) => {
  try {
    const image = req.image;
    const body = req.body;

    const { id: userId } = req.user;
    body.image = image;

    const data = await carServices.createCar(body, userId);
    res.json({
      status: "OK",
      message: "Data successfully created",
      data,
    });
  } catch (err) {
    res.json({
      status: "FAIL",
      message: err.message,
    });
  }
};

const detail = (req, res) => {
  res.json({
    status: "OK",
    message: "Success",
    data: req.car,
  });
};

const getDataById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const car = await carServices.getCarById(id);
    req.car = car;
    next();
  } catch (err) {
    res.status(err.statusCode).json({
      status: "FAIL",
      message: err.message,
    });
  }
};

const update = async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.car;
    const { id: userId } = req.user;

    const data = await carServices.updateCarById(id, body, userId);
    res.json({
      status: "OK",
      message: "Success",
      data,
    });
  } catch (err) {
    res.json({
      status: "FAIL",
      message: err.message,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.car;
    const { id: userId } = req.user;
    await carServices.deleteCarData(id, userId);
    res.json({
      status: "OK",
      message: "Successfully Deleted",
    });
  } catch (err) {
    res.status(err.statusCode).json({
      status: "FAIL",
      message: err.message,
    });
  }
};

const notFound = (req, res) => {
  res.status(404).send("404 not found!");
};

module.exports = {
  list,
  create,
  update,
  // getBasic,
  destroy,
  detail,
  getDataById,
  notFound,
};
