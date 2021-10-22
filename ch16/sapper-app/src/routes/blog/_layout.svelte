<!-- Listing 16.2 Blog layout in src/routes/blog/_layout.svelte -->

<div>
  <p>It's blog time!</p>
  <slot />
</div>

<style>
  div {
    background-color: lightblue;
    padding: 0.2rem 1rem;
  }
</style>
