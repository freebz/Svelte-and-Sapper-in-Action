<!-- Nav component in src/components/Nav.svelte -->

<ul>
  <li>
    <a aria-current="{segment === undefined ? 'page' : undefined}"
       href=".">Shop</a>
  </li>
  <li>
    <a aria-current="{segment === 'cart' ? 'page' : undefined}"
       href="cart">Cart</a>
  </li>
  <li>
    <a aria-current="{segment === 'ship' ? 'page' : undefined}"
       href="ship">Ship</a>
  </li>
</ul>
