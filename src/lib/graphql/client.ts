import { ApolloClient, InMemoryCache } from '@apollo/client/core';

const serverDomain = import.meta.env.VITE_MODEL_EXPLORER_SERVER_DOMAIN;
const serverUrl = serverDomain + '/graphql';

const client = new ApolloClient({
  uri: serverUrl,
  cache: new InMemoryCache(),
  // credentials: 'include'
});

export default client;
