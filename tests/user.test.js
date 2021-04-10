const request = require("supertest");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const app = require("../src/app");
const User = require("../src/models/user");

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
  _id: userOneId,
  name: "userOne",
  email: "userOne@example.com",
  password: "Kyrgyzstan01!",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET),
    },
  ],
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
  await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: userOne.password,
    })
    .expect(200);
});

test("Should not login nonexistent user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: "doesnotexist@nouser.com",
      password: "Austria01!",
    })
    .expect(400);
});

test("Should get profile for authorized user", async () => {
  await request(app)
    .get("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

test("Should not get profile for unauthorized user", async () => {
    await request(app)
        .get("/users/me")
        .send()
        .expect(401)
})