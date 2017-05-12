import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR } from './types';

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
        localStorage.setItem('token', response.data.token);

        // redirect to /feature
        browserHistory.push('/feature');
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'));
      });
  }
}

export function signoutUser() {
  
}

export function authError(error) {
  return { 
    type: AUTH_ERROR,
    payload: error
  }
}