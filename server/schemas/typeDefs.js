const { gql } = require('apollo-server-express');

const typeDefs = gql`
   scalar Upload
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
      image: String
      description: String
      seller: profileData

   }

   type Bid {

      _id: ID
      auction: Auction
      bidAmount: Float
      timeCreated: String
      bidder: ID

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

   type Subscription {
      messages: [Message!]
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
      postMessage(user: String!, content: String!): ID!
      createAuction(itemName: String! description: String, image: String, seller: ID!): Auction
      deleteAuction(id: ID!): Auction
      updateAuction(id: ID!): Auction
      updateUser(id: ID!): profileData
      addBid(auctionId: ID! bidAmount: Float!, userId: ID!): Bid
      profileUpload(photo: String): String
   }

`;

module.exports = typeDefs;
