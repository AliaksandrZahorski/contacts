import initialState from '../const/InitialState'

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
    console.log('From addUser');
      return {
        ...state,
        data: [...state.data, {
          id: action.id,
          text: action.text,
          additionalText: action.data,
        }],
        system: {
           ...state.system,
           isEdit: false,
        }
      }

      case 'CHANGE_TEXT':
        console.log('From changeText: ');
            return {
              ...state,
              system: {
                 text: action.input,
                 isEdit: false,
              }
            };
      case 'SELECT_USER':
        console.log('From currentUser: ' + action.currentUserId);
            return {
              ...state,
              system: {
                 ...state.system,
                 currentUserId: action.currentUserId,
                 isEdit: false,
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
             isEdit: false,
           }
        }
      case 'EDIT_USER':
        console.log('From editUser: ');
        return {
          ...state,
          system: {
             ...state.system,
             isEdit: true,
          }
        };

        case 'SAVE_USER':
        let index = state.data.findIndex( element => element.id === action.id);
        console.log('From saveUser' + index);
        // bad practice, mutable
          state.data[ index  ] = {
            ...state.data[ index  ],
            ...{
                  id: action.id,
                  text: action.text,
                  additionalText: action.data,
               },
          }
          return {
            ...state,
            system: {
               ...state.system,
               isEdit: false,
            }
          }

    default:
      return state
  }
}

export default users
