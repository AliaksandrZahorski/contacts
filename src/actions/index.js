let nextTodoId = 10
export const addUser = (text) => ({
  type: 'ADD_USER',
  id: nextTodoId++,
  text
})
