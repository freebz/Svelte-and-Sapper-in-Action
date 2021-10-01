// Listing 12.22 Storybook stories for the Dialog component in stories/Dialog.stories.js

import DialogWrapper from './DialogWrapper.svelte';
import '../public/global.css';

export default {title: 'Dialog'};

export const basic = () => ({Component: DialogWrapper});
