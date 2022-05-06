import React, { Component } from "react";
import EventBus from "../common/EventBus";
import UserService from "../services/user.service";
import { history } from "../helpers/history";
import "./404.css"
export default class Notfound extends Component {
  constructor(props) {
    super(props);

   
  }

 

  render() {
   
    return (
     <section id="main_404"  >
         <div id="main_404" className="">
            <div className="image_404" >
              <div className="img-text_404">
                
                ای وای!
               
              </div>
            </div>
            <div className="main_404_text1">
                <div  className="main_404_text">
                    
                  
                             <h2 className="main_404_text_inf">صفحه‌ای که دنبالش می‌گردید را پیدا نمیکنیم.</h2>
                             <h2 className="main_404_text_inf">شاید نشانی را اشتباه نوشته‌اید یا حذف شده است.</h2>
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
