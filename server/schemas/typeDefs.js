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

   type Image {
      id: Int!
      publicId: String!
   }

   type Message {
      id: ID!
      user: String!
      content: String!
   }

   type Query {
      users: [profileData]
      auctions: [Auction]
      auction(id: String): Auction
      messages: [Message!]
   }

   type Mutation {
      addUser(username: String!, email:String!, firstName:String!, password:String!, lastName: String!, profilePic: String): Auth
      login(email: String!, password: String!): Auth
      auction(itemName: String!, id: ID!, description: String!): Auth
      uploadImage(file: Upload!): File

      profileUpload(publicId: String!): Image

      postMessage(user: String!, content: String!): ID!
   }
`;

module.exports = typeDefs;
