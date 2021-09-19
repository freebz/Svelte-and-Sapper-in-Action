<!-- Listing 10.7 App that uses the ButtonList component -->

<script>
  import ButtonList from './ButtonList.svelte';

  let left = ['red', 'orange', 'yellow', 'green'];
  let right = ['blue', 'purple'];

  function move(event, from, to) {
    const text = event.target.textContent.trim();
    to.push(text);
    return [from.filter(t => t !== text), to];
  }

  function moveLeft(event) {
    [right, left] = move(event, right, left);
  }

  function moveRight(event) {
    [left, right] = move(event, left, right);
  }
</script>

<p>Click a button to move it to the other list.</p>
<ButtonList list={left} moveFn={moveRight} />
<ButtonList list={right} moveFn={moveLeft} />
