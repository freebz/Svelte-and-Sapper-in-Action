<!-- Listing 3.6 Using an exported function -->

<script>
  import {onMount} from 'svelte';
  import {add} from './Demo.svelte';

  onMount(() => {
    const sum = add(1, 3);
    console.log('home.svelte onMount: sum =', sum);
  });
</script>
