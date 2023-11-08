const carRepositories = require("./../repositories/car");
const ApplicationError = require("./../../config/errors/ApplicationError");

exports.listCars = async (name) => {
  try {
    if (name) {
      const cars = await carRepositories.getListCarByName(name);
      return cars;
    }
    const cars = await carRepositories.getListCars();
    return cars;
  } catch (err) {
    throw new ApplicationError(`Failed to get list of cars:  ${err.message}`, 500);
  }
};

exports.createCar = async (payload, userId) => {
  try {
    const carData = await carRepositories.create(payload, userId);
    return carData;
  } catch (err) {
    throw new ApplicationError(`Failed to add new car data:  ${err.message}`, 500);
  }
};

exports.getCarById = async (id) => {
  try {
    const dataFindByPk = await carRepositories.findByPk(id);
    if (!dataFindByPk) {
      throw new ApplicationError(`Not found any car data:  ${err.message}`, 404);
    }
    return dataFindByPk;
  } catch (err) {
    throw new ApplicationError(`Failed to get car data by Id has deleted or being moved`, err.statusCode || 500);
  }
};

exports.updateCarById = async (id, payload, userId) => {
  try {
    const [_, data] = await carRepositories.update(id, payload, userId);
    return data;
  } catch (err) {
    throw new ApplicationError(`Failed to update car data by Id:  ${err.message}`, 500);
  }
};

exports.deleteCarData = async (id, userId) => {
  try {
    await carRepositories.destroy(id);
    return carRepositories.update(id, { deletedBy: userId }, userId);
  } catch (err) {
    throw new ApplicationError(`Failed to delete car data by Id:  ${err.message}`, 500);
  }
};
