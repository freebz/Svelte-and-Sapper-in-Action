// Listing 21.15 singleLine function in app/util.js

// This is a tagged template literal function that
// replaces newline characters with a space
// and then replaces consecutive spaces with one.
export function singleLine(literals) {
  return literals
    .join(' ')
    .replace(/\n/g, ' ')
    .replace(/  +/g, ' ')
    .trim();
}

