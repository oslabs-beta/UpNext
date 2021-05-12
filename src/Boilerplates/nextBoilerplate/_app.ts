const appString = `import '../styles/global.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

// Creates an instance of Apollo Client which connects to Apollo Server and GraphQL
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

// Connects each page component with its pageProps
function MyApp({ Component, pageProps }) {
  return (
    // Apollo Provider will provide user session and instance of client to any visited page
    <ApolloProvider session={pageProps.session} client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp;
`;

export = appString;
