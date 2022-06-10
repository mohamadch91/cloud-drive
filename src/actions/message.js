import { SET_MESSAGE, CLEAR_MESSAGE } from "./types";
/**
 * 
 * @param {string} message message for each state of user 
 * @returns 
 */
export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});
