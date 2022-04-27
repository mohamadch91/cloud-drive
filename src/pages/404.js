import React, { Component } from "react";
import EventBus from "../common/EventBus";
import UserService from "../services/user.service";
import { history } from "../helpers/history";
import "./404.css"
export default class Notfound extends Component {
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
     <section id="main_404" style={{background:"#EFEDEE"}} >
         <div id="main_404" className="">
            <div className="image_404" >
            <img className="" src={require("../assest/png/404robot.jpg")}></img>
            </div>
            <div className="main_404_text">
                <div  className="main_404_text">
                    
                  <h1 className=" text-danger font-weight-bold"> اخطار ۴٠۴ </h1>
                             <h2>متاسفانه صفحه مورد نظر یافت نشد.</h2>
                            <button className="btn button_404 m-2 ml-4" onClick={(event)=>{
                    history.push("/");
                  }}  >انتقال به صفحه اصلی</button>
                         

                </div>

            </div>
         </div>
     </section>
    );
  }
}
