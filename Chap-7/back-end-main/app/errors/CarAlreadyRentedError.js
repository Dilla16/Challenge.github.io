const ApplicationError = require("./ApplicationError");

class CarAlreadyRentedError extends ApplicationError {
  constructor(car) {
    super(`${car.name} is already rented!!`);
    this.car = car;
  }

  get details() {
    return { data: this.car };
  }
}

module.exports = CarAlreadyRentedError;
