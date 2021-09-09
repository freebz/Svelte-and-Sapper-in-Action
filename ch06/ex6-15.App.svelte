<!-- Listing 6.15 App that uses stores in src/App.svelte -->

<script>
  import {itemsWithTaxStore, taxStore} from './stores';
</script>

<label>
  Tax
  <input type="number" bind:value={$taxStore}>
</label>

{#each $itemsWithTaxStore as item}
  <div>
    {item.name} - cost ${item.cost.toFixed(2)} - total ${item.total.toFixed(2)}
  </div>
{/each}
