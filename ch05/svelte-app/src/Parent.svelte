<!-- Listing 5.14 Parent component in src/Parent.svelte -->

<script>
  import Child from './Child.svelte';
  let pValue = 1;
  let triple;
</script>

<Child bind:cValue={pValue} bind:triple />
<div>pValue = {pValue}</div>
<div>triple = {triple}</div>
