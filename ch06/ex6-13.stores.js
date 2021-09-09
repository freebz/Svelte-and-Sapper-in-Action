// Listing 6.13 Derived store defined in src/stores.js

import {derived} from 'svelte/store';

export const bigDogsStore = derived(dogStore, store =>
  Object.values(store).filter(dog => dog.size === 'large')
);
