<script lang="ts">
  import { ApolloClient } from '@apollo/client/core';
  import listFactions from '../graphql/list_factions';

  // Component params
  export let client: ApolloClient<object>;

  const factionsPromise = listFactions(client);
</script>

<div>
  {#await factionsPromise}
    Loading factions...
  {:then factions}
    <table>
      <thead>
        <th>ID</th>
        <th>Name</th>
      </thead>
      <tbody>
        {#each factions.factions as { id, name }, i}
          <tr>
            <td>{id}</td>
            <td>{name}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:catch someError}
    System error: {someError.message}.
  {/await}
</div>
