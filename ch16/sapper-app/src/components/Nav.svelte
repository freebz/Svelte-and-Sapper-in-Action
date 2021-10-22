<!-- Listing 16.7 Nav component style changes in src/components/Nav.svelte -->

<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255,62,0,0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255,62,0);
    display: block;
    bottom: -1px;
  }

  a {
    border: solid gray 1px;
    border-radius: 4px;
    padding: 4px;
    text-decoration: none;
  }
</style>

<nav>
  <ul>
    <li>
      <a aria-current="{segment === undefined ? 'page' : undefined}" href=".">
	home
      </a>
    </li>
    <li>
      <a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">
	about
      </a>
    </li>
    <li>
      <a rel="prefetch" aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">
	blog
      </a>
    </li>
    <li>
      <a
	rel="prefetch"
	aria-current={segment === 'employees' ? 'page' : ''}
	href="employees">
	employees
      </a>
    </li>
  </ul>
</nav>
