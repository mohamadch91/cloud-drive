import * as React from 'react';

import Divider from '@mui/material/Divider';

import { Tooltip } from '@mui/material';

import IconButton from '@mui/material/IconButton';

import AddIcon from '@mui/icons-material/Add';

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import AddIcon from '@mui/icons-material/Add';
//   const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);
export default function DrawerRight() {
    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const open1 = Boolean(anchorEl1);
    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };
  
    const handleClose1 = () => {
        setAnchorEl1(null);
    };  
  return (
    //   <section className="right_drawer" style={{overflow:"auto"}}>
           
     <div className="right_drawer" style={{height:"590px",paddingLeft:"10%"}}>
                                           <Tooltip title="Calender" enterDelay={500} size="small" sx={{marginTop:'100px'}} >
                                <IconButton aria-label="serach" sx={{width:'35px',height:'40px',marginTop:'15px',marginLeft:'4px',color:'red'}}  >
                                        <CalendarTodayIcon sx={{width:'20px',height:'20px'}} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Keep" enterDelay={500} size="small" sx={{marginTop:'100px'}} >
                                <IconButton aria-label="serach" sx={{width:'40px',height:'40px',marginTop:'10px',marginLeft:'2px',color:'#FBBC04'}}  >
                                        <BatchPredictionIcon sx={{width:'20px',height:'20px'}} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Task" enterDelay={500} size="small" sx={{marginTop:'100px'}} >
                                <IconButton aria-label="serach" sx={{width:'40px',height:'40px',marginTop:'10px',marginLeft:'2px',color:'#2684FC'}}  >
                                        <CheckCircleIcon sx={{width:'20px',height:'20px'}} />
                                </IconButton>
                            </Tooltip>
                            <Divider sx={{ my: 0.5,paddingRight:'5px' }} />
                            <Tooltip title="Add" enterDelay={500} size="small" sx={{marginTop:'100px'}} >
                                <IconButton aria-label="serach" sx={{width:'40px',height:'40px',marginTop:'7px',marginLeft:'2px'}}  >
                                        <AddIcon sx={{width:'20px',height:'20px'}} />
                                </IconButton>
                            </Tooltip>
                            

    </div>
    //   </section>
   
  );
}
