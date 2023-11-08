const { cars, users } = require("./../models");

exports.getListCars = () => {
  return cars.findAll({
    include: [
      { model: users, as: "created" },
      { model: users, as: "updated" },
      { model: users, as: "deleted" },
    ],
    attributes: { exclude: ["createdBy", "updatedBy", "deletedBy"] },
  });
};

exports.getListCarByName = (name) => {
  return cars.findAll({ where: { name } });
};

exports.create = (payload, userId) => {
  return cars.create({ ...payload, createdBy: userId });
};

exports.findByPk = (id) => {
  return cars.findByPk(id, {
    include: [
      { model: users, as: "created" },
      { model: users, as: "updated" },
      { model: users, as: "deleted" },
    ],
    attributes: { exclude: ["createdBy", "updatedBy", "deletedBy"] },
  });
};

exports.update = (id, payload, userId) => {
  return cars.update({ ...payload, updatedBy: userId }, { where: { id }, returning: true, paranoid: false });
};

exports.destroy = (id) => {
  return cars.destroy({ where: { id } });
};
