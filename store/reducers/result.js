import * as actionTypes from '../actions/actionTypes';

const initalState = {
  results: []
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        //Do not use push! This works on the original array!
        results: state.results.concat({ 
          id: 'id-' + Math.random().toString(36).substr(2, 24), 
          val: action.result
        })
      }
    case actionTypes.DELETE_RESULT:
      //User filter to create a copy of the original Array without the unwanted elements 
      const updatedArray = state.results.filter(result => result.id !== action.resultElId);
      return {
        ...state,
        results: updatedArray
      }
    default:
      return state;

  }
}

export default reducer;