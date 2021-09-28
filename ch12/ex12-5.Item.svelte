<!-- Listing 12.5 Change to Item component in src/Item.svelte -->

<button class="icon" data-testid="delete"
  on:click={() => dispatch('delete')}>
  &#x1F5D1;
</button>
