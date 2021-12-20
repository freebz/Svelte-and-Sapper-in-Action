<!-- Listing 21.13 AboutPage component in app/AboutPage.svelte -->

<script>
  import Header from './Header.svelte';
  import {singleLine} from './util';

  let description = singleLine`
    This is a Svelte Native app that demonstrates
    using side drawer navigation.
  `;
</script>

<page>
  <Header title="About" />
  <stackLayout class="p-20">
    <label text={description} textWrap="true">
    </label>
  </stackLayout>
</page>

<style>
  label {
    color: red;
    font-size: 32;
  }
</style>

