const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error();
      }
    },
  },
});

const teppoman = new User({ name: "Teppo", age: 20, email: "teppo@" });

teppoman
  .save()
  .then(() => {
    console.log(teppoman);
  })
  .catch((error) => {
    console.log(error);
  });

// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//     required: true,
//     validate(value) {
//       if (value.length < 5) {
//         throw new Error("Description is too short!");
//       }
//     },
//   },
//   completed: {
//     type: Boolean,
//     required: true,
//   },
// });

// const task = new Task({ description: "Rosi", completed: true });

// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
