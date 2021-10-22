<!-- Listing 16.3 Error page in src/routes/_error.svelte -->

<script>
  import {stores} from '@sapper/app';
  const {page} = stores();
  
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === 'development';
</script>

{#if status = 404}
  There is no page append to {$page.path}.
{:else}
  <h1>Error: {error.message}</h1>
  <p>status: {status}</p>
  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}
{/if}
