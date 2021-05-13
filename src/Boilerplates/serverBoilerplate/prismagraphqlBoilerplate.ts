const prismagraphqlString = `import { makeExecutableSchema } from 'apollo-server-express';
import { Context } from './context';
//Your typedefs define the way your graphql inputs/outputs should look in your
//graphql queries
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
    getUser(data: UserInput!): User!
  }
  type Mutation {
    createUser(data: UserInput!): User!
    deleteUser(email: String!): User!
    updateUser(email: String!): User!
  }
\`
//Your resolvers are your functions for your queries and mutations (Similar to express controllers). They are given
//parent objects/arguments and are responsible for returning results from your queries/mutations. We have added basic
//CRUD functionality for you to use at your disposable. **NOTE: we have only implemented the createUser Mutation for
//you via the signup page on the front end. The rest is there for your reference!
const resolvers = {
  Query: {
    allUsers: (_parent, _args, context: Context) => {
      return context.prisma.user.findMany()
    },
    getUser: (_parent, args: { data: UserInput }, context: Context) => {
      return context.prisma.user.findUnique({
        where: {
          email: args.data.email
        }
      })
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
//This interface interacts with your resolvers by making sure your inputs are correct. It is modeled after the
//input UserInput in your typedefs.
interface UserInput {
  email: string
  password: string
}

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});
`;

export = prismagraphqlString;

