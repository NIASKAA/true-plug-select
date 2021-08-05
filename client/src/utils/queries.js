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
  {
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
query AllAuctions {
  auctions {
  	itemName
    image
    description
    seller {
      username
    }
    bids{
      bidAmount
    }
       
  }
}


`