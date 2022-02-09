import React from 'react';
import './cmp_css/middle.css';

import { Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import TuneIcon from '@mui/icons-material/Tune';
import Grid from '@mui/material/Grid';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';

import Divider from '@mui/material/Divider';

import Button from '@mui/material/Button';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';

import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import CalendarViewMonthOutlinedIcon from '@mui/icons-material/CalendarViewMonthOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

// import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FolderIcon from '@mui/icons-material/Folder';
// import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
const StyledMenU = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 200,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '3px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 16,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));
  const ColorButton = styled(Button)(({ theme }) => ({
    borderRadius:5,
    // boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
    border:'none',
     backgroundColor: 'white',
     color:'black',
     fontSize:'16px',
     padding:'0px',
     textTransform: 'none',
     '&:hover': {
         backgroundColor: '#F1F3F4',
         // borderColor: '#0062cc',
         // color:'black',
        //  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
       },
     
   }));
   const Input = styled('input')({
    display: 'none',
  });
  //style TAble
  const StyledTable=styled(Table)(({theme})=>({

    '& .MuiTableCell-root':{
        padding:'2px',
        paddingLeft:'10px',
        paddingRight:'10px',
        border:'none',
        // marginBottom:'20px',
        borderBottom:'1px solid #E0E0E0',
        fontSize:'14px',
        color:'#828282',
        height:'40px',
        alignItems:'center',
        // justifyContent:'center',
        '&:last-child':{
            borderRight:'1px solid #E0E0E0',
        }
    },
    '& .MuiTableRow-root':{
        // height:'40px',
       
    },
    '& .MuiTableSortLabel-icon':{
        color:'#828282',
        '&:hover':{
            color:'#828282',
        }
    },
}));




  function createData(Name, Owner, last_modified, file_size) {
    return { Name, Owner, last_modified, file_size };
  }
  
  const rows = [
    createData('Colab Note Book', 'me', '16 Nov 2021 me', '154 KB'),
    createData('OS', 'me', '16 Nov 2021 me', '154 KB'),
    createData('Micro Note Book', 'me', '16 Nov 2021 me', '154 KB'),
    createData('Data Note Book', 'me', '16 Nov 2021 me', '154 KB'),
    createData('unknown Note Book', 'me', '16 Nov 2021 me', '154 KB'),
    createData('other Note Book', 'me', '16 Nov 2021 me', '154 KB'),
    createData('AP Note Book', 'me', '16 Nov 2021 me', '154 KB'),
    createData(' C Note Book', 'me', '16 Nov 2021 me', '154 KB'),
    createData(' MAth Note Book', 'me', '16 Nov 2021 me', '154 KB'),
    createData('Physics Note Book', 'me', '16 Nov 2021 me', '154 KB'),
    createData(' idont know Note Book', 'me', '16 Nov 2021 me', '154 KB'),
  ];
export default function Middle() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };  
   
        
        return(
         <section className="Middle">
            <div className="Middle_header">
                        <Grid container spacing={0}>
                            <Grid item xs={2} md={2} sm={2}>
                                     <ColorButton
                                                id="demo-customized-button"
                                                aria-controls={open ? 'demo-customized-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                variant="contained"
                                                disableElevation
                                                onClick={handleClick}
                                                endIcon={<ArrowDropDownOutlinedIcon />}
                                                sx={{width:'130px',height:'45px',marginTop:'10px',marginLeft:'10px'}}
                                                
                                            >
                                                
                                            
                                             
                                                My Drive   
                                         
                                            </ColorButton>
                                            <StyledMenU
                                                id="demo-customized-menu"
                                                MenuListProps={{
                                                'aria-labelledby': 'demo-customized-button',
                                                }}
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                            >
                                                <MenuItem onClick={handleClose} disableRipple>
                                                <label htmlFor="icon-button-file">
                                                    <Input accept="image/*" id="icon-button-file" type="file" />
                                                    <IconButton aria-label="upload picture" component="span" sx={{fontSize:"14px"}}>
                                                    <CreateNewFolderOutlinedIcon sx={{width:'25px',height:'25px'}}/> Folder
                                                    </IconButton>
                                                </label>
                                                    
                                                </MenuItem>
                                                <Divider/>
                                                <MenuItem  onClick={handleClose} disableRipple>
                                                <label htmlFor="icon-button-file">
                                                    <Input accept="image/*" id="icon-button-file" type="file" />
                                                    <IconButton aria-label="upload picture" component="span" sx={{fontSize:"14px"}}>
                                                    <UploadFileOutlinedIcon sx={{width:'25px',height:'25px'}}/> 
                                                    File Upload
                                                    </IconButton>
                                                </label>
                                       
                                               
                                                
                                                </MenuItem>
                                                
                                                <MenuItem onClick={handleClose} disableRipple >
                                                <label htmlFor="icon-button-file" style={{fontSize:"10px" ,}}>
                                                    <Input accept="image/*" id="icon-button-file" type="file" />
                                                    <IconButton aria-label="upload picture" component="span" sx={{fontSize:"14px"}}>
                                                    < DriveFolderUploadOutlinedIcon sx={{width:'25px',height:'25px',fontSize:"10px"}}    /> 
                                                Folder Upload
                                                    </IconButton>
                                                </label>
                                              
                                                </MenuItem>
                                                <Divider sx={{ my: 0.5 }} />
                                                <MenuItem onClick={handleClose} disableRipple>
                                                Terms and policy 
                                                </MenuItem>
                                               
                                            </StyledMenU>
                                    </Grid> 
                                    <Grid item xs={9} md={9} sm={9}>
                                        </Grid>
                                    <Grid item xs={1} md={1} sm={1}    justifyContent="flex-end">
                                    <Tooltip title="Grid view" enterDelay={500} size="small" >
                                            
                                            <CalendarViewMonthOutlinedIcon sx={{width:'25px',height:'25px',marginRight:"15px",color:"#707070"}} />
                                           
                                          </Tooltip>
                                          <Tooltip title="view details" enterDelay={500} size="small">
                                            
                                            <InfoOutlinedIcon sx={{width:'25px',height:'25px',color:"#707070",marginTop:"15px"}} />
                                           
                                          </Tooltip>
                                        </Grid>
                            </Grid>
                        
            </div>
            <Divider/>
            <div className="Middle_body" style={{marginLeft:"25px",marginTop:"20px",color:"#606469"}}>
                   <span > Suggested</span>        
                   <br></br>
                   <div classname="gallery_image">
                                <div class="gallery">
                                        <a target="_blank" >
                                        <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="aut" width="600" height="400"></img>
                                                </a>
                                                
                                     <div class="desc">
                                         <div sx={{display:"flex"}}>
                                     <PictureAsPdfOutlinedIcon size="small" sx={{marginTop:"10px",width:"2  5px",height:"25px"}}/> 
                                     some things here
                                     </div>
                                     
                            
                                        <span sx={{marginTop:"2px"}}> there is information about files </span></div>
                               </div>
                               <div class="gallery">
                                        <a target="_blank" >
                                        <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="aut" width="600" height="400"></img>
                                                </a>
                                                
                                     <div class="desc">
                                         <div sx={{display:"flex"}}>
                                     <PictureAsPdfOutlinedIcon size="small" sx={{marginTop:"10px",width:"2  5px",height:"25px"}}/> 
                                     some things here
                                     </div>
                                     
                            
                                        <span sx={{marginTop:"2px"}}> there is information about files </span></div>
                               </div>
                               <div class="gallery">
                                        <a target="_blank" >
                                        <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c" alt="aut" width="600" height="400"></img>
                                                </a>
                                                
                                     <div class="desc">
                                         <div sx={{display:"flex"}}>
                                     <PictureAsPdfOutlinedIcon size="small" sx={{marginTop:"10px",width:"2  5px",height:"25px"}}/> 
                                     some things here
                                     </div>
                                     
                            
                                        <span sx={{marginTop:"2px"}}> there is information about files </span></div>
                               </div>
                               <div class="gallery">
                                        <a target="_blank" >
                                        <img src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62" alt="aut" width="600" height="400"></img>
                                                </a>
                                                
                                     <div class="desc">
                                         <div sx={{display:"flex"}}>
                                     <PictureAsPdfOutlinedIcon size="small" sx={{marginTop:"10px",width:"2  5px",height:"25px"}}/> 
                                     some things here
                                     </div>
                                     
                            
                                        <span sx={{marginTop:"2px"}}> there is information about files </span></div>
                               </div>
                               <div class="gallery">
                                        <a target="_blank" >
                                        <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="aut" width="600" height="400"></img>
                                                </a>
                                                
                                     <div class="desc">
                                         <div sx={{display:"flex"}}>
                                     <PictureAsPdfOutlinedIcon size="small" sx={{marginTop:"10px",width:"2  5px",height:"25px"}}/> 
                                     some things here
                                     </div>
                                     
                            
                                        <span sx={{marginTop:"2px"}}> there is information about files </span></div>
                               </div>
                       
                    </div>                         
            
             </div>
             <div className="Middle_body_table" style={{marginLeft:"25px",marginTop:"20px",paddingTop:"45px",color:"#606469"}}>
             <TableContainer component={Paper} sx={{border:'none',marginTop:"200px"}}>
      <StyledTable sx={{ minWidth: 650,border:'none' }} aria-label=" table">
      <TableHead sx={{border:'none'}}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Owner</TableCell>
            <TableCell align="right">Last Modified</TableCell>
            <TableCell align="right">File Size</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{display:"flex"}}>
              <FolderIcon sx={{color:'#FAD165',marginRight:"5px"}}/>
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.Owner}</TableCell>
              <TableCell align="right">{row.last_modified}</TableCell>
              <TableCell align="right">{row.file_size}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
                 
                 </div>
                
         </section>
                
        );  
    
}

