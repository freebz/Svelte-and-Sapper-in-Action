<!-- Listing 7.4 App that uses the MaskedInput component -->

<script>
  import MaskedInput from './MaskedInput.svelte';
  let phone = '';
</script>

<label>
  Phone
  <MaskedInput
    mask="(999)999-9999"
    bind:value={phone}
  />
</label>
<div>
  phone = {phone}
</div>
