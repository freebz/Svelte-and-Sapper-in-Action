<!-- Listing 5.13 Child component in src/Child.svelte -->

<script>
  export let cValue;
  const double = () => (cValue *= 2);

  export let triple;
  $: triple = cValue * 3;
</script>

<button on:click={double}>Double</button>
<div>cValue = {cValue}</div>
