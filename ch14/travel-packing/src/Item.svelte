<script>
  import {createEventDispatcher} from 'svelte';
  import {blurOnKey} from './util';

  const dispatch = createEventDispatcher();
  
  export let item;
  export let categoryId;
  export let dnd;

  let editing = false;

  $: if (editing) console.log('editing item', item.name);
</script>

<div>
  <input
    aria-label="Toggle Packed"
    type="checkbox"
    bind:checked={item.packed}
  />
  {#if editing}
    <input
      aria-label="Edit Name"
      autofocus
      bind:value={item.name}
      on:blur={() => (editing = false)}
      on:keydown={blurOnKey}
      type="text"
    />
  {:else}
    <span class="packed-{item.packed}" on:click={() => (editing = true)}
      draggable="true"
      on:dragstart={event => dnd.drag(event, categoryId, item.id)}
    >
      {item.name}
    </span>
  {/if}
  <button class="icon" data-testid="delete"
    on:click={() => dispatch('delete')}>
    &#x1F5D1;
  </button>
</div>

<style>
  button {
    background-color: transparent;
    border: none;
  }

  input[type='checkbox'] {
    --size: 24px;
    height: var(--size);
    width: var(--size);
  }

  input[type='text'] {
    border: solid lightgray 1px;
  }

  li {
    display: flex;
    align-items: center;
  }

  .packed-true {
    color: gray;
    text-decoration: line-through;
  }

  span {
    margin:0 10px;
  }
</style>
