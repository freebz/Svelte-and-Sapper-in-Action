<!-- Listing 5.12 Parent component in src/Parent.svelte -->

<script>
  import Child from './Child.svelte';
  let pValue = 1;
</script>

<Child bind:cValue={pValue} />
<div>pValue = {pValue}</div>
