// Listing 6.3 Readable store example

import {readable} from 'svelte/store';

export const dogStore = readable([], set => {
  const res = await fetch('/dogs');
  const dogs = await res.json();
  set(dogs);
  return () => {};
});
