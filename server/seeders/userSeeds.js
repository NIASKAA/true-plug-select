const { profileData } = require("../models");

const userSeeds = [
   {
      email: "test@test.com",
      username: "test",
      firstName: "Fuckme",
      lastName: "yikes",
      password:"test12345",
      profilePic:
         "https://res.cloudinary.com/theplugselect/image/upload/v1623709442/ywg1n19nnuetghwdv4ib.jpg",
   },
   {
      email: "santos@test.com",
      username: "santos",
      firstName: "Santos",
      lastName: "Gonzalez",
      password:"test12345",
      profilePic:
         "https://res.cloudinary.com/theplugselect/image/upload/v1623709442/ywg1n19nnuetghwdv4ib.jpg",
   },
   {
      email: "alan@test.com",
      firstName: "Alan",
      password:"test12345",
      lastName: "Man",
      username: "alan_test",
      profilePic:
         "https://res.cloudinary.com/theplugselect/image/upload/v1623709442/ywg1n19nnuetghwdv4ib.jpg",
   },
   {
      email: "avi@test.com",
      firstName: "Avi",
      password:"test12345",
      lastName: "Mancillas",
      username: "avi_test",
      profilePic:
         "https://res.cloudinary.com/theplugselect/image/upload/v1623709442/ywg1n19nnuetghwdv4ib.jpg",
   },
   {
      email: "thomas@test.com",
      firstName: "Thomas",
      username: "thomas_test",
      password:"test12345",
      lastName: "Bolling",
      profilePic:
         "https://res.cloudinary.com/theplugselect/image/upload/v1623709442/ywg1n19nnuetghwdv4ib.jpg",
   },
   {
      email: "test@gmail.com",
      username: "Callul",
      firstName: "Fuckme",
      password:"gundam",
      lastName: "yikes",
      profilePic:
         "https://res.cloudinary.com/ddtqwizaf/image/upload/v1628145913/j0wskkihx7y3mtlxhwma.png",
   },
];
const seedUsers = async () => {
   try {
      await profileData.deleteMany({});
      await profileData.insertMany(userSeeds, { forceServerObjectId: true });
      return;
   } catch (err) {
      console.log(err);
      return;
   }
};



module.exports = {seedUsers}