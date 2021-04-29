"use strict";
const apolloString = `const { ApolloServer, gql } = require('apollo-server');

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const port = 4000;

const typeDefs = \`
type User {
  id: ID!
  email: String!
  name: String!
}

type Query {
  allUsers: [User!]!
}

\`

const resolvers = {
  Query: {
    allUsers: () => {
      return [
        { id: 1, email: 'youcantseeme@wwe.com', name: 'John Cena' },
        { id: 619, email: 'booyakah@wwe.com', name: 'Rey Mysterio' }
      ];
    }
  }
};

const server = new ApolloServer({typeDefs, resolvers})
server.listen( { port }, () => {
    console.log('apollo server running');
});`;
module.exports = apolloString;
//# sourceMappingURL=apolloServer.js.map