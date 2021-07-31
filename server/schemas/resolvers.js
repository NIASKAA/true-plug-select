const { profileData, Auction } = require('../models');
const {AuthenticationError} = require('apollo-server-express')
const {signToken} = require('../utils/auth');
const resolvers = {
   Query: {
      users: async () => {
         return await profileData.findOne({});
      },
      auctions: async () => {
         return await Auction.find({}).populate("bids");
      },

      auction: async ({id})=> {
         return await Auction.findById(id).populate("bids");
      },

   },
   Mutation: {
     addUser: async (parent, args) => {
        const user = await profileData.create(args);
        const token = signToken(user)
        return {token, user}
     },
      login: async (parent, {email, password}) => {
         const user = await profileData.findOne({email});
         if (!user) {
            throw new AuthenticationError('Incorrect')
         }

         const correctPass = await user.isCorrectPassword(password);

         if(!correctPass) {
            throw new AuthenticationError('Incorrect')
         }

         const token = signToken(user);
         return {token , user}
      }
   },
};

module.exports = resolvers;
