// Listing 6.25 Writable, persistent store of numbers in src/stores.js

import {writableSession} from './store-util';

export const numbers = writableSession('numbers', [1, 2, 3]);
