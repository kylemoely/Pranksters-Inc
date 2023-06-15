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
        viewUser(userId: ID!): User
        viewUsers(userId: ID): [User]
        viewPrank(prankId: ID!): Prank
        viewPranks(prankID: ID): [Prank]
        viewOrder(orderId: ID!): Order
        viewUserOrders(userId: ID!): [Order]
    }
    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
        addPrank(title: String!, price: Int!, description: String!, inPerson: Boolean!): Prank
        addOrder(location: String!, prankee: String!, prank: ID!, dateTime: String!, user: ID!): Order
        deleteUser(userId: ID!): User
        updateUser(userId: ID!, email: String, username: String, password: String): User
        deleteOrder(orderId: ID!): Order
        updateOrder(orderId: ID!, location: String, prankee: String, prank: ID, dateTime: String, user: ID): Order
    }
`;

module.exports = typeDefs;