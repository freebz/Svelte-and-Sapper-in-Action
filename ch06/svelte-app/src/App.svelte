<!-- Listing 6.23 App using stores in src/App.svelte -->

<script>
  import Point from './point';
  import {lineStore, pointStore} from './stores';
  let point = pointStore(1, 2);
  let line = lineStore(new Point(0, 0), new Point(2, 3));

  function translate() {
    const dx = 2;
    const dy = 3;

    point.translate(dx, dy);
    line.translate(dx, dy);
  }

  let pointString = '';
  point.subscribe(() => pointString = point.toString());
</script>

<h1>point = ({$point.x}, {$point.y})</h1>
<h1>point = {pointString}</h1>
<h1>line = {$line.start.toString()}, {$line.end.toString()}</h1>

<button on:click={translate}>Translate</button>
