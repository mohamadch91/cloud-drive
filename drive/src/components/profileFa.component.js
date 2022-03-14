import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import UserService from "../services/user.service";
// import React from 'react';
import './cmp_css/middle.css';
import a from '../assest/png/images.jpg';
import {Tooltip} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import TuneIcon from '@mui/icons-material/Tune';
import Grid from '@mui/material/Grid';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {styled, alpha} from '@mui/material/styles';

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
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
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
))(({theme}) => ({
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
const ColorButton = styled(Button)(({theme}) => ({
  borderRadius: 5,
  // boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
  border: 'none',
  backgroundColor: 'white',
  color: 'black',
  fontSize: '16px',
  padding: '0px',
  width: '50%',
  height: '70%',
  marginBottom: '5px',
  marginLeft: '10px',
  marginTop: '5px',
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
const StyledTable = styled(Table)(({theme}) => ({

  '& .MuiTableCell-root': {
      padding: '2px',
      paddingLeft: '10px',
      paddingRight: '10px',
      border: 'none',
      // marginBottom:'20px',
      borderBottom: '1px solid #E0E0E0',
      fontSize: '14px',
      color: '#828282',
      height: '40px',
      alignItems: 'center',
      // justifyContent:'center',
      '&:last-child': {
          borderRight: '1px solid #E0E0E0',
      }
  },
  '& .MuiTableRow-root': {
      // height:'40px',

  },
  '& .MuiTableSortLabel-icon': {
      color: '#828282',
      '&:hover': {
          color: '#828282',
      }
  },
}));
function createData(link, user, filename, file_size,file_format) {
  return {link, user, filename, file_size,file_format};
}

class ProfileFa extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);
  
  
    this.state = {
    selectedFile: null,
    content:"",
    anchorE1:null,
    open:false,
    rows:[],
  
    };
  }

  updaterows(){
    UserService.getUserFiles().then(
      response => {
        var row=[]
        for (let i = 0; i < response.data.length; i++) {
          let x=0;
          if(response.data[i].file_size>=1000000){
            x=response.data[i].file_size/1000000
            x=x.toFixed(2)
            x=x+" MB"
          }
          else if(response.data[i].file_size>=1000){
            x=response.data[i].file_size/1000
            x=x.toFixed(2)
            x=x+" KB"
          }
          else if(response.data[i].file_size>1000000000){
            x=response.data[i].file_size/1000000000
            x=x.toFixed(2)
            x=x+" GB"
          }
          else{
            x=response.data[i].file_size
            x=x.toFixed(2)
            x=x+" Bytes"
          }

          row.push(createData(response.data[i].samplesheet, response.data[i].user, response.data[i].filename, x,response.data[i].file_format))
        }
        this.setState({rows:row})
      
      },
      error => {
        console.log(error);
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });

        
      }
    );
  }
   
   handleClick = event => {
      this.setState({anchorEl:event.currentTarget,open:true});
      
  };

   handleClose = () => {
    this.setState({anchorEl:null,open:false});
  };
  onFileChange = event => { 
    // Update the state 
    this.setState({ selectedFile: event.target.files[0] }); 
  }; 
  onFileUpload = () => { 
    // Create an object of formData 
    const formData = new FormData(); 
   
    // Update the formData object 
  
   
    // Details of the uploaded file 
    // console.log(this.state.selectedFile); 
   
    // Request made to the backend api 
    // Send formData object 
    UserService.getUserFiles().then(
      response => {
        console.log(response.data);
        this.setState({
          
          content: "salam"
        });
      },
      error => {
        console.log(error);
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });

        
      }
    );
  }; 
  render() {
    const { user: currentUser } = this.props;
    console.log(currentUser);
    if (!currentUser) {
      return <Redirect to="/login" />;
    }
    this.updaterows();
    console.log(this.state.rows)
    return (
        <section className="Middle">
        <div className="Middle_header">
            <Grid container spacing={0}>
                <Grid item xs={2} md={2} sm={2}>
                    <ColorButton
                        id="demo-customized-button"
                        aria-controls={this.state.open ? 'demo-customized-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={this.state.open ? 'true' : undefined}
                        variant="contained"
                        disableElevation
                        onClick={this.handleClick}
                        endIcon={<ArrowDropDownOutlinedIcon/>}

                    >

    فضای من
                        

                    </ColorButton>
                    <StyledMenU
                        id="demo-customized-menu"
                        MenuListProps={{
                            'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={this.stateanchorEl}
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose} disableRipple>
                            <label htmlFor="icon-button-file">
                                <Input accept="image/*" id="icon-button-file" type="file"/>
                                <IconButton aria-label="upload picture" component="span" sx={{fontSize: "18px"}}>
                                    <CreateNewFolderOutlinedIcon sx={{width: '25px', height: '25px',marginLeft:'10%'}}/> آپلود فولدر
                                </IconButton>
                            </label>

                        </MenuItem>
                        <Divider/>
                        <MenuItem onClick={this.handleClose} disableRipple>
                            <label htmlFor="icon-button-file">
                                <Input accept="image/*" id="icon-button-file" type="file"/>
                                <IconButton aria-label="upload picture" component="span" sx={{fontSize: "18px"}}>
                                    <UploadFileOutlinedIcon sx={{width: '25px', height: '25px',marginLeft:'10%'}}/>
                                    آپلود فایل
                                </IconButton>
                            </label>


                        </MenuItem>

                        <MenuItem onClick={this.handleClose} disableRipple>
                            <label htmlFor="icon-button-file" style={{fontSize: "10px",}}>
                                <Input accept="image/*" id="icon-button-file" type="file"/>
                                <IconButton aria-label="upload picture" component="span" sx={{fontSize: "18px"}}>
                                    < DriveFolderUploadOutlinedIcon
                                        sx={{width: '25px', height: '25px', fontSize: "18px" ,marginLeft:'10%'}}/>
                                    آپلود فولدر
                                </IconButton>
                            </label>

                        </MenuItem>
                        <Divider sx={{my: 0.5}}/>
                        <MenuItem onClick={this.handleClose} disableRipple>
                            قوانین
                        </MenuItem>

                    </StyledMenU>
                </Grid>
                <Grid item xs={9} md={9} sm={9}>
                </Grid>
                <Grid item xs={1} md={1} sm={1} justifyContent="flex-end" sx={{marginTop:'1%'}}>
                    <Tooltip title="مشاهده جدولی" enterDelay={500} size="small">
                        <IconButton aria-label="grid view" sx={{width: '25px', height: '25px', marginLeft: "15px", color: "#707070"}}>
                        <CalendarViewMonthOutlinedIcon
                           />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="جزیات" enterDelay={500} size="small">
                        <IconButton aria-label="view details"  sx={{width: '25px', height: '25px', color: "#707070"}}>
                        <InfoOutlinedIcon
                           />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>

        </div>

        <div className="Middle_body" style={{color: "#606469"}}>
            <Divider/>
            <br></br>
            <span style={{marginTop: "20px"}}> فایل های اخیر</span>

            <div classname="gallery_image">
                <div class="gallery_fa">
                    <a target="_blank">
                        <img src={require('../assest/png/download.jpg')} alt="aut" width="600"
                             height="400"></img>
                    </a>

                    <div class="desc">
                        <div sx={{display: "flex"}}>
                            <PictureAsPdfOutlinedIcon size="small"
                                                      sx={{marginTop: "10px", width: "2  5px", height: "25px",marginRight:"2%"}}/>
                            اطلاعات فابل
                        </div>


                        <span sx={{marginTop: "2px",marginRight:"2%"}}> اطلاعات فایل </span></div>
                </div>
                <div class="gallery_fa">
                    <a target="_blank">
                    <img src={require('../assest/png/download.jpg')}  alt="aut" width="600"
                             height="400"></img>
                    </a>

                    <div class="desc">
                        <div sx={{display: "flex"}}>
                            <PictureAsPdfOutlinedIcon size="small"
                                                      sx={{marginTop: "10px", width: "2  5px", height: "25px",marginRight:"2%"}}/>
                            اطلاعات فایل
                        </div>


                        <span sx={{marginTop: "2px",marginRight:"2%"}}> اطلاعات فایل </span></div>
                </div>
                <div class="gallery_fa">
                    <a target="_blank">
                        <img src={require('../assest/png/download.jpg')} alt="aut"
                             width="600" height="400"></img>
                    </a>

                    <div class="desc">
                        <div sx={{display: "flex"}}>
                            <PictureAsPdfOutlinedIcon size="small"
                                                      sx={{marginTop: "10px", width: "2  5px", height: "25px",marginRight:"2%"}}/>
                            اطلاعات فایل
                        </div>


                        <span sx={{marginTop: "2px"}}> اطلاعات فایل </span></div>
                </div>
                <div class="gallery_fa">
                    <a target="_blank">
                        <img src={require('../assest/png/download.jpg')} alt="aut" width="600"
                             height="400"></img>
                    </a>

                    <div class="desc">
                        <div sx={{display: "flex"}}>
                            <PictureAsPdfOutlinedIcon size="small"
                                                      sx={{marginTop: "10px", width: "2  5px", height: "25px",marginRight:"2%"}}/>
                            اطلاعات فایل
                        </div>


                        <span sx={{marginTop: "2px"}}> اطلاعات فایل </span></div>
                </div>
                <div class="gallery_fa">
                    <a target="_blank">
                        <img src={require('../assest/png/download.jpg')} alt="aut" width="600"
                             height="400"></img>
                    </a>

                    <div class="desc">
                        <div sx={{display: "flex"}}>
                            <PictureAsPdfOutlinedIcon size="small"
                                                      sx={{marginTop: "10px", width: "2  5px", height: "25px",marginRight:"2%"}}/>
                            اطلاعات فایل
                        </div>


                        <span sx={{marginTop: "2px"}}> اطلاعات فایل </span></div>
                </div>

            </div>


            <div className="Middle_body_table"
                 style={{marginRight: "25px", marginTop: "20px", paddingTop: "45px", color: "#606469"}}>
                <TableContainer component={Paper} sx={{border: 'none', marginTop: "200px"}}>
                    <StyledTable sx={{minWidth: 650, border: 'none'}} aria-label=" table">
                        <TableHead sx={{border: 'none',direction:'rtl'}}>
                            <TableRow>
                                <TableCell align="right">نام فایل</TableCell>
                                <TableCell align="right">سازنده</TableCell>
                                <TableCell align="right">تاریخ اخرین دسترسی</TableCell>
                                <TableCell align="right">حجم فایل</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row" sx={{display: "flex"}}>
                                        <FolderIcon sx={{color: '#FAD165', marginLeft: "5px"}}/>
                                        {row.filename}
                                    </TableCell>
                                    <TableCell align="right">{row.user}</TableCell>
                                    <TableCell align="right">{row.file_format}</TableCell>
                                    <TableCell align="right">{row.file_size}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </StyledTable>
                </TableContainer>

            </div>
        </div>
    </section>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(ProfileFa);
