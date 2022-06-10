import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import { FileIcon, defaultStyles } from "react-file-icon";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
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
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
  dirction: "ltr",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "90%",
  outline: "none",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const StyledMenu = styled((props) => (
  <MenuList
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
    color:"#404040!important",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      color:"#404040!important",
  
    },
    "& .MuiList-root": {
      color:"#404040!important",
      fontWeight:400,
      fontSize:16,
    },
    "& .MuiMenuItem-root": {
      color:"#404040!important",
      fontWeight:400,
      fontSize:16,
      "& .MuiSvgIcon-root": {
        fontSize: 16,
        fontWeight: 400,
        color:"#404040!important",
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
const StyledIcon = styled(IconButton)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "Transparent",
  },
  "&:active": {
    backgroundColor: "Transparent",
  },"&:focus": {
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
    color:"#404040!important",
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
      fontWeight:400,
      fontSize:16,
      paddingTop:"1px",
      paddingBottom:"1px",
      paddingLeft: "6px",
      paddingRight: "6px",
      "& .MuiSvgIcon-root": {
        fontSize: 16,
        color:"#404040!important",
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
  borderRadius: 50,
  boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
  backgroundColor: "white",
  color: "black",
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

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 3,
  width: "70%",
  marginLeft: "11%",
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const ValidationTextField = styled(TextField)({
  // on hover on input
  "&input:hover +fieldset": {
    outline: "none",
    borderColor: "red",
  },
  "& input:valid + fieldset": {
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
  boxShadow: 24,
  p: 4,
};
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
/**
 * class for left drawer
 * name based english version
 * all functions same az Persian version
 * @component
 * @extends Component
 */
class  DrawerLeft extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClose1 = this.handleClose1.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);
    this.onFileUploadURL = this.onFileUploadURL.bind(this);
    window.updateStorage = this.updateStorage.bind(this);
    this.state = {
      selectedFile: [],
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
  
  alerthandle(message,type){
    this.setState({content:message,type:type,snackopen:true})
  }
   handleClick1 = (event) => {
    
    this.setState({ anchorEl1: event.currentTarget,open1:true });
  };
  CalcStorage = () => {
    
    return ((this.state.storage / this.state.totalStorage) * 100).toFixed(2);
  }
   handleClose1 = () => {
    this.setState({ anchorEl1: null,open1:false });
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
        this.alerthandle("Upload with link succesful","success");
        window.updateStorage();
      },
      (error) => {
        if(error.response.status===401){
          EventBus.dispatch("sessionend")
        }
        this.alerthandle("Upload with link failed","error");
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
      let file = temp.filter((obj) => obj.name !== name);
      
   
    this.setState({ selectedFile: file });
  }
  onFileUpload = (file) => {
    if(this.state.selectedFile.length===0){
      this.alerthandle("Please select file","error");
    }
    else{
      if(file.size > 500000000){
        this.alerthandle("File size over 500 MB.", "error");
      }else{
    let formData = new FormData();
    formData.append("data", this.state.selectedFile);
    const onUploadProgress = event => {
      const percentCompleted = Math.round((event.loaded * 100) / event.total);
      this.setState({progress: percentCompleted});
      console.log(this.state.progress)
  };
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  this.handleClose1();

  this.setState({loadfile:true,source:source,snackopen:true,type:"info"})
    UserService.uploadUserFile(formData,onUploadProgress,source).then(
     
      (response) => {
     
        if(!response.status){
          this.alerthandle("Upload failed","error");
          this.setState({loadfile:false,source:null});
        }
        else{
        EventBus.dispatch("updaterow");
        this.updateStorage();
        window.updateMoveRow();
        this.setState({loadfile:false,source:null});
        this.alerthandle("Upload succesful","success");
        }
      },
      (error) => {
        if(error.response.status===401){
          EventBus.dispatch("sessionend")
        }
        this.setState({loadfile:false,source:null});
        this.alerthandle("Upload failed","error");
        EventBus.dispatch("updaterow");
        this.updateStorage();
        
      }
    )
    .catch(error => {
      EventBus.dispatch("updaterow");
      window.updateStorage();
  });
}
}
  };
  onBinClick = () => {
    localStorage.setItem("Page", "Bin");
    localStorage.setItem("Folders",JSON.stringify([]))
    window.getx();
    EventBus.dispatch("updaterow");
    window.emptyselected();
    localStorage.setItem("search",false);
    
    // Change_();
  }
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
    localStorage.setItem("Path","");
    localStorage.setItem("Folders",JSON.stringify([]))
    window.getx();
    UserService.changepath("");
    localStorage.setItem("search",false);
    EventBus.dispatch("updaterow");
    window.emptyselected();
    // Change_();
  }
  onShareClick = () => {
    localStorage.setItem("Page", "Shared");
    localStorage.setItem("Path","");
    localStorage.setItem("search",false);
    localStorage.setItem("Folders",JSON.stringify([]))
    window.getx();
    UserService.changepath("");
    EventBus.dispatch("updaterow");
   
    window.emptyselected();
    // Change_();
  }
  onFavoriteClick = () => {
    localStorage.setItem("Page", "Favorite");
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
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
  async updateStorage (num) {
      num=num||1;
   
    UserService.getStorage().then(
      (response) => {
        // console.log(response.data);
        this.setState({
          storage: response.data.used_size,
          totalStorage: response.data.total_permitted_size,
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
  };
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
    this.setState({ openFileModal: true, selectedFile: [] });
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
        this.alerthandle("Folder created succesfully","success");
      },
      (error) => {
        if(error.response.status===401){
          EventBus.dispatch("sessionend")
        }
        this.alerthandle("Folder creation failed","error");
      }
    );
    this.setState({ openFM: false });
  };
  handleClosesnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({snackopen:false})
  };
  convertsize(file_size) {
    let x = 0;
    let arr=[]
    if (file_size >= 1000000) {
      x = file_size / 1000000;
      x = x.toFixed(2);
     
      arr[0]=x;
      arr[1]=" MB"
    } else if (file_size >= 1000) {
      x = file_size / 1000;
      x = x.toFixed(2);
      arr[0]=x;
      arr[1]=" KB"
    } else if (file_size > 1000000000) {
      x = file_size / 1000000000;
      x = x.toFixed(2);
      arr[0]=x;
      arr[1]="GB"
    } else {
      x = file_size;
      x = x.toFixed(2);
      arr[0]=x;
      arr[1]=" B"
    }
    return arr;
  }
  render(){
    
   
  return (
    <section className="drawer-left" >
      <div className="left_drawer mt-3">
        <ColorButton
          id="demo-customized-button"
          aria-controls={this.state.open1 ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={this.state.open1 ? "true" : undefined}
          className=" wwen-50"
          variant="contained"
          disableElevation
          onClick={this.handleClick1}
        >
          <AddIcon
            sx={{
              width: "40px",
              height: "40px",
              color:"red"
            }}
            s
          />
          New
        </ColorButton>
        <StyledMenU
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={this.state.anchorEl1}
        open={this.state.open1}
        onClose={this.handleClose1}
      >
         <MenuItem  onClick={this.handleOpenFM}   >
              <label style={{ fontSize: "14px" }}>
                <StyledIcon
                  aria-label="upload picture"
                  component="div"
                  sx={{ fontSize: "14px" }}
                 
                >
                  <CreateNewFolderOutlinedIcon
                     sx={{
                      width: "25px",
                      height: "25px",
                      marginBottom:"2.5%!important",
                      color: "#404040!important",
                    }}
                  />
                                         
  
                </StyledIcon>
               Add Folder
               
               
              </label>
            </MenuItem>
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
                          label="Folder name"
                          validations={[required]}
                          placeholder="Folder name"
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
                           Sumbit
                          </button>
                        </div>
                      </Typography>
                    </Box>
                  </Fade>
                </Modal>
            <MenuItem  onClick={this.handleOpenFileM}   >
              <label style={{ fontSize: "14px" }}>
                <StyledIcon
                  aria-label="upload file"
                  component="span"
                  sx={{ fontSize: "14px" }}
                  
                >
                  <UploadFileOutlinedIcon
                     sx={{
                      width: "25px",
                      height: "25px",
                
                      
                      marginBottom:"2.5%!important",
                      color: "#404040!important",
                    }}
                  />
                </StyledIcon>
               Add File
          

               
              </label>
            </MenuItem>
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
                        className="w-100 btn select-file-buttons-en  "
                     
                      >
                        <IconButton
                          aria-label="upload picture1"
                          component="span"
                          sx={{
                            fontSize: "15px",
                            direction: "rtl",
                   
                            
                          }}
                        >
                          <UploadFileOutlinedIcon
                            sx={{
                              width: "25px",
                              height: "25px",
                              color: "#404040",
                            
                            }}
                          />
                         
                        </IconButton>
                        Select File
                          <Input
                            id="icon-button-file1"
                            validations={[required]}
                            onChange={this.onFileChange}
                            multiple="multiple"
                            type="file"
                          />
                      </label>
                    </div>
                    <div className="select-folder-button">
                      <label
                        htmlFor="icon-button-file"
                        className="w-100 btn select-file-buttons-en"
                       
                      >
                        <IconButton
                          aria-label="upload picture"
                          component="span"
                          sx={{
                            fontSize: "15px",
                            direction: "rtl",
                          
                          }}
                        >
                          <CreateNewFolderOutlinedIcon
                            sx={{
                              width: "25px",
                              height: "25px",
                              color: "#404040",
                             
                            }}
                          />
                      
                        </IconButton>
                        select Folder
                          <Input
                            id="icon-button-file"
                            validations={[required]}
                            onChange={(event) =>{ this.onFileChange(event)}}
                            // directory=""
                            webkitdirectory=""
                            type="file"
                          />
                      </label>
                    </div>
                  </div>
              
                  {this.state.selectedFile.length!==0 && (
                        <TableContainer  >
                        <Table   aria-label="customized table">
                          <TableHead  >
                            <TableRow  >
                              <TableCell  >
                                <b>Name</b>
                              </TableCell>
                              <TableCell  >
                                <b>Size</b>
                              </TableCell>
                              <TableCell  >
                               
                              </TableCell>
                              
                              
                            </TableRow>
                          </TableHead>  
                   
                      {this.state.selectedFile.map((file) => {
                        return (
                         
                            <TableBody >
                            <TableCell  >
                            {this.shortname(file.name, 20)}
                                  </TableCell>
                                  <TableCell  >
                                  <bdi>
                                 { this.convertsize(file.size)[0]}

                                </bdi>
                                {this.convertsize(file.size)[1]}
                                  </TableCell>
                                  <TableCell sx={{ display:"flex" }}>
                                <button
                                  className="btn w-50 btn-danger fonts mr-1"
                                  onClick={(e) => {
                                    this.ondeletemanyfile(file.name);
                                  }}
                                >
                                  Delete
                                </button>
                              
                                <button
                                  className="w-50 btn btn-success fonts"
                                  onClick={(e) => {
                                    this.onFileUpload(file);
                                  }}
                                >
                                  Add
                                </button>
                              </TableCell>
                            </TableBody>
                          
               
                        );
                      })}
                      
                   
                    </Table>
                        </TableContainer>
                  )}
                
                  {this.state.selectedFile.length!==0 &&(
                  <div className="w-100 mt-3" id="upload-button">
                    <button
                      variant="contained"
                      className="upload_all btn btn-primary btn-block"
                      onClick={this.onmanyfileupload}
                    >
                      Upload all files
                    </button>
                  </div>
              
                )}
                    </div>
              </Typography>
                </Box>
                  </Fade>
                </Modal>
            <MenuItem  onClick={this.handleOpenm}   >
              <label  htmlFor="icon-button-file" style={{ fontSize: "14px" }}>
                <StyledIcon
                  aria-label="upload file"
                  component="span"
                  sx={{ fontSize: "14px" }}
                 
                >
                  <UploadFileOutlinedIcon
                   
                      sx={{
                        width: "25px",
                        height: "25px",
                        color: "#404040",
                        marginLeft: "5%!important",
                     
                      marginBottom:"2.5%!important",
                      color: "#404040!important",
                    }}
                  /> </StyledIcon>

Add file with  link
         
              </label>
            </MenuItem>
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
                          label="URL"
                          defaultValue=""
                          validations={[required]}
                          placeholder="URL"
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
                           Sumbit
                          </button>
                        </div>
                      </Typography>
                    </Box>
                  </Fade>
                </Modal>
      </StyledMenU>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
        >
          <MenuItem onClick={this.onDriveClick} disableRipple sx={{ fontSize: "14px", marginTop: "2%" }}>
            <SdStorageOutlinedIcon
              sx={{
                width: "25px",
                height: "25px",
                marginRight: "4%",
                marginLeft: "7%",
                color: "#404040",
              }}
            />
            My Drive
          </MenuItem>
      
          <MenuItem onClick={this.onShareClick} disableRipple sx={{ fontSize: "14px", marginTop: "2%" }}>
            <PeopleAltOutlinedIcon
              sx={{
                width: "25px",
                height: "25px",
                marginRight: "4%",
                marginLeft: "7%",
                color: "#404040",
              }}
            />
            Shared 
          </MenuItem>

       
          <MenuItem onClick={this.onFavoriteClick} sx={{ fontSize: "14px", marginTop: "2%" }}>
            <StarBorderOutlinedIcon
               sx={{
                width: "25px",
                height: "25px",
                marginRight: "4%",
                marginLeft: "7%",
                color: "#404040",
              }}
            />
            Starred
          </MenuItem>
          <MenuItem onClick={this.onBinClick} disableRipple sx={{ fontSize: "14px", marginTop: "2%" }}>
            <DeleteOutlineOutlinedIcon
               sx={{
                width: "25px",
                height: "25px",
                marginRight: "4%",
                marginLeft: "7%",
                color: "#404040",
              }}
            />
            Bin
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem
            disableRipple
            sx={{ fontSize: "14px", marginTop: "2%", marginBottom: "5px" }}
          >
            <CloudQueueOutlinedIcon
              sx={{
                width: "25px",
                height: "25px",
                marginRight: "4%",
                marginLeft: "7%",
                color: "#404040",
              }}
            />
            Ramaining storage
          </MenuItem>
          
          <div class="progress" style={{
                  marginLeft: "10%",
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
            {this.CalcStorage().toString()+"  "} Remaining
            </div>
          <div className="w-100 d-flex justify-content-center" style={{ marginTop: "5%", paddingRight:"25%" }}>
          <Link to={"/profile"} className="">فارسی
          </Link>
          
          </div>
        </StyledMenu>
      </div>
       <Snackbar open={this.state.snackopen} 
        autoHideDuration={6000} onClose={this.handleClosesnack}>
         
        <Alert onClose={this.state.loadfile?(  (event)=>{
                this.state.source.cancel()
                this.handleClosesnack()
              }):(
          (event)=>{
              
                this.handleClosesnack()
              })} severity={this.state.type} sx={{ width: '100%' }}>
          {this.state.loadfile?( <div className="d-flex text-white">
            <CircularProgressWithLabel value={this.state.progress} color="primary" />
            file uploading
             
          </div>):
          (
            <div>
              {this.state.content}
            </div>

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