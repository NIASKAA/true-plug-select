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
      }
  }
`;
