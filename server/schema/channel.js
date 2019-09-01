import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    channels(selected: Boolean): [Channel!]
  }
  
  extend type Mutation {
    initChannels(
      length: Int!
    ): [Channel]
    
    updateChannel(
      _id: String!
      selected: Boolean
    ): Channel
  }
  
  type Channel {
    _id: String!
    title: String!
    logo_token: String
    selected: Boolean
  }
`;
