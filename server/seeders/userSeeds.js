const { Profile, Auction } = require("../models");

const userSeeds = [
   {
      email: "test@test.com",
      firstName: "Fuckme",
      lastName: "yikes",
      userID: "test",
      profilePic:
         "https://res.cloudinary.com/theplugselect/image/upload/v1623709442/ywg1n19nnuetghwdv4ib.jpg",
      posts: ["Your product sucks bro lol"],
   },
   {
      email: "santos@test.com",
      firstName: "Santos",
      lastName: "Gonzalez",
      userID: "santos_test",
      profilePic:
         "https://res.cloudinary.com/theplugselect/image/upload/v1623709442/ywg1n19nnuetghwdv4ib.jpg",
      posts: ["Your product sucks bro lol"],
   },
   {
      email: "alan@test.com",
      firstName: "Alan",
      lastName: "Man",
      userID: "alan_test",
      profilePic:
         "https://res.cloudinary.com/theplugselect/image/upload/v1623709442/ywg1n19nnuetghwdv4ib.jpg",
      posts: ["Your product sucks bro lol"],
   },
   {
      email: "avi@test.com",
      firstName: "Avi",
      lastName: "Mancillas",
      userID: "avi_test",
      profilePic:
         "https://res.cloudinary.com/theplugselect/image/upload/v1623709442/ywg1n19nnuetghwdv4ib.jpg",
      posts: ["Your product sucks bro lol"],
   },
   {
      email: "thomas@test.com",
      firstName: "Thomas",
      lastName: "Bolling",
      userID: "thomas_test",
      profilePic:
         "https://res.cloudinary.com/theplugselect/image/upload/v1623709442/ywg1n19nnuetghwdv4ib.jpg",
      posts: ["Your product sucks bro lol"],
   },
];

const seedUsers = async () => {
   try {
      await Profile.deleteMany({});
      await Profile.insertMany(userSeeds);
      return;
   } catch (err) {
      console.log(err);
      return;
   }
};



module.exports = {seedUsers}