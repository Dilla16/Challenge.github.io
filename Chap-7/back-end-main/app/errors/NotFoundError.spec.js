const NotFoundError = require("./NotFoundError");

describe("NotFoundError", () => {
  it("should have correct error details", () => {
    const method = "GET";
    const url = "/example";

    // Create an instance of NotFoundError
    const notFoundError = new NotFoundError(method, url);

    // Check if the error message, name, details, and stack are as expected
    expect(notFoundError.message).toBe("Not found!");
    expect(notFoundError.name).toBe("Error");
    expect(notFoundError.details).toEqual({
      method: "GET",
      url: "/example",
    });
    expect(typeof notFoundError.stack).toBe("string");

    // Check if toJSON method returns the expected JSON representation
    const jsonRepresentation = notFoundError.toJSON();
    expect(jsonRepresentation).toEqual({
      error: {
        name: "Error",
        message: "Not found!",
        details: {
          method: "GET",
          url: "/example",
        },
      },
    });
  });
});
