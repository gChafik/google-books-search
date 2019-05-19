const mongoose = require("mongoose");
const Book = require("../models/book");

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    family: 4 
  }
);

const booksSeed = [
  {
    authors: ["Robert Louis Stevenson"],
    _id: "5c3e29b2ecc3041a5ac64a11",
    googleId: "3dwNAAAAQAAJ",
    title: "Treasure Island",
    subtitle: "Treasure Island",
    link:
      "https://play.google.com/store/books/details/Robert_Louis_Stevenson_Treasure_Island?id=3dwNAAAAQAAJ",
    description:
      "Treasure Island, published in 1883, popularized the now familiar characters of pirates and brought them to rum-swilling life. When an old sailor named Billy Bones dies in the inn belonging to young Jim Hawkins’s parents, he leaves a greasy old map on which an “X” marks the spot where treasure is buried.",
    image:
      "https://books.google.com/books/content/images/frontcover/3dwNAAAAQAAJ?fife=w200-h300"
  },
  {
    authors: ["Yuval Noah Harari"],
    googleId: "FmyBAwAAQBAJ",
    title: "Sapiens: A Brief History of Humankind",
    subtitle: "A Brief History of Humankind",
    link:
      "hhttps://play.google.com/store/books/details/Yuval_Noah_Harari_Sapiens?id=FmyBAwAAQBAJ",
    description:
      "One hundred thousand years ago, at least six different species of humans inhabited Earth. Yet today there is only one—homo sapiens. What happened to the others? And what may happen to us?",
    image:
      "https://books.google.com/books/content/images/frontcover/FmyBAwAAQBAJ?fife=w200-h300"
  }
];

async function seed() {
  await mongoose
    .connect(
      MONGODB_URI,
      options
    )
    .then(() => {
      console.log("Seed: Connected to Database");
    })
    .catch(err => {
      console.log("Seed: Not Connected to Database ERROR! ", err);
    });
  for (let book of booksSeed) {
    const { _id: bookId } = await new Book({
      title: book.title,
      subtitle: book.subtitle,
      authors: book.authors,
      link: book.link,
      description: book.description,
      image: book.image,
      googleId: book.googleId
    }).save();
  }

  mongoose.disconnect();

  console.info("Seed: Done!");
}

seed();