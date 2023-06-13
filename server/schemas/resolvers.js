const { User, Prank, Order } = require('../models');

const resolvers = {
    Query: {
        viewUser: async () => {
            return await User.find();
        }
    }, 

    Mutation: {
        addUser: async (_, args) => {
            const user = await User.create(args);

            return user;
        }
    }
};

module.exports = resolvers;