import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    channels: [Channel!]
  }
  
  
  type Channel {
    id: ID!
    title: String!
    logo_token: String
    qualities: [Quality]
  }
  
  type Quality {
    logo_token: String
  }
`;
