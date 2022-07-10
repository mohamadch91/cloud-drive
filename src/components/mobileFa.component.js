import React, { Component } from "react";
import moment from "jalali-moment";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';

import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import UserService, { ADD_URL, GET_URL, Path } from "../services/user.service";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from "@mui/icons-material/Add";
// import React from 'react';
import DownloadIcon from "@mui/icons-material/Download";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import CloseIcon from "@mui/icons-material/Close";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import {
  DatePicker,
  DateTimePicker,
  DateRangePicker,
  DateTimeRangePicker
} from "react-advance-jalaali-datepicker";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import "./cmp_css/middle.css";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { history } from "../helpers/history";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PeopleIcon from "@mui/icons-material/People";
import { FileIcon, defaultStyles } from "react-file-icon";
import RestoreIcon from "@mui/icons-material/Restore";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuItem from "@mui/material/MenuItem";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { styled, alpha } from "@mui/material/styles";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import Divider from "@mui/material/Divider";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import Button from "@mui/material/Button";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import CalendarViewMonthOutlinedIcon from "@mui/icons-material/CalendarViewMonthOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FolderZipIcon from "@mui/icons-material/FolderZip";
import ArticleIcon from "@mui/icons-material/Article";
import FolderIcon from "@mui/icons-material/Folder";
import Table from "@mui/material/Table";
import CircularProgress from "@mui/material/CircularProgress";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ImageIcon from "@mui/icons-material/Image";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PropTypes from "prop-types";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import Chart from "react-google-charts";
// import * as XLSX from "xlsx";
// import Box from '@mui/material/Box';
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import { visuallyHidden } from "@mui/utils";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EventBus from "../common/EventBus";
import Popover from "@mui/material/Popover";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import InputLabel from "@mui/material/InputLabel";
import CardActions from "@mui/material/CardActions";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useTheme } from "@mui/material/styles";

import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";

import List from "@mui/material/List";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SdStorageOutlinedIcon from "@mui/icons-material/SdStorageOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { TripOriginSharp } from "@mui/icons-material";
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
const StyledMenu = styled((props) => (
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
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -5px",
    "& .MuiMenu-list": {
      padding: "3px 0",
    },
    "& .MuiMenuItem-root": {
      direction: "rtl",
      color: "#404040",
      fontWeight: "400",
      "& .MuiSvgIcon-root": {
        // direction:"rtl",
        fontSize: 20,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1),
      },
      "&:active": {
        // direction:"rtl",
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
const share_style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  outline: "none",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
};
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
const boxStyle = {
  position: "absolute",
  top: "40%",
  left: "50%",
  marginTop: "7%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 200,
  bgcolor: "background.paper",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  display: "flex",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  p: 4,
};
const boxStylemove = {
  position: "block",
  bottom: "50%",
  right: "40%",
  marginTop: "2%",
  marginLeft: "15%",
  width: 300,
  height: 100,
  bgcolor: "background.paper",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  display: "flex",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  p: 4,
};
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
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 200,
    direction: "rtl",
    fontFamily: "Vazirmatn",
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
        direction: "rtl",
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
  backgroundColor: "transparent",
  color: "black",
  fontSize: "16px",
  padding: "0px",
  width: "50%",
  height: "70%",
  marginBottom: "5px",
  marginLeft: "10px",
  marginTop: "5px",
  fontFamily: "Vazirmatn",
  textTransform: "none",

  "&:hover": {
    backgroundColor: "#F1F3F4",

    // borderColor: '#0062cc',
    // color:'black',
    //  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
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
const Input = styled("input")({
  display: "none",
});
//style TAble

function createData(
  id,
  owner,
  is_file,
  file_type,
  file_size,
  file_url,
  created_at,
  updated_at,
  name,
  parent,
  shared,
  shared_with,
  shared_folder_details,
  favorite
) {
  return {
    id,
    owner,
    is_file,
    file_type,
    file_size,
    file_url,
    created_at,
    updated_at,
    name,
    parent,
    shared,
    shared_with,
    shared_folder_details,
    favorite,
  };
}
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

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
const drawerWidth = 250;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));
const uploadStyle = {
  position: "absolute",
  top: "50%",
  dirction: "rtl",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "90%",
  outline: "none",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};


const DatePickerInput=(props)=> {
  return <input className="popo data_input" {...props} />;
}
const modalHeadcells=[
  {
    id: "owner",
    numeric: false,
    disablePadding: true,
    label: "مالک",
    align: false,
  },
  {
    id: "created_at",
    numeric: false,
    disablePadding: true,
    label: "تاریخ بارگذاری",
    align: false,
  },
  {
    id: "updated_at",
    numeric: false,
    disablePadding: true,
    label: "تاریخ حذف",
    align: false,
  },
  {
    id: "file_size",
    numeric: false,
    disablePadding: true,
    label: "حجم فایل",
    align: false,
  },
]
const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "نام",
    align: false,
  },
  {
    id: "shared",
    numeric: false,
    disablePadding: true,
    label: "",
    align: false,
  },
  {
    id: "favorite",
    numeric: false,
    disablePadding: true,
    label: "",
    align: false,
  },
  
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead
      stickyHeader
      sx={{ marginTop: "2px", paddingTop: "2px", color: "#404040!important" }}
    >
      <TableRow>
     
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            size="small"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        <TableCell padding="checkbox">
        
        </TableCell>
        {headCells.map((headCell) =>
          localStorage.getItem("Page") !== "Bin" &&
          headCell.id === "updated_at" ? null : (
            <TableCell
              sx={{ direction: "ltr", color: "#404040!importan" }}
              key={headCell.id}
              align={headCell.align === true ? "left" : "right"}
              sortDirection={orderBy === headCell.id ? order : false}
              padding={headCell.disablePadding ? "none" : "default"}
            >
              <TableSortLabel
                sx={{ color: "#404040!important" }}
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          )
        )}
        <TableCell align="left" sx={{ color: "#404040" }}></TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

