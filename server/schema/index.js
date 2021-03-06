import { gql } from 'apollo-server-express';

import channelSchema from './channel';

const linkSchema = gql`
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

export default [linkSchema, channelSchema];
