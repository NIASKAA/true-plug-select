const { Profile, Auction } = require('../models');

const resolvers = {
   Query: {
      users: async () => {
         return await Profile.find({});
      },
      auctions: async () => {
         return await Auction.find({}).populate("bids");
      },
   },
   Mutation: {
      addUser: async (parent, { userID, email, fistName, lastName, profilePic }) => {
         return await School.create({ userID, email, fistName, lastName, profilePic });
      },
   },
};

module.exports = resolvers;
