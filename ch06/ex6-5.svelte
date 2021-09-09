<!-- Listing 6.5 Store subscription example -->

<script>
  import {onDestroy} from 'svelte';
  import {dogStore} from './stores';
  let dogs;
  const unsubscribe = dogStore.subscribe(value => (dogs = value));
  onDestroy(unsubscribe);
</script>
