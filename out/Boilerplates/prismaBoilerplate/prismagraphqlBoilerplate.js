"use strict";
const prismagraphqlString = `import { makeExecutableSchema } from 'apollo-server'

import { Context } from './context';

const typeDefs = \`
  type User {
    id: ID!
    name: String!
    password: String!
  }
  input UserInput {
    name: String!
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
    createUser: (_parent, args: {data: UserInput}, context: Context) => {
      return context.prisma.user.create({ data: {
        name: args.data.name,
        password: args.data.password
        }
      })
    }
  }
};

interface UserInput {
  name: string
  password: string
}

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
})
`;
module.exports = prismagraphqlString;
//# sourceMappingURL=prismagraphqlBoilerplate.js.map