<!-- Listing 16.1 Topmost page layout in src/routes/_layout.svelte -->

<script>
  import {stores} from '@sapper/app';
  import Nav from '../components/Nav.svelte';

  export let segment;

  const {page} = stores();
</script>

{#if $page.path === '/'}
  <slot />
{:else}
  <Nav {segment} />
  <main>
    <section>
      <slot />
    </section>
  </main>
{/if}

<style>
  main {
    display: flex;
    justify-content: center;
    
    background-color: linen;
    box-sizing: border-box;
    height: calc(100vh - var(--nav-height));
    padding: 2em;
    width: 100vw;
  }
</style>
