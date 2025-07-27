import * as ActionTypes from '../actionTypes/authActionTypes';

export const loginUserSuccess = (data) => ({
  type: ActionTypes.LOGIN_USER,
});

export const loginUser = () => {
  return dispatch => {
    dispatch(loginUserSuccess());
  };
};
