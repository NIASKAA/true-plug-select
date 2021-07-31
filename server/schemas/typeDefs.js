const { gql } = require('apollo-server-express');

const typeDefs = gql`
   type profileData {
      _id: ID
      email: String
      userID: String
      username: String
      lastName: String
      profilePic: String
   }

   type Auction {
      _id: ID
      itemName: String
      description: String
   }

   type Auth {
      token: ID
      user: profileData
   }

   type Query {
      users: [profileData]
      auctions: [Auction]
      auction(id: String): Auction
   }

   type Mutation {
      addUser(userID: String!, email:String!, username:String!, password:String!, lastName: String!, profilePic: String!): Auth
      login(email: String!, password: String!): Auth
   }
`;

module.exports = typeDefs;
