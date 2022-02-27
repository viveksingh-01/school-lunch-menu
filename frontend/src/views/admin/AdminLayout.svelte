<script>
  import { Route } from 'svelte-router-spa';

  export let currentRoute;
</script>

<h3>Admin Layout</h3>

<Route {currentRoute} />
