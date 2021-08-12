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

export const Update_Username = gql`
  mutation updateUser($newUsername: String! $id: ID) {
    updateUser(newUsername: $newUsername id: $id) {
      username
    }
  }
  `


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
  subscription getMessages{
    messages {
      messageId 
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


export const Create_Auction = gql`
  mutation addBidForm($itemName: String! $description: String, $price: Float, $image: String, $category: String, $brand: String, $seller: ID!) {
    createAuction(itemName: $itemName description: $description price: $price image: $image category: $category brand: $brand seller: $seller) {
      itemName
      _id
      description
      price
      image
      category
      brand
      seller {
        _id
        username
      }
      
    }
}`

export const Delete_Product = gql`
  mutation Delete_Product($id: ID!){
  deleteAuction(id: $id) {
    image
    itemName
    description
  }
}
`

export const Win_Auction = gql`
  mutation wonAuction($auctionId: ID!){
    auctionId(auctionId: $auctionId) {
      bidAmount
      timeCreated
      bidder {
        _id
        username
      }
    }
  }`

export const AddBid_Amount = gql`
  mutation addingBid($auctionId: ID! $bidAmount: Float!, $userId: ID!){
    addBid(auctionId: $auctionId bidAmount: $bidAmount userId: $userId) {
      auction {
        itemName
      }
      bidAmount
      timeCreated
    }
  }`