import React, { Component } from "react";
import EventBus from "../common/EventBus";
import UserService from "../services/user.service";
import { history } from "../helpers/history";
import "./cmp_css/home.css";
export default class Homefa extends Component {
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
            <div className="d-flex justify-content-between mb-3">
              {this.state.currentUser ? (
                <div  className=" header w-50">
                  <button onClick={(event)=>{
                    EventBus.dispatch("logout");
                    window.location.reload();
                  }} className="signup-button">خروج</button>
                  <button onClick={(event)=>{
                    history.push("/profile");
                  }} className="normal-button">نمایه</button>
                  <button className="normal-button">درباره ما </button>
                  <button className="normal-button">خدمات</button>
                  <button className="normal-button">تماس با ما</button>
                  <button  onClick={(event)=>{
                    history.push("/");
                  }} className="normal-button">انگیلیسی</button>
                </div>
              ) : (
                <div  className="header w-75">
                  <button onClick={(event)=>{
                    history.push("/login");
                  }}  className="signup-button">ورود </button>
                  <button className="signup-button">ثبت نام</button>
                  <button className="normal-button">درباره ما </button>
                  <button className="normal-button">خدمات</button>
                  <button className="normal-button">تماس با ما</button>
                  <button  onClick={(event)=>{
                    history.push("/");
                  }} className="normal-button">انگیلیسی</button>
                </div>
              )}
            </div>
          </div>
          <div id="main_content_home" className="d-flex flex-row  justify-content-between  ">
           
            <div>
              <img src={require("../assest/png/cloud.png")}></img>
            </div>
            <div id="home_content" style={{marginLeft: "20%",textAlign:"right"}}>
                <div className="home_text justify-content-start" >
              <h1 className=" text-primary font-weight-bold">امن</h1>
              <h2>  فضای ابری شخصی  </h2>
              <h2> مدریت فایل ها به آسانی </h2>
              <button className="m-2 mr-5" onClick={(event)=>{
                    history.push("/login");
                  }}  >شروع کن</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
