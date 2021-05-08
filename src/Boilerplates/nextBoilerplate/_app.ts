const appString = `import '../styles/global.css';
// import Provider from "next-auth/client";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider session={pageProps.session} client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
export default MyApp;
`;

export = appString;
