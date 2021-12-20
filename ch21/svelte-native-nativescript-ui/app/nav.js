// Listing 21.11 Navigation functions in app/nav.js

import {navigate} from 'svelte-native';

let drawer;

export function setDrawer(d) {
  drawer = d;
}

export function goToPage(page, props) {
  drawer.closeDrawer();
  // Setting clearHistory to true prevents "<Back" button from appearing.
  navigate({page, props, clearHistory: true, frame: 'mainFrame'});
}

export function toggleDrawer() {
  drawer.toggleDrawerState();
}

