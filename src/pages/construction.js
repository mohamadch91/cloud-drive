import React, { Component } from "react";
import EventBus from "../common/EventBus";
import UserService from "../services/user.service";
import { history } from "../helpers/history";
import "./404.css"
/**
 * component for under construction page
 * @component
 * @returns {JSX.Element}
 * @constructor UnderConstruction
 * 
 */
export default class Construction extends Component {
  constructor(props) {
    super(props);

    
  }

  /**
   * render JSX and return HTML
   * @returns {JSX.Element}
   * @memberof UnderConstruction
   * @description: this function is used to render the page
   * 
   */
  
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

             </div>

         </div>
      </div>
  </section>
    );
  }
}
