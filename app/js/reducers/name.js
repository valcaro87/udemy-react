const initialNameState = {
  names: []
}

const name = (state = initialNameState, action) => {
  switch (action.type) {
    case 'GET_NAMES':
      return Object.assign({}, state, { names: action.names });
    default:
      return state;
  }
}


export default name;
