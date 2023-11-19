const CarAlreadyRentedError = require("./CarAlreadyRentedError");

describe("CarAlreadyRentedError", () => {
  it("should return car data", () => {
    const car = { name: "TestCar" };

    // Create an instance of EmailNotRegisteredError
    const carAlreadyRentedError = new CarAlreadyRentedError(car);

    // Check if the error message, name, details, and stack are as expected
    expect(carAlreadyRentedError.message).toBe(`${car.name} is already rented!!`);
    expect(carAlreadyRentedError.name).toBe("Error");

    // Check if the details method returns the expected details object
    expect(carAlreadyRentedError.details).toEqual({ data: car });

    const jsonRepresentation = carAlreadyRentedError.toJSON();
    expect(jsonRepresentation).toEqual({
      error: {
        name: "Error",
        message: `${car.name} is already rented!!`,
        details: { data: car },
      },
    });
  });
});
