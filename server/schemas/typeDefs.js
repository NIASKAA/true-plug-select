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
      bidsWon: [Bid]
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
      bidder: profileData
   } 
   type Auction {
      _id: ID
      itemName: String
      image: String
      description: String
      category: String
      brand: String
      seller: profileData
      channelId: String
      bids: [Bid]
   }

   type Auth {
      token: ID
      user: profileData
   }

   type Image {
      _id: Int!
      publicId: String!
   }

   type Message {
      messageId: ID
      user: String!
      content: String!
      room(auctionRooms: ID): Channel
   }

   type Channel {
      id: ID!
      auctionRooms(channelID: ID): [Auction]
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
      auctionRoom: [Auction]
      getAllBidsByAuction(auctionId: ID!): [Bid]
      getMaxBid(auctionId: ID!): Bid
   }

   type Mutation {
      addUser(username: String!, email:String!, firstName:String!, password:String!, lastName: String!, profilePic: String): Auth
      login(email: String!, password: String!): Auth
      auction(itemName: String!, id: ID!, description: String! category: String! brand: String! seller: ID): Auth
      postMessage(user: String!, content: String!, channelId: String): ID!
      createAuction(itemName: String! description: String, image: String, category: String, brand: String, seller: ID!): Auction
      deleteAuction(id: ID!): Auction
      updateAuction(id: ID!): Auction
      updateUser(newUsername: String! id: ID): profileData
      addBid(auctionId: ID! bidAmount: Float!, userId: ID!): Bid
      profileUpload(photo: String): String
      addProfilePic(imageURL: String! id: ID): profileData
      createRoom(channelId: ID): Auction
      winAuction(auctionId: ID!): Bid
   }
`;

module.exports = typeDefs;
