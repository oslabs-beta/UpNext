"use strict";
const serverString = `const { ApolloServer } = require('apollo-server-express');
const express = require('express');
import { schema } from './prismaGraphql';
import { context } from './context';
const cors = require("cors");

const port = 4000;

//Initiates your express server
const app = express();
//Enables cors (cross origin resource sharing) so your server
//is accessible by other origins (domains)
app.use(cors());
//Initiates an Apollo Server for your graphql queries
const server = new ApolloServer({ schema, context });
//Passes your graphql server as middleware to your express server
//to give you flexiblity in your graphql and REST API requests
server.applyMiddleware({app});
//Serves your express server on port 4000
//* Your graphql playground is being served at the graphql endpoint */
app.listen({ port }, () => {
  console.log(\`Server listening on port: http://localhost:\${port}/graphql\`);
});
`;
module.exports = serverString;
//# sourceMappingURL=serverBoilerplate.js.map