<!-- Listing 5.7 App that uses the Sum component -->

<script>
  import Sum from './Sum.svelte';
  let size = 3;
  $: numbers = Array(size).fill().map((_, i) => i + 1);
</script>

<label>
  Size
  <input type="number" bind:value={size}>
</label>

<Sum numbers={numbers} />
