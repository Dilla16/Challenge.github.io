const WrongPasswordError = require("./WrongPasswordError");

describe("WrongPasswordError", () => {
  it("should have correct error details", () => {
    // Create an instance of WrongPasswordError
    const wrongPasswordError = new WrongPasswordError();

    // Check if the error message, name, details, and stack are as expected
    expect(wrongPasswordError.message).toBe("Password is not correct!");
    expect(wrongPasswordError.name).toBe("Error");
    expect(wrongPasswordError.details).toEqual({});
    expect(typeof wrongPasswordError.stack).toBe("string");

    // Check if toJSON method returns the expected JSON representation
    const jsonRepresentation = wrongPasswordError.toJSON();
    expect(jsonRepresentation).toEqual({
      error: {
        name: "Error",
        message: "Password is not correct!",
        details: {},
      },
    });
  });
});
