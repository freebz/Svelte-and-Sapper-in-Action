<!-- Listing 5.5 App that uses the StopLight component -->

<script>
  import StopLight from './StopLight.svelte';
  let go = false;
</script>

<StopLight />
<StopLight on />
<StopLight on={go} />
<button on:click={() => go = !go}>Toggle</button>
