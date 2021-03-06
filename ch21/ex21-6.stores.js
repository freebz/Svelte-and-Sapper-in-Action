// Listing 21.6 Stores in app/stores.js

import {derived, writable} from 'svelte/store';

export const authenticated = writable(false);
export const backgroundColor = writable('pink');
export const favoriteColorIndex = writable(0);
export const firstName = writable('');

// Not a store.
export const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

async function evaluateColor(color) {
  if (color === 'yellow') {
    alert({
      title: 'Hey there!',
      message: 'That is my favorite color too!',
      okButtonText: 'Cool'
    });
  } else if (color === 'green') {
    const confirmed = await confirm({
      title: 'Confirm Color',
      message: 'Are you sure you like that color?',
      okButtonText: 'Yes',
      cancelButtonText: 'No'
    });

    if (!confirmed) favoriteColorIndex.set(0);
  }
}

export const favoriteColor = derived(
  favoriteColorIndex,
  index => {
    const color = colors[index];
    evaluateColor(color);
    return color;
  }
);
