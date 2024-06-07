<script lang="ts">
  import SignInForm from '../../lib/components/SignInForm.svelte';
  import client from '../../lib/graphql/client'
  
  // export let form;

</script>

<svelte:head>
  <title>Login</title>
  <meta name="description" content="About this app" />
</svelte:head>

<h1 class="text-2xl font-semibold text-center">Sign In</h1>
<!-- {#if form?.incorrect}
  <p class="mt-3 text-red-500 text-center font-semibold">Invalid username/password</p>
{/if} -->
<SignInForm client={client} />
