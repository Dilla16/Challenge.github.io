const EmailNotRegisteredError = require("./EmailNotRegisteredError");

describe("EmailNotRegisteredError", () => {
  it("should have correct error details", () => {
    const email = "test@example.com";

    // Create an instance of EmailNotRegisteredError
    const emailNotRegisteredError = new EmailNotRegisteredError(email);

    // Check if the error message, name, details, and stack are as expected
    expect(emailNotRegisteredError.message).toBe(`${email} is not registered!`);
    expect(emailNotRegisteredError.name).toBe("Error");
    expect(emailNotRegisteredError.details).toEqual({ email: email });
    expect(typeof emailNotRegisteredError.stack).toBe("string");

    const jsonRepresentation = emailNotRegisteredError.toJSON();
    expect(jsonRepresentation).toEqual({
      error: {
        name: "Error",
        message: `${email} is not registered!`,
        details: { email: email },
      },
    });
  });
});
