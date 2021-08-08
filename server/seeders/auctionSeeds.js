const { profileData, Auction } = require("../models");
const db = require("../config/connection");
const auctionSeeds = [
  {
    itemName: "Among Us Nugget",
    description: "hOlY ShIt BrO",
    image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1623718837/yikes_eh7ujm.jpg",
    seller: null,
    created: Date.now(),
    bidStart: Date.now(),
    bidEnd: new Date().setDate(new Date().getDate() + 30),
    bids: [],
  },
  {
    itemName: "Bird",
    description: "Bird, It's just a bird.",
    image: "https://res.cloudinary.com/theplugselect/image/upload/v1623709442/ywg1n19nnuetghwdv4ib.jpg",
    seller: null,
    created: Date.now(),
    bidStart: Date.now(),
    bidEnd: new Date().setDate(new Date().getDate() + 30),
    bids: [],
  },
  {
    itemName: "Off-White Moto-Wrap",
    description: "A little worn, still near-mint",
    image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1623718839/offwhiteshoes_cmxsyk.jpg",
    seller: null,
    created: Date.now(),
    bidStart: Date.now(),
    bidEnd: new Date().setDate(new Date().getDate() + 30),
    bids: [],
  },
  {
    itemName: "Off-White Galaxy Hoodie",
    description: "Bruh, These are dope.",
    image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1623718857/offwhitegalaxy_wii4hp.jpg",
    seller: null,
    created: Date.now(),
    bidStart: Date.now(),
    bidEnd: new Date().setDate(new Date().getDate() + 30),
    bids: [],
  },
  {
    itemName: "Phenex Gundam Mastermind",
    description: "New, Not opened",
    image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1623718857/phenex_scb1um.jpg",
    seller: null,
    created: Date.now(),
    bidStart: Date.now(),
    bidEnd: new Date().setDate(new Date().getDate() + 30),
    bids: [],
  },
  {
    itemName: "Off-White Alien Shirt",
    description: "New with tags",
    image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1623718856/offwhitealien_regjfq.jpg",
    seller: null,
    created: Date.now(),
    bidStart: Date.now(),
    bidEnd: new Date().setDate(new Date().getDate() + 30),
    bids: [],
  },
  {
    itemName: "Balencigaga Shoes",
    description: "S.O.C.K.S",
    image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1623718839/balenciagashoes_w1oqji.jpg",
    seller: null,
    created: Date.now(),
    bidStart: Date.now(),
    bidEnd: new Date().setDate(new Date().getDate() + 30),
    bids: [],
  },
  {
    itemName: "Off-White Jacket",
    description: "Reflective Jacket",
    image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1623718858/offwhitemonclear_ebb4ey.jpg",
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
    const users = await profileData.find({});
    const auctions = await Auction.insertMany(auctionSeeds);
      console.log(auctions);
      console.log(users);
    for (let auction of auctions) {
      const tempUser = users[Math.floor(Math.random() * users.length)]; // random user to assign as the seller
      auction.seller = tempUser._id;
      // await to save the auction
      await auction.save();
      console.log(auctions)
    }
    return;
  } catch (err) {
    return;
  }
};

module.exports = { seedAuctions };
