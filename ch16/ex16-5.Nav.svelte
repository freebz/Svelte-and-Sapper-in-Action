<!-- Listing 16.5 Nav component changes in src/components/Nav.svelte -->

<li>
  <a
    aria-current={segment === 'employees' ? 'page' : ''}
    href="employees">
    employees
  </a>
</li>
