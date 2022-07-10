import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/types";
/**
 * @constant initialState for initial state
 */
const initialState = {};
/**
 * 
 * @param {*} state state of the app
 * @param {*} action action to be performed
 * @returns message message of each state
 */
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_MESSAGE:
      return { message: payload };

    case CLEAR_MESSAGE:
      return { message: "" };

    default:
      return state;
  }
}
