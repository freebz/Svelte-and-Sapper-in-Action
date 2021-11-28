<!-- Listing 20.9 Using Sass in a .svelte file -->

<style lang="scss">
  $color: green;
  $space: 0.7rem;

  form {
    // a nested CSS rule
    input {
      $padding: 4px;
      border-radius: $padding;
      color: $color;
      padding: $padding;
    }

    // another nested CSS rule
    label {
      color: $color;
      margin-right: $space;
    }
  }
</style>
