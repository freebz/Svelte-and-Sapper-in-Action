<!-- Listing G.2 DateDisplay component in src/DateDisplay.svelte -->

<script>
  import {format} from 'date-fns';
</script>

<div>
  Today is {format(new Date(), 'MMM dd, yyyy')}.
</div>

