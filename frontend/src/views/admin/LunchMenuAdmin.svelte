<script>
  import axios from 'axios';
  import { onMount } from 'svelte';
  import { user } from '../../stores';

  onMount(async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/lunch-week');
      console.log(res.data);
    } catch (e) {
      console.error(e);
    }
  });
</script>

<div>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/admin/manage-menus">Lunch Menu Administration</a></li>
      <li class="is-active">
        <a href="/#" aria-current="page">{$user.schoolName}</a>
      </li>
    </ul>
  </nav>
</div>
