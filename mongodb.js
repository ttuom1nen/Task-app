const mongodb = require("mongodb");
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to the database!");
    }

    const db = client.db(databaseName);

    // Insert one document:
    // db.collection("users").insertOne(
    //   {
    //     name: "Bertha",
    //     age: 20,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // Insert many documents:
    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description:
    //         "tree surface adult bare distant explain living sound similar gather pale suit foot jack member serious wire few felt body slight car substance surrounded",
    //       completed: true,
    //     },
    //     {
    //       description:
    //         "string belong everything phrase cold image took standard stranger larger brain attached exchange brief donkey instrument specific refer dawn orange happy consider stretch guard",
    //       completed: false,
    //     },
    //     {
    //       description:
    //         "shadow might orbit choose oldest brick bare completely aside strong mass ride simply size before stairs fill tune service coal ago forest oil habit",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert documents");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // Get one document from db:
    // db.collection("users").findOne({ name: "Jen" }, (error, user) => {
    //   if (error) {
    //     return console.log("Unable to fetch document!");
    //   }

    //   console.log(user);
    // });

    // Get many documents from db
    // find returs a 'cursor', not the actual data
    // thats why .toArray is needed
    // db.collection("users")
    //   .find({ age: 27 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // Count the amount of found items:
    // db.collection("users")
    //   .find({ age: 27 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    // Get by id
    // db.collection("tasks").findOne(
    //   { _id: new ObjectID("6015c86d6f0df4173007cc9e") },
    //   (error, task) => {
    //     console.log(task);
    //   }
    // );

    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     console.log(tasks);
    //   });

    // Update a document:
    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("6015c26eb17a26046080303a"),
    //     },
    //     {
    //       $set: {
    //         name: "Mike",
    //       },

    //       //Increment a value:
    //       $inc: {
    //         age: 1,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    db.collection("tasks")
      .updateMany(
        {
          completed: false,
        },
        {
          $set: {
            completed: true,
          },
        }
      )
      .then((result) => {
        console.log(result.modifiedCount);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
