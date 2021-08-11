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
    }
  }
`;

export const Get_All_Products = gql`
  {
    auctions {
      _id
      itemName
      image
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
  query getAllBids($auctionId: ID) {
    getAllBidsByAuction(auctionId: $auctionId) {
      bidAmount
      bidder {
        _id
        username
      }
    }
  }
`;

/*export const Query_Checkout = gql`
  query getCheckout($auctions: [ID]!) {
    checkout(auctions: $auctions) {
      session
    }
  }
`;*/
