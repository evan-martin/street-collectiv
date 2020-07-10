const INITIAL_STATE = {
  collections: []
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SELECT_CATEGORY':
      return {
          ...state,
          selected: action.payload
      }

    default:
      return state;
  }
}

export default shopReducer
