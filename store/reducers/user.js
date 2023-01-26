import * as actionTypes from '../actions/actionTypes';

const initalState = {
  userList: []
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return {
        ...state,
        userList: action.user
      }
    default:
      return state;

  }
}

export default reducer;