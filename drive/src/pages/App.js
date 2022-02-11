
import Header from '../components/Header.js';
import DrawerLeft from '../components/Drawer.js';
import Middle from '../components/middle.js';
import DrawerRight from '../components/right_drawer.js';
// import Divider from '@mui/material/Divider';
import { Tooltip } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import Grid from '@mui/material/Grid';
import './app.css';
import reactDom from 'react-dom';

function App() {
  let open=true;
  var mid_spacing=9.5;
  var right_spacing=0.5;
  const clickhandler =(event) => {
      if(open===true){
          mid_spacing=12;
          right_spacing=0;
          open=false;
          let drawer=document.getElementById("drawer_right");
          drawer.style.display="none";
          let right_grid=document.getElementById("right_grid");
          right_grid.style.display="none";
          // console.log(grid.classList);
          // spacing=12;
          reactDom.render();
          
      }
      else{
          mid_spacing=9.5;
          right_spacing=0.5;
         
          let right_grid=document.getElementById("right_grid");
          right_grid.style.display="block";
          open=true;
          let drawer=document.getElementById("drawer_right");
          drawer.style.display="block";
          // console.log(grid.classList);

      }
      
  }
  
  return (
    <div className="App" >
      <section className="App-header">
            <Grid container spacing={0}>
                <Grid item xs={12}>
                     <div id="Header"  >

                           <Header />
                     </div>
             </Grid>
             </Grid>
             </section>
       <section className="app_mid">      
      <Grid container spacing={1}>
          <Grid item xs={3} md={2} sm={2}>
              <div style={{position:"fixed"}}>    
                  <DrawerLeft />
              </div>
          </Grid> 
          <Grid id="middle_grid" item xs={mid_spacing-1} md={mid_spacing} sm={mid_spacing}>
              <div >
                  <Middle/>
                </div>
          </Grid>
          {/* <Grid item xs={1} md={0.1} sm={1}> */}
          {/* <Divider orientation="vertical" flexItem sx={{marginTop:"38.5%",marginRight:"-1px",width:"100%"}} /> */}
         {/* </Grid> */}
          <Grid id="right_grid" item xs={right_spacing} md={right_spacing} sm={right_spacing}>

              <div style={{borderLeft:"1px solid #ccc",display:"flex" ,position:"fixed"}}>
                  <div id="drawer_right">
                  <DrawerRight />
                  </div>
                  <div id="hide_icon" style={{position:"absolute"}} >
                  <Tooltip placement="top" title="Hide side panel" enterDelay={500} size="small" sx={{marginTop:'2%'}} >
                                <IconButton aria-label="serach " onClick={clickhandler} sx={{width:'40px',height:'40px',marginTop:'530px',marginLeft:"10px"}}  >
                                        <ArrowForwardIosIcon sx={{width:'15px',height:'15px'}} />
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

export default App;
