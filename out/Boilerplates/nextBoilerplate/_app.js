"use strict";
const appString = `import '../styles/global.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  return (
  <ApolloProvider client={client}>
  <Component {...pageProps} />
  </ApolloProvider>
  )
}

export default MyApp;
`;
module.exports = appString;
//# sourceMappingURL=_app.js.map