<!-- Listing 5.6 Sum component in src/Sum.svelte -->

<script>
  export let numbers;
  //const sum = numbers.reduce((acc, n) => acc + n);
  $: sum = numbers.reduce((acc, n) => acc + n);
</script>

<div>numbers are {numbers.join(', ')}</div><div>sum is {sum}</div>
