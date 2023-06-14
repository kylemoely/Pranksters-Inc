const { User, Prank, Order } = require('../models');

const resolvers = {
    Query: {
        viewUser: async () => {
            return await User.find();
        },
        viewPrank: async () => {
            return await Prank.find();
        },
        viewOrder: async () => {
            return await Order.find();
        }
        
    }, 

    Mutation: {
       addUser: async (_, args) => {
             const user = await User.create(args);

            return user;
        },
        addPrank: async (_, args) => {
            const prank = await Prank.create(args);

           return prank;
       },
       addOrder: async (_, args) => {
        const order = await Order.create(args);

       return order;
   }
    }
};

module.exports = resolvers;