import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query viewUser {
        _id
        email
        orders {
            _id
        }
        password
        username
        }
`;

export const QUERY_PRANKS = gql`
    query viewPrank {
        _id
        description
        inPerson
        price
        title
    }
`;

export const QUERY_ORDERS = gql`
    query viewOrder {
        _id
        dateTime
        location
        prank {
          _id
        }
        prankee
        user {
          _id
        }
      }
`;