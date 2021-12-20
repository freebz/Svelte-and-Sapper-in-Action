<!-- Listing 21.12 Header component in app/Header.svelte -->

<script>
  import {toggleDrawer} from './nav'
  import {isAndroid} from "tns-core-modules/platform"

  export let title = '';
</script>

<actionBar title={title}>
  {#if isAndroid}
    <navigationButton icon="res://menu" on:tap={toggleDrawer} />
  {:else}
    <actionItem icon="res://menu" ios.position="left" on:tap={toggleDrawer} />
  {/if}
</actionBar>

<style>
  actionBar {
    background-color: cornflowerblue;
    color: white;
  }
</style>

