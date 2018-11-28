import * as types from '../types';
// HINT: use this
import { normalize, schema } from 'normalizr';

export function test(str) {
  return {
    type: types.TEST_TYPE,
    payload: str
  };
}

export function getData() {
  return async dispatch => {
    try {
      let data = require('../data/reputationData.json');

      // TODO push data to the reducer instead
      return data;
    } catch (err) {
      console.error(err);
      return null;
    }
  };
}
