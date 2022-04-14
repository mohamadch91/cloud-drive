import React, { Component } from "react";
import EventBus from "../common/EventBus";
import UserService from "../services/user.service";
import { history } from "../helpers/history";
import "./cmp_css/home.css";
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      current: this.props.user,
    };
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
        //     showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        //     showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  render() {
    console.log(this.state.current);
    return (
      <section className="home" id="home">
        <div id="home_main" className=" ">
          <div id="navbar d-flex">
            <div className=" header d-flex justify-content-between mb-3">
              {this.state.currentUser ? (
                <div className=" header w-75">
                  <button onClick={(event)=>{
                    EventBus.dispatch("logout");
                    window.location.reload();
                  }} className="signup-button">Log out</button>
                  <button onClick={(event)=>{
                    history.push("/profile");
                  }} className="normal-button">Profile</button>
                  <button className="normal-button">About </button>
                  <button className="normal-button">Service</button>
                  <button className="normal-button">Contact</button>
                  <button  onClick={(event)=>{
                    history.push("/fa");
                  }} className="normal-button">fa</button>
                </div>
              ) : (
                <div  className="header w-75">
                  <button onClick={(event)=>{
                    history.push("/login");
                  }}  className="signup-button">Sign in </button>
                  <button className="signup-button">Sign up</button>
                  <button className="normal-button">About </button>
                  <button className="normal-button">Service</button>
                  <button className="normal-button">Contact</button>
                  <button  onClick={(event)=>{
                    history.push("/fa");
                  }} className="normal-button">fa</button>
                </div>
              )}
            </div>
          </div>
          <div id="main_content_home" className="d-flex flex-row  justify-content-between  ">
           
            <div className="home_img">
              <img  className="home_img" src={require("../assest/png/cloud.png")}></img>
            </div>
            <div id="home_content" style={{marginLeft: "20%"}}>
                <div className="home_text">
              <h1 className=" text-primary font-weight-bold">Secure</h1>
              <h2>Cloud Storage and </h2>
              <h2>File Managment </h2>
              <button className="m-2 ml-4" onClick={(event)=>{
                    history.push("/login");
                  }}  >get started</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
