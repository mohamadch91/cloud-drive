import React, { Component } from "react";
import EventBus from "../common/EventBus";
import UserService from "../services/user.service";
import { history } from "../helpers/history";
import "./404.css"
export default class Construction extends Component {
  constructor(props) {
    super(props);

    
  }

  
  
  render() {

    return (
      <section id="main_404"  >
      <div id="main_404" className="">
         <div className="image_con" >
           <div className="img-text_con">
             
             تعمیرات!
            
           </div>
         </div>
         <div className="main_404_text1">
             <div  className="main_404_text">
                 
               
                          <h2 className="main_404_text_inf">سایت در حال بروزرسانی می‌باشد.</h2>
                          <h2 className="main_404_text_inf">لطفا بعدا مراجعه بفرمایید.</h2>
                         {/* <button className="btn button_404 m-2 ml-4" onClick={(event)=>{
                 history.push("/");
               }}  >انتقال به صفحه اصلی</button>
                       */}

             </div>

         </div>
      </div>
  </section>
    );
  }
}
