const { User, Prank, Order } = require('../models');

const resolvers = {
    Query: {
        viewUser: async (_, { userId }) => {
            return await User.findOne({ _id: userId });
        },
        viewUsers: async (_, args) => {
            return await User.find();
        },
        viewPrank: async (_, { prankId }) => {
            return await Prank.findOne({ _id: prankId });
        },
        viewPranks: async (_, args) => {
            return await Prank.find();
        },
        viewOrder: async (_, { orderId }) => {
            return await Order.findOne({ _id: orderId });
        },
        viewUserOrders: async (_, { userId }) => {
            return await Order.find({ user: userId })
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
            const user = await User.findOneAndUpdate(
                { _id: args.user },
                { $addToSet: { orders: order._id } },
                { new: true }
            );
            return order;            
        },
        deleteUser: async (_, { userId }) => {
            const user = await User.findOneAndDelete({ _id: userId });
            return user;
        },
        updateUser: async (_, args) => {
            const user = await User.findOneAndUpdate(
                { _id: args.userId },
                { $set: args },
                { runValidators: true, new: true}
            );
            return user;
        },
        deleteOrder: async (_, { orderId }) => {
            const order = await Order.findOne({ _id: orderId });
            const user = await User.findOneAndUpdate(
                { _id: order.user._id },
                { $pull: { orders: { _id: orderId } } },
                { new: true }
            );

            return await Order.findOneAndDelete({ _id: orderId });
        },
        updateOrder: async (_, args) => {
            const order = await Order.findOneAndUpdate(
                { _id: args.orderId },
                { $set: args },
                { runValidators: true, new: true}
            );
            return order;
        }
    }
};

module.exports = resolvers;