import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';
import { mapKeys, omit } from 'lodash';

export default function(state = {}, action) {
  switch(action.type) {
    case DELETE_POST:
      return omit(state, action.payload);
    case FETCH_POSTS:
      return mapKeys(action.payload.data, 'id');
    case FETCH_POST: 
      return { ...state, [action.payload.data.id]: action.payload.data };      
    default:
      return state;
  }
}