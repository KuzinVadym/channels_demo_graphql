import { PubSub, withFilter } from 'apollo-server';
import uuidv1 from 'uuid/v1';

const USER_CREATED = 'USER_CREATED';

const pubsub = new PubSub();

export default {
  Query: {
    users: async (parent, args, { models }) => {
      return await models.User.find();
    },
    user: async (parent, { id }, { models }) => {
      return await models.User.findById(id);
    }
  },
  Mutation: {
    create: async (
      parent,
      { username, email, password },
      { models, secret },
    ) => {
      const user = await models.User.create({
        id: uuidv1(),
        username,
        email,
        password,
      });
      await pubsub.publish(USER_CREATED, { userCreated: user });
      return user;
    },

    update: async (
      parent,
      args,
      { models, secret },
    ) => {
      const result = await models.User.findOneAndUpdate({id: args.id}, args, { new: true});
      return result;
    },

    delete: async (
      parent,
      args,
      { models, secret },
    ) => {
      const result = await models.User.findOneAndDelete({id: args.id});
      return result;
    },
  },
  Subscription: {
    userCreated: {
      subscribe: () => pubsub.asyncIterator([USER_CREATED]),
    },
    // messageUpdated: {
    //   subscribe: withFilter(
    //       () => pubsub.asyncIterator('MESSAGE_UPDATED'),
    //       (payload, variables) => {
    //         return payload.messageUpdated.id === variables.id;
    //       },
    //   ),
    // },
  }
};
