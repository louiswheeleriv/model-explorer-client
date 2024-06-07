<script lang="ts">
  import FactionsTable from '../lib/components/FactionsTable.svelte';
  import client from '../lib/graphql/client'
</script>

<main>
  <h2>Model Explorer</h2>

  <h3>Factions</h3>
  <FactionsTable { client }/>
</main>

<!-- <style>
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
</style> -->
