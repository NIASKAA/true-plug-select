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

   type Query {
      users: [profileData]
      auctions: [Auction]
      auction(id: String): Auction
   }

   type Mutation {
      addUser(username: String!, email:String!, firstName:String!, password:String!, lastName: String!, profilePic: String): Auth
      login(email: String!, password: String!): Auth
      uploadImage(file: Upload!): File
      createAuction(itemName: String! description: String, image: String, seller: ID!): Auction
      deleteAuction(id: ID!): Auction
      updateAuction(id: ID!): Auction
      updateUser(id: ID!): profileData
      addBid(auctionId: ID! bidAmount: Float!, userId: ID!): Bid
      profileUpload(publicId: String!): Image
   }

`;

module.exports = typeDefs;
