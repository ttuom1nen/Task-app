const request = require("supertest")
const app = require("../src/app")


userSignup("Should signup a new user", async () => {
    await (await request(app).post("/users")).setEncoding({
        name: "Jest user",
        email: "jestuser@example.com",
        password: "ValidPassword01"
    }).expect(201)
})
