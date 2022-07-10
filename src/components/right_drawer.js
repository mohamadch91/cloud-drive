import * as React from 'react';
import Divider from '@mui/material/Divider';
import {Tooltip} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
/**
 @todo: implement Buttons Hover and press functions
 **/
/**
 * implement right drawer with three icon button of MUI
 * @param {Tooltip} tooltip
 * @param {IconButton} iconButton
 * @param {AddIcon} addIcon
 * @param {CalendarTodayIcon} calendarIcon
 * @param {BatchPredictionIcon} batchPredictionIcon
 * @param {CheckCircleIcon} checkCircleIcon
 * @param {Divider} divider
 * import component from @mui/material
 * Style mui components with sx prop

 * @returns complete drawer component like google drive drawer
 */
export default function DrawerRight() {

    return (

        // main div of drawer
        <div className="right_drawer" style={{height: "590px", paddingLeft: "10%"}}>
            {/* Iconn button in toolip then use icon from MUI icon library imported
                 */}
            <Tooltip title="Calender" enterDelay={500} size="small">
                <IconButton aria-label="serach"
                            sx={{width: '35px', height: '40px', marginTop: '15%', marginLeft: '10%', color: 'red'}}>
                    <CalendarTodayIcon sx={{width: '20px', height: '20px'}}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Keep" enterDelay={500} size="small">
                <IconButton aria-label="serach"
                            sx={{width: '40px', height: '40px', marginTop: '15%', marginLeft: '6%', color: '#FBBC04'}}>
                    <BatchPredictionIcon sx={{width: '20px', height: '20px'}}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Task" enterDelay={500} size="small">
                <IconButton aria-label="serach"
                            sx={{width: '40px', height: '40px', marginTop: '15%', marginLeft: '6%', color: '#2684FC'}}>
                    <CheckCircleIcon sx={{width: '20px', height: '20px'}}/>
                </IconButton>
            </Tooltip>
            <Divider sx={{my: 0.5, paddingRight: '5px'}}/>
            <Tooltip title="Add" enterDelay={500} size="small" sx={{marginTop: '100px'}}>
                <IconButton aria-label="serach"
                            sx={{width: '40px', height: '40px', marginTop: '10%', marginLeft: '6%'}}>
                    <AddIcon sx={{width: '20px', height: '20px'}}/>
                </IconButton>
            </Tooltip>


        </div>


    );
}
