let nextTodoId = 10
export const addUser = (text) => ({
  type: 'ADD_USER',
  id: nextTodoId++,
  text,
})

export const filterUser = () => ({
  type: 'FILTER_USER',
})

export const textChange = event => ({
  type: 'CHANGE_TEXT',
  input: event.target.value,
});
