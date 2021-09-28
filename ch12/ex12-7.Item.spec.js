// Listing 12.7 Snapshot test for Item component in Item.spec.js

test('should match snapshot', () => {
  const {container} = render(Item, {categoryId, dnd, item});
  expect(container).toMatchSnapshot();
});
