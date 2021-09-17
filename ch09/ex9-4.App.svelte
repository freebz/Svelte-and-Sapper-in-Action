<!-- Listing 9.4 App that uses the NavButton component -->

<script>
  import {cartStore} from './stores';

  import NavButton from './NavButton.svelte';

  import Cart from './Cart.svelte';
  import Ship from './Ship.svelte';
  import Shop from './Shop.svelte';

  const pageMap = {
    cart: Cart,
    ship: Ship,
    shop: Shop
  }

  let pageName = 'shop';
</script>

<nav>
  <NavButton bind:pageName name='shop'>Shop</NavButton>
  <NavButton bind:pageName name='cart'>
    &#x1F6D2; {$cartStore.length}
  </NavButton>
  <NavButton bind:pageName name='ship'>Ship</NavButton>
</nav>

<main>
  <svelte:component this={pageMap[pageName]} />
</main>

<style>
  main {
    padding: 10px;
  }

  nav {
    display: flex;
    align-items: center;
    background-color: cornflowerblue;
    padding: 10px;
  }
</style>
