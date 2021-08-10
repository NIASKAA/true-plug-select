const mongoose = require("mongoose");

// import bid schema to set up the bids field
const { bidSchema } = require("./bids");

const auctionSchema = new mongoose.Schema({
  itemName: { type: String, trim: true, required: "No item name was entered" },
  description: { type: String, trim: true },
  image: { type: String },
  seller: { type: mongoose.Schema.ObjectId, ref: "profileData" },
  category: {type: String},
  brand: {type: String},
  created: { type: Date, default: Date.now() },
  bidStart: { type: Date, default: Date.now() },
  bidEnd: { type: Date, default: Date.now() },
  bids: [bidSchema],
  startingPrice: { type: Number, default: 0 },
  sold: {type:Boolean, default: false}
  
});
auctionSchema.methods.getWinner = async function() {
  const bids = this.bids;
  for (let bid of bids) {
    console.log(bid);
  }

}
const model = mongoose.model("Auction", auctionSchema);

module.exports = model;
