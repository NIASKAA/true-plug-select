import gql from 'graphql-tag'

export const Login_User = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                auction {
                    itemName
                    description
                    image
                    seller
                    created
                    bidStart
                    bidEnd
                    bids {
                        bidder
                        bid
                        time
                    }
                }
            }
        }
    }
`;

export const Add_User = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }`

export const Add_Post = gql``


export const Remove_Post = gql``