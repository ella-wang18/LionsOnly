import * as ActionTypes from '../actionTypes/storeActionTypes';

const defaultStoreState = {
  storeData: [],
};

const storeReducer = (state = defaultStoreState, action) => {
  switch(action.type) {
    case ActionTypes.ADD_PRODUCT:
      return Object.assign({}, state, {
        storeData: action.data,
      });
    case ActionTypes.REMOVE_PRODUCT:
      return Object.assign({}, state, {
        storeData: action.data,
      });
    case ActionTypes.CHECKOUT:
      return Object.assign({}, state, {
        ...state,
        storeData: [],
      });
    default:
      return state;
  }
};

export default storeReducer;
