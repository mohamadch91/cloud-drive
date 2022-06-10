import Header_fa from "../components/Header._fa.js";
import DrawerLeft_Fa from "../components/Drawer_fa";
import ProfileFA from "../components/profileFa.component";
import DrawerRight from "../components/right_drawer.js";
import { Tooltip } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "@mui/material/Grid";
import "../App.css";
import reactDom from "react-dom";

/**
 * @description: this is the main page of the app
 * @component Main
 * 
 *  @param {Tooltip} tooltip
 *  @param {IconButton} iconButton
 *  @param {ArrowForwardIosIcon} arrowForwardIosIcon
 *  @param {Divider} divider
 *  @param {Grid} grid
 *  assemble whole page in one component
 *   style components with sx prop
 *
 * main app component
 * @returns complete app component

 **/
function Main_fa() {
/**
 * @function Main
 * @description: this is the main page of the app
 * 
 */
  return (
    <div className="App_fa" style={{ direction: "rtl" }}>
      {/* Header part of app */}
      <section className="App-header">
        <div className="col-12" id="Header">
          <Header_fa />
        </div>
      </section>
      <section className="app_mid">
        {/* Left drawer  */}
        <div className="" style={{ direction: "rtl" }}>
          {/* medium screens and small screens 
                    handle grids and break point with mui grid component */}

          <div className="column-2 " style={{ position: "fixed" }}>
            <DrawerLeft_Fa />
          </div>

          {/* middle part of page containt file demos and tables */}

          <div className="column-10 off-2" style={{ position: "fixed" }} >
            <ProfileFA />
          </div>
        </div>
   
      </section>
    </div>
  );
}

export default Main_fa;
