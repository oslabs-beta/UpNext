"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
const typeDefs = `type Query {
  character: String!
}`;
const resolvers = {
    Query: {
        character: () => `the force is strong with this api`
    }
};
const server = new graphql_yoga_1.GraphQLServer({
    typeDefs,
    resolvers,
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
//# sourceMappingURL=graphIndex.js.map