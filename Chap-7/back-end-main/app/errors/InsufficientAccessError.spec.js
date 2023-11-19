const InsufficientAccessError = require("./InsufficientAccessError");

describe("InsufficientAccessError", () => {
  it("should have correct role", () => {
    const role = "user";
    // Create an instance of InsufficientAccessError
    const insufficientAccessError = new InsufficientAccessError(role);

    // Check if the error message, name, details, and stack are as expected
    expect(insufficientAccessError.message).toBe("Access forbidden!");
    expect(insufficientAccessError.name).toBe("Error");
    expect(insufficientAccessError.details).toEqual({
      role: "user",
      reason: "user is not allowed to perform this operation.",
    });
    expect(typeof insufficientAccessError.stack).toBe("string");

    // Check if toJSON method returns the expected JSON representation
    const jsonRepresentation = insufficientAccessError.toJSON();
    expect(jsonRepresentation).toEqual({
      error: {
        name: "Error",
        message: "Access forbidden!",
        details: {
          role: role,
          reason: `${role} is not allowed to perform this operation.`,
        },
      },
    });
  });
});
