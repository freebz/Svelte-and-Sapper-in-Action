<!-- Listing 14.2 App that demonstrates use of sveltestrap -->

<script>
  import {CustomInput, Spinner} from 'sveltestrap';
  import Toast from './Toast.svelte';

  let amount = 0;
  let like = false;
  let status = '';

  function buy() {
    status = 'buying';
    // Show the toast after 1 second.
    setTimeout(
      () => {
	status = 'bought';
	// Hide the toast after 3 seconds.
	setTimeout(() => status = '', 3000);
      },
      1000);
  }
</script>

<main>
  <CustomInput
    type="switch"
    id="like"
    label="Do you like ice cream?"
    bind:checked={like} />

  {#if like}
    <label>
      How much will you pay for it?
      <div class="input-group">
	<div class="input-group-prepend">
	  <span class="input-group-text">$</span>
	</div>
	<input type="number" class="form-control" min="0" bind:value={amount}>
	<div class="input-group-append">
	  <span class="input-group-text">.00</span>
	</div>
      </div>
    </label>
    <div class="btn-row">
      <button class="btn btn-success" disabled={!amount} on:click={buy}>
	Buy
      </button>
      {#if status === 'buying'}
	<div class="spinner-container">
	  <Spinner color="warning" />
	</div>
      {/if}
    </div>
  {/if}

  {#if status === 'bought'}
    <Toast>Your ice cream has been ordered!</Toast>
  {/if}
</main>

<style>
  .btn-row {
    display: flex;
    align-items: center;
  }

  button {
    border: none;
  }

  .input-group {
    width: 150px;
  }

  .row > div {
    outline: solid red 1px;
  }

  .spinner-container {
    display: inline-block;
    margin-left: 1rem;
  }
</style>
