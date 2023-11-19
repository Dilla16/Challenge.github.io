const ApplicationError = require("./ApplicationError");

const applicationError = new ApplicationError();

describe("ApplicationError", () => {
  it("should return JSON representation with default details", () => {
    // Create an instance of ApplicationError
    const applicationError = new ApplicationError("TestError");

    // Call the toJSON method
    const jsonRepresentation = applicationError.toJSON();

    // Check if the JSON representation is correct
    expect(jsonRepresentation).toEqual({
      error: {
        name: "Error",
        message: "TestError",
        details: {},
      },
    });
  });

  it("should return an empty object for the details getter", () => {
    // Create an instance of ApplicationError
    const applicationError = new ApplicationError("TestError");

    // Call the details getter
    const details = applicationError.details;

    // Check if the details is an empty object
    expect(details).toEqual({});
  });
});
