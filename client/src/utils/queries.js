import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query Query($userId: ID!) {
    viewUser(userId: $userId) {
      _id
      orders {
        _id
      }
      email
      password
      username
    }
  }
`;

export const QUERY_USERS = gql`
  query Query($userId: ID) {
    viewUsers(userId: $userId) {
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

export const QUERY_PRANK = gql`
  query Query($prankId: ID!) {
    viewPrank(prankId: $prankId) {
      _id
      description
      inPerson
      price
      title
    }
  }
`;

export const QUERY_PRANKS = gql`
  query Query($prankId: ID) {
    viewPranks(prankID: $prankId) {
      _id
      description
      inPerson
      price
      title
    }
  }
`;

export const QUERY_ORDER = gql`
  query Query($orderId: ID!) {
    viewOrder(orderId: $orderId) {
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

export const QUERY_USER_ORDERS = gql`
  query Query($userId: ID!) {
    viewUserOrders(userId: $userId) {
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