const prismagraphqlString = `import { makeExecutableSchema } from 'apollo-server-express'
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
    deleteUser(email: String!): User!
    updateUser(email: String!): User!
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
    },
    updateUser: (_parent, args: { email: string }, context: Context) => {
      return context.prisma.user.update({
        where: {
          email: args.email,
        },
        data: { email: "upnext@codesmith.io" }
      })
    },
    deleteUser: (_parent, args: { email: string }, context: Context) => {
      return context.prisma.user.delete({
        where: {
          email: args.email,
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

