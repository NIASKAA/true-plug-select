const { gql } = require('apollo-server-express');

const typeDefs = gql`
   type Profile {
      _id: ID
      email: String
      userID: String
      firstName: String
      lastName: String
      profilePic: String
   }

   type Auction {
      _id: ID
      itemName: String
      description: String
   }

   type Query {
      users: [Profile]
      auctions: [Auction]
   }

   type Mutation {
      addUser(userID: String!, email:String!, fistName:String!, lastName: String!, profilePic: String!): Profile
   }
`;

module.exports = typeDefs;
