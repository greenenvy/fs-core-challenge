db = db.getSiblingDB("chat");

db.createCollection("chat");

db.users.insertMany([
  {
    _id: "65b2104a7fbdbe6087ce1096",
    username: "joffrey",
  },
  {
    _id: "65b2104a7fbdbe6087ce1097",
    username: "NINJA",
  },
  {
    _id: "65b2104a7fbdbe6087ce1098",
    username: "i am mister brilliant",
  },
  {
    _id: "65b2104a7fbdbe6087ce1099",
    username: "martin57",
  },
  {
    _id: "65b2104a7fbdbe6087ce109a",
    username: "Patricia",
  },
  {
    _id: "65b2104a7fbdbe6087ce109b",
    username: "user1",
  },
  {
    _id: "65b2104a7fbdbe6087ce109c",
    username: "user2",
  },
  {
    _id: "65b2104a7fbdbe6087ce109d",
    username: "user3",
  },
  {
    _id: "65b2104a7fbdbe6087ce109e",
    username: "user4",
  },
  {
    _id: "65b2104a7fbdbe6087ce109f",
    username: "user5",
  },
]);

db.chat.insertMany([
  {
    sender: "65b2104a7fbdbe6087ce1096",
    content: "Brilliant",
    posted: new Date(1520636400000),
  },
  {
    sender: "65b2104a7fbdbe6087ce1097",
    content: "Great resource, thanks",
    posted: new Date(1520672100000),
  },
  {
    sender: "65b2104a7fbdbe6087ce1098",
    content: "THANKSSSS!!!!!",
    posted: new Date(1520673000000),
  },
  {
    sender: "65b2104a7fbdbe6087ce1099",
    content: "Thanks Peter",
    posted: new Date(1520673540000),
  },
  {
    sender: "65b2104a7fbdbe6087ce109a",
    content: "Sounds good to me!",
    posted: new Date(1520673720000),
  },
  {
    sender: "65b2104a7fbdbe6087ce109b",
    content:
      "Hey folks! I wanted to get in touch with you regarding the project. Please, let me know how you plan to contribute.",
    posted: new Date(1520673720000),
  },
]);
