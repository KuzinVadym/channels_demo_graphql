import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    users: [User!]
    user(id: ID!): User
  }
  
  extend type Mutation {
    create(
      username: String!
      email: String!
      password: String!
    ): User
    
    update(
      id: ID
      username: String
      email: String
      password: String
    ): User
    
    delete(
      id: ID
    ): User

  }
  
  type Subscription {
       userCreated: User
  }
   
  type User {
    id: ID!
    username: String!
    email: String!
    role: String
  }
`;
