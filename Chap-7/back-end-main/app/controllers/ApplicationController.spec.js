const ApplicationController = require("./ApplicationController");

const applicationController = new ApplicationController();
const NotFoundError = require("./../errors/NotFoundError");

describe("ApplicationController", () => {
  // TEST HANDLE GET ROOT
  describe("#handleGetRoot", () => {
    it("should return status 200 and message BCR API is up and running!", () => {
      const mockRequest = {};

      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      applicationController.handleGetRoot(mockRequest, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(200),
        expect(mockResponse.json).toHaveBeenCalledWith({
          status: "OK",
          message: "BCR API is up and running!",
        });
    });
  });
  // END OF TEST HANDLE GET ROOT

  // TEST HANDLE NOT FOUND
  describe("#handleNotFound", () => {
    it("should return 404 status and error details", () => {
      // Mock request and response objects
      const mockRequest = { method: "GET", url: "/example" };
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      // Mock NotFoundError
      const mockNotFoundError = new NotFoundError(mockRequest.method, mockRequest.url);

      // Call the handleNotFound function
      applicationController.handleNotFound(mockRequest, mockResponse);

      // Check if the response status is set to 404
      expect(mockResponse.status).toHaveBeenCalledWith(404);

      // Check if the json method is called with the correct error details
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: {
          name: mockNotFoundError.name,
          message: mockNotFoundError.message,
          details: mockNotFoundError.details,
        },
      });
    });
  });
  // END OF TEST HANDLE NOT FOUND

  // TEST HANDLE ERROR
  describe("#handleError", () => {
    it("should return 500 status and error details", () => {
      // Mock request, response, and next objects
      const mockRequest = {};
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockNext = jest.fn();

      // Mock error object
      const mockError = {
        name: "MockError",
        message: "An error occurred",
        details: "Additional details",
      };

      // Call the handleError function
      applicationController.handleError(mockError, mockRequest, mockResponse, mockNext);

      // Check if the response status is set to 500
      expect(mockResponse.status).toHaveBeenCalledWith(500);

      // Check if the json method is called with the correct error details
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: {
          name: mockError.name,
          message: mockError.message,
          details: mockError.details || null,
        },
      });
    });
  });
  // END OF TEST ERROR

  // TEST GET OFFSET
  describe("#getOffsetFromRequest(", () => {
    it("should return offset", () => {
      const mockRequest = {
        query: {
          page: 1,
          pageSize: 10,
        },
      };

      const offset = applicationController.getOffsetFromRequest(mockRequest);

      expect(offset).toBe(0);
    });
  });
  // END OF TEST OFFSET

  // TEST BUILD PAGINATION
  describe("#buildPaginationObject(", () => {
    it("should build pagination object correctly", () => {
      const mockRequest = {
        query: {
          page: 2,
          pageSize: 10,
        },
      };
      const count = 25;

      const result = applicationController.buildPaginationObject(mockRequest, count);

      expect(result).toEqual({
        page: 2,
        pageCount: 3,
        pageSize: 10,
        count: 25,
      });
    });
  });
  // END OF TEST BUILD PAGINATION
});
