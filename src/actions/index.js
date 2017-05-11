import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from './types';

const API_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  // redux-thunk allows us to return a function, rather than just an object with a type
  // redux-thunk also gives us access to the dispatch method
  return function(dispatch) {
    axios.post(`${API_URL}/signin`, { email, password })
      .then(response => {
        // update state
        dispatch({ type: AUTH_USER })

        // store JWT token

        // redirect to /feature
        browserHistory.push('/feature');
      })
      .catch(() => {

      });

    // dispatch({ type: '' });
  }

  // Submit email/password to server


  // Good, authenticate user, save JWT token, redirect to /feature

  // Bad, show error
}