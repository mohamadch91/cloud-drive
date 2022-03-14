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

import Button from "@mui/material/Button";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";

import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import CalendarViewMonthOutlinedIcon from "@mui/icons-material/CalendarViewMonthOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

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
import ArticleIcon from '@mui/icons-material/Article';

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
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
const Input = styled("input")({
  display: "none",
});
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
function createData(link, user, filename, file_size,file_format,updated_time) {
    return {link, user, filename, file_size,file_format,updated_time};
  }
  const ValidationTextField = styled(TextField)({
    // on hover on input
    "&input:hover +fieldset": {
      // borderColor: '#4285f4',
      // borderWidth: '1px',
      // borderStyle: 'solid',
      // borderRadius: '5px',
      outline: "none",
      borderColor: "red",
    },
    "& input:valid + fieldset": {
      //   borderColor: 'blu',
      borderWidth: 2,
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 3,
    },
    "& input:valid:focus + fieldset": {
      borderWidth: 3, // override inline-style
    },
  });
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 20px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#0063cc",
    borderColor: "#0063cc",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  });
  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
class ProfileFa extends Component {
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
      link: "",
      open: false,
      openm: false,
      rows: [],
    };
  }
  handleOpenm = () => {
    this.setState({ openm: true });
  };
  handleClosem = () => {
    this.setState({ openm: false });
  };
  updaterows() {
    UserService.getUserFiles().then(
      (response) => {
        var row = [];
        for (let i = 0; i < response.data.length; i++) {
          let x = 0;
          if (response.data[i].file_size >= 1000000) {
            x = response.data[i].file_size / 1000000;
            x = x.toFixed(2);
            x =  " MB"+ x;
          } else if (response.data[i].file_size >= 1000) {
            x = response.data[i].file_size / 1000;
            x = x.toFixed(2);
            x = " KB"+ x;
          } else if (response.data[i].file_size > 1000000000) {
            x = response.data[i].file_size / 1000000000;
            x = x.toFixed(2);
            x = " GB"+ x;
          } else {
            x = response.data[i].file_size;
            x = x.toFixed(2);
            x =  " Bytes"+ x;
          }

          let y=response.data[i].filename.split(".")[0];
          let z=response.data[i].updated_time.split("T")[0];
          row.push(createData(response.data[i].samplesheet, response.data[i].user, y, x,response.data[i].file_format,z));
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
    this.setState({ selectedFile: event.target.files[0] });
  };
  onLinkChange = (e) => {
    // Update the state
    this.setState({ link: e.target.value });
  };
  onFileUploadURL=()=> {
    UserService.geturlfile(this.state.link).then(
      (response) => {
        console.log(response.data);
        let formData = new FormData();
        formData.append("samplesheet", response.data);
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
      this.setState({  openm: false });

  }
  onFileUpload = () => {
    console.log(this.state.selectedFile);
    let formData = new FormData();
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
  };
  componentDidMount() {
    this.updaterows();
  }
  render() {
    const { user: currentUser } = this.props;
    // console.log(currentUser);
    if (!currentUser) {
      return <Redirect to="/loginFa" />;
    }
    this.updaterows();
    // console.log(this.state.rows);
    return (
      <section className="Middle">
        <div className="Middle_header">
          <Grid container spacing={0}>
            <Grid item xs={2} md={1.5} sm={1.5} >
            <ColorButton
                      id="demo-customized-button"
                      aria-controls={this.state.open ? 'demo-customized-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={this.state.open ? 'true' : undefined}
                      variant="contained"
                      disableElevation
                      sx={{marginLeft:"30%"}}
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
                      anchorEl={this.state.anchorEl}
                      open={this.state.open}
                      onClose={this.handleClose}
                  >
                <MenuItem disableRipple>
                  <label htmlFor="icon-button-file">
                    <Input onChange={this.onFileChange} id="icon-button-file" type="file" />
                    <IconButton
                      aria-label="upload picture"
                      component="span"
                      sx={{ fontSize: "18px" }}
                    >
                      <CreateNewFolderOutlinedIcon
                        sx={{
                          width: "25px",
                          height: "25px",
                          marginLeft: "10%",
                        }}
                      />{" "}
                      آپلود فولدر
                    </IconButton>
                  </label>
                </MenuItem>
                <Divider />
                <MenuItem disableRipple>
                  <label htmlFor="icon-button-file">
                    <Input onChange={this.onFileChange} id="icon-button-file" type="file" />
                    <IconButton
                      aria-label="upload picture"
                      component="span"
                      sx={{ fontSize: "18px" }}
                    >
                      <UploadFileOutlinedIcon
                        sx={{
                          width: "25px",
                          height: "25px",
                          marginLeft: "10%",
                        }}
                      />
                      آپلود فایل
                    </IconButton>
                  </label>
                </MenuItem>

                <MenuItem disableRipple>
                  <label
                    htmlFor="icon-button-file"
                    style={{ fontSize: "10px" }}
                  >
                    <Input onChange={this.onFileChange}id="icon-button-file" type="file" />
                    <IconButton
                      aria-label="upload picture"
                      component="span"
                      sx={{ fontSize: "18px" }}
                    >
                      <DriveFolderUploadOutlinedIcon
                        sx={{
                          width: "25px",
                          height: "25px",
                          fontSize: "18px",
                          marginLeft: "10%",
                        }}
                      />
                      آپلود فولدر
                    </IconButton>
                  </label>
                </MenuItem>
                <MenuItem disableRipple>
                  <label
                    htmlFor="icon-button-file"
                    style={{ fontSize: "10px" }}
                  >
                    <Button onClick={this.handleOpenm}>
                      آپلود با لینک
                    </Button>
                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      open={this.state.openm}
                      onClose={this.handleClosem}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 500,
                      }}
                    >
                      <Fade in={this.state.openm}>
                        <Box sx={style}>
                          <Typography
                            id="transition-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            <ValidationTextField
                              id="outlined-name"
                              fullWidth
                              label="url"
                              value={this.state.link}
                              defaultValue=""
                              validations={[required]}
                              placeholder="link"
                              onChange={this.onLinkChange}
                              sx={{ marginBottom: "10px" }}
                            />
                          </Typography>
                          <Typography
                            id="transition-modal-description"
                            sx={{ mt: 2 }}
                          >
                            <div className="form-group">
                              <button
                                variant="contained"
                                className="btn btn-primary btn-block"
                                disabled={this.state.loading}
                                onClick={this.onFileUploadURL}
                              >
                                آپلود
                                {this.state.loading && (
                                  <span className="spinner-border spinner-border-sm"></span>
                                )}
                              </button>
                            </div>
                          </Typography>
                        </Box>
                      </Fade>
                    </Modal>
                  </label>
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={this.handleClose} disableRipple>
                  قوانین
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={this.handleClose} disableRipple>
                 <ColorButton onClick={this.onFileUpload}>Sumbit</ColorButton>
                </MenuItem>
              </StyledMenU>
            </Grid>
            <Grid item xs={9} md={9} sm={9}></Grid>
            <Grid
              item
              xs={1}
              md={1}
              sm={1}
              justifyContent="flex-end"
              sx={{ marginTop: "1%" }}
            >
              <Tooltip title="مشاهده جدولی" enterDelay={500} size="small">
                <IconButton
                  aria-label="grid view"
                  sx={{
                    width: "25px",
                    height: "25px",
                    marginLeft: "15px",
                    color: "#707070",
                  }}
                >
                  <CalendarViewMonthOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="جزیات" enterDelay={500} size="small">
                <IconButton
                  aria-label="view details"
                  sx={{ width: "25px", height: "25px", color: "#707070" }}
                >
                  <InfoOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </div>

        <div className="Middle_body" style={{ color: "#606469" }}>
          <Divider />
          <br></br>
          <span style={{ marginTop: "20px",marginLeft:"90%",direction:"ltr" }}> فایل های اخیر</span>

          <div classname="gallery_image">
            <div class="gallery_fa">
              <a target="_blank">
                <img
                  src={require("../assest/png/download.jpg")}
                  alt="aut"
                  width="600"
                  height="400"
                ></img>
              </a>

              <div class="desc">
                <div sx={{ display: "flex" }}>
                  <PictureAsPdfOutlinedIcon
                    size="small"
                    sx={{
                      marginTop: "10px",
                      width: "2  5px",
                      height: "25px",
                      marginRight: "2%",
                    }}
                  />
                  اطلاعات فابل
                </div>

                <span sx={{ marginTop: "2px", marginRight: "2%" }}>
                  {" "}
                  اطلاعات فایل{" "}
                </span>
              </div>
            </div>
            <div class="gallery_fa">
              <a target="_blank">
                <img
                  src={require("../assest/png/download.jpg")}
                  alt="aut"
                  width="600"
                  height="400"
                ></img>
              </a>

              <div class="desc">
                <div sx={{ display: "flex" }}>
                  <PictureAsPdfOutlinedIcon
                    size="small"
                    sx={{
                      marginTop: "10px",
                      width: "2  5px",
                      height: "25px",
                      marginRight: "2%",
                    }}
                  />
                  اطلاعات فایل
                </div>

                <span sx={{ marginTop: "2px", marginRight: "2%" }}>
                  {" "}
                  اطلاعات فایل{" "}
                </span>
              </div>
            </div>
            <div class="gallery_fa">
              <a target="_blank">
                <img
                  src={require("../assest/png/download.jpg")}
                  alt="aut"
                  width="600"
                  height="400"
                ></img>
              </a>

              <div class="desc">
                <div sx={{ display: "flex" }}>
                  <PictureAsPdfOutlinedIcon
                    size="small"
                    sx={{
                      marginTop: "10px",
                      width: "2  5px",
                      height: "25px",
                      marginRight: "2%",
                    }}
                  />
                  اطلاعات فایل
                </div>

                <span sx={{ marginTop: "2px" }}> اطلاعات فایل </span>
              </div>
            </div>
            <div class="gallery_fa">
              <a target="_blank">
                <img
                  src={require("../assest/png/download.jpg")}
                  alt="aut"
                  width="600"
                  height="400"
                ></img>
              </a>

              <div class="desc">
                <div sx={{ display: "flex" }}>
                  <PictureAsPdfOutlinedIcon
                    size="small"
                    sx={{
                      marginTop: "10px",
                      width: "2  5px",
                      height: "25px",
                      marginRight: "2%",
                    }}
                  />
                  اطلاعات فایل
                </div>

                <span sx={{ marginTop: "2px" }}> اطلاعات فایل </span>
              </div>
            </div>
            <div class="gallery_fa">
              <a target="_blank">
                <img
                  src={require("../assest/png/download.jpg")}
                  alt="aut"
                  width="600"
                  height="400"
                ></img>
              </a>

              <div class="desc">
                <div sx={{ display: "flex" }}>
                  <PictureAsPdfOutlinedIcon
                    size="small"
                    sx={{
                      marginTop: "10px",
                      width: "2  5px",
                      height: "25px",
                      marginRight: "2%",
                    }}
                  />
                  اطلاعات فایل
                </div>

                <span sx={{ marginTop: "2px" }}> اطلاعات فایل </span>
              </div>
            </div>
          </div>

          <div
            className="Middle_body_table"
            style={{
              marginRight: "25px",
              marginTop: "20px",
              paddingTop: "45px",
              color: "#606469",
            }}
          >
            <TableContainer
              component={Paper}
              sx={{ border: "none", marginTop: "200px" }}
            >
              <StyledTable
                sx={{ minWidth: 650, border: "none" }}
                aria-label=" table"
              >
                <TableHead sx={{ border: "none", direction: "rtl" }}>
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
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ display: "flex" }}
                    >
                      {row.file_format === "pdf" && (
                         <PictureAsPdfOutlinedIcon
                         size="small"
                         sx={{ color: "#F70000", marginRight: "5px" }}
                       />
                      )}
                      {row.file_format === "docx" && (
                         <ArticleIcon
                         size="small"
                         sx={{ color: "#007FFF", marginRight: "5px" }}
                       />
                      )}
                      {(row.file_format === "json" ||row.file_format === "odt"||row.file_format === "xlsx"|| row.file_format === "jpg") && (
                         <FolderIcon
                         size="small"
                         sx={{ color: "#FAD165", marginRight: "5px" }}
                       />
                      )}
                      
                      <a className="links" href={row.link} target="_blank">{row.filename}</a>
                    </TableCell>
                    <TableCell align="right"><a className="links" href={row.link} target="_blank">{row.user}</a></TableCell>
                    <TableCell align="right"><a className="links" href={row.link} target="_blank">{row.updated_time}</a></TableCell>
                    <TableCell align="right"><a className="links" href={row.link} target="_blank">{row.file_size}</a></TableCell>
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
