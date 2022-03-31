import React, { Component } from "react";

import UserService from "../services/user.service";
import "./cmp_css/home.css"
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    // UserService.getPublicContent().then(
    //   response => {
    //     this.setState({
    //       content: response.data
    //     });
    //   },
    //   error => {
    //     this.setState({
    //       content:
    //         (error.response && error.response.data) ||
    //         error.message ||
    //         error.toString()
    //     });
    //   }
    // );
  }

  render() {
    return (
      <div className="home w-100">
        <header className="jumbotron text-center">
          <h3 className="text-center mb-5">سامانه فضای ابری</h3>
          <img id="home_logo"  src={require("../assest/png/4.jpg")} alt="logo"  />
        </header>
      </div>
    );
  }
}
