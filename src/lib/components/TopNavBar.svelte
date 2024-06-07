<script lang="ts">
  import { goto } from '$app/navigation';
  import client from '../graphql/client';
  import myUser from '../../lib/graphql/my_user';

  const myUserPromise = myUser(client);

  function redirectToSignIn() {
    goto('/sign-in');
  }
</script>

<div class="top-navbar">
  {#await myUserPromise}
    <span></span>
  {:then myUser}
    {#if myUser}
      {myUser.myUser.username}
    {:else}
      <button on:click={redirectToSignIn}>Sign In</button>
    {/if}
  {:catch someError}
    System error: {someError.message}.
  {/await}
</div>

<style>
  .top-navbar {
    padding: 15px;
    border-bottom: 2px solid lightgray;
  }
</style>