import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import UserService from "../services/user.service";
// import React from 'react';
import "./cmp_css/middle.css";
import a from "../assest/png/images.jpg";
import { Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import TuneIcon from "@mui/icons-material/Tune";
import Grid from "@mui/material/Grid";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";

import Divider from "@mui/material/Divider";
import Form from "react-validation/build/form";
import Button from "@mui/material/Button";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";

import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import CalendarViewMonthOutlinedIcon from "@mui/icons-material/CalendarViewMonthOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Input from "@mui/material/Input";
// import TableRow from '@mui/material/TableRow';
import Paper from "@mui/material/Paper";
import FolderIcon from "@mui/icons-material/Folder";
// import { styled } from '@mui/material/styles';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
const StyledMenU = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    direction: "rtl",
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 200,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "3px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 16,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
const ColorButton = styled(Button)(({ theme }) => ({
  borderRadius: 5,
  // boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
  border: "none",
  backgroundColor: "white",
  color: "black",
  fontSize: "16px",
  padding: "0px",
  width: "50%",
  height: "70%",
  marginBottom: "5px",
  marginLeft: "10px",
  marginTop: "5px",
  textTransform: "none",

  "&:hover": {
    backgroundColor: "#F1F3F4",

    // borderColor: '#0062cc',
    // color:'black',
    //  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
  },
}));

//style TAble
const StyledTable = styled(Table)(({ theme }) => ({
  "& .MuiTableCell-root": {
    padding: "2px",
    paddingLeft: "10px",
    paddingRight: "10px",
    border: "none",
    // marginBottom:'20px',
    borderBottom: "1px solid #E0E0E0",
    fontSize: "14px",
    color: "#828282",
    height: "40px",
    alignItems: "center",
    // justifyContent:'center',
    "&:last-child": {
      borderRight: "1px solid #E0E0E0",
    },
  },
  "& .MuiTableRow-root": {
    // height:'40px',
  },
  "& .MuiTableSortLabel-icon": {
    color: "#828282",
    "&:hover": {
      color: "#828282",
    },
  },
}));
function createData(
  link,
  user,
  filename,
  file_size,
  file_format,
  updated_time
) {
  return { link, user, filename, file_size, file_format, updated_time };
}

class Test extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);

    this.state = {
      selectedFile: null,
      content: "",
      anchorE1: null,
      open: false,
      rows: [],
    };
  }

  updaterows() {
    UserService.getUserFiles().then(
      (response) => {
        //   console.log(response.data);
        var row = [];
        for (let i = 0; i < response.data.length; i++) {
          let x = 0;
          if (response.data[i].file_size >= 1000000) {
            x = response.data[i].file_size / 1000000;
            x = x.toFixed(2);
            x = x + " MB";
          } else if (response.data[i].file_size >= 1000) {
            x = response.data[i].file_size / 1000;
            x = x.toFixed(2);
            x = x + " KB";
          } else if (response.data[i].file_size > 1000000000) {
            x = response.data[i].file_size / 1000000000;
            x = x.toFixed(2);
            x = x + " GB";
          } else {
            x = response.data[i].file_size;
            x = x.toFixed(2);
            x = x + " Bytes";
          }

          let y = response.data[i].filename.split(".")[0];
          let z = response.data[i].updated_time.split("T")[0];
          row.push(
            createData(
              response.data[i].samplesheet,
              response.data[i].user,
              y,
              x,
              response.data[i].file_format,
              z
            )
          );
        }
        this.setState({ rows: row });
      },
      (error) => {
        console.log(error);
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  
  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget, open: true });
  };

  handleClose = () => {
    this.setState({ anchorEl: null, open: false });
  };
  onFileChange = (event) => {
    // Update the state
    // console.log(event.target.files[0]);
    this.setState({ selectedFile:event.target.files[0] });
    if(this.state.selectedFile!=null){
      this.onFileUpload();
    }
    else{
       setTimeout(this.onFileChange(event),1000);
         
    }
  };
  onFileUpload = (event) => {
    this.setState({ selectedFile:event.target.files[0] });
    let formData = new FormData();
    console.log(this.state.selectedFile);
    formData.append("samplesheet", this.state.selectedFile);
    console.log(formData);
    UserService.uploadUserFile(formData).then(
      (response) => {
        console.log(response.data);
        this.setState({
          content: "salam",
        });
      },
      (error) => {
        console.log(error);
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString(),
        });
      }
    );
    return false;
  };
  render() {
    const { user: currentUser } = this.props;
    // console.log(currentUser);
    // if (!currentUser) {
    //   return <Redirect to="/loginFa" />;
    // }
    // this.updaterows();
    // console.log(this.state.rows);
    return (
      <section className="Middle">
        <div className="Middle_header">
          <div className="Middle_header_left">
            <div>
              <label className="custom-file-upload" style={ {border: "1px solid #ccc",
    display:" inline-block",
    padding: "6px 12px",
    cursor: "pointer"}}>
            
                <input type="file" style={{display:"none"}} onInput={this.onFileUpload } />
                Custom Upload
             
              </label>

              {this.state.content}
            </div>
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

export default connect(mapStateToProps)(Test);
