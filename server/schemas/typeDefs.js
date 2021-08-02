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

   type File {
      filename: String!
      mimetype: String!
      encoding: String!
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
      addUser(username: String!, email:String!, firstName:String!, password:String!, lastName: String!, profilePic: String): Auth
      login(email: String!, password: String!): Auth
      uploadImage(file: Upload!): File

   }
`;

module.exports = typeDefs;
