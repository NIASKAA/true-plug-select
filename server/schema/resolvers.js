const { Profile, Auction } = require('../models');

const resolvers = {
   Query: {
      users: async () => {
         return await Profile.findOne({});
      },
      auctions: async () => {
         return await Auction.findOne({}).populate("bids");
      },
   },
   Mutation: {
      addUser: async (parent, { userID, email, fistName, lastName, profilePic }) => {
         return await School.create({ userID, email, fistName, lastName, profilePic });
      },
      login: async (parent, {email, password}) => {
         const user = await Profile.findOne({email});
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
