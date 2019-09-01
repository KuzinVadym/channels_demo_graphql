import { GraphQLDateTime } from 'graphql-iso-date';

import channelsResolvers from '../resolvers/channels';

const customScalarResolver = {
  Date: GraphQLDateTime,
};

export default [
  customScalarResolver,
  channelsResolvers
];
