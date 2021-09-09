// Listing 6.16 count store defined in count-store.js

import {writable} from 'svelte/store';

const {subscribe, set, update} = writable(0);

export const count = {
  subscribe,
  increment: () => update(n => n + 1),
  decrement: () => update(n => n - 1),
  reset: () => set(0)
};
