<!-- Listing 11.1 App that uses @debug -->

<script>
  export let radius = 1;
  $: area = 2 * Math.PI * radius**2;
</script>

{@debug radius, area}
<main>
  <label>
    Circle Radius:
    <input type="number" bind:value={radius}>
  </label>
  <label>
    Circle Area: {area}
  </label>
</main>
