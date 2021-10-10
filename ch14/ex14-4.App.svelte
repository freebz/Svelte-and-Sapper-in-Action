<!-- Listing 14.4 App that uses library components -->

<script>
  import {LabeledInput, Select} from 'rmv-svelte-components';
  let color = '';
  let name = 'Mark';
  let options = ['', 'red', 'green', 'blue'];
</script>

<main>
  <LabeledInput label="Name" bind:value={name} />
  <p>Hello, {name}!</p>
  <Select {options} on:select={event => color = event.detail} />
  <p>You selected the color {color}.</p>
</main>
