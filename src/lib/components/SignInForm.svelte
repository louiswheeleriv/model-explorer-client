<script lang="ts">
  import Input from './Input.svelte';

  import { ApolloClient } from '@apollo/client/core';
  import callSignIn from '../../lib/graphql/sign_in';
  import { goto } from '$app/navigation';

  let username = '';
  let password = '';
  let error = '';

  export let client: ApolloClient<object>;

  async function signIn() {
    try {
      await callSignIn(client, username, password);
      goto('/');
    } catch(e) {
      error = e.message;
    }
  }
</script>

<div>
  <div class="error-message">{error}</div>
  <Input label='Username' id='username' name='username' bind:value={username} required />
  <Input label='Password' id='password' name='password' type='password' bind:value={password} required />
  <button on:click={signIn}>Sign In</button>
</div>

<style>
  .error-message {
    color: red;
  }
</style>
