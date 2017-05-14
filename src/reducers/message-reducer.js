import { FETCH_MESSAGE} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_MESSAGE: 
      return { ...state, authenticatedMessage: action.payload };
  }

  return state;
}