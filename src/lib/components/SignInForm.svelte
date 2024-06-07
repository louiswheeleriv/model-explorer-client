<script lang="ts">
  import Input from './Input.svelte';
  import Button from './Button.svelte';

  import { ApolloClient } from '@apollo/client/core';
  import callSignIn from '../../lib/graphql/sign_in';
  import { goto } from '$app/navigation';

  let username = '';
  let password = '';

  export let client: ApolloClient<object>;

  async function signIn() {
    let response = await callSignIn(client, username, password);
    console.log('Signed in as user: ' + response.signIn.user.username);
    goto('/');
  }
</script>

<div>
  <Input label='Username' id='username' name='username' bind:value={username} required />
  <Input label='Password' id='password' name='password' type='password' bind:value={password} required />
  <button on:click={signIn}>Sign In</button>
</div>
