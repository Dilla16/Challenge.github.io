"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("cars", "createdBy", {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: "5abf173e-5808-4bdd-9a63-aa07353fb55a",
      references: {
        model: "users",
        key: "id",
      },
    });

    await queryInterface.addColumn("cars", "updatedBy", {
      type: DataTypes.UUID,
      allowNull: true,
      model: "users",
      key: "id",
    });

    await queryInterface.addColumn("cars", "deletedBy", {
      type: DataTypes.UUID,
      allowNull: true,
      model: "users",
      key: "id",
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
