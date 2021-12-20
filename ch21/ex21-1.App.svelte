<!-- Listing 21.1 App that uses dockLayout -->

<page>
  <dockLayout>
    <label class="header big" dock="top" text="Header" />
    <label class="footer big" dock="bottom" text="Footer" />
    <label class="nav big" dock="left" text="Nav" />
    <stackLayout>
      <label text="Center child #1" />
      <label text="Center child #2" />
    </stackLayout>
  </dockLayout>
</page>

<style>
  .big {
    color: white;
    font-size: 24;
    padding: 20;
  }

  .footer {
    background-color: purple;
    border-top-width: 3;
  }

  .header {
    background-color: red;
    border-bottom-width: 3;
  }

  .nav {
    background-color: green;
    border-right-width: 3;
  }

  stackLayout {
    background-color: lightblue;
    padding: 20;
  }
</style>
