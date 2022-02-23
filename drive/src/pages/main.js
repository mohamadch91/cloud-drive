import Header from '../components/Header.js';
import DrawerLeft from '../components/Drawer.js';
import Middle from '../components/middle.js';
import DrawerRight from '../components/right_drawer.js';
import {Tooltip} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import Grid from '@mui/material/Grid';
import './app.css';
import reactDom from 'react-dom';

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
function Home() {

    // write function to change grids when button clicked
    let open = true;
    var mid_spacing = 9.5;
    var right_spacing = 0.5;
    const clickhandler = (event) => {
        if (open === true) {
            mid_spacing = 12;
            right_spacing = 0;
            open = false;
            let drawer = document.getElementById("drawer_right");
            drawer.style.display = "none";
            /**
             * @Todo complete this part when clicked again open drawer
             */
            // let right_grid = document.getElementById("right_grid");
            // right_grid.style.display = "none";
            reactDom.render();

        } else {
            mid_spacing = 9.5;
            right_spacing = 0.5;

            let right_grid = document.getElementById("right_grid");
            right_grid.style.display = "block";
            open = true;
            let drawer = document.getElementById("drawer_right");
            drawer.style.display = "block";

        }

    }

    return (
        <div className="App">
            {/* Header part of app */}
            <section className="App-header">
                <Grid container spacing={0}>
                    {/* xs props is value for breakpoint for mui grid component 
                    xs means x small screens  */}
                    <Grid item xs={12}>
                        <div id="Header">

                            <Header/>
                        </div>
                    </Grid>
                </Grid>
            </section>
            <section className="app_mid">
                {/* Left drawer  */}
                <Grid container spacing={1}>
                    {/* medium screens and small screens 
                    handle grids and break point with mui grid component */}
                    <Grid item xs={3} md={2} sm={2}>
                        <div style={{position: "fixed"}}>
                            <DrawerLeft/>
                        </div>
                    </Grid>
                    {/* middle part of page containt file demos and tables */}
                    <Grid id="middle_grid" item xs={mid_spacing - 1} md={mid_spacing} sm={mid_spacing}>
                        <div>
                            <Middle/>
                        </div>
                    </Grid>
                    {/* right grid */}
                    <Grid id="right_grid" item xs={right_spacing} md={right_spacing} sm={right_spacing}>
                        {/* left drawer use */}
                        <div style={{borderLeft: "1px solid #ccc", display: "flex", position: "fixed"}}>
                            <div id="drawer_right">
                                <DrawerRight/>
                            </div>
                            {/* another div used for handle button which close right drawer and open it again */}
                            <div id="hide_icon" style={{position: "absolute", marginTop: '1000%'}}>
                                <Tooltip placement="top" title="Hide side panel" enterDelay={500} size="small"
                                         sx={{marginTop: '2%'}}>
                                    <IconButton aria-label="serach " onClick={clickhandler}
                                                sx={{width: '40px', height: '40px', marginLeft: "0.1%"}}>
                                        <ArrowForwardIosIcon sx={{width: '15px', height: '15px'}}/>
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
}

export default Home;
