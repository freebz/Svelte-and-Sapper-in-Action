<!-- Listing 8.1 Demo component that uses all the lifecycle functions -->

<script>
  import {onMount, beforeUpdate, afterUpdate, onDestroy} from 'svelte';

  let color = 'red';

  function toggleColor() {
    color = color === 'red' ? 'blue' : 'red';
  }

  onMount(() => console.log('mounted'));
  beforeUpdate(() => console.log('before update'));
  afterUpdate(() => console.log('after update'));
  onDestroy(() => console.log('destroyed'));
</script>

<button on:click={toggleColor} style="color: {color}">
  Demo
</button>
