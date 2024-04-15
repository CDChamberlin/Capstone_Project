const jest = require("jest");
const { User } = require("../models");
const { mockRequest, mockResponse } = require("jest-mock-req-res");

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  updateUserByEmail,
  login,
  getUser,
} = require("../controllers/userController");

jest.mock("./models", () => ({
  User: {
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn(),
    findOne: jest.fn(),
  },
}));

describe("Test getUsers function", () => {
  test("should return 200 with user data", async () => {
    const req = mockRequest();
    const res = mockResponse();
    const testData = [{ id: 1, name: "John Doe" }];

    User.findAll.mockResolvedValueOnce(testData);

    await getUsers(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({ result: 200, data: testData });
  });

  test("should return 404 if no users are found", async () => {
    const req = mockRequest();
    const res = mockResponse();

    User.findAll.mockResolvedValueOnce([]);

    await getUsers(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({
      result: 404,
      message: "No users found",
    });
  });

  test("should return 500 if an error occurs", async () => {
    const req = mockRequest();
    const res = mockResponse();

    User.findAll.mockRejectedValueOnce(new Error("Database error"));

    await getUsers(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith({
      result: 500,
      message: "Internal server error",
    });
  });

  test("should return 200 with user data when called with parameters", async () => {
    const req = mockRequest();
    const res = mockResponse();
    const testData = [{ id: 1, name: "John Doe" }];

    User.findAll.mockResolvedValueOnce(testData);

    await getUsers(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({ result: 200, data: testData });
  });

  test("should return 404 if no users are found", async () => {
    const req = mockRequest();
    const res = mockResponse();

    User.findAll.mockResolvedValueOnce([]);

    await getUsers(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({
      result: 404,
      message: "No users found",
    });
  });
});

describe("Test createUser function", () => {
  test("should return 201 with user info", async () => {
    const req = mockRequest();
    const res = mockResponse();
    const testData = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@test.com",
        password: "testPassword",
      },
    ];

    User.create.mockResolvedValueOnce(testData);

    await createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalledWith({
      result: 200,
      user: { firstName: "John", lastName: "Doe", email: "john.doe@test.com" },
    });
  });

  test("should return 400 with error message for missing fields", async () => {
    const req = mockRequest();
    const res = mockResponse();
    const testData = [
      {
        firstName: "John",
        lastName: "Doe",
      },
    ];

    await createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({
      result: 400,
      error: "Missing required fields",
    });
  });

  test("should return 500 with error message for create user error", async () => {
    const req = mockRequest();
    const res = mockResponse();
    const testData = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@test.com",
        password: "testPassword",
      },
    ];

    User.create.mockRejectedValueOnce(new Error("Error creating user"));

    await createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith({
      result: 500,
      error: "Error creating user",
    });
  });

  test("should return 400 with error message for empty request body", async () => {
    const req = mockRequest();
    const res = mockResponse();
    const testData = [
      {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    ];

    await createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({
      result: 400,
      error: "Missing required fields",
    });
  });

  test("should return 200 with user info", async () => {
    const req = mockRequest();
    const res = mockResponse();
    const testData = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@test.com",
        password: "testPassword",
      },
    ];

    User.findOne.mockResolvedValueOnce(testData);

    await getUser(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      result: 200,
      user: { firstName: "John", lastName: "Doe", email: "john.doe@test.com" },
    });
  });
});

describe('Test updateUser')