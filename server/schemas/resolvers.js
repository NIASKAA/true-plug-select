const { profileData, Auction, Bid } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const cloudinary = require("cloudinary")
require('dotenv').config();

const resolvers = {
  Query: {
    users: async () => {
      return await profileData.find({});
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await profileData.findById(context.user._id).populate("bids")
        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    auctions: async () => {
      return await Auction.find({}).populate("bids");
    },
    auction: async ({ id }) => {
      return await Auction.findById(id).populate("bids");
    },
    messages: () => messages,
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await profileData.create(args);
      const token = signToken(user);
      return { token, user };
    },
    createAuction: async (parent, args) => {
      return await Auction.create(args);
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

    postMessage: (parent, { user, content }) => {
      const id = messages.length;
      messages.push({
        id,
        user,
        content
      });
      return id;
    },
    addBid: async (parent, args, context) => {
      const { bidAmount, auctionId, userId } = args;
      const bid = await Bid.create({
        bidAmount: bidAmount,
        auction: auctionId,
        bidder: userId
      });
      const product = await Auction.findOneAndUpdate(
        { _id: args.auctionId },
        {
          $push: { bids: bid },
        }
      );
      console.log(product);
      return bid;
    },
    deleteAuction: async (parent, { id }) => {
      return await Auction.findOneAndDelete({ _id: id });
    },
    updateAuction: async (parent, args) => {
      return await Auction.findOneAndUpdate({ _id: args.id }, { args });
    },
    updateUser: async (parent, args) => {
      return await profileData.findOneAndUpdate({ _id: args.id }, args);
    },

    addProfilePic: async(parent, {imageURL}, context)=> {
      const user = await profileData.findOneAndUpdate({_id: context._id}, {profilePic: imageURL});
      return user;
    },
    profileUpload: async (parent, { photo }) => {
      cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
      });

      try {
        const result = await cloudinary.v2.uploader.upload(photo, {
          allowed_formats: ["jpg", "png"],
          public_id: "",
          folder: "test",
          
        });
        return `Successful-Photo URL: ${result.url}`;
      } catch (e) {
        return `Image could not be uploaded:${e.message}`;
      }
    }
  },
};

module.exports = resolvers;
