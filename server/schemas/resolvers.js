const { profileData, Auction, Bid } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { PubSub } = require("graphql-yoga");
const { signToken } = require("../utils/auth");
const cloudinary = require("cloudinary");
require("dotenv").config();

// These 3 lines contain the messages array, subscribers contains the channels that are made for chat in apollo-server, and onMessagesUpdates pushes the messages
const messages = [];
const subscribers = [];
const onMessagesUpdates = (fn) => subscribers.push(fn);

const resolvers = {
  Query: {
    users: async () => {
      return await profileData.find({});
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await profileData.findById(context.user._id).populate("bids").populate("seller");
        return user;
      }
      throw new AuthenticationError("Not logged in");
    },
    userById: async (parent, args) => {
      return await profileData.findById(args.id).populate("bids").populate("auction");
    },
    auctions: async () => {
      return await Auction.find({}).populate("bids").populate("seller");
    },
    auction: async ({ id }) => {
      return await Auction.findById(id).populate("bids");
    },
    messages: () => messages,
    /*bid: async (parent, args, context) => {
      if(context.user) {
        const user = await profileData.findByid(context.user._id).populate("bids").populate("seller");
      }
    },*/
    /*checkout: async (parent, args, context) => {
      const line_items= [];
      
        const wonProduct = await stripe.products.create({
          name:
          description:
          images:
        })

        const price = await stripe.prices.create({
          product: auctionId.id
          unit_amount: 
          currency: 'usd'
        }) 

        line_items.push({
          price: maxBid
          quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });
    },*/
  },
  Mutation: {
    addUser: async (parent, args) => {
      try {
        const user = await profileData.create(args);
        const token = signToken(user);
        return { token, user };
      } catch (err) {
        console.log(err);
        throw new AuthenticationError("Taken");
      }
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

    winAuction: async (parent, { auctionId }) => {
      // find auction being sold and set it as sold
      const auction = await Auction.findByIdAndUpdate(auctionId, {
        sold:true
      }).populate("bids.auction");

      const {bids} = auction;

      // set the maxBid as the first Bid
      let maxBid = bids[bids.length-1];

      bids.forEach((bid)=> {
        if(bid.bidAmount > maxBid.bidAmount) {
          maxBid = bid;
        }
      });

      const winner = await profileData.findByIdAndUpdate(maxBid.bidder, {
        $push: {bidsWon: maxBid}
      });

      return maxBid;
    },

    postMessage: (parent, { user, content }) => {
      const id = messages.length;
      messages.push({
        id,
        user,
        content,
      });
      // Alerts server that there is a new message
      subscribers.forEach((fn) => fn());
      return id;
    },
    addBid: async (parent, args, context) => {
      const { bidAmount, auctionId, userId } = args;
      const bid = await Bid.create({
        bidAmount: bidAmount,
        auction: auctionId,
        bidder: userId,
      });
      const product = await Auction.findOneAndUpdate(
        { _id: args.auctionId },
        {
          $push: { bids: bid },
        }
      );
      const user = await profileData.findOneAndUpdate(
        { _id: userId },
        {
          $push: { bids: bid },
        }
      );

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

    addProfilePic: async (parent, { imageURL, id }, context) => {
      console.log(context);
      let userId = context.user._id ? context.user._id : id;
      console.log(userId);
      const user = await profileData.findOneAndUpdate({ _id: userId }, { profilePic: imageURL });
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
    },
  },
  // Real time chat update for messages to be posted so that I don't have to use a pollInterval to constantly ping the server for new messages
  // Uses generated channels to create chat sessions.
  Subscription: {
    messages: {
      subscribe: (parent, args, { pubsub = new PubSub() }) => {
        const channel = Math.random().toString(36).slice(2, 15);
        onMessagesUpdates(() => pubsub.publish(channel, { messages }));
        setTimeout(() => pubsub.publish(channel, { messages }), 0);
        return pubsub.asyncIterator(channel);
      },
    },
  },
};

module.exports = resolvers;
