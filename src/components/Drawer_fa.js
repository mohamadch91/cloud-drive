import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import { FileIcon, defaultStyles } from "react-file-icon";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { Tooltip } from "@mui/material";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import CloseIcon from "@mui/icons-material/Close";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import axios from "axios";
import "./cmp_css/drawer.css"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SdStorageOutlinedIcon from "@mui/icons-material/SdStorageOutlined";
import profile from "./profile.component";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import UserService from "../services/user.service";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import EventBus from "../common/EventBus";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import { Straight, ThirtyFpsSharp } from "@mui/icons-material";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};
const uploadStyle = {
  position: "absolute",
  top: "50%",
  dirction: "rtl",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "70%",
  outline: "none",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const StyledMenu = styled((props) => (
  <MenuList
    elevation={0}
    anchorOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiIconButton-root":{
    color:"#404040!important",
    fontWeight: 400,
},
  "& .MuiPaper-root": {
    fontFamily: "Vazirmatn",
    direction:"rtl",
    borderRadius: 6,
    minWidth: 200,
    color:"#404040!important",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
        color:"#404040!important"
    },
   
    "& .MuiMenuItem-root": {
      color: "#404040!important",
      "& .MuiSvgIcon-root": {
        fontSize: 16,
        color: "#404040!important",
        marginLeft: theme.spacing(1),
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
const StyledIcon = styled(IconButton)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "Transparent",
  },
  "&:active": {
    backgroundColor: "Transparent",
  },
  "&:focus": {
    backgroundColor: "Transparent",
    shadow: "none",
  },
}));
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
  "& .MuiIconButton-root":{
    color:"#404040!important",
    fontWeight: 400,
},
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 200,
    fontFamily: "Vazirmatn",
    direction: "rtl",
    color:"#404040!important",
    fontWeight: 400,
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      color:"#404040!important",
      fontWeight:400,
      fontSize:16,
      paddingTop: 0,
      paddingBottom: 0,
    },
    "& .MuiMenuItem-root": {
      color:"#404040!important",
      fontWeight: 400,
      fontSize:16,
      paddingTop:"1px",
      paddingBottom:"1px",
      paddingLeft: "6px",
      paddingRight: "6px",
      "& .MuiSvgIcon-root": {
        fontSize: 16,
        direction: "rtl",
        color:"#404040!important",
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
  borderRadius: 50,
  boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
  backgroundColor: "white",
  color: "black",
  marginRight:"5%",
  fontSize: "14px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#F8F9FA",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
  },
}));
const Input = styled("input")({
  display: "none",
});



