const usersRepositories = require("./../repositories/users");
const authServices = require("./auth");
const ApplicationError = require("./../../config/errors/ApplicationError");

exports.createUser = async (payload, isAdmin) => {
  try {
    const { name, email, password, phone_number, address, role } = payload;

    if (!email || !password) {
      throw new ApplicationError("Please input email or password", 500);
    }

    const encrypted_password = await authServices.encryptPassword(password);

    const users = await usersRepositories.create({
      name,
      email,
      encrypted_password,
      phone_number,
      address,
      role: isAdmin ? "ADMIN" : "MEMBER",
    });
    return users;
  } catch (err) {
    throw new ApplicationError(`Failed to add new user:  ${err.message}`, 500);
  }
};

exports.checkUser = async (credentials) => {
  try {
    const { email, password } = credentials;
    if (!email || !password) {
      throw new ApplicationError(`Please input Email and Password`, 500);
    }
    const user = await usersRepositories.findUserByEmail(email);

    if (!user) {
      throw new ApplicationError("email not found", 500);
    }
    const checkedPassword = await authServices.checkedPassword(password, user.encrypted_password);

    if (!checkedPassword) {
      throw new ApplicationError("Password is wrong", 500);
    }

    const token = authServices.createToken({ id: user.id });

    const userWithToken = { ...user.dataValues, token };

    return userWithToken;
  } catch (err) {
    throw new ApplicationError(err.message, 500);
  }
};

exports.listUser = async (email) => {
  try {
    if (email) {
      const user = await usersRepositories.findUserByEmail(email);
      return user;
    }
    const user = await usersRepositories.getListUser();
    return user;
  } catch (err) {
    throw new ApplicationError(`Failed to get list of cars:  ${err.message}`, 500);
  }
};

exports.getUserById = async (id) => {
  try {
    const dataFindByPk = await usersRepositories.findByPk(id);
    if (!dataFindByPk) {
      throw new ApplicationError(`Not found any data:  ${err.message}`, 404);
    }
    return dataFindByPk;
  } catch (err) {
    throw new ApplicationError(`Failed to get data by Id has deleted or being moved`, err.statusCode || 500);
  }
};
