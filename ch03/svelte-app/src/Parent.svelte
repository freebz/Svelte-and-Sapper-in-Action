<!-- Listing 3.2 A parent component defined in src/Parent.svelte -->

<script>
  import Child from './Child.svelte';
</script>

<div class='override'>
  <Child />
</div>

<style>
  .override :global(h1) {
    color: blue;
  }
</style>
