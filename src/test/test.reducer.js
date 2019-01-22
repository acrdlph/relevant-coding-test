import * as types from '../types';

const initialState = {
  string: null,
  data: []
};

export default function test(state = initialState, action) {
  switch (action.type) {
    case types.TEST_TYPE:
      return {
        ...state,
        string: action.payload
      };
    case types.SET_DATA:
      return {
        ...state,
        data: action.data
      }
    default:
      return state;
  }
}



