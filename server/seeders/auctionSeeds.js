const { Profile, Auction } = require("../models");
const db = require("../config/connection");
const auctionSeeds = [
   {
      itemName: "Good sneakers",
      description: "They're good",
      image: "https://res.cloudinary.com/theplugselect/image/upload/v1623709442/ywg1n19nnuetghwdv4ib.jpg",
      seller: null,
      created: Date.now(),
      bidStart: Date.now(),
      bidEnd: new Date().setDate(new Date().getDate() + 30),
      bids: [],
   },
   {
      itemName: "Excellent sneakers",
      description: "They're excellent",
      image: "https://res.cloudinary.com/theplugselect/image/upload/v1623709442/ywg1n19nnuetghwdv4ib.jpg",
      seller: null,
      created: Date.now(),
      bidStart: Date.now(),
      bidEnd: new Date().setDate(new Date().getDate() + 30),
      bids: [],
   },
   {
      itemName: "Regular sneakers",
      description: "They're regular",
      image: "https://res.cloudinary.com/theplugselect/image/upload/v1623709442/ywg1n19nnuetghwdv4ib.jpg",
      seller: null,
      created: Date.now(),
      bidStart: Date.now(),
      bidEnd: new Date().setDate(new Date().getDate() + 30),
      bids: [],
   },
   {
      itemName: "Bad sneakers",
      description: "They're bad",
      image: "https://res.cloudinary.com/theplugselect/image/upload/v1623709442/ywg1n19nnuetghwdv4ib.jpg",
      seller: null,
      created: Date.now(),
      bidStart: Date.now(),
      bidEnd: new Date().setDate(new Date().getDate() + 30),
      bids: [],
   },
];

const seedAuctions = async () => {
   try {
      await Auction.deleteMany({});
      const users = await Profile.find({});
      const auctions = await Auction.insertMany(auctionSeeds);
      for (auction of auctions) {
         const tempUser = users[Math.floor(Math.random() * users.length)]; // random user to assign as the seller
         const tempBidder = users[Math.floor(Math.random() * users.length)]; // random user to assign as one of the bidders

         auction.seller = tempUser._id;
         // push a bid object that contains the tempBidder, the bid amount, and the current date
         auction.bids.push({
            bidder: tempBidder._id,
            amount: 10,
            time: new Date(),
         });
         // await to save the auction
         await auction.save();
      }
      return;
   } catch (err) {
      return;
   }
};

module.exports = { seedAuctions };
