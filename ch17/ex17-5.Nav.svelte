<!-- Listing 17.5 Change to Nav component in src/components/Nav.svelte -->

<li>
  <a
    rel="prefetch"
    aria-current={segment === 'dogs' ? 'page' : undefined}
    href="dogs"
  >
    dogs
  </a>
</li>
