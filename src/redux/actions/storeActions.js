import * as ActionTypes from '../actionTypes/storeActionTypes';

export const addProductSuccess = (data) => ({
  type: ActionTypes.ADD_PRODUCT,
  data,
});

export const addProduct = (data) => {
  return dispatch => {
    dispatch(addProductSuccess(data));
  }
}
