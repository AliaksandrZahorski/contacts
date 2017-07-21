export const addAction = ( id, title ) => {
    return {
      type: 'ADD',
      id: '' + id,
      payload: { id: id, content: {title: title }}
    }
}

export const updateAction = ( id, title ) => {
    return {
      type: 'UPDATE',
      id: '' + id,
      payload: { id: id, content: {title: title }}
    }
}

export const removeAction = ( id ) => {
    return {
      type: 'REMOVE',
      id: '' + id
    }
}
