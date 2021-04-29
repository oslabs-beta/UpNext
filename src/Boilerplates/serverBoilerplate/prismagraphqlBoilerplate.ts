const prismagraphqlString = `import { makeExecutableSchema } from 'apollo-server'

import { Context } from './context';

const typeDefs = \`
  type User {
    id: ID
    email: String!
    password: String!
  }
  input UserInput {
    email: String!
    password: String!
  }
  type Query {
    allUsers: [User!]!
  }
  type Mutation {
    createUser(data: UserInput!): User!
  }
\`

const resolvers = {
  Query: {
    allUsers: (_parent, _args, context: Context) => {
      return context.prisma.user.findMany()
    }
  },
  Mutation: {
    createUser: (_parent, args: { data: UserInput }, context: Context) => {
      return context.prisma.user.create({ data: {
        email: args.data.email,
        password: args.data.password
        }
      })
    }
  }
};

interface UserInput {
  email: string
  password: string
}

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
})
`;

export = prismagraphqlString;


// CREATE TABLE user (
//   id INT GENERATED ALWAYS AS IDENTITY,
//   email VARCHAR,
//   pasword VARCHAR
// );
