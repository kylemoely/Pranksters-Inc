import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation Mutation($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
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
    mutation Mutation($title: String!, $price: Int!, $description: String!, $inPerson: Boolean!) {
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
    mutation Mutation($location: String!, $prankee: String!, $prank: ID!, $dateTime: String!, $user: ID!) {
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

export const DELETE_ORDER = gql`
    mutation Mutation($orderId: ID!) {
        deleteOrder(orderId: $orderId) {
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

export const DELETE_USER = gql`
    mutation Mutation($userId: ID!) {
        deleteUser(userId: $userId) {
        email
        _id
        orders {
            _id
        }
        password
        username
        }
    }
`;

export const UPDATE_ORDER = gql`
    mutation Mutation($orderId: ID!, $location: String, $prankee: String, $prank: ID, $dateTime: String, $user: ID) {
        updateOrder(orderId: $orderId, location: $location, prankee: $prankee, prank: $prank, dateTime: $dateTime, user: $user) {
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

export const UPDATE_USER = gql`
    mutation Mutation($userId: ID!, $email: String, $username: String, $password: String) {
        updateUser(userId: $userId, email: $email, username: $username, password: $password) {
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