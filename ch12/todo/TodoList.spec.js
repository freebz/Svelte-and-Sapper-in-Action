// Listing 12.4 Jest test for TodoList component in src/TodoList.spec.js

import {cleanup, fireEvent, render, waitFor} from '@testing-library/svelte';

import TodoList from './TodoList.svelte';

describe('TodoList', () => {
  const PREDEFINED_TODOS = 2;

  afterEach(cleanup);

  function expectTodoCount(count) {
    return waitFor(() => {
      const lis = document.querySelectorAll('li');
      expect(lis.length).toBe(count);
    });
  }

  test('should render', async () => {
    const {getByText} = render(TodoList);
    expect(getByText('To Do List'));
    expect(getByText('1 of 2 remaining'));
    expect(getByText('Archive Completed')); // button
    await expectTodoCount(PREDEFINED_TODOS);
  });

  test('should add a todo', async () => {
    const {getByTestId, getByText} = render(TodoList);

    const input = getByTestId('todo-input');
    const value = 'buy milk';
    fireEvent.input(input, {target: {value}});
    fireEvent.click(getByText('Add'));

    await expectTodoCount(PREDEFINED_TODOS + 1);
    expect(getByText(value));
  });

  test('should delete a todo', async () => {
    const {getAllByText, getByText} = render(TodoList);
    const text = 'lean Svelte';
    expect(getByText(text));

    const deleteBtns = getAllByText('Delete');
    fireEvent.click(deleteBtns[0]);
    await expectTodoCount(PREDEFINED_TODOS - 1);
  });

  test('should toggle a todo', async () => {
    const {container, getByText} = render(TodoList);
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');

    await fireEvent.click(checkboxes[1]);
    expect(getByText('0 of 2 remaining'));

    await fireEvent.click(checkboxes[0]);
    expect(getByText('1 of 2 remaining'));
  });
});
