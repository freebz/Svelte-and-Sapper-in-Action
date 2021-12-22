<!-- Listing G.1 App that uses the DateDisplay component in src/Arr.svelte -->

<script>
  import _ from 'lodash';
  import DateDisplay from './DateDisplay';

  let name = 'Snowpack';
</script>

<h1>Hello, {_.startCase(name)}!</h1>

<label>
  Name
  <input bind:value={name}>
</label>

<DateDisplay />

<style>
  h1 {
    color: red;
  }
</style>

