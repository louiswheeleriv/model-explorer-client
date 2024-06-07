<script>
  import Input from '$lib/components/Input.svelte';
  let username = '';
  let email = '';
  let password = '';
  let confirmPassword = '';

  let error;

  function validatePassword(password, confirmPassword) {
      return confirmPassword !== password 
  }
</script>
<form method="POST" class="space-y-5 {$$props.class}" action="/signUp">
  <Input label="Username" id="username" name="username" bind:value={username} />
  <Input label="Email" id="email" name="email" type="email" bind:value={email} />
  <Input label="Password" id="password" name="password" type="password" bind:value={password} />
  <Input
      label="Confirm Password"
      id="confirm-password"
      name="confirm-password"
      type="password"
      bind:value={confirmPassword}
  />
  {#if confirmPassword !== "" && confirmPassword !== password}
      <p class="text-red-600 text-sm font-semibold">Passwords don't match</p>
  {/if}
  <button type="submit" disabled="{validatePassword(password, confirmPassword)}">Sign Up</button>
</form>
