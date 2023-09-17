const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

app.listen("9000", () => {
  console.log("server is listening on port 9000");
});

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://sid11:Geeks123@cluster0.53u9hgq.mongodb.net/");

const db = mongoose.connection;

db.on("error", () => {
  console.log("connection not successful");
});

db.on("open", () => {
  console.log("connection successful");
});

require("./Routes/restaurants.routes")(app);

// CRUD operations

// create a user ---- POST
// get a user ----- GET
// update a user ----- PUT
// delete a user ----- DELETE

// GET request

// app.get("/", (req, res) => {
//   res.send("Learning Node JS");
// });

// const users = [
//   {
//     id: 1,
//     name: "ankit",
//     age: "23",
//   },

//   {
//     id: 2,
//     name: "ankita",
//     age: "25",
//   },

//   {
//     id: 3,
//     name: "rahul",
//     age: "33",
//   },

//   {
//     id: 4,
//     name: "rohit",
//     age: "35",
//   },
// ];

// // Get request to return all users

// app.get("/api/users", (req, res) => {
//   res.json(users);
// });

// // GET request to return a user with particukar id

// app.get("/api/users/:id", (req, res) => {
//   const id = req.params.id;

//   console.log("id", id);

//   const user = users.find((user) => user.id == id);

//   if (!user) {
//     res.status(404).json({ message: "User does not exist" });
//   }

//   res.json(user);
// });

// // Create a new user

// app.post("/api/user", (req, res) => {
//   const name = req.body.name;
//   const age = req.body.age;

//   const user = {
//     id: Math.random() * 1000,
//     name: name,
//     age: age,
//   };

//   users.push(user);

//   res.json(users);
// });

// // Update user by id

// app.put("/api/user/:id", (req, res) => {
//   const id = req.params.id;

//   const user = users.find((user) => user.id == id);

//   if (!user) {
//     res.status(404).json({ message: "User does not exist" });
//   }

//   const keys = Object.keys(req.body);

//   keys.forEach((key) => {
//     if (!user[key]) {
//       res.status(404).json({ message: "Invalid Key" });
//     }

//     user[key] = req.body[key];
//   });

//   res.json(users);
// });

// // delete a user

// app.delete("/api/user/:id", (req, res) => {
//   const id = req.params.id;

//   const user = users.find((user) => user.id == id);

//   if (!user) {
//     res.status(404).json({ message: "User does not exist" });
//   }

//   const filteredUsers = users.filter((user) => user.id != id);

//   res.json(filteredUsers);
// });
