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
  {
    itemName: "Off-White Shoes",
    description: "Check out these arrows bro",
    image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1623718855/offwhiteshoes2_a7anr9.jpg",
    seller: null,
    created: Date.now(),
    bidStart: Date.now(),
    bidEnd: new Date().setDate(new Date().getDate() + 30),
    bids: [],
  },
  {
    itemName: "Getter Bear Brick",
    description: "Yo is that a bear?",
    image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1628448858/medicom-toy-getter-robot-bearbrick-400-limited-edition-01_be7fca.jpg",
    seller: null,
    created: Date.now(),
    bidStart: Date.now(),
    bidEnd: new Date().setDate(new Date().getDate() + 30),
    bids: [],
  },
  {
    itemName: "Bape Rx-78-2 Gundam MG",
    description: "You fooking ape",
    image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1628448946/3__79362.1607094545_ay6i5w.jpg",
    seller: null,
    created: Date.now(),
    bidStart: Date.now(),
    bidEnd: new Date().setDate(new Date().getDate() + 30),
    bids: [],
  },
  {
    itemName: "Y-3 Suika Shoes",
    description: "Feels like a damn sock bro",
    image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1628449341/310_oxqojj.jpg",
    seller: null,
    created: Date.now(),
    bidStart: Date.now(),
    bidEnd: new Date().setDate(new Date().getDate() + 30),
    bids: [],
  },
  {
    itemName: "Toyota Char Edition",
    description: "It's 3 times as fast.",
    image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1628449340/bd6b75c8f8952b6ab149df9378ad63ee_mv0zg7.jpg",
    seller: null,
    created: Date.now(),
    bidStart: Date.now(),
    bidEnd: new Date().setDate(new Date().getDate() + 30),
    bids: [],
  },
  {
    itemName: "KTZ Jacket",
    description: "Bit Satanic? ",
    image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1628449340/15057567_27262564_600_kjoelk.webp",
    seller: null,
    created: Date.now(),
    bidStart: Date.now(),
    bidEnd: new Date().setDate(new Date().getDate() + 30),
    bids: [],
  },
  {
    itemName: "Mastermind Rx-78-2 Gundam",
    description: "This makes me moist",
    image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1628449654/untitled-78_f1r3vz.jpg",
    seller: null,
    created: Date.now(),
    bidStart: Date.now(),
    bidEnd: new Date().setDate(new Date().getDate() + 30),
    bids: [],
  },
  {
    itemName: "KAWS Dissected Statue",
    description: "DAYUM WHAT IS THAT",
    image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1628449757/kaws-4ft-dissected-companlon-kaws-1-3m-anatomy_hlmbnk.jpg",
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
