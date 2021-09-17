// Listing 9.1 Defining cartStore in src/stores.js

import {writable} from 'svelte/store';

export const cartStore = writable([]);
