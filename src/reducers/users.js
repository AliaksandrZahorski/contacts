const users = ( state = {}, action ) => {
  switch(action.type){
    case 'ADD': {
      return {
        byId: [ ...state.byId, action.id],
        byHash: {
          ...state.byHash,
          [action.id]: action.payload
        }
      }
    }

    case 'UPDATE': {
      state.byHash[action.id] = {
        ...state.byHash[action.id],
        ...action.payload
      }
      return {
        ...state
      }
    }

    case 'REMOVE': {
      const prunedIds = state.byId.filter(item => {
        return item !== action.id // return all the items not matching the action.id
      })
      delete state.byHash[action.id] // delete the hash associated with the action.id

      return {
        byId: prunedIds,
        byHash: state.byHash
      }
    }

    default: {
      return state
    }
  }
}

export default users
