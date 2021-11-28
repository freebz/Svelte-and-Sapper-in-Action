<!-- Listing 20.11 App that uses the add function in src/App.svelte -->

<script lang="ts">
  import {add} from './math';

  const sum = add(1, '2');
</script>

<div>sum in ts = {sum}</div>
<div>sum in HTML = {add(1, '2')}</div>
