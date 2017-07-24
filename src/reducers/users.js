const users = (state = {data: [{id: 1, text: "text"}], system: {text: ''}}, action) => {
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

    default:
      return state
  }
}

export default users