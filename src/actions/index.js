import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const API_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=a897ds97sdf987sdf97'; // not a secret, can be any string

export function fetchPosts() {
  const request = axios.get(`${API_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}