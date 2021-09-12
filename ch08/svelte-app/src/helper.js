// Listing 8.9 Helper functions defined in src/helper.js

import {onMount} from 'svelte';

export function onMountFocus() {
  onMount(() => {
    const input = document.querySelector('input');
    input.focus();
  });
}

export function onMountLog(name) {
  onMount(() => console.log(name, 'mounted'));
}
