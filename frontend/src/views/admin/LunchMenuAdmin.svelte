<script>
  import { user } from '../../stores';
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