const ValidationTextField = styled(TextField)({
  // on hover on input
  "& .MuiFormLabel-root": {
    direction:"rtl",
    width:"120%!important",
    textAlign: "start!important",
  },
  "& .MuiOutlinedInput-notchedOutline legend":{
      width:"40%",
      direction:"rtl!important",
      marginLeft:"59%",
      textAlign:"end",
  },
  "& .MuiOutlinedInput-input":{
    direction:"rtl"
  },
  "& .MuiFormLabel-root:focus":{
    textAlign:"end!important"
  },

  "&input:hover +fieldset": {
    justifyContent: "center",
    alignItems: "center",
    outline: "none",
    borderColor: "red",
  },
  "& input:valid + fieldset": {
   
    borderWidth: 1,
  },
  "& input:invalid + fieldset": {
    borderColor: "red",
    borderWidth: 1,
  },
  "& input:valid:focus + fieldset": {
    borderWidth: 1,
  },
});
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
};
const required = (value) => {
  console.log("salam");
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
let flag;
class DrawerLeft extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClose1 = this.handleClose1.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);
    this.onFileUploadURL = this.onFileUploadURL.bind(this);
    window.updateStorage = this.updateStorage.bind(this);
    this.state = {
      selectedFile: null,
      content: "",
      anchorEl1: null,
      link: "",
      open1: false,
      openlinkmodal: false,
      openFM: false,
      openFileModal: false,
      FolderName: "",
      storage: 0,
      totalStorage: 0,
      snackopen: false,
      loadfile: false,
      type: "success",
      progress: 0,
      source: null,
    };
  }

  alerthandle(message, type) {
    this.setState({ content: message, type: type, snackopen: true });
  }
  handleClick1 = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({ anchorEl1: event.currentTarget, open1: true });
  };
  CalcStorage = () => {
    return ((this.state.storage / this.state.totalStorage) * 100).toFixed(2);
  };
  handleClose1 = () => {
    this.setState({ anchorEl1: null, open1: false });
  };
  handleOpenm = () => {
    this.setState({ openlinkmodal: true });
  };
  handleClosem = () => {
    this.setState({ openlinkmodal: false });
  };
  onFileChange = (event) => {
    // Update the state
  
    const files = [...event.target.files]
    this.setState({ selectedFile: files });
  };
  onLinkChange = (e) => {
    // Update the state
    this.setState({ link: e.target.value });
  };
  onFileUploadURL = () => {
    const data = { file_url: this.state.link };
    this.handleClose1();
    this.handleClosem();
    UserService.uploadUrlFile(data).then(
      (response) => {
        EventBus.dispatch("updaterow");
        window.updateMoveRow();
        this.alerthandle("افزودن با لینک موفقیت آمیز بود", "success");
        window.updateStorage();
      },
      (error) => {
        if(error.response.status===401){
          EventBus.dispatch("sessionend")
        }
        this.alerthandle("افزودن با لینک با شکست مواجه شد", "error");
      }
    );
  };
  onmanyfileupload(){
    this.state.selectedFile.forEach((item) => {
     this.onFileUpload(item);
    });
    this.setState({ selectedFile: [] });
  }
  ondeletemanyfile(name){
    let temp=this.state.selectedFile
      let file = temp.filter((obj) => obj.name === name);
      temp.pop(file)
   
    this.setState({ selectedFile: temp });
  }
  onFileUpload = (file) => {
    if (this.state.selectedFile === null) {
      this.alerthandle("لطفا فایل را انتخاب کنید.", "error");
    } else {
      let formData = new FormData();
      formData.append("data", file);
      const onUploadProgress = (event) => {
        const percentCompleted = Math.round((event.loaded * 100) / event.total);
        this.setState({ progress: percentCompleted });
        console.log(this.state.progress);
      };
      const CancelToken = axios.CancelToken;
      const source = CancelToken.source();
      this.handleClose1();
      
      this.setState({
        loadfile: true,
        source: source,
        snackopen: true,
        type: "info",
      });
      UserService.uploadUserFile(formData, onUploadProgress, source)
        .then(
          (response) => {
            if (!response.status) {
              this.alerthandle("بارگذاری با شکست مواجه شد", "error");
              this.setState({ loadfile: false, source: null });
            } else {
              this.updateMoveRow();
              EventBus.dispatch("updaterow");
              window.updateStorage();
              this.setState({ loadfile: false, source: null });
              this.alerthandle("بارگذاری موفقیت آمیز بود", "success");
            }
          },
          (error) => {
            if (error.response.status === 401) {
              EventBus.dispatch("sessionend");
            }
            this.setState({ loadfile: false, source: null });
            this.alerthandle("بارگذاری با شکست مواجه شد", "error");
            EventBus.dispatch("updaterow");
            window.updateStorage();
          }
        )
        .catch((error) => {
          EventBus.dispatch("updaterow");
          window.updateStorage();
        });
    }
  };
  onBinClick = () => {
    localStorage.setItem("Page", "Bin");
    localStorage.setItem("Folders", JSON.stringify([]));
    window.getx();
    EventBus.dispatch("updaterow");
    window.emptyselected();
    localStorage.setItem("search", false);

    // Change_();
  };
  shortname = (name,x) => {
    if (name.length > x) {
      return (
        <Tooltip title={name}>
          <span> {name.substring(0, x) + "..."}</span>
        </Tooltip>
      );
    } else {
      return name;
    }
  };
  
  onDriveClick = () => {
    localStorage.setItem("Page", "Profile");
    localStorage.setItem("Path", "");
    localStorage.setItem("Folders", JSON.stringify([]));
    window.getx();
    UserService.changepath("");
    localStorage.setItem("search", false);
    EventBus.dispatch("updaterow");
    window.emptyselected();
    // Change_();
  };
  onShareClick = () => {
    localStorage.setItem("Page", "Shared");
    localStorage.setItem("Path", "");
    localStorage.setItem("search", false);
    localStorage.setItem("Folders", JSON.stringify([]));
    window.getx();
    UserService.changepath("");
    EventBus.dispatch("updaterow");

    window.emptyselected();
    // Change_();
  };
  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  stringconvertor = (str) => {
    let newstr="";
    for(let i=0;i<str.length;i++){
      // console.log(str)
      if(str[i]==="1"){
        newstr+="١";
      }
      else if(str[i]==="2"){
        newstr+="٢";
      }
      else if(str[i]==="3"){
        newstr+="٣";
      }
      else  if(str[i]==="4"){
        newstr+="۴";
      }
      else  if(str[i]==="5"){
        newstr+="۵";
      }
      else  if(str[i]==="6"){
        newstr+="۶";
      }
      else if(str[i]==="7"){
        newstr+="٧";
      }
      else  if(str[i]==="8"){
        newstr+="٨";
      }
      else   if(str[i]==="9"){
        newstr+="٩";
      }
      else if(str[i]==="."){
        newstr+="٬"
      }
      else  if(str[i]==="0"){
        newstr+="٠";
      }
      else{
        newstr+=str[i];
      }
     
    }
    // console.log(newstr)
    return newstr;
  }
  async updateStorage(num) {
    num = num || 1;

    UserService.getStorage().then(
      (response) => {
        // console.log(response.data);
        let used=response.data.used_size;
        let permit =response.data.total_permitted_size;
        // used=this.stringconvertor(used.toString());
        // permit=this.stringconvertor(permit.toString());
        console.log(used);
        const used_size = used;
        const total_permitted_size = permit;
        this.setState({
          storage: used_size,
          totalStorage: total_permitted_size,
        });
      },
      (error) => {
        if(error.response.status===401){
          EventBus.dispatch("sessionend")
        }
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
  componentDidMount() {
    this.updateStorage();
  }
  handleOpenFM = () => {
    this.setState({ openFM: true, FolderName: "" });
  };
  handleCloseFM = () => {

    this.setState({ openFM: false });
    this.handleClose1();
  };
  handleOpenFileM = () => {
    this.setState({ openFileModal: true, selectedFile: null });
  };
  handleCloseFileM = () => {
    this.setState({ openFileModal: false });
    this.handleClose1();
  };
  onFolderNameChange = (e) => {
    // Update the state
    this.setState({ FolderName: e.target.value });
  };
  onFolderCreate = () => {
    const parentadress=localStorage.getItem("Path").split("=")[1];
    const data = {
      name: this.state.FolderName,
      parent: parentadress,
    };
    this.handleClose1();
    this.handleCloseFM();
    UserService.AddFolder(data).then(
      (response) => {
        EventBus.dispatch("updaterow");
        window.updateMoveRow();
        this.alerthandle("ساخت پوشه موفقیت آمیز بود", "success");
      },
      (error) => {
        if(error.response.status===401){
          EventBus.dispatch("sessionend")
        }
        this.alerthandle("ساخت پوشه با شکست مواجه شد", "error");
      }
    );
    this.setState({ openFM: false });
  };
  convertsize(file_size){
    let x=0;
    if (file_size >= 1000000) {
      x = file_size / 1000000;
      x = x.toFixed(2);
      x = x + " مگابایت";
    } else if (file_size >= 1000) {
      x = file_size / 1000;
      x = x.toFixed(2);
      x = x + " کیلوبایت";
    } else if (file_size > 1000000000) {
      x = file_size / 1000000000;
      x = x.toFixed(2);
      x = x + " گیگابایت";
    } else {
      x = file_size;
      x = x.toFixed(2);
      x = x + " بایت";
    }
    return x
  }
  handleClosesnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ snackopen: false });
  };
  render() {
    return (
      <section className="drawer-left " >
        <div className="left_drawer mt-3">
          <ColorButton
            className=" ww-50"
            id="demo-customized-button"
            aria-controls={
              this.state.open1 ? "demo-customized-menu" : undefined
            }
            aria-haspopup="true"
            aria-expanded={this.state.open1 ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={event=>{this.handleClick1(event)}}
           
          >
            <AddIcon
              sx={{
                width: "40px",
                height: "40px",
                color:"red"
              }}
              
            />
            جدید
          </ColorButton>
          <StyledMenU
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={this.state.anchorEll}
            open={this.state.open1}
            onClose={this.handleClose1}
          >
            <MenuItem disableRipple>
              <label style={{ fontSize: "10px" }}>
                <StyledIcon
                  aria-label="upload picture"
                  component="div"
                  sx={{ fontSize: "14px" }}
                  onClick={this.handleOpenFM}
                >
                  <CreateNewFolderOutlinedIcon
                     sx={{
                      width: "25px",
                      height: "25px",
                      marginLeft: "10%",
                      marginRight: "4%",
                      marginBottom:"2.5%!important",
                      color: "#404040!important",
                    }}
                  />
                                              افزودن پوشه
  
                </StyledIcon>

               
                <Modal
                  aria-labeledby="transition-modal-title1"
                  aria-describedby="transition-modal-description1"
                  role="dialog"
                  disableAutoFocus={true}
                  open={this.state.openFM}
                  onClose={this.handleCloseFM}
                  // closeAfterTransition
                  // BackdropComponent={Backdrop}
                  // BackdropProps={{
                  //   timeout: 500,
                  // }}
                >
                    
                  <Fade disableAutoFocus={true} in={this.state.openFM}>
                  
                    <Box disableAutoFocus={true} sx={style}>
                      <Typography
                      disableAutoFocus={true}
                        id="transition-modal-title1"
                        variant="h5"
                        component="h6"
                      >
                        <ValidationTextField
                          id="outlined-name1"
                          fullWidth
                          key={0}
                          // value={this.state.FolderName}
                          autoFocus={false}
                          variant="outlined"
                          label="نام پوشه"
                          validations={[required]}
                          placeholder="نام پوشه"
                          // onChange={this.onFolderNameChange}
                          sx={{ marginBottom: "10px" }}
                        />
                      </Typography>
                      <Typography
                        id="transition-modal-description1"
                        sx={{ mt: 2 }}
                      >
                        <div className="form-group">
                          <button
                            variant="contained"
                            className="btn btn-primary btn-block"
                            onClick={this.onFolderCreate}
                          >
                           افزودن
                          </button>
                        </div>
                      </Typography>
                    </Box>
                  </Fade>
                </Modal>
              </label>
            </MenuItem>
            <MenuItem disableRipple>
              <label style={{ fontSize: "10px" }}>
                <StyledIcon
                  aria-label="upload file"
                  component="span"
                  sx={{ fontSize: "14px" }}
                  onClick={this.handleOpenFileM}
                >
                  <UploadFileOutlinedIcon
                     sx={{
                      width: "25px",
                      height: "25px",
                      marginLeft: "10%",
                      marginRight: "4%",
                      
                      marginBottom:"2.5%!important",
                      color: "#404040!important",
                    }}
                  />افزودن فایل
                </StyledIcon>

          

                <Modal
                  aria-labelledby="transition-modal-title3"
                  aria-describedby="transition-modal-description3"
                  open={this.state.openFileModal}
                  onClose={this.handleCloseFileM}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={this.state.openFileModal}>
                  <Box sx={uploadStyle}>
                  <Typography id="transition-modal-description3" sx={{ mt: 2 }}>
                    <div className="form-group upload-file ">
                      <div className="upload-file-buttons">
                        <div className="select-file-button">
                        <label
                          htmlFor="icon-button-file1"
                          className="w-100 btn select-file-buttons  "
                          style={{ fontSize: "12px", fontWeight: "400" }}
                        >
                          <IconButton
                            aria-label="upload picture1"
                            component="span"
                            sx={{
                              fontSize: "15px",
                              direction: "rtl",
                              width: "100%!important",
                            }}
                          >
                            <UploadFileOutlinedIcon
                              sx={{
                                width: "25px",
                                height: "25px",
                                color: "#404040",
                                marginLeft: "5%!important",
                              }}
                            />
                            انتخاب فایل
                            <Input
                              id="icon-button-file1"
                              validations={[required]}
                              onChange={this.onFileChange}
                              multiple="multiple"
                              type="file"
                            />
                          </IconButton>
                        </label>
                        </div>
                        <div className="select-folder-button">
                        <label
                          htmlFor="icon-button-file"
                          className="w-100 btn select-file-buttons"
                          style={{ fontSize: "12px", fontWeight: "400" }}
                        >
                          <IconButton
                            aria-label="upload picture"
                            component="span"
                            sx={{
                              fontSize: "15px",
                              direction: "rtl",
                              width: "100%!important",
                            }}
                          >
                            <CreateNewFolderOutlinedIcon
                              sx={{
                                width: "25px",
                                height: "25px",
                                color: "#404040",
                                marginLeft: "5%!important",
                              }}
                            />
                            انتخاب پوشه از دستگاه
                            <Input
                              id="icon-button-file"
                              validations={[required]}
                              onChange={this.onFileChange}
                           
                              directory=""
                              webkitdirectory=""
                              type="file"
                            />
                          </IconButton>
                        </label>
                        </div>
                      </div>
                     
                      {(this.state.selectedFile!==null) && (
                       
                       <div id="upload-file-table" className="w-100 container">
                      
                  
                      {this.state.selectedFile.map(file => {
                        return(
                          <div className="w-100 " key={file.name}>
                           
                                {/*want show file details in columns  */}
                            <div className="row mt-2">
                              <div className="col-md-12">
                                <div className="row">
                                  <div className="col-md-3 col-sm-0 d-flex upload_fonts ">
                                    {this.shortname(file.name,10)}
                                  </div>
                                  <div className="col-md-2 col-sm-0 d-flex upload_fonts ">
                                    <span>{this.convertsize(file.size)}</span>
                                  </div>
                                  <div className="col-md-2 col-sm-0 d-flex upload_fonts ">
                                      <button className="btn btn-danger fonts " onClick={
                                        (e) => {
                                          this.ondeletemanyfile(file.name)
                                        }
                                      }>
                                        حذف
                                      </button>
                                    </div>
                                    <div id="upload_one" className="d-flex upload_fonts " >
                                      <button className="w-100 btn btn-success fonts" onClick={
                                        (e) => {
                                          this.onFileUpload(file)
                                        }
                                      }>
                                        افزودن
                                      </button>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      );})}
                           </div> 
                      )}
                       <div className="w-100 mt-3" id="upload-button">
                        <button
                          variant="contained"
                          className="upload_all btn btn-primary btn-block"
                          onClick={this.onmanyfileupload}
                        >
                          افزودن تمامی فایل‌ها
                        </button>
                      </div>    
                    </div>
                  </Typography>
                </Box>
                  </Fade>
                </Modal>
              </label>
            </MenuItem>

            <MenuItem disableRipple>
              <label htmlFor="icon-button-file" style={{ fontSize: "10px" }}>
                <StyledIcon
                  aria-label="upload file"
                  component="span"
                  sx={{ fontSize: "14px" }}
                  onClick={this.handleOpenm}
                >
                  <UploadFileOutlinedIcon
                     sx={{
                      width: "25px",
                      height: "25px",
                      marginLeft: "10%",
                      marginRight: "4%",
                      
                      marginBottom:"2.5%!important",
                      color: "#404040!important",
                    }}
                  />افزودن فایل با لینک </StyledIcon>

                  
                <Modal
                  aria-labelledby="transition-modal-title5"
                  aria-describedby="transition-modal-description5"
                  open={this.state.openlinkmodal}
                  onClose={this.handleClosem}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={this.state.openlinkmodal}>
                    <Box sx={style}>
                      <Typography
                        id="transition-modal-title5"
                        variant="h6"
                        component="h2"
                      >
                        <ValidationTextField
                          id="outlined-name"
                          fullWidth
                          label="آدرس داده"
                          defaultValue=""
                          validations={[required]}
                          placeholder="آدرس داده"
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
                            onClick={this.onFileUploadURL}
                          >
                            افزودن
                          </button>
                        </div>
                      </Typography>
                    </Box>
                  </Fade>
                </Modal>
              </label>
            </MenuItem>
           
          </StyledMenU>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
          >
            <MenuItem
              onClick={this.onDriveClick}
              disableRipple
              sx={{ fontSize: "14px",fontWeight:"400", marginTop: "2%" }}
            >
              <SdStorageOutlinedIcon
                sx={{
                  width: "25px",
                  height: "25px",
                  marginLeft: "4%",
                  marginRight: "7%",
                  color: "#404040",
                }}
              />
              فضای من
            </MenuItem>
            <MenuItem
              onClick={this.onShareClick}
              disableRipple
              sx={{ fontSize: "14px", marginTop: "2%" }}
            >
              <PeopleAltOutlinedIcon
                sx={{
                  width: "25px",
                  height: "25px",
                  marginLeft: "4%",
                  marginRight: "7%",
                  color: "#404040",
                }}
              />
              اشتراکی‌ها
            </MenuItem>

            <MenuItem disableRipple sx={{ fontSize: "14px", marginTop: "2%" }}>
              <StarBorderOutlinedIcon
                sx={{
                  width: "25px",
                  height: "25px",
                  marginLeft: "4%",
                  marginRight: "7%",
                  color: "#404040",
                }}
              />
             ستاره‌دار
            </MenuItem>
            <MenuItem
              onClick={this.onBinClick}
              disableRipple
              sx={{ fontSize: "14px", marginTop: "2%" }}
            >
              <DeleteOutlineOutlinedIcon
                sx={{
                  width: "25px",
                  height: "25px",
                  marginLeft: "4%",
                  marginRight: "7%",
                  color: "#404040",
                }}
              />
              سطل زباله
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem 
              disableRipple
              sx={{ fontSize: "16px",fontWeight:400, marginTop: "2%", marginBottom: "5px",color:"#404040!important" }}
            >
              <CloudQueueOutlinedIcon
                sx={{
                  width: "25px",
                  height: "25px",
                  marginLeft: "4%",
                  marginRight: "7%",
                  color: "#404040",
                }}
              />
            فضای باقیمانده
            </MenuItem>
            <div class="progress" style={{
                  marginRight: "10%",
                  height: "4px",
                  width: "80%",
                  
                }}>
              <div
                class="progress-bar"
                style={{
                  
                  height: "7px",
                  width:this.CalcStorage()+"%",
                }}
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                
              </div>
            </div>
            <div id="storage-text">
            {this.stringconvertor(this.CalcStorage().toString())+" "}
            درصد از کل
            </div>
            {/* <BorderLinearProgress variant="determinate"  sx={{ marginRight: "10%", direction: "ltr" }} value={this.CalcStorage()} /> */}
            <div>
            <span id="storage-text"
            >
              {/* {this.stringconvertor(this.state.storage.toString())}  از {this.stringconvertor(this.state.totalStorage.toString())}مگابایت
               */}
            </span>
            </div>
            {/* <div className="btn w-100 ">
            <Button
              size="small"
              variant="outlined"
              sx={{ marginTop: "3.5%", fontSize: "14px" }}
            >
              {" "}
               فضای اضافی{" "}
            </Button>
            </div> */}
            <div className="w-100 d-flex justify-content-center" style={{ marginTop: "5%", marginLeft: "20%" }}>
      
              <Link to={"/profileEn"} className="">
                English
              </Link>
            </div>
          </StyledMenu>
        </div>
        <Snackbar
          open={this.state.snackopen}
          autoHideDuration={!this.state.loadfile ? 3500 : null}
          onClose={this.handleClosesnack}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                sx={{ marginRight: "25px" }}
                onClick={
                  this.state.loadfile
                    ? (event) => {
                        this.state.source.cancel();
                        this.handleClosesnack();
                      }
                    : (event) => {
                        this.handleClosesnack();
                      }
                }
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            severity={this.state.type}
            sx={{ width: "100%" }}
          >
            {this.state.loadfile ? (
              <div className="d-flex text-white">
                <CircularProgressWithLabel
                  value={this.state.progress}
                  color="primary"
                />
                بارگذاری فایل
              </div>
            ) : (
              <div>{this.state.content}</div>
            )}
          </Alert>
        </Snackbar>
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

export default connect(mapStateToProps)(DrawerLeft);
