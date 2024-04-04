const db = require("./connection");
const { User, Product, Theme } = require("../models");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  await cleanDB("Theme", "themes");
  await cleanDB("Product", "products");
  await cleanDB("User", "users");

  const themes = await Theme.insertMany([
    { name: "Star Wars" },
    { name: "Harry Potter" },
    { name: "City" },
    { name: "Marvel" },
    { name: "Lord of the Rings" },
  ]);

  console.log("themes have been seeded!");

  const products = await Product.insertMany([
    {
      name: "Republic Dropship with AT-OT Walker(10195)",
      theme: themes[0],
      description:
        "The LEGO Gunship with AT-OT is an iconic set that brings to life the epic battles of the Star Wars universe. Very hard to find a cheap sealed in box now days. Also came out in what is considered one of the best years 2009",
      image: "",
      price: 2000,
      quantity: 1,
    },
    {
      name: "Diagon Alley(10217)",
      theme: themes[1],
      description:
        "The LEGO Diagon Alley set is a magical recreation of the bustling wizarding shopping street from the Harry Potter series. This set came out in 2011. ",
      image: "",
      price: 400,
      quantity: 1,
    },
    {
      name: "Airport Shuttle(6399)",
      theme: themes[2],
      description:
        "This lego city set is one of a kind with it's unique build coming so early as 1990. This set is one of the most vintage if not the most of the lego city collection.",
      image: "",
      price: 3800,
      quantity: 1,
    },
    {
      name: "The SHIELD Helicarrier (76042)",
      theme: themes[3],
      description:
        "This LEGO set is an iconic and highly sought-after Marvel set released in 2015.",
      image: "",
      price: 650,
      quantity: 1,
    },
    {
      name: "Tower of Orthanc(10237)",
      theme: themes[4],
      description:
        "Well for beginners not many sets are 2 feet tall like the Tower of Orthanc. Like many sets on this website it is highly coveted collectible that was released in 2013.",
      image: "",
      price: 750,
      quantity: 1,
    },
  ]);
  console.log("products seeded");

  await User.create({
    firstName: "Nolan",
    lastName: "Fox",
    email: "example@testmail.com",
    password: "pass1234",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Thomas",
    lastName: "Denton",
    email: "thomas@testmail.com",
    password: "pass12345",
  });

  console.log("users have been seeded");

  process.exit();
});
