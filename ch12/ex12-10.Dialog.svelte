<!-- Listing 12.10 Dialog component onMount in src/Dirlog.svelte  -->

onMount(() => {
  if (dialogPolyfill) dialogPolyfill.registerDialog(dialog);
});
