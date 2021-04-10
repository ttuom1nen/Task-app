const request = require("supertest")
const app = require("../src/app")

test("Should signup a new user", async () => {
    await request(app).post("/users").send({
        name: "Jest user",
        email: "jestuser@example.com",
        password: "ValidPassword111"
    }).expect(201)
})
