<!-- Listing 21.4 Component that handles page navigation in app/App.svelte -->

<script>
  import DisplayComponents from './DisplayComponents.svelte';
  import InputComponents from './InputComponents.svelte';
  import OtherComponents from './OtherComponents.svelte';

  function onTapDelete() {
    console.log('App.svelte onTapDelete: entered');
  }

  function onTapShare() {
    console.log('App.svelte onTapShare: entered');
  }
</script>

<page>
  <actionBar title="Svelte Native Demo">
    <!-- button with upload icon -->
    <actionItem on:tap="{onTapShare}"
      ios.systemIcon="9" ios.position="left"
      android.systemIcon="ic_menu_share" android.position="actionBar" />
    <!-- button with trash can icon -->
    <actionItem on:tap="{onTapDelete}"
      ios.systemIcon="16" ios.position="right"
      android.systemIcon="ic_menu_delete"
      text="delete" android.position="popup" />
  </actionBar>

  <tabs>
    <tabStrip>
      <tabStripItem>
	<label text="Display" />
	<image src="font://&#xF26C;" class="fas" />
      </tabStripItem>
      <tabStripItem>
	<label text="Input" />
	<image src="font://&#xF11C;" class="far" />
      </tabStripItem>
      <tabStripItem>
	<label text="Other" />
	<image src="font://&#xF002;" class="fas" />
      </tabStripItem>
    </tabStrip>

    <tabContentItem>
      <DisplayComponents />
    </tabContentItem>

    <tabContentItem>
      <InputComponents />
    </tabContentItem>

    <tabContentItem>
      <OtherComponents />
    </tabContentItem>
  </tabs>
</page>

<style>
  tabStrip {
    --tsi-unselected-color: purple;
    --tsi-selected-color: green;

    background-color: lightblue;
    highlight-color: green;
  }

  tabStripItem {
    color: var(--tsi-unselected-color); /* for icon */
  }

  tabStripItem > label {
    color: var(--tsi-unselected-color); /* for text */
  }

  tabStripItem:active {
    color: var(--tsi-selected-color); /* for icon */
  }

  tabStripItem:active > label {
    color: var(--tsi-selected-color); /* for text */
  }
</style>
