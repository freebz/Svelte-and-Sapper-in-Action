<!-- Listing 10.3 App that uses Pie component -->

<script>
  import {tweened} from 'svelte/motion';
  import Pie from './Pie.svelte';

  let percent = 0;
  const store = tweened(0, {duration: 1000});
  $: store.set(percent || 0);
</script>

<label>
  Percetn
  <input type="number" min="0" max="100" bind:value={percent}>
</label>
<Pie size={200} percent={$store} />
