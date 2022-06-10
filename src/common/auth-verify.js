import React, { Component } from "react";
import { history } from '../helpers/history';
/**
 * get JWT token and check its valid or not
 * @param {JWT.token} token Jwt token
 * @returns 
 */
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};
/**
 * check JWT token is valid or not
 * @component
 * @returns {JSX.Element}
 * @constructor AuthVerify
 * if token is valid then redirect to Profile page
 * if token is not valid then redirect to login page
 */
class AuthVerify extends Component {
  constructor(props) {
    super(props);

    history.listen(() => {
      const user = JSON.parse(localStorage.getItem("user"));

      if (user) {
        const decodedJwt = parseJwt(user.data.access);

        if (decodedJwt.exp * 1000 < Date.now()) {
          props.logOut();
        }
      }
    });
  }

  render() {
    return <div></div>;
  }
}

export default AuthVerify;
