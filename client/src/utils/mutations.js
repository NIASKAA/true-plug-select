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
  mutation profileUpload($publicId: String!) {
    profileUpload(publicId: $publicId) {
      id
    }
  }
`

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
  mutation addUser($username:String!, $firstName: String!, $lastName: String!, $password: String!, $email: String!) {
    addUser(username: $username, firstName: $firstName, lastName:$lastName, password: $password,  email: $email) {

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



/*export const Add_Post = gql``


export const Remove_Post = gql``*/
