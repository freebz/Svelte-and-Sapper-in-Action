// Listing 6.2 Writable store that sets its value asynchronously

import {writable} from 'svelte/store';

export const dogStore = writable([], async set => {
  const res = await fetch('/dogs');
  const dogs = await res.json();
  set(dogs);
  return () => {};
});
