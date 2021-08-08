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
      itemName
      image
      description
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
