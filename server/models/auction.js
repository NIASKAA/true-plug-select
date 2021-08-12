const mongoose = require("mongoose");

// import bid schema to set up the bids field
const { bidSchema } = require("./bids");

const auctionSchema = new mongoose.Schema({
  itemName: { type: String, trim: true, required: "No item name was entered" },
  description: { type: String, trim: true },
  price: {type: Number},
  image: { type: String },
  seller: { type: mongoose.Schema.ObjectId, ref: "profileData" },
  category: {type: String},
  brand: {type: String},
  created: { type: String, default: Date.now() },
  bidStart: { type: String, default: Date.now() },
  bidEnd: { type: String, default: Date.now() },
  bids: [bidSchema],
  startingPrice: { type: Number, default: 0 },
  // channelId: { type: String, default: 0 }
  sold: {type:Boolean, default: false}
  
});



const model = mongoose.model("Auction", auctionSchema);

module.exports = model;
