import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";
/**
 * @constant initialState for initial state of user
 */
/**
 * @constant user for user state get from local storage
 */
const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

  /**
   * check each state of user logged in or not
   * @param {*} state state of the user
   * @param {*} action action to be performed for each state
   * @returns new state of the user
   */
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}
