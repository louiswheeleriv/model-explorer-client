<script lang="ts">
  import TopNavBar from '../lib/components/TopNavBar.svelte';
  import FactionsTable from '../lib/components/FactionsTable.svelte';
  import client from '../lib/graphql/client'
</script>

<main>
  <TopNavBar />

  <h2>Model Explorer</h2>

  <h3>Factions</h3>
  <FactionsTable { client }/>
</main>
