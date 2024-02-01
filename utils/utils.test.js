const { checkIsUppercase } = require("./stringUtils");
const supertest = require("supertest");
const app = require("../app");

describe("Checks if the string has any uppercase characters", () => {
  it("Returns false if string is empty", () => {
    expect(checkIsUppercase("")).toBe(false);
  });
  it("Returns false if input is a number", () => {
    expect(checkIsUppercase(2)).toBe(false);
  });
  it("Returns true if all letters are uppercase and there are only letters", () => {
    expect(checkIsUppercase("to be Or NOT to be ")).toBe(false);
    expect(checkIsUppercase("THAT IS THE QUESTION")).toBe(false);
    expect(checkIsUppercase("HAMLET")).toBe(true);
  });
});
/* 
1. Take upperutil
2. write a route to send it to
3. Test output using supertest */
describe("route that responds with capital username with no spaces", () => {
  it("responds with a capital username", async () => {
    const response = await supertest(app).get("/users/capitalStudentName/1");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("INGABERGORTON");
  });
});
describe("route that responds with limited users or all users", () => {
  it("responds with all users", async () => {
    const response = await supertest(app).get("/users");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });
  it("responds with limited users", async () => {
    const response = await supertest(app).get("/users/?limit=1");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toBe(1);
  });
  it("responds with all users if limit query is a string", async () => {
    const response = await supertest(app).get("/users/?limit=bannana");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length > 1).toBe(true);
  });
});
