const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

mongoose.connect("mongodb://localhost:27017/yelp-camp");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});

  for (let i = 0; i < 300; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) * 20;
    const camp = new Campground({
      author: "668c07426aba3303995e2098",
      title: `${sample(descriptors)} ${sample(places)}`,
      price,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod excepturi repellat sunt fugiat sequi pariatur obcaecati. Nobis eos incidunt distinctio illo unde aut cum excepturi quas dignissimos, earum atque!",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
      imageUrl: [
        {
          url: "https://res.cloudinary.com/dcfks6nqb/image/upload/v1721230538/YelpCamp/i1eorbspqxuimaqjyj0q.jpg",
          filename: "YelpCamp/i1eorbspqxuimaqjyj0q",
        },
        {
          url: "https://res.cloudinary.com/dcfks6nqb/image/upload/v1721230576/YelpCamp/zuzsoaiqi8mgu0voaidv.jpg",
          filename: "YelpCamp/zuzsoaiqi8mgu0voaidv",
        },
        {
          url: "https://res.cloudinary.com/dcfks6nqb/image/upload/v1721230541/YelpCamp/z3addhszs4kfexxpoqwg.jpg",
          filename: "YelpCamp/z3addhszs4kfexxpoqwg",
        },
      ],
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
