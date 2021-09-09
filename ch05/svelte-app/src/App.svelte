<!-- Listing 5.22 App that uses the Buttons component -->

<script>
  import Buttons from './Buttons.svelte';
  let colors = ['Red', 'Green', 'Blue'];
  let color = '';
  const handleSelect = event => color = event.detail;
</script>

<Buttons labels={colors} value={color} on:select={handleSelect} />
{#if color}
  <div>You clicked {color}.</div>
{/if}
