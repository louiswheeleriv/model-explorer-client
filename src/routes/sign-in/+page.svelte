<script lang="ts">
  import SignInForm from '../../lib/components/SignInForm.svelte';
  import TopNavBar from '../../lib/components/TopNavBar.svelte';
  import client from '../../lib/graphql/client'
</script>

<svelte:head>
  <title>Login</title>
  <meta name="description" content="About this app" />
</svelte:head>

<TopNavBar />

<h1 class="text-2xl font-semibold text-center">Sign In</h1>
<SignInForm client={client} />
