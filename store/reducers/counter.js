import * as actionTypes from '../actions/actionTypes';

const initalState = {
  counter: 0,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + Number(action.val)
      }
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - Number(action.val)
      }
    default:
      return state;
  }
}

export default reducer;