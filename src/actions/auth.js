import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";

import AuthService from "../services/auth.service";
/**
 * register user 
 * if you have done register api then you can use this function to register user
 * uncomment this function to use it
 * @param {string} username 
 * @param {string} email 
 * @param string password 
 * @returns  {Promise}
 */
// export const register = (username, email, password) => (dispatch) => {
//   return AuthService.register(username, email, password).then(
//     (response) => {
//       dispatch({
//         type: REGISTER_SUCCESS,
//       });

//       dispatch({
//         type: SET_MESSAGE,
//         payload: response.data.message,
//       });

//       return Promise.resolve();
//     },
//     (error) => {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();

//       dispatch({
//         type: REGISTER_FAIL,
//       });

//       dispatch({
//         type: SET_MESSAGE,
//         payload: message,
//       });

//       return Promise.reject();
//     }
//   );
// };
/**
 * function to login user and change user state in reducer
 * @param {string} username 
 * @param {string} password 
 * @returns {Promise}
 * }
 */
export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
/**
 * logout user and chand state to undefined
 * @returns {void}
 */
export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
