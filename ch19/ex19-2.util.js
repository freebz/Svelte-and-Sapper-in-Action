// Listing 19.2 fetchPlus function in src/util.js

export async function fetchPlus(path, options = {}) {
  if (navigator.onLine) return fetch(path, options);

  alert(`This operation is not available while offline.`);
  return {offline: true};
}
