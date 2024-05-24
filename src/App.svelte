<script lang="ts">
  import FactionsTable from './lib/views/FactionsTable.svelte';
  import { ApolloClient, InMemoryCache } from '@apollo/client/core';
  
  const serverDomain = import.meta.env.VITE_MODEL_EXPLORER_SERVER_DOMAIN;
  const modelExplorerGraphQLClient = new ApolloClient({
    uri: serverDomain + '/graphql',
    cache: new InMemoryCache(),
  });
</script>

<main>
  <FactionsTable { modelExplorerGraphQLClient }/>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
