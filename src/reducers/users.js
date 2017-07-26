import initialState from '../const/InitialState'

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
    console.log('From addUser');
      return {
        ...state,
        data: [...state.data, {
          id: action.id,
          text: action.text
        }]
      }
      case 'FILTER_USER':
      console.log('From filterUser: ');
        return state;

      case 'CHANGE_TEXT':
        console.log('From changeText: ');
            return {
              ...state,
              system: {
                 text: action.input,
              }
            };
      case 'SELECT_USER':
        console.log('From currentUser: ' + action.currentUserId);
            return {
              ...state,
              system: {
                 ...state.system,
                 currentUserId: action.currentUserId,
              }
            };
      case 'DELETE_USER':
      console.log('From deleteUser: ' + state.data);
      console.log( state.data.filter(({ id }) => id !== action.currentUserId) );
        return {
          data: [
            ...state.data.filter(({ id }) => id !== action.currentUserId)
          ],
          system: {
             ...state.system,
             currentUserId: 0,
           }
        }

    default:
      return state
  }
}

export default users
