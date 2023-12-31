import axios from 'axios';
import store from 'src/store';
import { signoutSuccess } from 'src/store/auth/auth.actions';

const api = axios.create({
  baseURL: '/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});

/*
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
*/

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch(signoutSuccess());
    }
    return Promise.reject(err);
  }
);

export default api;
