const { users } = require("./../models");

exports.create = (payload) => {
  return users.create(payload);
};

exports.findUserByEmail = (email) => {
  return users.findOne({ where: { email }, returning: true });
};

exports.findByPk = (id) => {
  return users.findByPk(id);
};

exports.getListUser = () => {
  return users.findAll();
};
