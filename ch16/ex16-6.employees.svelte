<!-- Listing 16.6 Employees page changes in src/routes/employees.svelte -->

<script context="module">
  export async function preload(page, session) {
    console.log('employees.svelte preload: entered');
    ...
  }
</script>
