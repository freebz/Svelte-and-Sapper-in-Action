<!-- Listing 5.18 Using element size bindings -->

<script>
  let clientH, clientW, offsetH, offsetW;
</script>

<div
  bind:clientHeight={clientH}
  bind:clientWidth={clientW}
  bind:offsetHeight={offsetH}
  bind:offsetWidth={offsetW}
>
  How big am I?
</div>
