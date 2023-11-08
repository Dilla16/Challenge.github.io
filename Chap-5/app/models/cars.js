"use strict";

const { Model, DATE } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  class cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.users, {
        foreignKey: "createdBy",
        as: "created",
      });

      this.belongsTo(models.users, {
        foreignKey: "updatedBy",
        as: "updated",
      });

      this.belongsTo(models.users, {
        foreignKey: "deletedBy",
        as: "deleted",
      });
    }
  }
  cars.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      image: DataTypes.STRING,
      capacity: DataTypes.NUMERIC,
      rent_per_day: DataTypes.STRING,
      description: DataTypes.STRING,
      available_at: DataTypes.STRING,
      createdAt: new DATE(),
      updatedAt: new DATE(),
    },
    {
      sequelize,
      modelName: "cars",
      paranoid: true,
    }
  );
  cars.beforeCreate((cars) => (cars.id = uuidv4()));
  return cars;
};
