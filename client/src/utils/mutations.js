import { gql } from '@apollo/client';


export const VIEW_USER = gql`
  mutation viewUser($username: String!, $email: String!, $password: String!) {
    viewUser(username: $username, email: $email, password: $password) {
      _id
      email
      orders {
        _id
      }
      password
      username
    }
  }
`;

export const ADD_PRANK = gql`
  mutation addPrank($title: String!, $price: Int!, $description: String!, $inPerson: Boolean!) {
    addPrank(title: $title, price: $price, description: $description, inPerson: $inPerson) {
      _id
      description
      inPerson
      price
      title
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($location: String!, $prankee: String!, $prank: ID!, $dateTime: String!, $user: ID!) {
    addOrder(location: $location, prankee: $prankee, prank: $prank, dateTime: $dateTime, user: $user) {
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
  }
`;