class Profile_mobileFa extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);
    this.updaterows = this.updaterows.bind(this);
    window.updaterows = this.updaterows.bind(this);
    this.HeaderFolderClick = this.HeaderFolderClick.bind(this);
    this.onFileUploadURL = this.onFileUploadURL.bind(this);
    this.handleRequestSort = this.handleRequestSort.bind(this);
    this.handleSelectAllClick = this.handleSelectAllClick.bind(this);
    this.handleClickT = this.handleClickT.bind(this);
    this.FolderClick = this.FolderClick.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onShare = this.onShare.bind(this);
    this.onRename = this.onRename.bind(this);
    this.onRestore = this.onRestore.bind(this);
    this.onFolderNameChange = this.onFolderNameChange.bind(this);
    this.onLinkChange = this.onLinkChange.bind(this);
    this.onFolderCreate = this.onFolderCreate.bind(this);
    this.handleOpenFM = this.handleOpenFM.bind(this);
    this.handleCloseFM = this.handleCloseFM.bind(this);
    this.handleOpenm = this.handleOpenm.bind(this);
    this.handleClosem = this.handleClosem.bind(this);
    this.handleOpenFileM = this.handleOpenFileM.bind(this);
    this.handleCloseFileM = this.handleCloseFileM.bind(this);
    window.emptyselected = this.emptyselected.bind(this);
    window.getx = this.getx.bind(this);
    window.gety = this.gety.bind(this);
    window.updateMoveRow = this.updateMoveRow.bind(this);

    this.state = {
      selectedFile: [],
      content: "",
      anchorE1: null,
      link: "",
      FolderName: "",
      FolderParent: null,
      selectedfoldersupload: [],
      Path: "",
      open: false,
      openm: false,
      openFM: false,
      openFileModal: false,
      rows: [],
      order: "asc",
      orderBy: "name",
      selected: [],
      click: 0,
      Folders: [],
      //
      open1: false,
      openShare: false,
      showshare: [],
      showcontext: [],
      showcontextanchor: [],
      showfile_info:false,
      shareDetail: null,
      openPath: false,
      openColorButton: false,
      viewmodal: false,
      anchorE4: null,
      anchorE2: null,
      anchorE3: null,
      openmove: false,
      permission: "read",
      operation: "add_user",
      NewFileName: "",
      shareName: "",
      movepath: "",
      moveRow: [],
      Folderpath: [],
      currentparent: null,
      newparent: "",
      openCFM: false,
      selectedFolder: null,
      NewFM: "",
      selectedmoveFolder: "",
      selectedType: "",
      excel: null,
      snackopen: false,
      loadfile: false,
      type: "success",
      progress: 0,
      source: null,
      newshared: "",
      open: false,
      file_type:"",
      file_data:"",
      anchorEl5:null,
      open5:false,
      input:"",
      profile_img:false,
      profile_src:null,
      openmodal:false,
      oldpass:"",
      newpass:"",
      confpass:"",
      openpass:false,
    };
  }


  timer = 0;
  delay = 200;
  prevent = false;
  setProfile_img(value){
    this.setState({profile_img:value})
  }
  setProfile_src(value){
    this.setState({profile_src:value})
  }
  handleopenpass=()=>{
    this.setState({openpass:true})
  }
  hanleclosepass =()=>{
    this.setState({openpass:false})
  }
  change_pass =(event)=> {
    const poorRegExp = /[a-z]/;
     const weakRegExp = /(?=.*?[0-9])/;;
     const poorPassword= poorRegExp.test(this.state.newpass);
     const weakPassword= weakRegExp.test(this.state.newpass);
        if(this.state.newpass.length<8){
        this.alerthandle("طول رمز کمتر از ۸ کاراکتر است.","error")
      }
      else if (!poorPassword){
        this.alerthandle("رمز باید شامل حروف باشد", "error")
       
      }
      else if(!weakPassword){
        this.alerthandle("رمز باید شامل اعداد باشد","error") 
      }
      else if (this.state.newpass!==this.state.confpass){
        this.alerthandle("تکرار رمز اشتباه است.","error")
      }
      else{
         const data={
          old_password:this.state.oldpass,
          new_password:this.state.newpass,
         }
         UserService.changePassword(data).then(
          (response) => {
            this.alerthandle("تغییر رمز موفقیت آمیز بود.","success")
          },
          (error) => {
            // console.log(error);
            if (error.response.status === 401) {
              EventBus.dispatch("sessionend");
            } else {
              this.alerthandle("تعییر رمز با شکست مواجه شد.", "error");
            }
          }
        );  

      }
  }




  x = localStorage.getItem("Page");
  y = localStorage.getItem("search");
  getx() {
    this.x = localStorage.getItem("Page");
  }
  alerthandle(message, type) {
    this.setState({ content: message, type: type, snackopen: true });
  }
  gety() {
    this.y = localStorage.getItem("search");
  }
  isSelectedfolder = (id) => this.state.selectedmoveFolder == id;
  handleRequestSort = (event, property) => {
    const isAsc = this.state.orderBy === property && this.state.order === "asc";
    this.setState({ order: !isAsc ? "asc" : "desc" });
    this.setState({ orderBy: property });
  };
  hadnleopenfileinfo =(inex)=>{
   
    this.setState({showfile_info:true})
  }
  handleclosefileinfo = ()=>{
    
    this.setState({showfile_info:false})
    
  }
  showSharedopen = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    let newshowshare = this.state.showshare;
    newshowshare[index] = true;
    this.setState({ showshare: newshowshare });
  };
  showSharedclose = (event, index) => {
    let newshowshare = this.state.showshare;
    newshowshare[index] = false;
    this.setState({ showshare: newshowshare });

    event.stopPropagation();
  };
  showContextopen = (event, index, id, url, name) => {
    event.preventDefault();
    event.stopPropagation();
    this.closeRenameModal();
    this.emptyselected();
    const selectedIndex = this.state.selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(this.state.selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(this.state.selected.slice(1));
    } else if (selectedIndex === this.state.selected.length - 1) {
      newSelected = newSelected.concat(this.state.selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        this.state.selected.slice(0, selectedIndex),
        this.state.selected.slice(selectedIndex + 1)
      );
    }
    if (newSelected.length == 1) {
      const file = this.state.rows.find((file) => file.id == newSelected[0]);
      this.setState({ selectedType: file.file_type });
    }
    this.setState({ selected: newSelected });
    let newshowscontext = this.state.showcontext;
    let newshowcontexta = this.state.showcontextanchor;
    newshowcontexta[index] =
      newshowcontexta[index] === undefined
        ? {
            mouseX: event.clientX,
            mouseY: event.clientY,
          }
        : undefined;
    newshowscontext[index] = true;
    this.setState({
      showcontext: newshowscontext,
      showcontextanchor: newshowcontexta,
    });
  };
  showContextclose = (event, index) => {
    let newshowscontext = this.state.showcontext;
    let newshowcontexta = this.state.showcontextanchor;
    newshowcontexta[index] = undefined;
    newshowscontext[index] = false;
    this.setState({
      showcontext: newshowscontext,
      showcontextanchor: newshowcontexta,
    });
    event.stopPropagation();
    this.emptyselected();
  };

  handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = this.state.rows.map((n) => n.id);
      this.setState({ selected: newSelecteds });

      return;
    }
    this.setState({ selected: [] });
  };
  handleSelectAllClickwithkey = (event) => {
    if (!event.altKey) {
      const newSelecteds = this.state.rows.map((n) => n.id);
      this.setState({ selected: newSelecteds });

      return;
    }
    this.setState({ selected: [] });
  };
  downloadfile = (url, id, name) => {
    const data = {
      file_id: id,
    };

    UserService.getfile(url, data).then(
      (response) => {
        const url = window.URL.createObjectURL(response.data);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", name.toLowerCase()); //or any other extension
        document.body.appendChild(link);
        link.click();
      },
      (error) => {
        console.log(error);
        if (error.response.status === 401) {
          EventBus.dispatch("sessionend");
        } else {
          this.alerthandle("خطا در دیافت فایل", "error");
        }
      }
    );
  };
  handleClickT = (event, index, id, is_file, url, name) => {
    if (event.ctrlKey && event.shiftKey) {
      this.handleSelectAllClickwithkey(event);
    } else if (event.ctrlKey) {
      this.handleClickcontextT(event, id);
    } else {
      if (!is_file && this.state.showcontextanchor[index] === undefined) {
        this.FolderClick(event, id, is_file, url, name);
      } else if (is_file && this.state.showcontextanchor[index] === undefined) {
        if (is_file) {
          this.downloadfile(url, id, name);
        }
      }
    }
  };

  isSelected = (id) => this.state.selected.indexOf(id) !== -1;

  handleOpenm = () => {
    this.setState({ openm: true, link: "" });
    console.log(this.state.openm);
  };
  handleClosem = () => {
    this.setState({ openm: false });
    this.handleClose();
  };
  handleOpenFM = () => {
    this.setState({ openFM: true, FolderName: "" });
  };
  handleCloseFM = () => {
    this.setState({ openFM: false });
    this.handleClose();
  };
  handleOpenFileM = () => {
    this.setState({ openFileModal: true, selectedFile: [] });
  };
  handleCloseFileM = () => {
    this.setState({ openFileModal: false });
    this.handleClose();
  };
  stringconvertor = (str) => {
    // console.log(str)
    let newstr = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "1") {
        newstr += "١";
      } else if (str[i] === "2") {
        newstr += "٢";
      } else if (str[i] === "3") {
        newstr += "٣";
      } else if (str[i] === "4") {
        newstr += "۴";
      } else if (str[i] === "5") {
        newstr += "۵";
      } else if (str[i] === "6") {
        newstr += "۶";
      } else if (str[i] === "7") {
        newstr += "۷";
      } else if (str[i] === "8") {
        newstr += "٨";
      } else if (str[i] === "9") {
        newstr += "۹";
      } else if (str[i] === ".") {
        newstr += ".";
      } else if (str[i] === "0") {
        newstr += "٠";
      } else {
        newstr += str[i];
      }
    }
    // console.log("new"+newstr)
    return newstr;
  };
  convertsize(file_size) {
    let x = 0;
    let arr = [];
    if (file_size >= 1000000) {
      x = file_size / 1000000;
      x = x.toFixed(2);
      x = this.stringconvertor(x);
      arr[0] = x;
      arr[1] = " مگابایت";
    } else if (file_size >= 1000) {
      x = file_size / 1000;
      x = x.toFixed(2);
      arr[0] = x;
      arr[1] = " کیلوبایت";
    } else if (file_size > 1000000000) {
      x = file_size / 1000000000;
      x = x.toFixed(2);
      arr[0] = x;
      arr[1] = "گیگابایت";
    } else {
      x = file_size;
      x = x.toFixed(2);
      arr[0] = x;
      arr[1] = " بایت";
    }
    return arr;
  }
  UpdateHelper = (response) => {
    var row = [];

    for (let i = 0; i < response.data.length; i++) {
      let x = response.data[i].file_size;

      // x=this.stringconvertor(x);
      let z = response.data[i].updated_at.split("T")[0];
      let y = response.data[i].created_at.split("T")[0];
      z = moment(z, "YYYY-MM-DD").locale("fa").format("YYYY/MM/DD");
      y = moment(y, "YYYY-MM-DD").locale("fa").format("YYYY/MM/DD");
      // z=this.stringconvertor(z);
      // y=this.stringconvertor(y);
      if (x === 0) {
        x = x.toString();
      }
      let file_type = null;
      if (response.data[i].file_type !== null) {
        file_type = response.data[i].file_type.split(".")[1];
      }
      var owner = response.data[i].owner;
      owner = owner.full_name === "" ? owner.username : owner.full_name;
      owner = this.x === "Profile" ? "خودم" : owner;
      row.push(
        createData(
          response.data[i].id,
          owner,
          response.data[i].is_file,
          file_type,
          x,
          response.data[i].file_url,
          y,
          z,
          response.data[i].name,
          response.data[i].parent,
          response.data[i].shared,
          response.data[i].shared_with,
          response.data[i].shared_folder_details,
          response.data[i].favorite_for
        )
      );
    }

    this.setState({ rows: [] });
    this.setState({ rows: row });
  };
  updaterows(num) {
    num = num || 0;
    let x = localStorage.getItem("Page");
    let y = localStorage.getItem("search_addres");
    let z = localStorage.getItem("search");
    if (x === "Profile") {
      if (z === "true") {
        console.log("search");
        let address = "?q=" + y;
        if (this.state.FolderParent != null) {
          address = address + "&folder=" + this.state.FolderParent;
        }
        UserService.Search(address).then(
          (response) => {
            this.UpdateHelper(response);
          },
          (error) => {
            if (error.response.status === 401) {
              EventBus.dispatch("sessionend");
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
      } else {
        UserService.getUserFiles().then(
          (response) => {
            this.UpdateHelper(response);
          },
          (error) => {
            if (error.response.status === 401) {
              EventBus.dispatch("sessionend");
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
    } else if (x === "Bin") {
      UserService.getbinContent().then(
        (response) => {
          this.UpdateHelper(response);
        },
        (error) => {
          if (error.response.status === 401) {
            EventBus.dispatch("sessionend");
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
    } else if (x === "Shared") {
      UserService.getSharedFiles().then(
        (response) => {
          this.UpdateHelper(response);
        },
        (error) => {
          if (error.response.status === 401) {
            EventBus.dispatch("sessionend");
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
    } else if (x === "Favorite") {
      UserService.getFavorites().then(
        (response) => {
          this.UpdateHelper(response);
        },
        (error) => {
          if (error.response.status === 401) {
            EventBus.dispatch("sessionend");
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
  }
  componentDidMount() {
    this.setState({ selected: [] });
    this.updaterows();
    this.updateMoveRow();
    this.x = localStorage.getItem("Page");
    this.y = localStorage.getItem("search");
    EventBus.on("updaterow", () => {
      this.updaterows();
    });
    document.getElementById("uptitle").innerHTML =
      "دادگان - انبار داده‌های اتاق وضعیت";
  }
  componentWillUnmount() {
    EventBus.remove("updaterow");
    localStorage.setItem("Folders", JSON.stringify([]));
    localStorage.setItem("Page", "Profile");
    localStorage.setItem("Path", "");
    UserService.changepath("");
  }
  emptyselected = () => {
    this.setState({ selected: [] });
  };
  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget, open: true });
  };

  handleClose = () => {
    this.setState({ anchorEl: null, open: false });
  };
  onFileChange = (event) => {
    // Update the state

    const files = [...event.target.files];

    this.setState({ selectedFile: files }, () => {
      console.log(this.state.selectedFile);
    });
    console.log(this.state.selectedFile);
  };
  onLinkChange = (e) => {
    // Update the state
    this.setState({ link: e.target.value });
  };
  onFolderNameChange = (e) => {
    e.stopPropagation();
    e.preventDefault();
    // Update the state
    this.setState({ FolderName: e.target.value });
  };
  findselected = ()=>{
    const file_id =this.state.selected[0]
    
    const finded=this.state.rows.filter((obj) => obj.id === file_id);
   
    return finded
  }

  onFileUploadURL = () => {
    const data = { file_url: this.state.link };
    this.handleClose1();
    this.handleClosem();
    UserService.uploadUrlFile(data).then(
      (response) => {
        this.updaterows();
        this.updateMoveRow();
        window.updateStorage();
        this.alerthandle("بارگذاری موفق آمیز بود", "success");
      },
      (error) => {
        if (error.response.status === 401) {
          EventBus.dispatch("sessionend");
        }
        this.alerthandle("بارگذاری با شکست مواجه شد", "error");
      }
    );
    this.setState({ openm: false });
  };
  FolderClick = (event, id, file, url, name) => {
    this.emptyselected();
    if (file) {
      window.open(url);
    } else {
      const way = "?folder=" + id;

      localStorage.setItem("Path", way);
      UserService.changepath(way);
      this.updaterows();
      this.setState({ FolderParent: id });
      let folder = { name: name, id: id };
      let folders = JSON.parse(localStorage.getItem("Folders"));
      let flag = false;
      for (let i = 0; i < folders.length; i++) {
        if (folders[i].id === folder.id) {
          flag = true;
          break;
        }
      }
      if (!flag) {
        folders = folders.concat(folder);
      }
      localStorage.setItem("Folders", JSON.stringify(folders));
    }
  };
  HeaderFolderClick = (id, name) => {
    if (name == "My drive") {
      localStorage.setItem("Path", "");
      localStorage.setItem("Folders", JSON.stringify([]));
      this.setState({ FolderParent: null });
      UserService.changepath("");
    } else {
      const way = "?folder=" + id;
      localStorage.setItem("Path", way);
      this.setState({ FolderParent: id });
      const folder = { name: name, id: id };
      UserService.changepath(way);
      let newFolders = JSON.parse(localStorage.getItem("Folders"));

      let index = -1;
      for (let i = 0; i < newFolders.length; i++) {
        if (newFolders[i].id == id) {
          index = i;
        }
      }
      let lentgh = newFolders.length;
      console.log(lentgh, index);
      for (let j = lentgh - 1; j > index; j--) {
        newFolders.pop();
      }
      localStorage.setItem("Folders", JSON.stringify(newFolders));
    }
    this.updaterows();
  };
  onmanyfileupload() {
    this.state.selectedFile.forEach((item) => {
      this.onFileUpload(item);
    });
    this.setState({ selectedFile: [] });
  }
  ondeletemanyfile(name) {
    let temp = this.state.selectedFile;
    temp = temp.filter((obj) => obj.name !== name);

    this.setState({ selectedFile: temp });
  }
  onFileUpload = (file) => {
    if (this.state.selectedFile.length === 0) {
      this.alerthandle("لطفا فایل را انتخاب کنید.", "error");
    } else {
      if (file.size > 500000000) {
        this.alerthandle("حجم فایل بیشتر از 500 مگابایت است.", "error");
      } else {
        let formData = new FormData();
        formData.append("data", file);
        const onUploadProgress = (event) => {
          const percentCompleted = Math.round(
            (event.loaded * 100) / event.total
          );
          this.setState({ progress: percentCompleted });
          console.log(this.state.progress);
        };
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        this.handleClose1();
        this.handleCloseFileM();
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
                this.updaterows();
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
              this.updaterows();
              window.updateStorage();
            }
          )
          .catch((error) => {
            this.updaterows();
            window.updateStorage();
          });
      }
    }
  };
  handleClosesnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ snackopen: false });
  };
  onFolderCreate = () => {
    const data = {
      name: this.state.FolderName,
      parent: this.state.FolderParent,
    };
    this.handleClose1();
    this.handleCloseFM();
    UserService.AddFolder(data).then(
      (response) => {
        this.updaterows();
        this.updateMoveRow();
        this.alerthandle("بارگذاری پوشه موفقیت آمیز بود", "success");
      },
      (error) => {
        if (error.response.status === 401) {
          EventBus.dispatch("sessionend");
        }
        this.alerthandle("بارگذاری پوشه با شکست مواجه شد", "error");
      }
    );
  };
  handleClickcontextT = (event, id) => {
    event.preventDefault();
    event.stopPropagation();
    const selectedIndex = this.state.selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(this.state.selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(this.state.selected.slice(1));
    } else if (selectedIndex === this.state.selected.length - 1) {
      newSelected = newSelected.concat(this.state.selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        this.state.selected.slice(0, selectedIndex),
        this.state.selected.slice(selectedIndex + 1)
      );
    }
    if (newSelected.length == 1) {
      const file = this.state.rows.find((file) => file.id == newSelected[0]);
      this.setState({ selectedType: file.file_type });
    }
    this.setState({ selected: newSelected });
  };
  onRename = (id, name) => {
    const data = { f_id: id, new_name: name };
    this.closeRenameModal();
    UserService.Rename(data).then(
      (response) => {
        this.updaterows();
        this.updateMoveRow();
        this.setState({ selected: [] });
        this.alerthandle(" تغییر نام موفقیت آمیز بود", "success");
      },
      (error) => {
        if (error.response.status === 401) {
          EventBus.dispatch("sessionend");
        }
        this.alerthandle("تغییر نام  با شکست مواجه شد", "error");
      }
    );
  };
  onRestore = (id) => {
    const data = { f_id: id };
    UserService.Restore(data).then(
      (response) => {
        this.updaterows();
        this.updateMoveRow();
        this.setState({ selected: [] });
        this.alerthandle("بازگردانی با موفقیت انجام شد", "success");
      },
      (error) => {
        if (error.response.status === 401) {
          EventBus.dispatch("sessionend");
        }
        console.log(error);
        this.alerthandle(" بازگردانی ناموفق بود", "error");
      }
    );
  };
  onDelete = (id) => {
    UserService.Delete(id).then(
      (response) => {
        this.updaterows();
        this.updateMoveRow();
        this.setState({ selected: [] });
        this.alerthandle("حذف با موفقیت انجام شد", "success");
      },
      (error) => {
        if (error.response.status === 401) {
          EventBus.dispatch("sessionend");
        }
        console.log(error);
        this.alerthandle("حذف ناموفق بود", "error");
      }
    );
  };
  onFavorite = (id, state) => {
    let data = {};
    if (state) {
      data = { f_id: id, operation: "delete_favorite" };
    } else {
      data = { f_id: id, operation: "add_favorite" };
    }
    UserService.addFavorite(data).then(
      (response) => {
        this.updaterows();
        this.updateMoveRow();
        this.setState({ selected: [] });
        this.alerthandle(" عملیات با موفقیت انجام شد", "success");
      },
      (error) => {
        if (error.response.status === 401) {
          EventBus.dispatch("sessionend");
        }
        console.log(error);
        this.alerthandle("عملیات با شکست مواجه شد", "error");
      }
    );
  };
  onShare = (id, operation, user, permission_level) => {
    let data = {
      f_id: id,
      operation: operation,
      user: user,
      permission_level: permission_level,
    };
    this.closeShareModal();
    UserService.sharefile(data).then(
      (response) => {
        this.updaterows();
        this.updateMoveRow();
        this.setState({ selected: [] });
        if (operation == "add_user") {
          this.alerthandle("اشتراک‌گذاری با موفقیت انجام شد", "success");
        } else {
          this.alerthandle("حذف اشتراک با موفقیت انجام شد", "success");
        }
      },
      (error) => {
        if (error.response.status === 401) {
          EventBus.dispatch("sessionend");
        }
        console.log(error);
        this.alerthandle("اشتراک‌گذاری ناموفق بود", "error");
      }
    );
  };

  handleFolderSelect = (event, name, id) => {
    const sf = {
      name: name,
      id: id,
    };
    if (this.state.selectedFolder != null) {
      if (this.state.selectedFolder.name == sf.name) {
        this.setState({ selectedFolder: null });
        this.setState({ newparent: "" });
        this.setState({ selectedmoveFolder: "" });
      }
    }
    this.setState({ selectedFolder: sf });
    this.setState({ newparent: id });
    this.setState({ selectedmoveFolder: id });
  };
  handlepermission = (e) => {
    this.setState({ permission: e.target.value });
  };
  handleoperation = (e) => {
    this.setState({ operation: e.target.value });
  };

  updateMoveRow = () => {
    UserService.getmovefiles().then(
      (response) => {
        let content = [];
        for (let i = 0; i < response.data.length; i++) {
          let cell = {
            name: response.data[i].name,
            id: response.data[i].id,
            is_file: response.data[i].is_file,
            file_type: response.data[i].file_type,
            parent: response.data[i].parent,
          };
          content.push(cell);
        }
        this.setState({ moveRow: content });
      },
      (error) => {
        if (error.response.status === 401) {
          EventBus.dispatch("sessionend");
        }
      }
    );
  };
  openCFMf = () => {
    this.setState({ openCFM: true });
  };
  onFMC = (e) => {
    this.setState({ NewFM: e.target.value });
  };
  onFC = () => {
    let id;
    if (this.state.newparent == "") {
      id = null;
    } else {
      id = this.state.newparent;
    }
    let data = {
      name: this.state.NewFM,
      parent: id,
    };
    let way = "?folder=" + id;
    UserService.AddFoldermove(data, way).then(
      (response) => {
        this.updateMoveRow();

        this.setState({ openCFM: false });
      },
      (error) => {
        if (error.response.status === 401) {
          EventBus.dispatch("sessionend");
        }
      }
    );
  };
  closeCFM = () => {
    this.setState({ openCFM: false });
  };
  gotoFolder = (event, name, id, parent) => {
    this.setState({ selectedFolder: null });
    this.setState({ newparent: id });
    this.setState({ selectedmoveFolder: "" });
    event.preventDefault();
    event.stopPropagation();

    const mp = "?folder=" + id;
    localStorage.setItem("MovePath", mp);
    UserService.changemovepath(mp);
    this.setState({ movepath: mp });
    this.updateMoveRow();
    const x = {
      name: name,
      id: parent,
    };

    let fp = this.state.Folderpath;
    let flag = false;
    for (let i = 0; i < fp.length; i++) {
      if (fp[i].id === x.id) {
        flag = true;
      }
    }
    if (!flag) {
      fp.push(x);
    }
    this.setState({ currentparent: x });

    this.setState({ Folderpath: fp });
  };
  folderBack = () => {
    let fp = this.state.Folderpath;

    fp.pop();
    const fpp = fp;
    let movep;
    if (this.state.currentparent.id == null) {
      movep = "";
    } else {
      movep = "?folder=" + this.state.currentparent.id;
    }
    const mp = movep;
    this.setState({ movepath: mp });
    localStorage.setItem("MovePath", mp);
    UserService.changemovepath(mp);
    this.updateMoveRow();
    if (fpp.length == 0) {
      this.setState({ currentparent: null });
      this.setState({ Folderpath: [] });
    } else {
      this.setState({ currentparent: fpp[fpp.length - 1] });
      this.setState({ Folderpath: fpp });
    }
    this.updateMoveRow();
  };
  moveFile = (id, newparent) => {
    const data = {
      f_id: id,
      new_parent: newparent,
    };
    this.setState({ openmove: false });
    UserService.moveFiles(data).then(
      (response) => {
        this.updateMoveRow();
        this.updaterows();
        this.alerthandle("جابجایی با موفقیت انجام شد", "success");
      },
      (error) => {
        if (error.response.status === 401) {
          EventBus.dispatch("sessionend");
        }
        this.alerthandle("جابجایی ناموفق بود", "error");
      }
    );
  };
  shortname = (name, x) => {
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

  moveclick = () => {
    this.state.selected.forEach((item) => {
      let file = this.state.rows.filter((obj) => obj.id === item);
      console.log(file);
      this.moveFile(file[0].id, this.state.newparent);
    });
  };
  handleClosemove = () => {
    this.setState({
      openmove: false,
      anchorE3: null,
      moveRow: [],
      movepath: "",
      Folderpath: [],

      currentparent: null,
    });
    this.setState({ showcontextanchor: [] });
    this.updaterows();
    this.emptyselected();
  };

  movemenu = () => {
    if (this.state.moveRow.length == 0 && this.state.currentparent == null) {
      this.updateMoveRow();
    }
    return (
      <Popover
        id={this.state.openmove ? "simple-popover" : undefined}
        open={this.state.openmove}
        anchorEl={this.state.anchorE3}
        onClose={this.handleClosemove}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          style: {
            backgroundColor: "#F1F1F1",
            boxShadow: "none",
            borderRadius: 0,
          },
        }}
        sx={{ width: "100%", height: "350px" }}
      >
        <Box
          sx={{
            position: "relative",
            mt: "10px",
            "&::before": {
              backgroundColor: "#F1F1F1",
              content: '""',
              display: "block",
              position: "absolute",
              width: 12,
              height: 12,
              top: -6,
              transform: "rotate(45deg)",
              left: "calc(50% - 6px)",
            },
          }}
        />
        <Card
          sx={{
            minWidth: 350,
            minHeight: 250,
            maxWidth: 350,
            dirction: "rtl!important",
          }}
        >
          <CardHeader
            sx={{
              backgroundColor: "#F1F1F1",
              height: "50px",
              flexDirection: "row-reverse",
              textWrapper: {
                height: "50px",
                display: "flex",
                direction: "rtl!important",
                alignItems: "center",
                justifyContent: "space-between",
                color: "black",
                fontWeight: "bold",
              },
              color: "black",
              fontWeight: "bold",
              title: {
                flex: "0 0 auto",
              },
              action: {
                flex: "1 1 auto",
              },
              "& .MuiCardHeader-content": {
                flex: "0 0 auto",
              },
              "& .MuiCardHeader-action": {
                flex: "1 1 auto",
              },
            }}
            avatar={
              this.state.currentparent != null ? (
                <IconButton
                  sx={{ flex: "1 1 auto", marginLeft: "3px" }}
                  onClick={this.folderBack}
                >
                  <ArrowForwardIcon />
                </IconButton>
              ) : undefined
            }
            action={
              <IconButton
                sx={{ marginTop: "-8.5px", flex: "1 1 auto" }}
                aria-label="close"
                onClick={this.handleClosemove}
              >
                <CloseSharpIcon />
              </IconButton>
            }
            title={
              this.state.currentparent == null
                ? "فضای من "
                : this.state.currentparent.name
            }
            // subheader="Move to folder"
          />

          <CardContent>
            <TableContainer sx={{ direction: "rtl!important" }}>
              <Table
                aria-labelledby="tableTitle1"
                sx={{ direction: "rtl!important" }}
              >
                <TableBody sx={{ direction: "rtl!important" }}>
                  {this.state.moveRow.length == 0 && (
                    <div className="no_file_move d-flex">
                      <div className="w-50 text-center">
                        هیچ فایلی وجود ندارد
                      </div>
                      <div className="w-50">
                        <img
                          width="100%"
                          height="50%"
                          src={require("../assest/png/shelf.png")}
                        ></img>
                      </div>
                    </div>
                  )}
                  {this.state.moveRow.map((row, index) => {
                    const isItemSelected = this.isSelectedfolder(row.id);
                    const disabled = row.is_file;
                    const type =
                      disabled === true
                        ? row.file_type.split(".")[1]
                        : "folder";
                    const labelId = `enhanced-table-checkbox-${index}`;
                    return (
                      <TableRow
                        hover
                        onClick={(event) =>
                          this.handleFolderSelect(event, row.name, row.id)
                        }
                        aria-disabled={row.is_file}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        sx={{ fontWeight: 400, color: "#404040!important" }}
                        selected={isItemSelected}
                      >
                        
                        <TableCell padding="none">
                          {row.is_file === true && (
                            <div className="file_icons_move">
                              <FileIcon
                                extension={type}
                                {...defaultStyles[type]}
                                // {...styleDefObj[row.file_type]}
                              />
                            </div>
                          )}
                          {row.is_file === false && (
                            <FolderIcon
                              fontSize="medium"
                              sx={{ color: "#FAD165", marginLeft: "2px" }}
                            />
                          )}
                        </TableCell>
                        <TableCell
                          align="right"
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                          sx={{ fontWeight: "400", color: "#404040" }}
                        >
                          {row.is_file === true && (
                            <div
                              className="d-flex"
                              style={{
                                justifyContent: "flex-start",
                                alignContent: "center",
                              }}
                            >
                              <div
                                style={{
                                  marginRight: "5px",
                                  marginTop: "5px",
                                }}
                              >
                                <a className="links" target="_blank">
                                  {this.shortname(row.name, 30)}
                                </a>
                              </div>
                            </div>
                          )}
                          {row.is_file === false && (
                            <a className="links" target="_blank">
                              {this.shortname(row.name, 25)}
                            </a>
                          )}
                        </TableCell>
                        <TableCell
                          component="td"
                          id={labelId}
                          scope="row"
                          padding="none"
                          align="left"
                        >
                          {row.is_file === false && (
                            <Tooltip title={"Go to " + row.name}>
                              <IconButton
                                onClick={(event) => {
                                  this.gotoFolder(
                                    event,
                                    row.name,
                                    row.id,
                                    row.parent
                                  );
                                  this.updateMoveRow();
                                }}
                              >
                                <ArrowBackIosNewOutlinedIcon
                                  sx={{ color: "#404040" }}
                                />
                              </IconButton>
                            </Tooltip>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-between" }} disableSpacing>
            <button
              className="btn btn-primary"
              onClick={this.moveclick}
              size="medium"
              style={{ flex: "1 1 60%", maxWidth: "30%" }}
            >
              جابجا کن
            </button>
            <Tooltip
              sx={{ flex: "1 1 70%" }}
              title="ساخت پوشه"
              enterDelay={500}
            >
              <div>
                <IconButton
                  aria-label="Create Folder"
                  component="span"
                  onClick={this.openCFMf}
                >
                  <CreateNewFolderIcon />
                </IconButton>
                <Modal
                  aria-labelledby="transition-modal-title7"
                  aria-describedby="transition-modal-description7"
                  open={this.state.openCFM}
                  onClose={this.closeCFM}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={this.state.openCFM}>
                    <Box sx={style}>
                      <Typography
                        id="transition-modal-title7"
                        variant="h5"
                        component="h3"
                      >
                        <ValidationTextField
                          id="outlined-name7"
                          fullWidth
                          label="نام پوشه"
                          value={this.state.NewFM}
                          validations={required}
                          placeholder="نام پوشه"
                          onChange={this.onFMC}
                          sx={{ marginBottom: "10px" }}
                        />
                      </Typography>
                      <Typography
                        id="transition-modal-description7"
                        sx={{ mt: 2 }}
                      >
                        <div className="form-group">
                          <button
                            variant="contained"
                            className="btn btn-primary btn-block"
                            disabled={!this.state.NewFM}
                            onClick={this.onFC}
                          >
                            ساخت پوشه
                          </button>
                        </div>
                      </Typography>
                    </Box>
                  </Fade>
                </Modal>
              </div>
            </Tooltip>
          </CardActions>
        </Card>
      </Popover>
    );
  };
  movebutton = () => {
    return (
      <Tooltip title="جابجایی" enterDelay={500}>
        <IconButton
          id="moveButton"
          aria-describedby={this.state.openmove ? "simple-popover" : undefined}
          aria-haspopup="true"
          variant="contained"
          disableElevation
          onClick={(event) => {
            this.setState({ anchorE3: event.currentTarget, openmove: true });
          }}
          className="w-100"
        >
          <DriveFileMoveOutlinedIcon />
        </IconButton>
      </Tooltip>
    );
  };

  displaymove = () => {
    if (!this.state.openmove) {
      localStorage.setItem("MovePath", "");
      UserService.changemovepath("");
    }
    if (this.state.selected.length > 0 && this.x != "Bin") {
      return (
        <div>
          {this.movebutton()}
          {this.movemenu()}
        </div>
      );
    } else {
      return null;
    }
  };
  handlePathClick = (event) => {
    this.setState({
      anchorE2: event.currentTarget,
      openPath: true,
    });
  };
  handlePathClose = () => {
    this.setState({
      anchorE2: null,
      openPath: false,
    });
  };
  onDeleteToolbar = () => {
    this.state.selected.forEach((item) => {
      let file = this.state.rows.filter((obj) => obj.id === item);
      console.log(file);
      this.onDelete(file[0].id);
    });
    this.setState({ showcontextanchor: [] });
  };
  onFavoriteToolbar = () => {
    this.state.selected.forEach((item) => {
      let file = this.state.rows.filter((obj) => obj.id === item);
      console.log(file);
      if (file[0].favorite.length > 0) {
        this.onFavorite(file[0].id, true);
      } else {
        this.onFavorite(file[0].id, false);
      }
    });
    this.setState({ showcontextanchor: [] });
  };
  Onrestore = () => {
    this.state.selected.forEach((item) => {
      let file = this.state.rows.filter((obj) => obj.id === item);
      console.log(file);
      this.onRestore(file[0].id);
    });
    this.setState({ showcontextanchor: [] });
  };

  Onshare = () => {
    this.state.selected.forEach((item) => {
      let file = this.state.rows.filter((obj) => obj.id === item);
      console.log(file);
      this.onShare(
        file[0].id,
        this.state.operation,
        this.state.shareName,
        this.state.permission
      );
    });
    this.setState({ openShare: false });
    this.setState({ showcontextanchor: [] });
  };
  Onrename = () => {
    let file = this.state.rows.filter(
      (obj) => obj.id === this.state.selected[0]
    );

    this.onRename(file[0].id, this.state.NewFileName);
    this.setState({ open1: false });
    this.setState({ showcontextanchor: [] });
  };
  openRenameModalf = () => {
    this.setState({ open1: true, NewFileName: "" });
  };
  onsharenameChnage = (event) => {
    this.setState({ newshared: event.target.value });
  };
  openShareModalf = () => {
    this.setState({ openShare: true, shareName: "" });
  };
  closeRenameModal = () => {
    this.setState({ open1: false });
    this.setState({ showcontextanchor: [] });
  };
  closeShareModal = () => {
    this.setState({ openShare: false });
    this.setState({ showcontextanchor: [] });
  };
  onFileNameChange = (e) => {
    this.setState({ NewFileName: e.target.value });
  };
  onShareNamechange = (e) => {
    this.setState({ shareName: e.target.value });
  };
  handleClick1 = (event) => {
    this.setState({
      anchorE4: event.currentTarget,
      openColorButton: true,
    });
  };
  handleClose1 = () => {
    this.setState({
      anchorE4: null,
      openColorButton: false,
    });
  };
  closeSearch = () => {
    localStorage.setItem("search", "false");
    localStorage.setItem("search_addres", "");
    this.gety();
    window.updaterows();
  };
  lastpathMenu = () => {
    return (
      <StyledMenU
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={this.state.anchorE4}
        open={this.state.openColorButton}
        onClose={this.handleClose1}
      >
        <MenuItem onClick={this.handleOpenFM}>
          <div>
            <label style={{ fontSize: "14px", color: "#404040!important" }}>
              <StyledIcon
                aria-label="upload picture"
                component="span"
                sx={{ fontSize: "14px", color: "#404040!important" }}
              >
                <CreateNewFolderOutlinedIcon
                  sx={{
                    width: "25px",
                    height: "25px",
                    marginLeft: "10%",
                    marginRight: "4%",
                    marginBottom: "2.5%!important",
                    color: "#404040!important",
                  }}
                />
              </StyledIcon>
              افزودن پوشه
            </label>
          </div>
        </MenuItem>
        <Modal
          key="modal1"
          aria-labelledby="transition-modal-title10"
          aria-describedby="transition-modal-description10"
          open={this.state.openFM}
          onClose={this.handleCloseFM}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.state.openFM}>
            <Box key="boxcreate" sx={style}>
              <Typography
                key="typocreate"
                id="transition-modal-title10"
                variant="h5"
                component="h3"
              >
                <ValidationTextField
                  id="createfolder"
                  key="createfolder"
                  fullWidth
                  label="نام پوشه"
                  validations={[required]}
                  placeholder="نام پوشه"
                  onChange={this.onFolderNameChange}
                  sx={{ marginBottom: "10px" }}
                />
              </Typography>
              <Typography
                key="mamad"
                id="transition-modal-description10"
                sx={{ mt: 2 }}
              >
                <div className="">
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
        <MenuItem onClick={this.handleOpenFileM}>
          <label style={{ fontSize: "14px", color: "#404040!important" }}>
            <StyledIcon
              aria-label="upload file"
              component="span"
              sx={{ fontSize: "14px", color: "#404040!important" }}
            >
              <UploadFileOutlinedIcon
                sx={{
                  width: "25px",
                  height: "25px",
                  marginLeft: "10%",
                  marginRight: "4%",

                  marginBottom: "2.5%!important",
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
                <div className="form-group upload-file">
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
                          onChange={(event) => {
                            this.onFileChange(event);
                          }}
                          // directory=""
                          webkitdirectory=""
                          type="file"
                        />
                      </label>
                    </div>
                  </div>

                  {this.state.selectedFile.length !== 0 && (
                    <TableContainer sx={{ direction: "rtl" }}>
                      <Table
                        sx={{ direction: "rtl" }}
                        aria-label="customized table"
                      >
                        <TableHead sx={{ direction: "rtl" }}>
                          <TableRow sx={{ direction: "rtl" }}>
                            <TableCell sx={{ textAlign: "right" }}>
                              <b>نام فایل</b>
                            </TableCell>
                            <TableCell sx={{ textAlign: "right" }}>
                              <b>حجم فایل</b>
                            </TableCell>
                            <TableCell sx={{ textAlign: "right" }}></TableCell>
                          </TableRow>
                        </TableHead>

                        {this.state.selectedFile.map((file) => {
                          return (
                            <TableBody>
                              <TableCell sx={{ textAlign: "right" }}>
                                {this.shortname(file.name, 20)}
                              </TableCell>
                              <TableCell sx={{ textAlign: "right" }}>
                                <bdi>
                                  {this.stringconvertor(
                                    this.convertsize(file.size)[0]
                                  )}
                                </bdi>
                                {this.convertsize(file.size)[1]}
                              </TableCell>
                              <TableCell
                                sx={{ textAlign: "right", display: "flex" }}
                              >
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

                  {this.state.selectedFile.length !== 0 && (
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
        <MenuItem onClick={this.handleOpenm}>
          <label htmlFor="icon-button-file1" style={{ fontSize: "14px" }}>
            <StyledIcon
              aria-label="upload file1"
              component="span"
              sx={{ fontSize: "14px" }}
            >
              <UploadFileOutlinedIcon
                sx={{
                  width: "25px",
                  height: "25px",
                  marginLeft: "10%",
                  marginRight: "4%",

                  marginBottom: "2.5%!important",
                  color: "#404040!important",
                }}
              />
            </StyledIcon>
            افزودن فایل با لینک
          </label>
        </MenuItem>
        <Modal
          aria-labelledby="transition-modal-title50"
          aria-describedby="transition-modal-description50"
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
                id="transition-modal-title50"
                variant="h6"
                component="h2"
              >
                <ValidationTextField
                  id="outlined-name50"
                  fullWidth
                  autoFocus={false}
                  label="نشانی اینترنتی فایل"
                  defaultValue=""
                  validations={[required]}
                  placeholder="نشانی اینترنتی فایل"
                  onChange={this.onLinkChange}
                  sx={{ marginBottom: "10px" }}
                />
              </Typography>
              <Typography id="transition-modal-description50" sx={{ mt: 2 }}>
                <div className="">
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
    );
  };

  lastpathButton = (name) => {
    return (
      <div>
        <ColorButton
          id="demo-customized-button"
          aria-controls={
            this.state.openColorButton ? "demo-customized-menu" : undefined
          }
          aria-haspopup="true"
          aria-expanded={this.state.openColorButton ? "true" : undefined}
          disableElevation
          onClick={this.handleClick1}
          className="w-100 path_buttons"
          endIcon={
            <ArrowDropDownOutlinedIcon
              sx={{ marginRight: "3px", color: "#404040" }}
            />
          }
        >
          {name}
        </ColorButton>
        {this.lastpathMenu()}
      </div>
    );
  };
  pathButton = (name, file_id) => {
    return (
      <div>
        <ColorButton
          className="w-100 path_buttons"
          onClick={() => this.HeaderFolderClick(file_id, name)}
          endIcon={
            <ArrowBackIosNewIcon
              sx={{ marginRight: "3px", color: "#404040" }}
            />
          }
        >
          {name}
        </ColorButton>
      </div>
    );
  };

  displayPath = () => {
    const Folders = JSON.parse(localStorage.getItem("Folders"));
    if (Folders.length == 0) {
      return (
        <div style={{ display: "flex", flex: "1 1 50%" }}>
          {this.x == "Bin" && this.lastpathButton("سطل زباله")}
          {this.x == "Profile" && this.lastpathButton("فضای من")}
          {this.x == "Shared" && this.lastpathButton("اشتراکی‌ها")}
          {this.x == "Favorite" && this.lastpathButton("ستاره‌دار‌ها")}
        </div>
      );
    } else if (Folders.length > 0 && Folders.length < 4) {
      console.log(Folders);
      return (
        <div style={{ display: "flex", flex: "1 1 50%" }}>
          {this.x == "Bin" && this.pathButton("سطل زباله", "")}
          {this.x == "Profile" && this.pathButton("فضای من", "")}
          {this.x == "Shared" && this.pathButton("اشتراکی‌ها", "")}
          {this.x == "Favorite" && this.pathButton("ستاره‌دار‌ها", "")}

          {Folders.map((item, index) => {
            if (index == Folders.length - 1) {
              return this.lastpathButton(item.name);
            } else {
              return this.pathButton(item.name, item.id);
            }
          })}
        </div>
      );
    } else {
      return (
        <div style={{ display: "flex", flex: "1 1 50%" }}>
          {this.x == "Bin" && this.pathButton("سطل زباله", "")}
          {this.x == "Profile" && this.pathButton("فضای من", "")}
          {this.x == "Shared" && this.pathButton("اشتراکی‌ها", "")}
          {this.x == "Favorite" && this.pathButton("ستاره‌دار‌ها", "")}
          <div>
            <ColorButton
              id="demo-customized-button2"
              aria-controls={
                this.state.openPath ? "demo-customized-menu2" : undefined
              }
              aria-haspopup="true"
              aria-expanded={this.state.openPath ? "true" : undefined}
              variant="contained"
              disableElevation
              className="w-100"
              onClick={this.handlePathClick}
              endIcon={<ArrowBackIosNewIcon sx={{ marginRight: "7px" }} />}
            >
              <MoreHorizIcon />
            </ColorButton>
          </div>
          <StyledMenU
            id="demo-customized-menu2"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button2",
            }}
            anchorEl={this.state.anchorE2}
            open={this.state.openPath}
            onClose={this.handlePathClose}
          >
            {Folders.map((item, index) => {
              if (index == Folders.length - 1 || index == Folders.length - 2) {
                return false;
              } else {
                return (
                  <MenuItem
                    onClick={() => this.HeaderFolderClick(item.id, item.name)}
                  >
                    <FolderIcon />
                    {item.name}
                  </MenuItem>
                );
              }
            })}
          </StyledMenU>
          {this.pathButton(
            Folders[Folders.length - 2].name,
            Folders[Folders.length - 2].id
          )}
          {this.lastpathButton(Folders[Folders.length - 1].name)}
        </div>
      );
    }
  };
  removeEncrypt = () => {
    document.getElementById("encrypt_text").style.display = "none";
  };
  Search_out = () => {
    const header_mid = document.getElementById("search");
    header_mid.style.backgroundColor = "#F1F3F4";
    header_mid.style.boxShadow = "none";
    header_mid.style.border = "none";
  };
  logoutUser = () => {
    EventBus.dispatch("logout");
  };

  changeInput = (e) => {
    this.setState({ Searchinput: e.target.value });
  };
  handleSearch = () => {
    localStorage.setItem("search_addres", this.state.Searchinput);
    localStorage.setItem("search", true);
    this.gety();
    this.updaterows();
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

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  logoutUser = () => {
    EventBus.dispatch("logout");
  };
  DatePickerInput=(props)=> {
    return <input className="popo data_input" {...props} />;
  }
  handleSearch = () => {
    let input_serach = this.state.input;
    if(this.state.file_type!==""){
      input_serach+="&file_type="+this.state.file_type
    }
    if(this.state.file_data!==""){
      input_serach+="&from_date="+this.state.file_data;
    }
    localStorage.setItem("search_addres", input_serach);
    localStorage.setItem("search", true);
    this.gety();
  this.updaterows();
  };
  Search = () => {
    const header_mid = document.getElementById("search");

    header_mid.style.backgroundColor = "#fff";

    //border bottom select
    header_mid.style.border = "1px solid #ccc";
    //select shadow like google drive serach
    header_mid.style.boxShadow =
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;";
  };
  Search_out = () => {
    const header_mid = document.getElementById("search");
    header_mid.style.backgroundColor = "#F1F3F4";
    header_mid.style.boxShadow = "none";
    header_mid.style.border = "none";
  };
   changeInput = (e) => {
     this.setState({input:e.target.value})
   
  };
   handleClick5 = (event) => {
    this.setState({anchorEl5:event.currentTarget,open5:true})
    
  };
  handleTypeChange =(event)=>{
    this.setState({file_type:event.target.value})
   
    }
    handleDateChange =(unix, formatted)=>{
      TripOriginSharp.setState({file_data:moment(formatted,'jYYYY-jMM-jDD').format('YYYY-MM-DD')})
  
     
      }
      handleClose5 = () => {
      this.setState({anchorEl5:null,open5:false})
      };
      handleOpenModal = (event) => {
        event.stopPropagation();
        event.preventDefault();
      this.setState({openmodal:true})
      };
      handleCloseModal = (event) => {
        event.stopPropagation();
          event.preventDefault();
          this.update_user_info();
        
          this.setState({openmodal:false})
      };
      src_creator = (src) => {
   
        if(typeof src === "object" ){
          const objectUrl = URL.createObjectURL(src)
          this.setProfile_src(objectUrl)
    }
    else{
      this.setProfile_src(src) ;
    }
    
      }
      photo_upload =()=>{
        if(this.user.image_url===""){
          this.alerthandle("لطفا تصویر را انتخاب کنید","error");
        }
        else{
          let formData = new FormData();
          formData.append("img", this.user.image_url);
          formData.append("operation", "add_image_profile");
          UserService.profileImage(formData).then(res=>{
            if(res.status===200){
              this.alerthandle("تغییر تصویر موفقیت آمیز بود.","success");
              UserService.getProfile().then(res=>{
                this.user.image_url=res.data.image_url;
               
                localStorage.setItem("user",JSON.stringify(this.user));
                UserService.getProfilePic(res.data.image_url).then(res=>
                  {
                    console.log(res)
                  })
                this.setProfile_img(false);
                this.src_creator(res.data.image_url);
              })
            }
            else{
              this.alerthandle("خطا در آپلود تصویر","error");
            
            }
          })
          }
        }
        photo_delete =()=>{
          let formData = new FormData();
          formData.append("operation", "delete_image_profile");
          UserService.profileImage(formData).then(res=>{
            if(res.status===200){
              this.alerthandle("حذف تصویر موفقیت آمیز بود.","success");
              UserService.getProfile().then(res=>{
                this.user.image_url=res.data.image_url;
                localStorage.setItem("user",JSON.stringify(this.user));
                this.setProfile_img(false);
                this.src_creator(res.data.image_url);
                this.update_user_info();
              })
            }
            else{
              this.alerthandle("خطا در حذف تصویر","error");
              }
          })
          }

          update_user_info =()=>{
            UserService.getProfile().then(res=>{
             this.user.email=res.data.email;
             this.user.full_name=res.data.full_name;
             this.user.last_name=res.data.last_name;
             this.user.username=res.data.username;
             this.user.first_name=res.data.first_name;
             this.user.image_url=res.data.image_url;
             this.src_creator(res.data.image_url);
             localStorage.setItem("user",JSON.stringify(this.user));
            })
           }
      user=JSON.parse(localStorage.getItem("user"))
  render() {
    const { user: currentUser } = this.props;
    if (!currentUser) {
      return <Redirect to="/" />;
    }

    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar sx={{background:"black"}} position="fixed" open={this.state.open}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              sx={{ flexGrow: 1, textAlign: "right" }}
              component="div"
            >
             <div className="d-flex   Header_left_fa_m mb-1">
             <div className="">
            <img
              src={require("../assest/png/logo.png")}
              alt="logo"
              id="logo_fa_m"
              width="50px"
            />
          </div>
          <div id="logo_text_fa">
            <div className="logo_text_fa_main_m mb-2">دادگـان</div>
            <div className="logo_text_fa_sub_m">انبار داده‌های اتاق وضعیت</div>
          </div>
         
        </div>

            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={this.handleDrawerOpen}
              sx={{ ...(this.state.open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Main sx={{direction:"rtl"}} open={this.state.open}>
          <DrawerHeader />
          <div
          className=" col-lg-6 col-md-5 col-sm-6 offs-2 Header_search_m"
          id="search"
        >
          <Tooltip title="جستجو" enterDelay={500} size="small">
            <IconButton
              aria-label="serach"
              sx={{
                width: "40px",
                height: "40px",
                marginTop: "0.2%",
                marginLeft: "0.5%",
              }}
              onClick={this.handleSearch}
            >
              <SearchIcon sx={{ width: "25px", height: "25px" }} />
            </IconButton>
          </Tooltip>
          {/* know on focus on element */}

          <input
            type="text"
            placeholder="جستجو "
            value={this.state.input}
            id="search_input"
            onFocus={this.Search}
            onBlur={this.Search_out}
            onChange={this.changeInput}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                this.handleSearch();
              }
            }}
          />
          <Tooltip title="جستجو پیشرفته" enterDelay={500}>
            <IconButton
              sx={{
                width: "40px",
                height: "40px",
                marginTop: "0.2%",
              }}
              onClick={(event) => {
               this.handleClick5(event);
              }}
            >
              <SettingsOutlinedIcon sx={{ width: "25px", height: "25px" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="بستن جستجو" enterDelay={500}>
            <IconButton
              sx={{
                width: "40px",
                height: "40px",
                marginTop: "0.2%",
              }}
              onClick={(event) => {
                localStorage.setItem("search", "false");
                localStorage.setItem("search_addres", "");
                this.setState({file_type:"",file_data:"",input:""})
             
                this.gety();
                this.updaterows();
               
              }}
            >
              <CloseSharpIcon sx={{ width: "25px", height: "25px" }} />
            </IconButton>
          </Tooltip>
          <StyledMenu
            anchorEl={this.state.anchorEl5}
            id="account-menu"
            open={this.state.open5}
            onClose={this.handleClose5}
          
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 0.5% 8px rgba(0,0,0,0.32))",
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: 1,
                  mr: 0,
                  backgroundColor: "#01579B",
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  left: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>   
            <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                     <InputLabel  id="demo-simple-select-label">نوع فایل</InputLabel>
                     
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.file_type}
          
          label="نوع فایل"
          onChange={this.handleTypeChange}
        >
          <MenuItem value={"pdf"}>PDF</MenuItem>
          <MenuItem value={"jpeg"}>JPEG,JPG</MenuItem>
          <MenuItem value={"word"}>DOCX</MenuItem>
        </Select>
        </FormControl>
        </Box>
        </MenuItem>
<MenuItem>
<div id="data_picker">
  تاریخ بارگذاری
<DatePicker
          inputComponent={DatePickerInput}
          placeholder="انتخاب تاریخ"
          format="jYYYY-jMM-jDD"
          onChange={this.handleDateChange}
            
          
          id="datePicker"
          preSelected={(moment().format("jYYYY-jMM-jDD").toString())}
        />
       </div>
</MenuItem>
          </StyledMenu>
        </div>
          <div id="encrypt_text_m" className="encrypt_m">
          
          همه‌ی فایل‌های شما در
         
          <span className="encrypt_bold"> &nbsp;دادگان&nbsp;</span>
           رمز‌نگاری می‌شوند و فقط خودتان به آن‌ها دسترسی دارید.
          <IconButton onClick={this.removeEncrypt}>
            <CloseSharpIcon />
          </IconButton>
        </div>
        <Toolbar
          sx={{
            pl: { sm: 2 },
            // pr: { xs: 1, sm: 1 },

            // mb:2,
          }}
        >
          {this.displayPath()}
          {this.state.selected.length === 1 && this.x == "Profile" && (
            <Tooltip title="تغییر نام" enterDelay={500}>
              <div>
                <IconButton
                  aria-label="Rename file"
                  component="span"
                  onClick={this.openRenameModalf}
                >
                  <DriveFileRenameOutlineIcon />
                </IconButton>
                <Modal
                  aria-labelledby="transition-modal-title2"
                  aria-describedby="transition-modal-description2"
                  open={this.state.open1}
                  onClose={this.closeRenameModal}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={this.state.open1}>
                    <Box sx={style}>
                      <Typography
                        id="transition-modal-title2"
                        variant="h5"
                        component="h3"
                      >
                        <ValidationTextField
                          id="outlined-name2"
                          fullWidth
                          label="نام جدید"
                          value={
                            this.state.NewFileName == ""
                              ? this.state.rows
                                  .filter(
                                    (obj) => obj.id == this.state.selected[0]
                                  )[0]
                                  .name.split(".")[0]
                              : this.state.NewFileName
                          }
                          validations={required}
                          placeholder="نام جدید"
                          onChange={this.onFileNameChange}
                          sx={{ marginBottom: "10px" }}
                        />
                      </Typography>
                      <Typography
                        id="transition-modal-description2"
                        sx={{ mt: 2 }}
                      >
                        <div className="form-group">
                          <button
                            variant="contained"
                            className="btn btn-primary btn-block"
                            disabled={!this.state.NewFileName}
                            onClick={this.Onrename}
                          >
                            تغییر
                          </button>
                        </div>
                      </Typography>
                    </Box>
                  </Fade>
                </Modal>
              </div>
            </Tooltip>
          )}
           {this.state.selected.length === 1 &&(
              <Tooltip title="اطلاعات فایل" enterDelay={500}>
                <div>
                <IconButton
                  aria-label="file info"
                  component="span"
                  onClick={this.hadnleopenfileinfo}
                >
                  <ListOutlinedIcon />
                </IconButton>
               
                <Modal
                  aria-labelledby="transition-modal-title21"
                  aria-describedby="transition-modal-description21"
                  open={this.state.showfile_info}
                  onClose={this.handleclosefileinfo}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={this.state.showfile_info}>
                    <Box sx={style}>
                 <Table>
                 <TableHead
      stickyHeader
      sx={{ marginTop: "2px", paddingTop: "2px", color: "#404040!important", direction: "rtl!important" }}
    >
      <TableRow>
     
       
        {modalHeadcells.map((headCell) =>
          localStorage.getItem("Page") !== "Bin" &&
          headCell.id === "updated_at" ? null : (
            <TableCell
              sx={{ direction: "ltr", color: "#404040!importan" }}
              key={headCell.id}
              align={headCell.align === true ? "left" : "right"}
              
              padding={headCell.disablePadding ? "none" : "default"}
            >
                {headCell.label}
            </TableCell>
          )
        )}
       
      </TableRow>
    </TableHead>
    <TableBody sx={{ direction: "rtl!important"}}>
      <TableRow></TableRow>
      <TableRow role="checkbox"
      
        
        key={0}
        >
        
       
        
                 <TableCell
                            padding="none"
                            sx={{ fontWeight: "400", color: "#404040" }}
                            align="right"
                          >
                            {this.findselected()[0].is_file === true && (
                              <a className="links" target="_blank">
                                {this.findselected()[0].owner}
                              </a>
                            )}
                            {this.findselected()[0].is_file === false && (
                              <a className="links" target="_blank">
                                {this.findselected()[0].owner}
                              </a>
                            )}
                          </TableCell>
                          <TableCell
                            padding="none"
                            sx={{ fontWeight: "400", color: "#404040" }}
                            align="right"
                          >
                            {" "}
                            {this.findselected()[0].is_file === true && (
                              <a className="links" target="_blank">
                                {this.stringconvertor(this.findselected()[0].created_at)}
                              </a>
                            )}
                            {this.findselected()[0].is_file === false && (
                              <a className="links" target="_blank">
                                {this.stringconvertor(this.findselected()[0].created_at)}
                              </a>
                            )}
                          </TableCell>
                        
                          <TableCell
                            sx={{ fontWeight: "400", color: "#404040" }}
                            align="right"
                            padding="none"
                          >
                            {this.findselected()[0].is_file === true && (
                              <a
                                className="links"
                          
                                target="_blank"
                              >
                                <bdi>
                                  {this.stringconvertor(
                                    this.convertsize(this.findselected()[0].file_size)[0]
                                  )}
                                </bdi>
                                {this.convertsize(this.findselected()[0].file_size)[1]}
                              </a>
                            )}
                            {this.findselected()[0].is_file === false && (
                              <a className="links" target="_blank">
                                __
                              </a>
                            )}
                          </TableCell>
                          {this.x === "Bin" && (
                            <TableCell
                              padding="none"
                              sx={{ fontWeight: "400", color: "#404040" }}
                              align="left"
                            >
                              {" "}
                              {this.findselected()[0].is_file === true && (
                                <a className="links" target="_blank">
                                  {this.stringconvertor(this.findselected()[0].updated_at)}
                                </a>
                              )}
                              {this.findselected()[0].is_file === false && (
                                <a className="links" target="_blank">
                                  {this.stringconvertor(this.findselected()[0].updated_at)}
                                </a>
                              )}
                            </TableCell>
                          )}
                           
       

    
        </TableRow>
    </TableBody>
                 </Table>
                    </Box>
                  </Fade>
                </Modal>
                </div>
              </Tooltip>

           )}
          {this.state.selected.length == 1 &&
            (this.state.selectedType == ".xlsx" ||
              this.state.selectedType == ".xls") && (
              <Tooltip title="نمایش" enterDelay={500}>
                <div>
                  <IconButton
                    aria-label="view file"
                    component="span"
                    onClick={this.openviewModal}
                  >
                    <VisibilityIcon />
                  </IconButton>
                  {/* <Modal
                    aria-labelledby="transition-modal-title6"
                    aria-describedby="transition-modal-description6"
                    open={this.state.viewmodal}
                    onClose={this.closeviewModal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={this.state.viewmodal}>
                      <Box sx={style}>
                        <Typography
                          id="transition-modal-title6"
                          variant="h5"
                          component="h3"
                        >
                          <ValidationTextField
                            id="outlined-name2"
                            fullWidth
                            label="Rename"
                            value={this.state.NewFileName}
                            validations={required}
                            placeholder="نام پوشه"
                            onChange={this.onFileNameChange}
                            sx={{ marginBottom: "10px" }}
                          />
                        </Typography>
                        <Typography
                          id="transition-modal-description2"
                          sx={{ mt: 2 }}
                        >
                          <div className="form-group">
                            <button
                              variant="contained"
                              className="btn btn-primary btn-block"
                              disabled={!this.state.NewFileName}
                              onClick={this.Onrename}
                            >
                              تغییر نام
                            </button>
                          </div>
                        </Typography>
                      </Box>
                    </Fade>
                  </Modal> */}
                </div>
              </Tooltip>
            )}
          {this.x == "Bin" && this.state.selected.length > 0 && (
            <Tooltip title="بازیابی" enterDelay={500}>
              <IconButton onClick={this.Onrestore}>
                <RestoreIcon />
              </IconButton>
            </Tooltip>
          )}
          {this.displaymove()}

          {this.state.selected.length > 0 && this.x == "Profile" && (
            <Tooltip title="اشتراک‌گذاری" enterDelay={500}>
              <div>
                <IconButton
                  aria-label="Share file"
                  component="span"
                  onClick={this.openShareModalf}
                >
                  <PersonAddAltOutlinedIcon />
                </IconButton>
                <Modal
                  aria-labelledby="transition-modal-title5"
                  aria-describedby="transition-modal-description5"
                  open={this.state.openShare}
                  onClose={this.closeShareModal}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={this.state.openShare}>
                    <Box sx={share_style}>
                      <Typography
                        id="transition-modal-title5"
                        variant="h5"
                        component="h3"
                      >
                        <ValidationTextField
                          id="outlined-name2"
                          fullWidth
                          label="نام کاربری"
                          value={this.state.shareName}
                          validations={required}
                          placeholder="نام کاربری"
                          onChange={this.onShareNamechange}
                          sx={{ marginBottom: "10px" }}
                        />
                      </Typography>
                      <FormControl sx={{ m: 1, minWidth: 60, maxWidth: 150 }}>
                        <InputLabel id="demo-simple-select-disabled-label">
                          عملبات
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-disabled-label"
                          id="demo-simple-select-disabled"
                          value={this.state.operation}
                          label="operation"
                          sx={{ direction: "rtl" }}
                          onChange={this.handleoperation}
                        >
                          <MenuItem
                            sx={{ direction: "rtl" }}
                            value={"add_user"}
                          >
                            دادن اشتراک
                          </MenuItem>
                          <MenuItem
                            sx={{ direction: "rtl" }}
                            value={"delete_user"}
                          >
                            گرفتن اشتراک
                          </MenuItem>
                        </Select>
                      </FormControl>
                      {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-disabled-label1">
                          دسترسی
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-disabled-label1"
                          id="demo-simple-select-disabled1"
                          value={this.state.permission}
                          label="permission"
                          onChange={this.handlepermission}
                        >
                          <MenuItem value={"read"}>خواندن</MenuItem>
                          {/* <MenuItem value={"write"}>حذف</MenuItem> */}
                      {/* </Select>
                      </FormControl> */}
                      <Typography
                        id="transition-modal-description5"
                        sx={{ mt: 2 }}
                      >
                        <div className="form-group"></div>
                        <div className="form-group">
                          <button
                            variant="contained"
                            className="btn btn-primary btn-block"
                            disabled={!this.state.shareName}
                            onClick={this.Onshare}
                          >
                            اشتراک‌گذاری
                          </button>
                        </div>
                      </Typography>
                    </Box>
                  </Fade>
                </Modal>
              </div>
            </Tooltip>
          )}
          {this.state.selected.length > 0 &&
            this.x != "Bin" &&
            this.x != "Shared" && (
              <Tooltip title="حذف" enterDelay={500}>
                <IconButton onClick={this.onDeleteToolbar}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            )}
          {this.state.selected.length > 0 && this.x != "Favorite" && (
            <Tooltip title="ستاره‌دار‌ کردن" enterDelay={500}>
              <IconButton onClick={this.onFavoriteToolbar}>
                <StarOutlinedIcon />
              </IconButton>
            </Tooltip>
          )}
          {this.state.selected.length > 0 && this.x === "Favorite" && (
            <Tooltip title="حذف از ستاره‌دار‌ها" enterDelay={500}>
              <IconButton onClick={this.onFavoriteToolbar}>
                <StarOutlineOutlinedIcon />
              </IconButton>
            </Tooltip>
          )}
          {this.state.selected.length > 0 && this.x == "Shared" && (
            <Tooltip title="حذف" disabled enterDelay={500}>
              <IconButton onClick={this.onDeleteToolbar}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          )}

          {this.x == "Profile" && this.y == "true" && (
            <Tooltip title="بستن جستجو" enterDelay={500}>
              <IconButton onClick={this.closeSearch}>
                <CloseSharpIcon />
              </IconButton>
            </Tooltip>
          )}
          {this.x == "Bin" && this.state.selected.length > 0 && (
            <Tooltip title="حذف" enterDelay={500}>
              <IconButton onClick={this.onDeleteToolbar} disabled>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          )}
          {/* <Tooltip disabled title="نمایش پنجره ای" enterDelay={500} size="small">
            <IconButton
            disabled
              aria-label="grid view"
              sx={{
                marginRight: "15px",
                color: "#707070",
              }}
            >
              <CalendarViewMonthOutlinedIcon />
            </IconButton>
          </Tooltip> */}
          {/* <Tooltip title="جزیات" enterDelay={500} size="small">
            <IconButton disabled aria-label="view details" sx={{ color: "#707070" }}>
              <InfoOutlinedIcon />
            </IconButton>
          </Tooltip> */}
        </Toolbar>
        <div
          className="Middle_body"
          style={{ color: "#606469", direction: "rtl" }}
        >
          <Divider />
          {/* <br></br>
          <h3  style={{ marginTop: "20px",marginLeft:"90%",direction:"ltr" }}> پیشنهادی</h3>

          <div classname="gallery_image" style={{ marginBottom: "20px" }}>
            <div class="gallery_fa">
              <a target="_blank">
                <img
                  src={require("../assest/png/download.jpg")}
                  alt="aut"
                  width="600"
                  height="400"
                ></img>
              </a>

              <div class="desc_fa">
                <div sx={{ display: "flex" }}>
                  
                  <PictureAsPdfOutlinedIcon
                    size="small"
                    sx={{
                      marginTop: "10px",
                      width: "50px",
                      height: "25px",
                      marginRight: "2%",
                    }}
                  />
                  اطلاعات فایل
                </div>

                
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

              <div class="desc_fa">
                <div sx={{ display: "flex" }}>
                  
                  <PictureAsPdfOutlinedIcon
                    size="small"
                    sx={{
                      marginTop: "10px",
                      width: "50px",
                      height: "25px",
                      marginRight: "2%",
                    }}
                  />
                  اطلاعات فایل
                </div>

                
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

              <div class="desc_fa">
                <div sx={{ display: "flex" }}>
                  
                  <PictureAsPdfOutlinedIcon
                    size="small"
                    sx={{
                      marginTop: "10px",
                      width: "50px",
                      height: "25px",
                      marginRight: "2%",
                    }}
                  />
                  اطلاعات فایل
                </div>

                
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

              <div class="desc_fa">
                <div sx={{ display: "flex" }}>
                  
                  <PictureAsPdfOutlinedIcon
                    size="small"
                    sx={{
                      marginTop: "10px",
                      width: "50px",
                      height: "25px",
                      marginRight: "2%",
                    }}
                  />
                  اطلاعات فایل
                </div>

                
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

              <div class="desc_fa">
                <div sx={{ display: "flex" }}>
                  
                  <PictureAsPdfOutlinedIcon
                    size="small"
                    sx={{
                      marginTop: "10px",
                      width: "50px",
                      height: "25px",
                      marginRight: "2%",
                    }}
                  />
                  اطلاعات فایل
                </div>

                
              </div>
            </div>
            
          </div> */}

          <div
            className="Middle_body_table"
            style={{
              marginLeft: "25px",
              paddingTop: "5px",
              color: "#404040",
              direction: "rtl!important",
            }}
          >
            {this.state.selected.length > 0 && (
              <div id="non_selected">
                {this.stringconvertor(this.state.selected.length.toString()) +
                  " "}
                مورد انتخاب شده
              </div>
            )}

            {this.state.rows.length == 0 ? (
              <div className=" no_file_m d-flex">
                <div className="w-100 text-center">هیچ فایلی وجود ندارد.</div>
                <div className="w-100">
                  <img
                    width="100%"
                    height="100%"
                    src={require("../assest/png/shelf.png")}
                  ></img>
                </div>
              </div>
            ) : (
              <TableContainer>
                <Table
                  className="table_file"
                  aria-labelledby="tableTitle"
                  stickyHeader
                >
                  <EnhancedTableHead
                    numSelected={this.state.selected.length}
                    order={this.state.order}
                    orderBy={this.state.orderBy}
                    onSelectAllClick={this.handleSelectAllClick}
                    onRequestSort={this.handleRequestSort}
                    rowCount={this.state.rows.length}
                  />
                  <TableBody>
                    {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                    {stableSort(
                      this.state.rows,
                      getComparator(this.state.order, this.state.orderBy)
                    ).map((row, index) => {
                      const isItemSelected = this.isSelected(row.id);
                      const labeldby = `transition-modal-title-${index}`;
                      const describby = `transition-modal-description-${index}`;
                      // const customDefaultLabelColor = styleDefObj[row.file_type]
                      //   ? styleDefObj[row.file_type]["labelColor"] : "#777";

                      // const libDefaultGlyphColor =
                      //   defaultStyles[row.file_type] && defaultStyles[row.file_type]["labelColor"];
                      const labelId = `enhanced-table-checkbox-${index}`;
                      const rowid = `row-id${index}`;
                      const styledmenuid = `demo-customized-menu${index}`;
                      return (
                        <TableRow
                          hover
                          onContextMenu={(event) =>
                            this.showContextopen(
                              event,
                              index,
                              row.id,
                              row.file_url,
                              row.name
                            )
                          }
                          onClick={(event) =>
                            this.handleClickT(
                              event,
                              index,
                              row.id,
                              row.is_file,
                              row.file_url,
                              row.name
                            )
                          }
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.id}
                          selected={isItemSelected}
                        >
                           <TableCell
                          onClick={(event) =>  this.handleClickcontextT(event, row.id)}
                          padding="checkbox"
                          
                        >
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            size="small"
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </TableCell>
                          <TableCell padding="checkbox">
                            {row.is_file === true && (
                              <div className="file_icons_m">
                                <FileIcon
                                  extension={row.file_type}
                                  {...defaultStyles[row.file_type]}
                                  // {...styleDefObj[row.file_type]}
                                />
                              </div>
                            )}
                            {row.is_file === false && (
                              <FolderIcon
                                fontSize="large"
                                sx={{ color: "#FAD165", marginLeft: "2px" }}
                              />
                            )}
                          </TableCell>
                          <TableCell
                            align="right"
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                            sx={{ fontWeight: "400", color: "#404040" }}
                          >
                            {row.is_file === true && (
                              <div
                                className="d-flex"
                                style={{
                                  justifyContent: "flex-start",
                                  alignContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    marginRight: "5px",
                                    marginTop: "5px",
                                  }}
                                >
                                  <a
                                    className="links"
                            
                                    target="_blank"
                                  >
                                    {this.shortname(row.name, 15)}
                                  </a>
                                </div>
                              </div>
                            )}
                            {row.is_file === false && (
                              <a className="links" target="_blank">
                                {this.shortname(row.name, 15)}
                              </a>
                            )}
                          </TableCell>
                          <TableCell
                            align="right"
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                            sx={{ fontWeight: "400", color: "#404040" }}
                          >
                            {row.favorite.length > 0 && (
                              <IconButton
                                aria-label="star"
                                onClick={(event) => {
                                  event.preventDefault();
                                  event.stopPropagation();
                                  this.onFavorite(row.id, true);
                                }}
                              >
                                <StarOutlinedIcon
                                  fontSize="small"
                                  sx={{ color: "#FAD165", marginLeft: "2px" }}
                                />
                              </IconButton>
                            )}
                          </TableCell>
                          <TableCell padding="none" align="right">
                            {row.shared && (
                              <Tooltip title="مشترک‌ها " enterDelay={500}>
                                <div>
                                  <IconButton
                                    onClick={(event) =>{
                                      event.preventDefault();
                                      event.stopPropagation();
                                      this.showSharedopen(event, index)}
                                    }
                                  >
                                    <PeopleIcon />
                                  </IconButton>

                                  <Modal
                                    aria-labelledby={labeldby}
                                    aria-describedby={describby}
                                    open={this.state.showshare[index]}
                                    onClose={(event) =>
                                      this.showSharedclose(event, index)
                                    }
                                    closeAfterTransition
                                    BackdropComponent={Backdrop}
                                    BackdropProps={{
                                      timeout: 500,
                                    }}
                                  >
                                    <Fade in={this.state.showshare[index]}>
                                      <Box sx={style}>
                                        <>
                                          <div id="share_table">
                                            لیست افرادی که قابلیت مشاهده را
                                            دارند
                                          </div>
                                          <TableContainer
                                            sx={{ direction: "rtl" }}
                                          >
                                            <Table
                                              sx={{ direction: "rtl" }}
                                              aria-label="customized table"
                                            >
                                              <TableHead
                                                sx={{ direction: "rtl" }}
                                              >
                                                <TableRow
                                                  sx={{ direction: "rtl" }}
                                                >
                                                  <TableCell
                                                    sx={{ textAlign: "right" }}
                                                  >
                                                    <b>نام کاربر</b>
                                                  </TableCell>
                                                  <TableCell
                                                    sx={{ textAlign: "right" }}
                                                  ></TableCell>
                                                </TableRow>
                                              </TableHead>
                                              <TableBody>
                                                {row.shared_folder_details.map(
                                                  (r, index) => (
                                                    <TableRow key={index}  onClick={(event)=>{
                                                      event.stopPropagation();
                                                      event.preventDefault();
                                                    }}>
                                                      <TableCell
                                                        sx={{
                                                          fontWeight: "400",
                                                          color: "#404040",
                                                          textAlign: "right",
                                                        }}
                                                      >
                                                        {r.full_name===""?r.user:r.full_name}
                                                      </TableCell>
                                                      <TableCell
                                                        sx={{
                                                          fontWeight: "400",
                                                          color: "#404040",
                                                          textAlign: "right",
                                                        }}
                                                      >
                                                        <IconButton onClick={(event)=>{
                                                      event.stopPropagation();
                                                      event.preventDefault();
                                                      this.onShare(row.id
                                                      ,"delete_user",r.user,"read")}}   >
                                                          <CloseSharpIcon
                                                            sx={{
                                                              color: "red",
                                                            }}
                                                          ></CloseSharpIcon>
                                                        </IconButton>
                                                      </TableCell>
                                                    </TableRow>
                                                  )
                                                )}
                                                <TableRow  onClick={(event)=>{
                          event.stopPropagation();
                          event.preventDefault();
                        }}>
                                                  <TableCell
                                                    sx={{
                                                      fontWeight: "400",
                                                      color: "#404040",
                                                      textAlign: "right",
                                                    }}
                                                  >
 <ValidationTextField
                          id="outlined-name7"
                          fullWidth
                          label="نام کاربری"
                         onFocus={(event)=>{
                           event.stopPropagation();
                           event.preventDefault();
                         }}
                         onClick={(event)=>{
                          event.stopPropagation();
                          event.preventDefault();
                        }}
                          validations={required}
                          placeholder="نام کاربری"
                          onChange={this.onsharenameChnage}
                          sx={{ marginBottom: "10px" }}
                        />

                                                  </TableCell>
                                                  <TableCell
                                                    sx={{
                                                      fontWeight: "400",
                                                      color: "#404040",
                                                      textAlign: "right",
                                                    }}
                                                  >
                                                    <IconButton onClick={(event)=>{
                                                      event.stopPropagation();
                                                      event.preventDefault();
                                                      this.onShare(row.id
                                                      ,"add_user",this.state.newshared,"read")}}>
                                                      <AddIcon
                                                        sx={{ color: "green" }}
                                                      ></AddIcon>
                                                    </IconButton>
                                                  </TableCell>
                                                </TableRow>
                                              </TableBody>
                                            </Table>
                                          </TableContainer>
                                        </>
                                      </Box>
                                    </Fade>
                                  </Modal>
                                </div>
                              </Tooltip>
                            )}
                          </TableCell>
                   
                          <StyledMenU
                            id={styledmenuid}
                            MenuListProps={{
                              "aria-labelledby": rowid,
                            }}
                            anchorReference="anchorPosition"
                            anchorPosition={
                              this.state.showcontextanchor[index] !== undefined
                                ? {
                                    top: this.state.showcontextanchor[index]
                                      .mouseY,
                                    left: this.state.showcontextanchor[index]
                                      .mouseX,
                                  }
                                : undefined
                            }
                            open={
                              this.state.showcontextanchor[index] !== undefined
                            }
                            onClose={(event) =>
                              this.showContextclose(event, index)
                            }
                          >
                            {row.is_file === true && (
                          
                                <MenuItem   onClick={(event) =>
                            this.downloadfile(row.file_url,row.id,row.name)
                          } sx={{ fontSize: "14px!important" }}>
                                  <StyledIcon
                                    aria-label="Download"
                                    component="span"
                                    sx={{
                                      fontSize: "14px",
                                      color: "#404040!important",
                                      fontWeight: 400,
                                    }}
                                  >
                                    <DownloadIcon
                                      sx={{
                                        width: "25px",
                                        height: "25px",
                                        color: "#404040!important",
                                      }}
                                    />
                                  </StyledIcon>
                                  دریافت
                                </MenuItem>
                             
                            )}
                            {this.x == "Profile" && (
                              <MenuItem
                              // onClick={
                              //   (event) => {
                              //     event.stopPropagation();
                              //   this.openShareModalf()}}
                              >
                                <label
                                  htmlFor="icon-button-file"
                                  style={{
                                    fontSize: "14px",
                                    color: "#404040!important",
                                  }}
                                  onClick={(event) => {
                                    event.stopPropagation();
                                    this.openShareModalf();
                                  }}
                                >
                                  <StyledIcon
                                    aria-label="Share file"
                                    component="span"
                                    onClick={(event) => {
                                      event.stopPropagation();
                                      this.openShareModalf();
                                    }}
                                    sx={{
                                      fontSize: "14px",
                                      color: "#404040!important",
                                      fontWeight: 400,
                                    }}
                                  >
                                    <PersonAddAltOutlinedIcon
                                      sx={{
                                        width: "25px",
                                        height: "25px",
                                        color: "#404040!important",
                                      }}
                                    />
                                  </StyledIcon>
                                  اشتراک‌گذاری
                                </label>
                              </MenuItem>
                            )}
                            {this.x != "Bin" && (
                              <div>
                                <div>
                                  <MenuItem
                                    id="moveButton"
                                    aria-describedby={
                                      this.state.openmove
                                        ? "simple-popover"
                                        : undefined
                                    }
                                    aria-haspopup="true"
                                    // onClick={(event) => {
                                    //   event.stopPropagation();
                                    //   this.setState({
                                    //     anchorE3: event.currentTarget,
                                    //     openmove: true,
                                    //   });
                                    // }}
                                  >
                                    <label
                                      style={{
                                        fontSize: "14px",
                                        color: "#404040!important",
                                      }}
                                      onClick={(event) => {
                                        event.stopPropagation();
                                        this.setState({
                                          anchorE3: event.currentTarget,
                                          openmove: true,
                                        });
                                      }}
                                    >
                                      <StyledIcon
                                        aria-label="Move"
                                        component="span"
                                        sx={{
                                          fontSize: "14px",
                                          color: "#404040!important",
                                          fontWeight: 400,
                                        }}
                                        onClick={(event) => {
                                          event.stopPropagation();
                                          this.setState({
                                            anchorE3: event.currentTarget,
                                            openmove: true,
                                          });
                                        }}
                                      >
                                        <DriveFileMoveOutlinedIcon
                                          sx={{
                                            width: "25px",
                                            height: "25px",
                                            color: "#404040!important",
                                          }}
                                        />
                                      </StyledIcon>
                                      جابجایی
                                    </label>
                                  </MenuItem>
                                </div>
                                {this.movemenu()}
                              </div>
                            )}

                            {this.x == "Bin" && (
                              <MenuItem
                              // onClick={(event) => {
                              //   event.stopPropagation();
                              //   this.Onrestore();
                              // }}
                              >
                                <label
                                  style={{
                                    fontSize: "14px",
                                    color: "#404040!important",
                                  }}
                                  onClick={(event) => {
                                    event.stopPropagation();
                                    this.Onrestore();
                                  }}
                                >
                                  <StyledIcon
                                    aria-label="Restore file"
                                    component="span"
                                    onClick={(event) => {
                                      event.stopPropagation();
                                      this.Onrestore();
                                    }}
                                    sx={{
                                      fontSize: "14px",
                                      color: "#404040!important",
                                      fontWeight: 400,
                                    }}
                                  >
                                    <RestoreIcon
                                      sx={{
                                        width: "25px",
                                        height: "25px",
                                        color: "#404040!important",
                                      }}
                                    />
                                  </StyledIcon>
                                  بازیابی
                                </label>
                              </MenuItem>
                            )}
                            {this.x !== "Favorite" && (
                              <MenuItem
                              // onClick={(event) => {
                              //   event.stopPropagation();
                              //   this.Onrestore();
                              // }}
                              >
                                <label
                                  style={{
                                    fontSize: "14px",
                                    color: "#404040!important",
                                  }}
                                  onClick={(event) => {
                                    event.stopPropagation();
                                    this.onFavoriteToolbar();
                                  }}
                                >
                                  <StyledIcon
                                    aria-label="Restore file"
                                    component="span"
                                    onClick={(event) => {
                                      event.stopPropagation();
                                      this.onFavoriteToolbar();
                                    }}
                                    sx={{
                                      fontSize: "14px",
                                      color: "#404040!important",
                                      fontWeight: 400,
                                    }}
                                  >
                                    <StarOutlinedIcon
                                      sx={{
                                        width: "25px",
                                        height: "25px",
                                        color: "#404040!important",
                                      }}
                                    />
                                  </StyledIcon>
                                  ستاره‌دار‌ کردن
                                </label>
                              </MenuItem>
                            )}
                            {this.x === "Favorite" && (
                              <MenuItem
                              // onClick={(event) => {
                              //   event.stopPropagation();
                              //   this.Onrestore();
                              // }}
                              >
                                <label
                                  style={{
                                    fontSize: "14px",
                                    color: "#404040!important",
                                  }}
                                  onClick={(event) => {
                                    event.stopPropagation();
                                    this.onFavoriteToolbar();
                                  }}
                                >
                                  <StyledIcon
                                    aria-label="Restore file"
                                    component="span"
                                    onClick={(event) => {
                                      event.stopPropagation();
                                      this.onFavoriteToolbar();
                                    }}
                                    sx={{
                                      fontSize: "14px",
                                      color: "#404040!important",
                                      fontWeight: 400,
                                    }}
                                  >
                                    <StarOutlinedIcon
                                      sx={{
                                        width: "25px",
                                        height: "25px",
                                        color: "#404040!important",
                                      }}
                                    />
                                  </StyledIcon>
                                  حذف از ستاره‌دار‌ها
                                </label>
                              </MenuItem>
                            )}
                            {this.x != "Bin" &&
                              this.x != "Shared" &&
                              this.state.selected.length === 1 && (
                                <div>
                                  <MenuItem
                                  //   onClick={(event) => {
                                  //    event.stopPropagation();
                                  //    this.openRenameModalf();
                                  //  }}
                                  >
                                    <label
                                      onClick={(event) => {
                                        event.stopPropagation();
                                        this.openRenameModalf();
                                      }}
                                      style={{ fontSize: "14px" }}
                                    >
                                      <StyledIcon
                                        aria-label="Rename file"
                                        component="span"
                                        sx={{
                                          fontSize: "14px",
                                          color: "#404040!important",
                                          fontWeight: 400,
                                        }}
                                        onClick={(event) => {
                                          event.stopPropagation();
                                          this.openRenameModalf();
                                        }}
                                      >
                                        <DriveFileRenameOutlineIcon
                                          sx={{
                                            width: "25px",
                                            height: "25px",
                                            color: "#404040!important",
                                          }}
                                        />
                                      </StyledIcon>
                                      تغییر نام
                                    </label>
                                  </MenuItem>
                                </div>
                              )}
                              { this.state.selected.length === 1 &&(
                                <MenuItem
                                //   onClick={(event) => {
                                //    event.stopPropagation();
                                //    this.openRenameModalf();
                                //  }}
                                >
                                  <label
                                    onClick={(event) => {
                                      event.stopPropagation();
                                      this.hadnleopenfileinfo();
                                    }}
                                    style={{ fontSize: "14px" }}
                                  >
                                        <StyledIcon
                                    aria-label="Restore file"
                                    component="span"
                                    onClick={(event) => {
                                      event.stopPropagation();
                                      this.hadnleopenfileinfo();
                                    }}
                                    sx={{
                                      fontSize: "14px",
                                      color: "#404040!important",
                                      fontWeight: 400,
                                    }}>
                                 
                  <ListOutlinedIcon />
                </StyledIcon>
                                    اطلاعات فایل
                                  </label>
                                </MenuItem>
                              )
                }
                            {this.x != "Bin" && this.x != "Shared" && (
                              <div>
                                <MenuItem
                                //  onClick={(event) => {
                                //   event.stopPropagation();
                                //   this.onDeleteToolbar();
                                // }}
                                >
                                  <label
                                    onClick={(event) => {
                                      event.stopPropagation();
                                      this.onDeleteToolbar();
                                    }}
                                    style={{
                                      fontSize: "14px",
                                      color: "#404040!important",
                                    }}
                                  >
                                    <StyledIcon
                                      aria-label="Delete"
                                      component="span"
                                      sx={{
                                        fontSize: "14px",
                                        color: "#404040!important",
                                        fontWeight: 400,
                                      }}
                                      onClick={(event) => {
                                        event.stopPropagation();
                                        this.onDeleteToolbar();
                                      }}
                                    >
                                      <DeleteIcon
                                        sx={{
                                          width: "25px",
                                          height: "25px",
                                          color: "#404040!important",
                                        }}
                                      />
                                    </StyledIcon>
                                    حذف
                                  </label>
                                </MenuItem>
                              </div>
                            )}
                          </StyledMenU>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </div>
        </div>

        </Main>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              direction: "rtl",
            },
            "& .MuiTypography-root": {
              textAlign: "right",
              color: "#404040",
              fontWeight: 400,
            },
          }}
          variant="persistent"
          anchor="right"
          open={this.state.open}
        >
          <DrawerHeader sx={{direction:"ltr"}}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronRightIcon />
            </IconButton>
          </DrawerHeader>

          <List sx={{direction:"rtl"}}>
            <ListItem key={"فضای من"} disablePadding>
              <ListItemButton onClick={this.onDriveClick}>
                <ListItemIcon>
                  <SdStorageOutlinedIcon
                    sx={{
                      width: "25px",
                      height: "25px",
                      marginLeft: "4%",
                      marginRight: "7%",
                      color: "#404040",
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={"فضای من"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={"اشتراکی‌ها"} disablePadding>
              <ListItemButton onClick={this.onShareClick}>
                <ListItemIcon>
                  <PeopleAltOutlinedIcon
                    sx={{
                      width: "25px",
                      height: "25px",
                      marginLeft: "4%",
                      marginRight: "7%",
                      color: "#404040",
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={"اشتراکی‌ها"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={" ستاره‌دار"} disablePadding>
              <ListItemButton onClick={this.onFavoriteClick}>
                <ListItemIcon>
                  <StarBorderOutlinedIcon
                    sx={{
                      width: "25px",
                      height: "25px",
                      marginLeft: "4%",
                      marginRight: "7%",
                      color: "#404040",
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={" ستاره‌دار"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={" سطل زباله"} disablePadding>
              <ListItemButton onClick={this.onBinClick}>
                <ListItemIcon>
                  <DeleteOutlineOutlinedIcon
                    sx={{
                      width: "25px",
                      height: "25px",
                      marginLeft: "4%",
                      marginRight: "7%",
                      color: "#404040",
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={" سطل زباله"} />
              </ListItemButton>
            </ListItem>
            <ListItem onClick={
              (event) => {
              this.handleOpenModal(event)}} key={"نمایه"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <Avatar
              sx={(this.state.profile_src==="" || this.user.image_url==="")?{
                width: "30px",
                height: "30px",
                marginTop: "0.5%",
                // paddingLeft:"3.5%"
              }:{
                width: "30px",
                height: "30px",
                marginTop: "0.5%",
              }
            }
              
                
                src={this.user.image_url}
              />
                </ListItemIcon>
                <ListItemText primary={"نمایه"} />
              </ListItemButton>
            </ListItem>
            <Modal
                  aria-labeledby="transition-modal-title1"
                  aria-describedby="transition-modal-description1"
                  role="dialog"
                  disableAutoFocus={true}
                  open={this.state.openmodal}
                  onClose={
                    (event) => {
                      this.handleCloseModal(event)}}
                  // closeAfterTransition
                  // BackdropComponent={Backdrop}
                  // BackdropProps={{
                  //   timeout: 500,
                  // }}
                >
                    
                  <Fade disableAutoFocus={true} in={this.state.openmodal}>
                  
                    <Box disableAutoFocus={true} className="box_style_m">
                     <div onMouseEnter={(event)=>{
                       this.setProfile_img(true)
                     
                      }} 
                      onMouseLeave={(event)=>{
                        this.setProfile_img(false)
                      }}
                      className="avatar">  
                    
{this.state.profile_img?(
 <Avatar
 alt={this.user.first_name}
 src={this.state.profile_src}
 sx={{ width: 60, height: 60, marginBottom: "3%", marginLeft: "0.5%" }}
 
>

<div>
    <label>
          <EditIcon/>
          <input style={{display:"none"}}  onChange={(event)=>{
                            this.user.image_url=event.target.files[0]
                            this.src_creator(this.user.image_url)
                            this.handleOpenModal(event)
                            }} type="file" name="file"  >
                             
                              </input>
    </label>

                              </div>
                              </Avatar>
                              ):( <Avatar
  alt={this.user.first_name}
  src={this.user.image_url===""?this.src_creator:this.user.image_url}
  sx={{ width: 60, height: 60, marginBottom: "3%", marginLeft: "0.5%" }}
  
>
  </Avatar>)
                            }  
  
                              
 
    
                     
                       
</div>
                        <ValidationTextField
                          id="outlined-name1"
                          fullWidth
                          key={0}
                          // value={this.state.FolderName}
                          autoFocus={false}
                          variant="outlined"
                          label="نام "
                          disabled={this.user.first_name!==""}
                          placeholder={this.user.first_name}
                          value={this.user.first_name
                            !=""?this.user.first_name:undefined}
                          onChange={(event)=>{
                             this.user.first_name=event.target.value 

                          }}
                          sx={{ marginBottom: "10px" }}
                        />
                          <ValidationTextField
                          id="outlined-name2"
                          fullWidth
                          key={1}
                          // value={this.state.FolderName}
                          autoFocus={false}
                          variant="outlined"
                          label="نام خانوادگی"
                          
                          disabled={this.user.last_name!==""}
                          placeholder={this.user.last_name}
                          value={this.user.last_name
                            !=""?this.user.last_name:undefined}
                          sx={{ marginBottom: "10px" }}
                          onChange={(event)=>{
                            this.user.last_name=event.target.value 

                         }}
                        />
                          <ValidationTextField
                          id="outlined-name3"
                          fullWidth
                          key={5}
                          // value={this.state.FolderName}
                          autoFocus={false}
                          variant="outlined"
                          label="نام نمایشی"
                          
                          disabled={this.user.full_name!==""}
                          placeholder={this.user.full_name}
                          value={this.user.full_name
                            !=""?this.user.full_name:undefined}
                          onChange={(event)=>{
                            this.user.full_name=event.target.value 

                         }}
                          sx={{ marginBottom: "10px" }}
                        />
                        
                        <ValidationTextField
                          id="outlined-name4"
                          fullWidth
                          key={3}
                          // value={this.state.FolderName}
                          autoFocus={false}
                          variant="outlined"
                          label="نام کاربری"
                          
                         
                          disabled={this.user.username!==""}
                          placeholder={this.user.username}
                          value={this.user.username
                            !=""?this.user.username:undefined}
                          onChange={(event)=>{
                            this.user.username=event.target.value 

                         }}
                          sx={{ marginBottom: "10px" }}
                        />
                        <ValidationTextField
                          id="outlined-name5"
                          fullWidth
                          key={4}
                          // value={this.state.FolderName}
                          autoFocus={false}
                          variant="outlined"
                          label="ایمیل "
                          disabled={this.user.email!==""}
                          placeholder={this.user.email}
                          value={this.user.email
                            !=""?this.user.email:undefined}
                         
                          onChange={(event)=>{
                            this.user.email=event.target.value 

                         }}
                          sx={{ marginBottom: "10px" }}
                        />
                         
                         <Typography
                        id="transition-modal-description1"
                        sx={{ mt: 2 }}
                      >
                        <div className="form-group">
                          <button
                            variant="contained"
                            className="btn btn-primary btn-block"
                            onClick={this.photo_upload}
                          >
                            ثبت
                           تصویر
                          </button>
                        </div>
                      </Typography>
                      <Typography
                        id="transition-modal-description1"
                        sx={{ mt: 2 }}
                      >
                        <div className="form-group">
                          <button
                            variant="contained"
                            className="btn btn-danger button-filled btn-block"
                            onClick={this.photo_delete}
                          >
                     حذف تصویر
                          </button>
                        </div>
                      </Typography>            
                      <Typography
                        id="transition-modal-description1"
                        sx={{ mt: 2 }}
                      >
                        <div className="form-group">
                          <button
                            variant="contained"
                            className="btn btn-primary btn-block"
                            onClick={this.handlesumbit}
                          >
                            ثبت
                            اطلاعات
                          </button>
                        </div>
                      </Typography>
                        
                    </Box>
                  </Fade>
                </Modal>
                <ListItem key={" تغییر رمزعبور "} disablePadding>
              <ListItemButton onClick={
              (event) => {
              this.handleopenpass(event)}}>
                <ListItemIcon>
                  <VpnKeyRoundedIcon
                    sx={{
                      width: "25px",
                      height: "25px",
                      marginLeft: "4%",
                      marginRight: "7%",
                      color: "#404040",
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={" تغییر رمزعبور"} />
              </ListItemButton>
            </ListItem>
            <Modal
                  aria-labeledby="transition-modal-title10"
                  aria-describedby="transition-modal-description10"
                  role="dialog"
                 
                  open={this.state.openpass}
                  onClose={
                    (event) => {
                      this.hanleclosepass(event)}}
              
               
                >
                    
                  <Fade  in={this.state.openpass}>
                  
                    <Box className="box_style_pass">
             
                        <ValidationTextField
                          id="outlined-name10"
                          fullWidth
                          key={0}
                          // value={this.state.FolderName}
                          inputProps={{ tabIndex: "1 " }}
                          variant="outlined"
                          label="رمزعبور فعلی "
                          autoFocus={false} 
                          type="password"
                          onChange={(event)=>{
                            this.setState({oldpass:event.target.value})

                          }}
                          sx={{ marginBottom: "10px" }}
                        />
                          <ValidationTextField
                          id="outlined-name20"
                          fullWidth
                          key={1}
                          type="password"
                          // value={this.state.FolderName}
                          inputProps={{ tabIndex: "2" }}
                          variant="outlined"
                          label="رمزعبور جدید"
                          autoFocus={false}
                         
                        
                          
                          sx={{ marginBottom: "10px" }}
                          onChange={(event)=>{
                            this.setState({newpass:event.target.value})


                         }}
                        />
                          <ValidationTextField
                          id="outlined-name30"
                          fullWidth
                          key={5}
                          type="password"
                          // value={this.state.FolderName}
                          inputProps={{ tabIndex: "3" }}
                          variant="outlined"
                          label="تکرار رمز"
                          autoFocus={false}   
                         
                          onChange={(event)=>{
                           this.setState({confpass:event.target.value})

                         }}
                          sx={{ marginBottom: "10px" }}
                        />
                        
                         <Typography
                        id="transition-modal-description1"
                        sx={{ mt: 2 }}
                      >
                        <div className="form-group">
                          <button
                            variant="contained"
                            className="btn btn-primary btn-block"
                            onClick={(event)=> {
                              this.change_pass(event)
                            }}
                          >
                            تغییر رمز
                          </button>
                        </div>
                      </Typography>
                 
                    </Box>
                  </Fade>
                </Modal>

            <ListItem key={"خروج"} disablePadding>
              <ListItemButton onClick={this.logoutUser}>
                <ListItemIcon>
                  <LogoutRoundedIcon
                    sx={{
                      width: "25px",
                      height: "25px",
                      marginLeft: "4%",
                      marginRight: "7%",
                      color: "#404040",
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={"خروج"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
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
      </Box>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Profile_mobileFa);
