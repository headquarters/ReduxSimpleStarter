import { FETCH_POSTS } from '../actions';
import { mapKeys } from 'lodash';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}