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
  // write function to change grids when button clicked
  let open = true;
  var mid_spacing = 9.5;
  var right_spacing = 0.5;
 

  return (
    <div className="App_fa" style={{ direction: "rtl" }}>
      {/* Header part of app */}
      <section className="App-header">
        {/* xs props is value for breakpoint for mui grid component 
                    xs means x small screens  */}
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
        {/* right grid */}
        {/* <Grid id="right_grid" item xs={right_spacing} md={right_spacing} sm={right_spacing}> */}
        {/* left drawer use */}
        {/* <div style={{borderLeft: "1px solid #ccc", display: "flex", position: "fixed"}}>
                            <div id="drawer_right">
                                <DrawerRight/>
                            </div> */}
        {/* another div used for handle button which close right drawer and open it again */}
        {/* <div id="hide_icon" style={{position: "absolute", marginTop: '1000%'}}>
                                <Tooltip placement="top" title="Hide side panel" enterDelay={500} size="small"
                                         sx={{marginTop: '2%'}}>
                                    <IconButton aria-label="serach " onClick={clickhandler}
                                                sx={{width: '40px', height: '40px', marginLeft: "0.1%"}}> */}
        {/* <ArrowForwardIosIcon sx={{width: '15px', height: '15px'}}/> */}
        {/* </IconButton> */}
        {/* </Tooltip> */}
        {/* </div> */}
        {/* </div> */}
        {/* </Grid> */}
      </section>
    </div>
  );
}

export default Main_fa;
