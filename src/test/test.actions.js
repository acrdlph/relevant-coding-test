import * as types from '../types';
// HINT: use this
import { normalize, schema } from 'normalizr';

export function test(str) {
  console.log('hi')
  return {
    type: types.TEST_TYPE,
    payload: str
  };
}

// sync action
const setData = (data) => {
	return {
		type: types.SET_DATA,
		data: data
	}
}

// async action creator
export function getData() {
  return async dispatch => {
    try {
      let data = require('../data/reputationData.json');
      dispatch(setData(data))
    } catch (err) {
      console.error(err);
      return null;
    }
  };
}
