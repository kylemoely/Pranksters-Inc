const express = require("express");
const path = require("path");
const models = require('./models');

const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');

const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if(process.env.NODE_ENV === 'production') {
    // To READ the react content when it is deployed in the internet
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startApolloServer = async () => {
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    db.once('open', () => {
        console.log("I am here");
        app.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}!`);
        });
    });
}

startApolloServer();