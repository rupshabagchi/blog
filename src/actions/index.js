import axios from 'axios';

export const GET_POSTS='GET_POSTS';

const BASE_URL='http://reduxblog.herokuapp.com/';
const API_KEY="?key=CRYBABY1234";

export function getposts() {

  request_promise = axios.get(`${BASE_URL}/posts${API_KEY}`);
  
  return {
    type: GET_POSTS,
    payload: request_promise
  };
}
