<script>
  import { onMount } from 'svelte';
  import { Route } from 'svelte-router-spa';
  import { user } from './../../stores.js';

  export let currentRoute;
  let initialized = false;

  onMount(() => {
    user.set({
      name: 'Test User',
      schoolName: 'Test School',
    });
    initialized = true;
  });
</script>

<main>
  <h3>Admin Layout</h3>
  <section>
    {#if initialized}
      <Route {currentRoute} />
    {/if}
  </section>
</main>
