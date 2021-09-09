<!-- Listing 7.1 App that renders HTML entered in a textarea -->

<script>
  let markup = '<h1 style="color: red">Hello!</h1>';
</script>

<textarea bind:value={markup} rows={5} />
{@html markup}

<style>
  textarea {
    width: 95vw;
  }
</style>
