const { profileData, Auction } = require("../models");

const userSeeds = [
   {
      email: "test@test.com",
      username: "test",
      firstName: "Fuckme",
      lastName: "yikes",
      username: "test",
      password:"test12345",
      profilePic:
         "https://res.cloudinary.com/theplugselect/image/upload/v1623709442/ywg1n19nnuetghwdv4ib.jpg",
      posts: ["Your product sucks bro lol"],
   },
   {
      email: "santos@test.com",
      username: "test",
      firstName: "Santos",
      lastName: "Gonzalez",
      password:"test12345",
      username: "santos_test",
      profilePic:
         "https://res.cloudinary.com/theplugselect/image/upload/v1623709442/ywg1n19nnuetghwdv4ib.jpg",
      posts: ["Your product sucks bro lol"],
   },
   {
      email: "alan@test.com",
      firstName: "Alan",
      password:"test12345",
      lastName: "Man",
      username: "alan_test",
      profilePic:
         "https://res.cloudinary.com/theplugselect/image/upload/v1623709442/ywg1n19nnuetghwdv4ib.jpg",
      posts: ["Your product sucks bro lol"],
   },
   {
      email: "avi@test.com",
      firstName: "Avi",
      password:"test12345",
      lastName: "Mancillas",
      username: "avi_test",
      profilePic:
         "https://res.cloudinary.com/theplugselect/image/upload/v1623709442/ywg1n19nnuetghwdv4ib.jpg",
      posts: ["Your product sucks bro lol"],
   },
   {
      email: "thomas@test.com",
      firstName: "Thomas",
      username: "test3",
      password:"test12345",
      lastName: "Bolling",
      username: "thomas_test",
      profilePic:
         "https://res.cloudinary.com/theplugselect/image/upload/v1623709442/ywg1n19nnuetghwdv4ib.jpg",
      posts: ["Your product sucks bro lol"],
   },
];
const seedUsers = async () => {
   try {
      await profileData.deleteMany({});
      await profileData.insertMany(userSeeds);
      return;
   } catch (err) {
      console.log(err);
      return;
   }
};



module.exports = {seedUsers}