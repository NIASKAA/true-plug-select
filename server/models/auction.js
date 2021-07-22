const mongoose = require("mongoose");

const auctionSchema = new mongoose.Schema({
   itemName: { type: String, trim: true, required: "No item name was entered" },
   description: { type: String, trim: true },
   image: { type: String },
   seller: { type: mongoose.Schema.ObjectId, ref: "profileData" },
   created: { type: Date, default: Date.now },
   bidStart: { type: Date, default: Date.now },
   bidEnd: { type: Date, default: Date.now },
   bids: [
      {
         bidder: { type: mongoose.Schema.ObjectId, ref: "ProfileData" },
         bid: Number,
         time: Date,
      },
   ],
});

const model = mongoose.model("Auction", auctionSchema);

module.exports = model;
