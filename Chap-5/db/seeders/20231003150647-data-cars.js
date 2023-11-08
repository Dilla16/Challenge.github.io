"use strict";

const { DATE, UUIDV4 } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("cars", [
      {
        id: uuidv4(),
        name: "Toyota Corolla",
        type: "small",
        image: "toyota_corolla.jpg",
        capacity: 4,
        rent_per_day: "$50",
        description: "A compact and fuel-efficient car for city driving.",
        available_at: "2023-10-06",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "Honda Civic",
        type: "small",
        image: "honda_civic.jpg",
        capacity: 4,
        rent_per_day: "$55",
        description: "Reliable and stylish, perfect for daily commutes.",
        available_at: "2023-10-07",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "Ford Mustang",
        type: "medium",
        image: "ford_mustang.jpg",
        capacity: 2,
        rent_per_day: "$75",
        description: "A powerful and iconic sports car for enthusiasts.",
        available_at: "2023-10-05",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "Chevrolet Suburban",
        type: "large",
        image: "chevrolet_suburban.jpg",
        capacity: 8,
        rent_per_day: "$100",
        description: "A spacious SUV, ideal for family road trips.",
        available_at: "2023-10-06",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "Volkswagen Golf",
        type: "small",
        image: "volkswagen_golf.jpg",
        capacity: 4,
        rent_per_day: "$60",
        description: "A well-balanced hatchback with great handling.",
        available_at: "2023-10-08",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "Tesla Model S",
        type: "medium",
        image: "tesla_model_s.jpg",
        capacity: 5,
        rent_per_day: "$150",
        description: "An electric luxury sedan with cutting-edge technology.",
        available_at: "2023-10-11",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "Jeep Wrangler",
        type: "medium",
        image: "jeep_wrangler.jpg",
        capacity: 4,
        rent_per_day: "$90",
        description: "An off-road adventure SUV built for rugged terrains.",
        available_at: "2023-10-12",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "BMW X5",
        type: "large",
        image: "bmw_x5.jpg",
        capacity: 5,
        rent_per_day: "$120",
        description: "A luxury SUV with a blend of performance and comfort.",
        available_at: "2023-10-04",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "Mercedes-Benz C-Class",
        type: "medium",
        image: "mercedes_c_class.jpg",
        capacity: 5,
        rent_per_day: "$110",
        description: "A stylish and elegant sedan with advanced features.",
        available_at: "2023-10-03",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "Nissan Rogue",
        type: "medium",
        image: "nissan_rogue.jpg",
        capacity: 5,
        rent_per_day: "$70",
        description: "A versatile and dependable crossover for all occasions.",
        available_at: "2023-10-15",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
