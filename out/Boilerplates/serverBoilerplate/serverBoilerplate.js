"use strict";
const serverString = `const { ApolloServer } = require('apollo-server-express');
const express = require('express');
import { schema } from './prismaGraphql';
import { context } from './context';
const cors = require("cors");

const port = 4000;

const app = express();

app.use(cors());

const server = new ApolloServer({ schema, context });

server.applyMiddleware({app});

app.listen({ port }, () => {
  console.log(\`Server listening on port: http://localhost:\${port}/graphql\`);
});
`;
module.exports = serverString;
//# sourceMappingURL=serverBoilerplate.js.map