const { profileData, Auction, Bid } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const uploadFile = require("../utils/fileUpload");
const { createWriteStream } = require("fs");

const resolvers = {
  Query: {
    users: async () => {
      return await profileData.find({});
    },
    auctions: async () => {
      return await Auction.find({}).populate("bids");
    },
    auction: async ({ id }) => {
      return await Auction.findById(id).populate("bids");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await profileData.create(args);
      const token = signToken(user);
      return { token, user };
    },
    createAuction: async (parent, body) => {
      return await Auction.create(body);
    },
    login: async (parent, { email, password }) => {
      const user = await profileData.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect");
      }

      const correctPass = await user.isCorrectPassword(password);

      if (!correctPass) {
        throw new AuthenticationError("Incorrect");
      }

      const token = signToken(user);
      return { token, user };
    },
    uploadImage: async (parent, args) => {
      console.log(args);
      const { stream, filename, mimetype, encoding } = await args.file;
      console.log(args.file);
      // Store the file in the filesystem.
      return args;
    },

    addBid: async (parent, { id, body }) => {
      const bid = await Bid.create(body);
      const product = await Auction.findOneAndUpdate(
        { _id: id },
        {
          $push: { bids: bid },
        }
      );

      return product;
    },
    deleteAuction: async (parent, { id }) => {
      return await Auction.findOneAndDelete({ _id: id });
    },
    updateAuction: async (parent, { id, body }) => {
      return await Auction.findOneAndUpdate({ _id: id }, body);
    },
    updateUser: async (parent, { id, body }) => {
      return await profileData.findOneAndUpdate({_id: id}, body);
    },
  },
};

module.exports = resolvers;
