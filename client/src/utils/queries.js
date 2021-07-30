import gql from "graphql-tag"

export const Get_Me = gql`
{
    me {
        _id
        username
        }
    }
}`