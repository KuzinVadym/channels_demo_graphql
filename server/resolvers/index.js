import { GraphQLDateTime } from 'graphql-iso-date';

import userResolvers from '../resolvers/user';
import channelsResolvers from '../resolvers/channels';

const customScalarResolver = {
  Date: GraphQLDateTime,
};

export default [
  customScalarResolver,
  userResolvers,
  channelsResolvers
];
