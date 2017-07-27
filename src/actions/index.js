let nextTodoId = 4

export const addUser = (text, data) => ({
  type: 'ADD_USER',
  id: nextTodoId++,
  text,
  data
})

export const filterUser = () => ({
  type: 'FILTER_USER',
})

export const textChange = event => ({
  type: 'CHANGE_TEXT',
  input: event.target.value,
})

export const currentUser = id => ({
  type: 'SELECT_USER',
  currentUserId: id,
})

export const deleteUser = id => ({
  type: 'DELETE_USER',
  currentUserId: id,
})

export const editUser = id => ({
  type: 'EDIT_USER',
  currentUserId: id,
})

export const saveUser = (id, text, data) => ({
  type: 'SAVE_USER',
  id: id,
  text,
  data
})
