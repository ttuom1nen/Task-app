const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

// const teppoman = new User({ name: "Teppo", age: 20 });

// teppoman
//   .save()
//   .then(() => {
//     console.log(teppoman);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const Task = mongoose.model("Task", {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const task = new Task({ description: "Learn Mongoose", completed: true });

task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch((error) => {
    console.log(error);
  });
