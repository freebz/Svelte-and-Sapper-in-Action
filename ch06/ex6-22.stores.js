// Listing 6.22 Stores defined in src/stores.js

import {get, writable} from 'svelte/store';

export function pointStore(x, y) {
  const store = writable({x, y});
  const {subscribe, update} = store;
  let cache = {x, y};
  return {
    subscribe,
    toString() {
      return `(${cache.x}, ${cache.y})`;
    },
    translate(dx, dy) {
      update(({x, y}) => {
	cache = {x: x + dx, y: y + dy};
	return cache;
      });
    }
  };
}

export function lineStore(start, end) {
  const store = writable({start, end});
  const {subscribe, update} = store;
  return {
    subscribe,
    translate(dx, dy) {
      update(({start, end}) => {
	start.translate(dx, dy);
	end.translate(dx, dy);
	return {start, end};
      });
    }
  };
}
