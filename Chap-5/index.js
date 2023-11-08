const express = require("express");
const cors = require("cors");
const carController = require("./app/controllers/car");
const userController = require("./app/controllers/user");
const authMiddleware = require("./app/middlewares/auth");
const { uploadToMemory } = require("./app/middlewares/uploadOnMemory");
const { uploadToCloudinary } = require("./app/middlewares/uploadOnCloudinary");

const app = express();
app.use(express.json());

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./app/docs/openapi.json");

app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// root
app.get("/", (req, res) => {
  res.status(200).send("Api already running");
});

// Get list CARS
app.get("/cars", carController.list);

// Get list CARS
// app.post("/upload/image", uploadOnMemory.single("picture"), uploadToCloudinary);

// Get CARS by ID
app.get("/cars/:id", carController.getDataById, carController.detail);

// Upload / Create CARS data
app.post("/create-cars", authMiddleware.authorize, authMiddleware.isSuperOrAdmin, uploadToMemory, uploadToCloudinary, carController.create);

// Update CARS data
app.put("/update-cars/:id", authMiddleware.authorize, authMiddleware.isSuperOrAdmin, carController.getDataById, carController.update);

// Delete CARS data
app.delete("/delete-cars/:id", authMiddleware.authorize, authMiddleware.isSuperOrAdmin, carController.getDataById, carController.destroy);

// Login User
app.post("/login", userController.login);

// Register User "MEMBER"
app.post("/register", userController.userRegister);

// Register User "SUPERADMIN"
app.post("/admin/register", authMiddleware.authorize, authMiddleware.isSuperAdmin, userController.registerAdmin);

// Get List User
app.get("/user", authMiddleware.authorize, userController.list);

// Get User Data By ID
app.get("/user/:id", userController.getDataById, userController.detail);

// Get Current User
app.get("/current/user", authMiddleware.authorize, userController.currentUser);

// Post image
// app.post("/upload/cars-image", uploadToMemory, uploadToCloudinary);

// PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listening Port ${PORT}`);
});
