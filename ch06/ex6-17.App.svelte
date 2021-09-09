<!-- Listing 6.17 App using the count store in src/App.svelte -->

<script>
  import {count} from './count-store';
</script>

<div>count = {$count}</div>
<button on:click={() => count.increment()}>+</button>
<button on:click={() => count.decrement()}>-</button>
<button on:click={() => count.reset()}>Reset</button>
