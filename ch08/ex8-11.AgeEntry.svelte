<!-- Listing 8.11 AgeEntry component in src/AgeEntry.svelte -->

<script>
  import {onMountFocus, onMountLog} from './helper';
  export let age;
  onMountLog('AgeEntry');
  onMountFocus();
</script>

<label>
  Age
  <input type="number" min="0" bind:value={age}>
</label>
