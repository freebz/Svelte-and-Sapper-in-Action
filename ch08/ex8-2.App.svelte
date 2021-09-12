<!-- Listing 8.2 App that uses the Demo component -->

<script>
  import Demo from './Demo.svelte';
  let show = false;
</script>

<label>
  <input type="checkbox" bind:checked={show}>
  Show
</label>
{#if show}
  <Demo />
{/if}
