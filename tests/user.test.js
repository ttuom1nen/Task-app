const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user");

const userOne = {
  name: "userOne",
  email: "userOne@example.com",
  password: "Kyrgyzstan01!",
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

test("Should signup a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Jest user",
      email: "jestuser@example.com",
      password: "Cape Verde!",
    })
    .expect(201);
});

test("Should login existing user", async () => {
  await request(app).post("/users/login").send({
    email: userOne.email,
    password: userOne.password,
  }).expect(200)
});

test("Should not login nonexistent user", async () => {
    await request(app).post("/users/login").send({
        email: "doesnotexist@nouser.com",
        password: "Austria01!",
    }).expect(400)
})