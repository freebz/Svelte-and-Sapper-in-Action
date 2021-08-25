<!-- Listing 3.5 Using module context in src/Demo.svelte -->

<script context="module">
  export function add(n1, n2) {
    return n1 + n2;
  }
</script>

<script>
  // Component JavaScript goes here.
</script>

<!-- Component HTML goes here. -->

<style>
  /* Component CSS goes here. */
</style>
