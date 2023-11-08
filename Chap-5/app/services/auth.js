const bcrypt = require("bcrypt");
const SALT = 10;
const jwt = require("jsonwebtoken");
const ApplicationError = require("../../config/errors/ApplicationError");
const userRepository = require("../repositories/users");

exports.encryptPassword = async (password) => {
  try {
    const hash = await bcrypt.hash(password, SALT);
    return hash;
  } catch (err) {
    throw new Error(err);
  }
};

exports.checkedPassword = async (password, encryptedPassword) => {
  const isMatch = await bcrypt.compare(password, encryptedPassword);
  return isMatch;
};

const JWT_SECRET_KEY = "FSW1";

exports.createToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "20m" });
};

const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET_KEY);
};

exports.authorize = async (bearerToken) => {
  try {
    if (!bearerToken) {
      res.status(401).json({
        status: "FAIL",
        message: "Unauthorized",
      });
      throw new ApplicationError("Unauthorized", 401);
    }
    const token = bearerToken.split("Bearer ")[1];

    const decoded = await verifyToken(token);

    const { id } = decoded;

    const user = await userRepository.findByPk(id);

    if (!user) {
      throw new ApplicationError("Unauthorized", 401);
    }
    return user;
  } catch (err) {
    throw new ApplicationError(err.message, err.statusCode || 500);
  }
};
