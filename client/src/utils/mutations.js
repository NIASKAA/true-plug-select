import { gql } from "@apollo/client";

export const Login_User = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const Profile_Upload = gql`
  mutation profileUpload($photo: String!) {
    profileUpload(photo: $photo) {
      _id
    }
  }
`;

export const Add_User = gql`
  mutation addUser(
    $username: String!
    $firstName: String!
    $lastName: String!
    $password: String!
    $email: String!
  ) {
    addUser(
      username: $username
      firstName: $firstName
      lastName: $lastName
      password: $password
      email: $email
    ) {
      token
      user {
        _id
        username
      }
  }
}
`;

export const Upload_ProfilePic = gql`
  mutation uploadImage($file: Upload!) {
    uploadImage(file: $file) {
      filename
    }
  }
`;

export const Add_Profile_Pic = gql`
mutation Add_Pic($imageURL: String! $id: ID) {
  addProfilePic(imageURL: $imageURL id:$id) {
    profilePic
    username
    email
  }
}
`
// Query built on page to pull chat messages from server
export const GET_MESSAGES = gql`
  subscription getMessages {
    messages {
      id 
      content
      user
    }
  }
`
// Mutation that post bi-directional messages
export const POST_MESSAGE = gql`
  mutation($user: String!, $content: String!) {
    postMessage(user: $user, content: $content)
  }
`


/*export const Create_Auction = gql``
  mutation addBidForm($itemName: String! $description: String, $image: String, $seller: ID!) {
    createAuction(itemName: $itemName description: $description image: $image seller: $seller) {
      username
    }
  }

export const Remove_Bid = gql``*/
