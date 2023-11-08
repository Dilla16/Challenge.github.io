const authServices = require("./../services/auth");
const userService = require("./../services/users");

exports.userRegister = async (req, res) => {
  try {
    const body = req.body;
    body.role = "MEMBER";

    const data = await userService.createUser(body);
    res.json({
      status: "OK",
      message: "Success",
      data,
    });
  } catch (err) {
    res.status(err.statusCode).json({
      status: "FAIL",
      message: err.message,
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const credentials = { email, password };

  try {
    const user = await userService.checkUser(credentials);

    if (!user) {
      res.status(500).json({
        status: "FAIL",
        message: "Email Not Found",
      });
      return;
    }

    const checkedPassword = await authServices.checkedPassword(password, user.encrypted_password);

    if (!checkedPassword) {
      res.status(401).json({
        status: "FAIL",
        message: "Password is not match",
      });
      return;
    }

    res.status(200).json({
      status: "OK",
      message: "Success",
      data: user,
    });
  } catch (err) {
    res.status(err.statusCode).json({
      status: "FAIL",
      message: err.message,
    });
  }
};

exports.registerAdmin = async (req, res) => {
  try {
    const body = req.body;

    body.role = "ADMIN";

    const data = await userService.createUser(body, true);

    res.json({
      status: "OK",
      message: "Success",
      data,
    });
  } catch (err) {
    res.status(err.statusCode).json({
      status: "FAIL",
      message: err.message,
    });
  }
};

exports.currentUser = (req, res) => {
  res.json({
    status: "OK",
    message: "Success",
    data: req.user,
  });
};

exports.list = async (req, res) => {
  try {
    const { email } = req.query;

    const data = await userService.listUser(email);
    res.json({
      status: 200,
      message: "Success",
      data,
    });
  } catch (err) {
    res.status(err.message).json({
      status: "FAIL GET LIST USER",
      message: err.message,
    });
  }
};

exports.getDataById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await userService.getUserById(id);
    req.user = user;
    next();
  } catch (err) {
    res.status(err.message).json({
      status: "FAIL",
      message: err.message,
    });
  }
};

exports.detail = (req, res) => {
  res.json({
    status: "OK",
    message: "Success",
    data: req.user,
  });
};
