import * as actionTypes from './actionTypes';

const saveResult = (result) => {
  return {
    type: actionTypes.STORE_RESULT,
    result
  };
};

//Execute ASYNC Code here! For this example, we only set a timeout from 2s.
export const store_result = (result) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 2000);
  }
};

export const delete_result = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: id
  };
};