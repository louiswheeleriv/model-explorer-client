<script lang="ts">
  import { goto } from '$app/navigation';
  import client from '../graphql/client';
  import myUser from '../../lib/graphql/my_user';
  import signOut from '../../lib/graphql/sign_out';

  const myUserPromise = myUser(client);

  function redirectToSignIn() {
    goto('/sign-in');
  }

  async function callSignOut() {
    await signOut(client);
    location.reload();
  }
</script>

<div class="top-navbar">
  <a href="/">Home</a>
  {#await myUserPromise}
    <span></span>
  {:then myUser}
    {#if myUser && myUser.myUser}
      {myUser.myUser.username}
      {document.cookie}
      <button on:click={callSignOut}>Sign Out</button>
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