import {gql} from '@apollo/client'

export const Get_Me = gql`
{
    me {
        _id
        username
        }
    }
}`

