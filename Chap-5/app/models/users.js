"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.cars, {
        foreignKey: "createdBy",
        as: "created",
      });

      this.hasMany(models.cars, {
        foreignKey: "updatedBy",
        as: "updated",
      });

      this.hasMany(models.cars, {
        foreignKey: "deletedBy",
        as: "deleted",
      });
    }
  }
  users.init(
    {
      name: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true, allowNull: false, validate: { isEmail: { msg: "Please input email format correctly" } } },
      encrypted_password: { type: DataTypes.STRING, allowNull: false },
      phone_number: DataTypes.STRING,
      address: DataTypes.STRING,
      role: {
        allowNull: false,
        type: DataTypes.ENUM("SUPERADMIN", "ADMIN", "MEMBER"),
      },
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  users.beforeCreate((users) => (users.id = uuidv4()));
  return users;
};
