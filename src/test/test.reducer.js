import * as types from '../types';

const initialState = {
  string: null
};

export default function test(state = initialState, action) {
  switch (action.type) {
    case types.TEST_TYPE:
      return {
        ...state,
        string: action.payload
      };

    default:
      return state;
  }
}
