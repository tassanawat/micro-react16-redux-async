import * as actionTypes from './actionTypes';

const getUser = (user) => {
  return {
    type: actionTypes.GET_USER,
    user
  };
};

//Execute ASYNC Code here!
export const get_user = () => {

  return (dispatch) => {
    fetch('https://reqres.in/api/users/')
      .then((resp) => resp.json())
      .then((res) => {
        dispatch(getUser(res.data))
      });

  }
};