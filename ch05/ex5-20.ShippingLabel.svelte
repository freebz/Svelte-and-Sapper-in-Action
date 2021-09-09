<!-- Listing 5.20 ShippingLabel component in src/ShippingLabel.svelte -->

<div>
  <label>Ship To:</label>
  <slot name="name">unknown</slot>
  <slot name="address" />
</div>

<style>
  label {
    display: block;
    font-weight: bold;
  }
</style>
