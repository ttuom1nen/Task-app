const mongodb = require("mongodb");
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();

// Mongodb GUID includes a timestamp
console.log(id);
console.log(id.getTimestamp());

// Raw binary of id
console.log(id.id);

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to the database!");
    }

    const db = client.db(databaseName);

    // Insert one document
    db.collection("users").insertOne(
      {
        _id: id,
        name: "Bertha",
        age: 20,
      },
      (error, result) => {
        if (error) {
          return console.log("Unable to insert user");
        }

        console.log(result.ops);
      }
    );

    // Insert many documents
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
  }
);
