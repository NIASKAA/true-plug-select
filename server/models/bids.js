const mongoose = require("mongoose");

const bidSchema = new mongoose.Schema({
  auction: {
    type: mongoose.Schema.ObjectId,
    references: "Auction",
    required: "No product to bid on was provided"
  },
  bidAmount: {
    type: Number,
    required: "No bid amount provided",
  },

  timeCreated: {
    type: Date,
    default: Date.now(),
  },

  bidder: {
    type: mongoose.Schema.ObjectId,
    ref: "profileData",
    required: "This bid has no user"
  },
});


const Bid = mongoose.model("Bid", bidSchema);

module.exports = {Bid, bidSchema};


