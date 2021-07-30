const { profileData, Auction } = require("../models");
const db = require("../config/connection");
const { seedAuctions } = require("./auctionSeeds");
const { seedUsers } = require("./userSeeds");
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

db.once("open", async () => {
   try {
      await seedUsers();
      await seedAuctions();
      console.log("All data seeded");
      process.exit(0);
   } catch (err) {
      console.log(err);
      process.exit(1);
   }
});

/*
this is how one of the exercises in class inserts documents that depend on other documents 

for us, we'd need to create users first and then use something like this to give products their user


  for (newClass of classes) {
    // randomly add each class to a school
    const tempSchool = schools[Math.floor(Math.random() * schools.length)];
    tempSchool.classes.push(newClass._id);
    await tempSchool.save();

    // randomly add a professor to each class
    const tempProfessor = professors[Math.floor(Math.random() * professors.length)];
    newClass.professor = tempProfessor._id;
    await newClass.save();

    // reference class on professor model, too
    tempProfessor.classes.push(newClass._id);
    await tempProfessor.save();
  }

*/
