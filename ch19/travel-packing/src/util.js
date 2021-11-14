// Listing 19.2 fetchPlus function in src/util.js

import {v4 as uuidv4} from 'uuid';

export async function fetchPlus(path, options = {}) {
  if (navigator.onLine) return fetch(path, options);

  alert(`This operation is not available while offline.`);
  return {offline: true};
}

export function getGuid() {
  return uuidv4();
}

export function blurOnKey(event) {
  const {code} = event;
  if (code === 'Enter' || code === 'Escape' || code === 'Tab') {
    event.target.blur();
  }
}

export function sortOnName(array) {
  array.sort((el1, el2) =>
    el1.name.toLowerCase().localeCompare(el2.name.toLowerCase())
  );
  return array;
}
