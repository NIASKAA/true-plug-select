import { gql } from "@apollo/client";

export const Get_Me = gql`
  {
    me {
      _id
      username
    }
  }
`;

export const Query_User = gql`
  query {
    user {
      _id
      username
      firstName
      email
      profilePic
      bidsWon {
        timeCreated
        bidAmount
        auction {
          _id
        }
      }
    }
  }
`;

export const Get_All_Products = gql`
  {
    auctions {
      _id
      itemName
      image
      price
      description
      category
      brand
      bidEnd
      seller {
        username
        _id
      }
    }
  }
`;

export const Query_Messages = gql`
  query {
    message {
      content
      user {
        username
      }
    }
  }
`;

export const Get_Max_Bid = gql`
  query GetMaxBid($auctionId: ID!) {
    getMaxBid(auctionId: $auctionId) {
      bidAmount
      bidder {
        username
        _id
      }
    }
  }
`;

export const Get_All_Bids_Auction = gql`
  query getAllBids($auctionId: ID!) {
    getAllBidsByAuction(auctionId: $auctionId) {
      bidAmount
      bidder {
        _id
        username
      }
    }
  }
`;

export const Get_Checkout = gql`
  query Checkout($id: ID!){
  checkout(id: $id) {
    session
  }

}`

export const Get_Sold_Auctions = gql`
   {
      recentlySoldAuctions {
         _id
         itemName
         image
         price
         description
         category
         priceSold
         brand
         bidEnd
         seller {
            username
            _id
         }
      }
   }
`;