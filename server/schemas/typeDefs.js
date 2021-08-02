const { gql } = require('apollo-server-express');

const typeDefs = gql`
   type profileData {
      _id: ID
      email: String
      username: String
      firstName: String
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

   type Image {
      id: Int!
      publicId: String!
   }

   type Query {
      users: [profileData]
      auctions: [Auction]
      auction(id: String): Auction
   }

   type Mutation {
      addUser(username: String!, email:String!, firstName:String!, password:String!, lastName: String!, profilePic: String): Auth
      login(email: String!, password: String!): Auth
      profileUpload(publicId: String!): Image
   }
`;

module.exports = typeDefs;
