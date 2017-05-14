import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types';

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
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}

export function signupUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${API_URL}/signup`, { email, password })
      .then(response => {
        // update state
        dispatch({ type: AUTH_USER })

        // store JWT token
        localStorage.setItem('token', response.data.token);

        // redirect to /feature
        browserHistory.push('/feature');
      })
      .catch(response => {
        // axios is parsing the response so we have to go one level deeper
        // https://www.udemy.com/react-redux-tutorial/learn/v4/questions/2119422
        dispatch(authError(response.response.data.error));
      });
  }
}

export function authError(error) {
  return { 
    type: AUTH_ERROR,
    payload: error
  }
}