const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        orders: [Order]
    }
    type Prank {
        _id: ID
        title: String
        price: Int
        description: String
        inPerson: Boolean
    }
    type Order {
        _id: ID
        location: String
        prankee: String
        prank: Prank
        dateTime: String
        user: User
    }
    type Query {
        viewUser: [User]
        viewPrank: [Prank]
        viewOrder: [Order]
    }
    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
        addPrank(title: String!, price: Int!, description: String!, inPerson: Boolean!): Prank
        addOrder(location: String!, prankee: String!, prank: ID!, dateTime: String!, user: ID!): Order
    }
`;

module.exports = typeDefs;