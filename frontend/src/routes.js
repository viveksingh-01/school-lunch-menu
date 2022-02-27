import LunchMenuAdmin from './views/admin/LunchMenuAdmin.svelte';
import Home from './views/public/Home.svelte';
import LunchMenuView from './views/public/LunchMenuView.svelte';

const routes = [
  { name: '/', component: Home },
  { name: '/lunch-menu', component: LunchMenuView },
  { name: '/admin/manage-menus', component: LunchMenuAdmin },
];

export { routes };
