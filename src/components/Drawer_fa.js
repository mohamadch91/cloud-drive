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
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";
import CloseIcon from "@mui/icons-material/Close";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import axios from "axios";
import "./cmp_css/drawer.css"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SdStorageOutlinedIcon from "@mui/icons-material/SdStorageOutlined";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
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
/**
 * define component for alerts handle
 * @component 
 * @returns Mui alert components
 * 
 */
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
/**
 * component upload progress bar
 * @component
 * @param {style} props 
 * @returns {JSX.Element} return box with circular progress box
 */
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
/**
 * style for upload modal 
 */
const uploadStyle = {
  position: "absolute",
  top: "50%",
  dirction: "rtl",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "90%",
  outline: "none",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
/**
 * re Design MUi menu for upload menu
 * @extends MuiMenu
 */
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
/**
 * re design MUI icon for add button
 * @extends IconButton
 */
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
/**
 * re Design MUi menu for side bar
 * @extends MuiMenu
 */
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
    marginLeft: "3%",
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
/**
 * overwrite Mui Button 
 * @extends Button
 */
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


/**
 * overwrite MUI TextField
 * @extends TextField 
 */
const ValidationTextField = styled(TextField)({
  // on hover on input
  "& .MuiFormLabel-root": {
    direction:"rtl",
    width:"122%!important",
    textAlign: "start!important",
  },
  "& .MuiOutlinedInput-notchedOutline legend":{
    width: "max-content!important",
      direction:"rtl!important",
      marginLeft:"auto",
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
/**
 * style for modal boxes
 */
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
/**
 * function for check input is not empty
 * @function
 * @param string  value input value
 * @returns 
 */
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
 * Define Drawer component
 * 
 * @component
 * @extends Component
 */
class DrawerLeft extends React.Component {
  /**
   * 
   * @param {props} props props from app clasz
   */
  constructor(props) {
    super(props);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClose1 = this.handleClose1.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);
    this.onmanyfileupload=this.onmanyfileupload.bind(this);
    this.onFileUploadURL = this.onFileUploadURL.bind(this);
    window.updateStorage = this.updateStorage.bind(this);
    /**
     * states of drawer class
     */
    this.state = {
      /**
       * @param selectedFile array of files user input
       * @param content of alert 
       * @param link user input link for upload url
       * @param FolderName user input folder name for create folder
       * @param storage user used storage
       * @param totalStorage total available storage for user
       */
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
  /**
   * function for handle alerts in this component
   * @function 
   * @param {string} message alert message
   * @param {string} type alert type
   */
  alerthandle(message, type) {
    this.setState({ content: message, type: type, snackopen: true });
  }
  /**
   * handle styled menu open on click add button
   * @param {event} event 
   */
  handleClick1 = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({ anchorEl1: event.currentTarget, open1: true });
  };
  /**
   * calculate user storage percent
   * @returns percentage of user storage used
   */
  CalcStorage = () => {
    return ((this.state.storage / this.state.totalStorage) * 100).toFixed(2);
  };
  /**
   * @function handleclose1
   * close styled menu of add button
   */
  handleClose1 = () => {
    this.setState({ anchorEl1: null, open1: false });
  };
  /**
   * open url modal on styled menu
   */
  handleOpenm = () => {
    this.setState({ openlinkmodal: true });
  };
  /**
   * close Url upload modal 
   */
  handleClosem = () => {
    this.setState({ openlinkmodal: false });
  };
  /**
   * when user input file changed change state of selected files
   * @param {event} event 
   */
  onFileChange = (event) => {
    // Update the state
  
    const files = [...event.target.files]
    this.setState({ selectedFile: files });
  };
  /**
   * change link state when input changed
   * @param {event} e 
   */
  onLinkChange = (e) => {
    // Update the state
    this.setState({ link: e.target.value });
  };
  /**
   * close modal and send url to server for upload file with url
   */
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
  /**
   * loop over selected file and upload files one by one
   */
  onmanyfileupload(){
    this.state.selectedFile.forEach((item) => {
     this.onFileUpload(item);
    });
    this.setState({ selectedFile: [] });
  }
  /**
   * when file deleted on upload box delete from table 
   * @param {string} name 
   */
  ondeletemanyfile(name){
    let temp=this.state.selectedFile
      let file = temp.filter((obj) => obj.name !== name);
      
   
    this.setState({ selectedFile: file });
  }
  /**
   * upload user file directly to server
   * @param {file} file 
   */
  onFileUpload = (file) => {
    if (this.state.selectedFile.length===0) {
      this.alerthandle("لطفا فایل را انتخاب کنید.", "error");
    } else {
      if(file.size > 500000000){
        this.alerthandle("حجم فایل بیشتر از 500 مگابایت است.", "error");
      }else{
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
    }}
  };
  /**
   * when clicked on bin menu item change state and update files in profile component
   */
  onBinClick = () => {
    localStorage.setItem("Page", "Bin");
    localStorage.setItem("Folders", JSON.stringify([]));
    window.getx();
    EventBus.dispatch("updaterow");
    window.emptyselected();
    localStorage.setItem("search", false);

    // Change_();
  };
  /**
   * get file name and  make shorter with ...
   * @param {string} name name of file    
   * @param {int} x number of charecters want to show
   * @returns Tooltip with shorter name
   */
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
  /**
   * when clicked on Drive menu item change state and update files in profile component
   */
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
   /**
   * when clicked on Share menu item change state and update files in profile component
   */
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
   /**
   * when clicked on Favorites menu item change state and update files in profile component
   */
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

  /**
   * convert string to persian numbers
   * @param {string} str input string
   * @returns persian converted string
   */
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
        newstr+="."
      }
      else  if(str[i]==="0"){
        newstr+="٠";
      }
      else{
        newstr+=str[i];
      }
     
    }
    return newstr;
  }
 /**
  * get user storage data from server 
  */
  async updateStorage() {
    

    UserService.getStorage().then(
      (response) => {
        let used=response.data.used_size;
        let permit =response.data.total_permitted_size;
        const used_size = used;
        const total_permitted_size = permit;
        this.setState({
          storage: used_size,
          totalStorage: total_permitted_size,
        });
      },
      (error) => {
        /**
         * check for session end error
         */
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
  /**
   * when component mounted update user storage
   */
  componentDidMount() {
    this.updateStorage();
  }
  /**
   * open add folder modal
   */
  handleOpenFM = () => {
    this.setState({ openFM: true, FolderName: "" });
  };
  /**
   * handle close add folder modal
   */
  handleCloseFM = () => {

    this.setState({ openFM: false });
    this.handleClose1();
  };
  handleOpenFileM = () => {
    this.setState({ openFileModal: true, selectedFile: [] });
  };
  /**
   * handle openfile upload modal
   */
  handleCloseFileM = () => {
    this.setState({ openFileModal: false });
    this.handleClose1();

  };
  /**
   * change folder name state 
   * @param {event} e input event
   */
  onFolderNameChange = (e) => {
    // Update the state
    this.setState({ FolderName: e.target.value });
  };
  /**
   * send create folder request to server and get response
   */
  onFolderCreate = () => {
    const parentadress=localStorage.getItem("Path").split("=")[1];
    /**
     * make json with api format
     */
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
        /**
         * check for session end
         */
        if(error.response.status===401){
          EventBus.dispatch("sessionend")
        }
        this.alerthandle("ساخت پوشه با شکست مواجه شد", "error");
      }
    );
    this.setState({ openFM: false });
  };
  /**
   * 
   * @param {int} file_size file size in bytes
   * @returns file size in KB and higher formats 
   */
  convertsize(file_size) {
    let x = 0;
    let arr=[]
    if (file_size >= 1000000) {
      x = file_size / 1000000;
      x = x.toFixed(2);
      x=this.stringconvertor(x);
      arr[0]=x;
      arr[1]=" مگابایت"
    } else if (file_size >= 1000) {
      x = file_size / 1000;
      x = x.toFixed(2);
      arr[0]=x;
      arr[1]=" کیلوبایت"
    } else if (file_size > 1000000000) {
      x = file_size / 1000000000;
      x = x.toFixed(2);
      arr[0]=x;
      arr[1]="گیگابایت"
    } else {
      x = file_size;
      x = x.toFixed(2);
      arr[0]=x;
      arr[1]=" بایت"
    }
    return arr;
  }
  /**
   * close snack bar    
   * @param {event} event event 
   * @param {string} reason reason of close snack
   * @returns 
   */
  handleClosesnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ snackopen: false });
  };
  /**
   * 
   * @returns {JSX.Element} whole drawer component
   */
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
                      marginLeft: "10%",
                      marginRight: "4%",
                      marginBottom:"2.5%!important",
                      color: "#404040!important",
                    }}
                  />
                                         
  
                </StyledIcon>
                افزودن پوشه
               
               
              </label>
            </MenuItem>
            <Modal
                  aria-labeledby="transition-modal-title1"
                  aria-describedby="transition-modal-description1"
                  role="dialog"
                  disableAutoFocus={true}
                  open={this.state.openFM}
                  onClose={this.handleCloseFM}
            
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
                      marginLeft: "10%",
                      marginRight: "4%",
                      
                      marginBottom:"2.5%!important",
                      color: "#404040!important",
                    }}
                  />
                </StyledIcon>
                افزودن فایل
          

               
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
                        className="w-100 btn select-file-buttons  "
                     
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
                              marginLeft: "5%!important",
                            }}
                          />
                         
                        </IconButton>
                        انتخاب فایل
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
                        className="w-100 btn select-file-buttons"
                       
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
                              marginLeft: "5%!important",
                            }}
                          />
                      
                        </IconButton>
                        انتخاب پوشه از دستگاه
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
                        <TableContainer sx={{direction:"rtl"}}>
                        <Table sx={{direction:"rtl"}} aria-label="customized table">
                          <TableHead sx={{direction:"rtl"}}>
                            <TableRow sx={{direction:"rtl"}}>
                              <TableCell sx={{  textAlign:"right"}}>
                                <b>نام فایل</b>
                              </TableCell>
                              <TableCell sx={{  textAlign:"right"}}>
                                <b>حجم فایل</b>
                              </TableCell>
                              <TableCell sx={{  textAlign:"right"}}>
                               
                              </TableCell>
                              
                              
                            </TableRow>
                          </TableHead>  
                   
                      {this.state.selectedFile.map((file) => {
                        return (
                         
                            <TableBody >
                            <TableCell sx={{  textAlign:"right"}}>
                            {this.shortname(file.name, 20)}
                                  </TableCell>
                                  <TableCell sx={{  textAlign:"right"}}>
                                  <bdi>
                                 { this.stringconvertor(this.convertsize(file.size)[0])}

                                </bdi>
                                {this.convertsize(file.size)[1]}
                                  </TableCell>
                                  <TableCell sx={{ textAlign: "right",display:"flex" }}>
                                <button
                                  className="btn w-50 btn-danger fonts ml-1"
                                  onClick={(e) => {
                                    this.ondeletemanyfile(file.name);
                                  }}
                                >
                                  حذف
                                </button>
                              
                                <button
                                  className="w-50 btn btn-success fonts"
                                  onClick={(e) => {
                                    this.onFileUpload(file);
                                  }}
                                >
                                  افزودن
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
                      افزودن تمامی فایل‌ها
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
                      marginLeft: "10%",
                      marginRight: "4%",
                      
                      marginBottom:"2.5%!important",
                      color: "#404040!important",
                    }}
                  /> </StyledIcon>

افزودن فایل با لینک
         
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
                          label="نشانی اینترنتی فایل"
                          defaultValue=""
                          validations={[required]}
                          placeholder="نشانی اینترنتی فایل"
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
          </StyledMenU>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
          >
            <MenuItem
              onClick={this.onDriveClick}
                
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

            <MenuItem onClick={this.onFavoriteClick}   sx={{ fontSize: "14px", marginTop: "2%" }}>
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
                
              sx={{ fontSize: "14px",fontWeight:400, marginTop: "5%", marginBottom: "10px",color:"#404040!important" }}
            >
              <CloudQueueOutlinedIcon
                sx={{
                  width: "25px",
                  height: "25px",
                  marginLeft: "10%",
                  marginBottom:"4%",
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
           
            <bdi>
             {this.stringconvertor(this.CalcStorage().toString())+"  "}&nbsp;
            </bdi>
            &nbsp;درصد از کل
            </div>
        
            <div>
            <span id="storage-text"
            >
              {/* {this.stringconvertor(this.state.storage.toString())}  از {this.stringconvertor(this.state.totalStorage.toString())}مگابایت
               */}
            </span>
            </div>
        
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
/**
 * 
 * @param {reduce state} state connect redux states to this component
 * @returns 
 */
function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(DrawerLeft);
