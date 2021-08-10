const { gql } = require('apollo-server-express');

const typeDefs = gql`
   type profileData {
      _id: ID
      email: String
      username: String
      firstName: String
      lastName: String
      profilePic: String
      bids: [Bid]
   }

   type File {
      filename: String!
      mimetype: String!
      encoding: String!
    }

   type Bid {
      _id: ID
      auction: Auction
      bidAmount: Float
      timeCreated: String
      bidder: ID
   }
   type Auction {
      _id: ID
      itemName: String
      image: String
      description: String
      category: String
      brand: String
      seller: profileData
      bids: [Bid]
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
      id: ID
      user: String!
      content: String!
   }

   type Checkout {
      session: ID
   }
   
   type Subscription {
      messages: [Message!]
   }

   type Query {
      users: [profileData]
      user: profileData
      userById(id: ID): profileData
      auctions: [Auction]
      auction(id: String): Auction
      messages: [Message!] 
   }

   type Mutation {
      addUser(username: String!, email:String!, firstName:String!, password:String!, lastName: String!, profilePic: String): Auth
      login(email: String!, password: String!): Auth
      auction(itemName: String!, id: ID!, description: String! category: String! brand: String! seller: ID): Auth
      postMessage(user: String!, content: String!): ID!
      createAuction(itemName: String! description: String, image: String, category: String, brand: String, seller: ID!): Auction
      deleteAuction(id: ID!): Auction
      updateAuction(id: ID!): Auction
      updateUser(id: ID!): profileData
      addBid(auctionId: ID! bidAmount: Float!, userId: ID!): Bid
      profileUpload(photo: String): String
      addProfilePic(imageURL: String! id: ID): profileData
      winAuction(auctionId: ID!): Bid
   }

`;

module.exports = typeDefs;
