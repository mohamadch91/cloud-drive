import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import UserService, { ADD_URL, GET_URL, Path } from "../services/user.service";
import AddIcon from '@mui/icons-material/Add';
// import React from 'react';
import "./cmp_css/middle.css";
import { Tooltip } from "@mui/material";
import { history } from "../helpers/history";
import IconButton from "@mui/material/IconButton";
import PeopleIcon from "@mui/icons-material/People";
import RestoreIcon from "@mui/icons-material/Restore";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuItem from "@mui/material/MenuItem";
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
  shared_folder_details
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

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "name",
    align: true,
  },
  {
    id: "shared",
    numeric: false,
    disablePadding: true,
    label: "",
    align: true,
  },
  {
    id: "owner",
    numeric: false,
    disablePadding: false,
    label: "Owner",
    align: false,
  },
  {
    id: "updated_at",
    numeric: false,
    disablePadding: false,
    label: "modified",
    align: false,
  },
  {
    id: "file_size",
    numeric: false,
    disablePadding: false,
    label: "Size",
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
    <TableHead stickyHeader sx={{ marginTop: "2px", paddingTop: "2px",BackgroundColor:"#F1F4FB" }}>
      <TableRow sx={{BackgroundColor:"#F1F4FB"}}>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align === true ? "left" : "right"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
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

class Profile_mobile extends Component {
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
      selectedFile: null,
      content: "",
      anchorE1: null,
      link: "",
      FolderName: "",
      FolderParent: null,
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
      Searchinput: "",
    };
  }
  timer = 0;
  delay = 200;
  prevent = false;

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
    this.setState({ order: isAsc ? "desc" : "asc" });
    this.setState({ orderBy: property });
  };
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
  openviewModal = () => {
    const file = this.state.rows.find(
      (row) => row.id == this.state.selected[0]
    );
    const file_url = file.file_url;
    UserService.getExcel(file_url).then(
      (response) => {
        // const byteCharacters = atob(response.data);
        // const byteNumbers = new Array(byteCharacters.length);
        // for (let i = 0; i < byteCharacters.length; i++) {
        //   byteNumbers[i] = byteCharacters.charCodeAt(i);
        // }
        // const byteArray = new Uint8Array(byteNumbers);
        // const blob = new Blob([byteArray], { type: "audio/mp3" });
        // const reader = new FileReader();
        // reader.onload = () => {
        //   const data = blob;
        //   const workbook = XLSX.read(data, { type: "array" });
        //   const sheetName = workbook.SheetNames[0];
        //   const worksheet = workbook.Sheets[sheetName];
        //   const json = XLSX.utils.sheet_to_json(worksheet);
        //   console.log(json);
        // };
        // reader.readAsArrayBuffer(response.data);
      },
      (error) => {
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

    this.setState({ viewmodal: true });
  };
  closeviewModal = () => {
    this.setState({ viewmodal: false });
  };
  handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = this.state.rows.map((n) => n.id);
      this.setState({ selected: newSelecteds });

      return;
    }
    this.setState({ selected: [] });
  };

  handleClickT = (event, id) => {
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

  isSelected = (id) => this.state.selected.indexOf(id) !== -1;

  handleOpenm = () => {
    this.setState({ openm: true, link: "" });
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
    this.setState({ openFileModal: true, selectedFile: null });
  };
  handleCloseFileM = () => {
    this.setState({ openFileModal: false });
    this.handleClose();
  };
  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  UpdateHelper = (response) => {
    var row = [];

    for (let i = 0; i < response.data.length; i++) {
      let x = 0;
      if (response.data[i].is_file == true) {
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
      }
      let z = response.data[i].updated_at.split("T")[0];
      let y = response.data[i].updated_at.split("T")[0];
      if (x === 0) {
        x = x.toString();
      }
      row.push(
        createData(
          response.data[i].id,
          response.data[i].owner,
          response.data[i].is_file,
          response.data[i].file_type,
          x,
          response.data[i].file_url,
          y,
          z,
          response.data[i].name,
          response.data[i].parent,
          response.data[i].shared,
          response.data[i].shared_with,
          response.data[i].shared_folder_details
        )
      );
    }

    this.setState({ rows: [] });
    this.setState({ rows: row });
  };
  updaterows(num) {
    //wait for the data to load set time out
    num = num || 0;

    let x = localStorage.getItem("Page");
    let y = localStorage.getItem("search_addres");
    let z = localStorage.getItem("search");
    if (x === "Profile") {
      if (z === "true") {
        let address = "?q=" + y;
        if (this.state.FolderParent != null) {
          address = address + "&folder=" + this.state.FolderParent;
        }
        UserService.Search(address).then(
          (response) => {
            // console.log(response);
            this.UpdateHelper(response);
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
      } else {
        UserService.getUserFiles().then(
          (response) => {
            this.UpdateHelper(response);
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
    } else if (x === "Bin") {
      UserService.getbinContent().then(
        (response) => {
          this.UpdateHelper(response);
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
    } else if (x === "Shared") {
      UserService.getSharedFiles().then(
        (response) => {
          this.UpdateHelper(response);
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
    this.setState({ selectedFile: event.target.files[0] });
  };
  onLinkChange = (e) => {
    // Update the state
    this.setState({ link: e.target.value });
  };
  onFolderNameChange = (e) => {
    // Update the state
    this.setState({ FolderName: e.target.value });
  };
  onFileUploadURL = () => {
    const data = { file_url: this.state.link };
    this.handleClose1();
    this.handleClosem();
    UserService.uploadUrlFile(data).then(
      (response) => {
        this.updaterows();
        this.updateMoveRow();
        // window.updateStorage();
        this.alerthandle("Upload with link succesful", "success");
      },
      (error) => {
        this.alerthandle("Upload with link failed", "error");
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
      UserService.changepath(way);
      this.updaterows();
    }
  };
  HeaderFolderClick = (id, name) => {
    if (name === "My Drive" || name === "Drive Bin" || name === "Shared With me") {
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
      for (let j = lentgh - 1; j > index; j--) {
        newFolders.pop();
      }
      localStorage.setItem("Folders", JSON.stringify(newFolders));
    }
    this.updaterows();
  };
  onFileUpload = () => {
    if(this.state.selectedFile===null){
      this.alerthandle("Please select file","error");
    }
    else{
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
  this.handleCloseFileM();
  this.setState({loadfile:true,source:source,snackopen:true,type:"info"})
    UserService.uploadUserFile(formData,onUploadProgress,source).then(
     
      (response) => {
       
        if(!response.status){
          this.alerthandle("Upload failed","error");
          this.setState({loadfile:false,source:null});
        }
        else{
        this.updaterows();
        this.updateMoveRow();
        // window.updateStorage();
        this.setState({loadfile:false,source:null});
        this.alerthandle("Upload succesful","success");
        }
      },
      (error) => {
        this.setState({loadfile:false,source:null});
        this.alerthandle("Upload failed","error");
        this.updaterows();
        // window.updateStorage();
        
      }
    )
    .catch(error => {
      this.updaterows();
      // window.updateStorage();
  });
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
        this.alerthandle("Folder created succesfully", "success");
      },
      (error) => {
        this.alerthandle("Folder creation failed", "error");
      }
    );
  };
  onRename = (id, name) => {
    const data = { f_id: id, new_name: name };
    this.closeRenameModal();
    UserService.Rename(data).then(
      (response) => {
        this.updaterows();
        this.updateMoveRow();
        this.setState({ selected: [] });
        this.alerthandle("Rename succesful", "success");
      },
      (error) => {
        this.alerthandle("Rename failed", "error");
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
        this.alerthandle("Restore succesful", "success");
      },
      (error) => {
        this.alerthandle("Restore failed", "error");
      }
    );
  };
  onDelete = (id) => {
    UserService.Delete(id).then(
      (response) => {
        this.updaterows();
        this.updateMoveRow();
        this.setState({ selected: [] });
        this.alerthandle("Delete succesful", "success");
      },
      (error) => {
        this.alerthandle("Delete failed", "error");
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
        this.alerthandle("Share succesful", "success");
      },
      (error) => {
        this.alerthandle("Share failed", "error");
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
        this.alerthandle("Failed to get files", "error");
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
       this.alerthandle("Failed to create folder", "error");
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
        this.alerthandle("Move succesful", "success");
      },
      (error) => {
        this.alerthandle("Move failed", "error");
      }
    );
  };
  moveclick = () => {
    this.state.selected.forEach((item) => {
      let file = this.state.rows.filter((obj) => obj.id === item);
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
          vertical: "top",
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
        sx={{ width: "300px", height: "350px" }}
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
              width: 5,
              height: 5,
              top: -1,
              transform: "rotate(45deg)",
              left: "calc(50% - 6px)",
            },
          }}
        />
        <Card sx={{ minWidth: 200, minHeight: 350 }}>
          <CardHeader
            sx={{
              backgroundColor: "#F1F1F1",
              height: "25px",
              textWrapper: {
                height: "25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              },
            }}
            avatar={
              this.state.currentparent != null ? (
                <IconButton onClick={this.folderBack}>
                  <ArrowBackIcon />
                </IconButton>
              ) : (
                undefined
              )
            }
            action={
              <IconButton
                sx={{ marginTop: "-5px" }}
                aria-label="close"
                onClick={this.handleClosemove}
              >
                <CloseSharpIcon />
              </IconButton>
            }
            title={
              this.state.currentparent == null
                ? "My Drive"
                : this.state.currentparent.name
            }
            // subheader="Move to folder"
          />

          <CardContent>
            <TableContainer>
              <Table aria-labelledby="tableTitle1">
                <TableBody>
                  {this.state.moveRow.length == 0 && (
                    <Box style={boxStylemove}>
                      <span className="w-100  text-black font-weight-bold text-center h1 fs-1 ">
                        There is no file
                      </span>
                    </Box>
                  )}
                  {this.state.moveRow.map((row, index) => {
                    const isItemSelected = this.isSelectedfolder(row.id);
                    const disabled = row.is_file;
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
                        selected={isItemSelected}
                      >
                        <TableCell>
                          {row.is_file === true && row.file_type === ".pdf" && (
                            <PictureAsPdfOutlinedIcon
                              size="small"
                              sx={{ color: "#F70000", marginRight: "5px" }}
                            />
                          )}
                          {row.is_file === false && (
                            <FolderIcon
                              size="small"
                              sx={{ color: "#FAD165", marginRight: "5px" }}
                            />
                          )}
                          {row.is_file === true && row.file_type === ".mp3" && (
                            <LibraryMusicIcon
                              size="small"
                              sx={{ color: "#82C4E4", marginRight: "5px" }}
                            />
                          )}
                          {row.is_file === true && row.file_type === ".zip" && (
                            <FolderZipIcon
                              size="small"
                              sx={{ color: "#82C4E4", marginRight: "5px" }}
                            />
                          )}
                          {row.is_file === true &&
                            (row.file_type === ".xlsx" ||
                              row.file_type === ".xls") && (
                              <ListAltIcon
                                size="small"
                                sx={{ color: "#007E3F", marginRight: "5px" }}
                              />
                            )}
                          {row.is_file === true &&
                            (row.file_type === ".docx" ||
                              row.file_type === ".odt") && (
                              <ArticleIcon
                                size="small"
                                sx={{ color: "#007FFF", marginRight: "5px" }}
                              />
                            )}
                          {((row.is_file === true &&
                            row.file_type === ".json") ||
                            row.file_type === ".jpeg" ||
                            row.file_type === ".png" ||
                            row.file_type === ".jpg") && (
                            <ImageIcon
                              size="small"
                              sx={{ color: "#FAD165", marginRight: "5px" }}
                            />
                          )}
                          {((row.is_file === true &&
                            row.file_type === ".mp4") ||
                            row.file_type === ".mkv" ||
                            row.file_type === ".flv") && (
                            <VideoLibraryIcon
                              size="small"
                              sx={{ color: "#FAD165", marginRight: "5px" }}
                            />
                          )}
                          {row.is_file === true && (
                            <a
                              className="links"
                              href={row.file_url}
                              target="_blank"
                            >
                              {row.name}
                            </a>
                          )}
                          {row.is_file === false && (
                            <a className="links" target="_blank">
                              {row.name}
                            </a>
                          )}
                        </TableCell>
                        <TableCell
                          component="td"
                          id={labelId}
                          scope="row"
                          padding="none"
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
                                <ArrowForwardIosIcon />
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
          <CardActions disableSpacing>
            <Tooltip title="Create Folder" enterDelay={500}>
              <div style={{ flex: "1 1 70%" }}>
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
                          label="Folder name"
                          value={this.state.NewFM}
                          validations={required}
                          placeholder="new File name"
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
                            Create Folder
                          </button>
                        </div>
                      </Typography>
                    </Box>
                  </Fade>
                </Modal>
              </div>
            </Tooltip>

            <button
              className="btn btn-primary"
              onClick={this.moveclick}
              size="medium"
            >
              Move Here
            </button>
          </CardActions>
        </Card>
      </Popover>
    );
  };
  movebutton = () => {
    return (
      <Tooltip title="Move To" enterDelay={500}>
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
    if(!this.state.openmove){
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
      this.onDelete(file[0].id);
    });
  };
  Onrestore = () => {
    this.state.selected.forEach((item) => {
      let file = this.state.rows.filter((obj) => obj.id === item);
      this.onRestore(file[0].id);
    });
  };

  Onshare = () => {
    this.state.selected.forEach((item) => {
      let file = this.state.rows.filter((obj) => obj.id === item);
      this.onShare(
        file[0].id,
        this.state.operation,
        this.state.shareName,
        this.state.permission
      );
    });
    this.setState({ openShare: false });
  };
  Onrename = () => {
    let file = this.state.rows.filter(
      (obj) => obj.id === this.state.selected[0]
    );

    this.onRename(file[0].id, this.state.NewFileName);
    this.setState({ open1: false });
  };
  openRenameModalf = () => {
    this.setState({ open1: true, NewFileName: "" });
  };

  openShareModalf = () => {
    this.setState({ openShare: true, shareName: "" });
  };
  closeRenameModal = () => {
    this.setState({ open1: false });
  };
  closeShareModal = () => {
    this.setState({ openShare: false });
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
    this.updaterows();
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
        <MenuItem disableRipple>
          <label style={{ fontSize: "10px" }}>
            <StyledIcon
              aria-label="upload picture"
              component="span"
              sx={{ fontSize: "14px" }}
              onClick={this.handleOpenFM}
            >
              <CreateNewFolderOutlinedIcon
                sx={{ width: "25px", height: "25px" }}
              />
              Add Folder
            </StyledIcon>

            <Modal
              aria-labelledby="transition-modal-title1"
              aria-describedby="transition-modal-description1"
              open={this.state.openFM}
              onClose={this.handleCloseFM}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={this.state.openFM}>
                <Box sx={style}>
                  <Typography
                    id="transition-modal-title1"
                    variant="h5"
                    component="h3"
                  >
                    <ValidationTextField
                      id="outlined-name1"
                      fullWidth
                      label="Folder Name"
                      validations={[required]}
                      placeholder="Folder Name"
                      onChange={this.onFolderNameChange}
                      sx={{ marginBottom: "10px" }}
                    />
                  </Typography>
                  <Typography id="transition-modal-description1" sx={{ mt: 2 }}>
                    <div className="form-group">
                      <button
                        variant="contained"
                        className="btn btn-primary btn-block"
                        onClick={this.onFolderCreate}
                      >
                        Add Folder
                      </button>
                    </div>
                  </Typography>
                </Box>
              </Fade>
            </Modal>
          </label>
        </MenuItem>
        <Divider />
        <MenuItem disableRipple>
          <label style={{ fontSize: "10px" }}>
            <StyledIcon
              aria-label="upload file"
              component="span"
              sx={{ fontSize: "14px" }}
              onClick={this.handleOpenFileM}
            >
              <UploadFileOutlinedIcon sx={{ width: "25px", height: "25px" }} />
              File Upload
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
                <Box sx={style}>
                  <Typography id="transition-modal-description3" sx={{ mt: 2 }}>
                    <div className="form-group">
                      <label htmlFor="icon-button-file">
                        <IconButton
                          aria-label="upload picture"
                          component="span"
                          sx={{ fontSize: "14px" }}
                        >
                          <UploadFileOutlinedIcon
                            sx={{ width: "25px", height: "25px" }}
                          />
                          select File
                          <Input
                            id="icon-button-file"
                            validations={[required]}
                            onChange={this.onFileChange}
                            type="file"
                          />
                        </IconButton>
                      </label>
                      <button
                        variant="contained"
                        className="btn btn-primary btn-block"
                        onClick={this.onFileUpload}
                      >
                        Add File
                      </button>
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
              <UploadFileOutlinedIcon sx={{ width: "25px", height: "25px" }} />
              Open Upload with link
            </StyledIcon>
            <Modal
              aria-labelledby="transition-modal-title5"
              aria-describedby="transition-modal-description5"
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
                    id="transition-modal-title5"
                    variant="h6"
                    component="h2"
                  >
                    <ValidationTextField
                      id="outlined-name"
                      fullWidth
                      label="url"
                      defaultValue=""
                      validations={[required]}
                      placeholder="link"
                      onChange={this.onLinkChange}
                      sx={{ marginBottom: "10px" }}
                    />
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    <div className="form-group">
                      <button
                        variant="contained"
                        className="btn btn-primary btn-block"
                        onClick={this.onFileUploadURL}
                      >
                        Upload
                      </button>
                    </div>
                  </Typography>
                </Box>
              </Fade>
            </Modal>
          </label>
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={this.handleClose1} disableRipple>
          Terms and policy
        </MenuItem>
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
          variant="contained"
          disableElevation
          onClick={this.handleClick1}
          className="w-100"
          endIcon={<ArrowDropDownOutlinedIcon />}
        >
          {name}
        </ColorButton>
        {this.lastpathMenu()}
      </div>
    );
  };
  pathButton = (name, file_id) => {
    return (
      <div className=" ">
        <ColorButton
          className="w-100"
          onClick={() => this.HeaderFolderClick(file_id, name)}
          endIcon={<ArrowForwardIosIcon />}
        >
          {name}
        </ColorButton>
      </div>
    );
  };

  DesplayPath = () => {
    const Folders = JSON.parse(localStorage.getItem("Folders"));
    if (Folders.length == 0) {
      return (
        <div style={{ display: "flex", flex: "1 1 40%" }}>
          {this.x == "Bin" && this.lastpathButton("Drive Bin")}
          {this.x == "Profile" && this.lastpathButton("My Drive")}
          {this.x == "Shared" && this.lastpathButton("Shared With me")}
        </div>
      );
    } else if (Folders.length > 0 && Folders.length < 2) {
      return (
        <div style={{ display: "flex", flex: "1 1 40%" }}>
          {this.x == "Bin" && this.pathButton("Drive Bin", "")}
          {this.x == "Profile" && this.pathButton("My Drive", "")}
          {this.x == "Shared" && this.pathButton("Shared With me", "")}

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
        <div style={{ display: "flex", flex: "1 1 40%" }}>
        
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
              endIcon={<ArrowForwardIosIcon />}
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
            
           
              {this.x == "Bin" && (<MenuItem
                    onClick={() => this.HeaderFolderClick("","Drive Bin")}
                  >
                    <FolderIcon />
                    Drive Bin
                  </MenuItem>)}
          {this.x == "Profile" && (<MenuItem
                    onClick={() => this.HeaderFolderClick("","My Drive")}
                  >
                    <FolderIcon />
                    My Drive
                  </MenuItem>)}
          {this.x == "Shared" && (<MenuItem
                    onClick={() => this.HeaderFolderClick("","Shared With me")}
                  >
                    <FolderIcon />
                    Shared With me
                  </MenuItem>)}
         
            {Folders.map((item, index) => {
              if (index == Folders.length - 1) {
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
          
          {this.lastpathButton(Folders[Folders.length - 1].name)}
        </div>
      );
    }
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
    this.getx();
    UserService.changepath("");
    localStorage.setItem("search", false);
    this.updaterows();
    this.emptyselected();
    // Change_();
  };
  onShareClick = () => {
    localStorage.setItem("Page", "Shared");
    localStorage.setItem("Path", "");
    localStorage.setItem("search", false);
    localStorage.setItem("Folders", JSON.stringify([]));
    this.getx();
    UserService.changepath("");
    this.updaterows();

    this.emptyselected();
    // Change_();
  };
  render() {
    const { user: currentUser } = this.props;
    if (!currentUser) {
      return <Redirect to="/login" />;
    }

    return (
      <div
        className="h-100"
        style={{
          backgroundColor: "#F1F4FB",
          overflow: "visible",
          overflowX: "scroll",
          overflowY: "scroll!important",
        }}
      >
        <div
          className="Header_search w-75  text-center d-flex justify-content-center   mt-1"
          id="search"
          style={{ border: "1px solid black" }}
        >
          <Tooltip title="Search" enterDelay={500} size="small">
            <IconButton
              aria-label="serach"
              sx={{
                width: "40px",
                height: "40px",
                marginTop: "0.5%",
                marginLeft: "0.5%",
              }}
              onClick={this.handleSearch}
            >
              <SearchIcon sx={{ width: "20px", height: "20px" }} />
            </IconButton>
          </Tooltip>
          {/* know on focus on element */}

          <input
            type="text"
            placeholder="Search in Drive"
            style={{
              width: "300px",
              height: "100%",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              fontSize: "12px",
              lineHeight: "14px",
              marginTop: "3%",
              color: "#5f6368",
            }}
            onFocus={this.Search}
            onChange={this.changeInput}
            onBlur={this.Search_out}
            onKeyPress={(e)=>{
              
              if(e.key==="Enter"){
                this.handleSearch();
              }
            }}
          />
          <Tooltip title="cloase search" enterDelay={10} size="small">
            <IconButton
              id="icon_tune"
              aria-label="serach"
              sx={{ marginRight: "10%" }}
              onClick={this.closeSearch}
            >
              <CloseSharpIcon />
            </IconButton>
          </Tooltip>
        </div>
        
        <div
          className="Middle_body_table mt-1 ml-2"
          style={{
            //   marginLeft: "10px",
            overflow: "visible",
            overflowX: "scroll",
            overflowY: "scroll",
            width: window.screen.width-10+"px",
            height: window.screen.height>950? "700px" : (window.screen.height-170)+"px",
            color: "#606469",
          }}
        >
          {this.state.rows.length == 0 ? (
            <Box style={boxStyle}>
              <span className="w-100  text-black font-weight-bold text-center h1 fs-1 ">
                There is no file
              </span>
            </Box>
          ) : (
            <TableContainer
              sx={{
                overflow: "visible",
                overflowX: "scroll",
                overflowY: "scroll",
              }}
            >
              <Table
                sx={{ minWidth: 750 }}
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

                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) =>
                          this.FolderClick(
                            event,
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
                          onClick={(event) => this.handleClickT(event, row.id)}
                          padding="checkbox"
                        >
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.is_file === true && row.file_type === ".pdf" && (
                            <PictureAsPdfOutlinedIcon
                              size="small"
                              sx={{ color: "#F70000", marginRight: "5px" }}
                            />
                          )}
                          {row.is_file === false && (
                            <FolderIcon
                              size="small"
                              sx={{ color: "#FAD165", marginRight: "5px" }}
                            />
                          )}
                          {row.is_file === true && row.file_type === ".mp3" && (
                            <LibraryMusicIcon
                              size="small"
                              sx={{ color: "#82C4E4", marginRight: "5px" }}
                            />
                          )}
                          {row.is_file === true && row.file_type === ".zip" && (
                            <FolderZipIcon
                              size="small"
                              sx={{ color: "#82C4E4", marginRight: "5px" }}
                            />
                          )}
                          {row.is_file === true &&
                            (row.file_type === ".xlsx" ||
                              row.file_type === ".xls") && (
                              <ListAltIcon
                                size="small"
                                sx={{ color: "#007E3F", marginRight: "5px" }}
                              />
                            )}
                          {row.is_file === true &&
                            (row.file_type === ".docx" ||
                              row.file_type === ".odt") && (
                              <ArticleIcon
                                size="small"
                                sx={{ color: "#007FFF", marginRight: "5px" }}
                              />
                            )}
                          {((row.is_file === true &&
                            row.file_type === ".json") ||
                            row.file_type === ".jpeg" ||
                            row.file_type === ".png" ||
                            row.file_type === ".jpg") && (
                            <ImageIcon
                              size="small"
                              sx={{ color: "#FAD165", marginRight: "5px" }}
                            />
                          )}
                          {((row.is_file === true &&
                            row.file_type === ".mp4") ||
                            row.file_type === ".mkv" ||
                            row.file_type === ".flv") && (
                            <VideoLibraryIcon
                              size="small"
                              sx={{ color: "#FAD165", marginRight: "5px" }}
                            />
                          )}
                          {row.is_file === true && (
                            <a
                              className="links"
                              href={row.file_url}
                              target="_blank"
                            >
                              {row.name}
                            </a>
                          )}
                          {row.is_file === false && (
                            <a className="links" target="_blank">
                              {row.name}
                            </a>
                          )}
                        </TableCell>

                        <TableCell padding="checkbox">
                          {row.shared && (
                            <Tooltip title="Shared" enterDelay={500}>
                              <div>
                                <IconButton
                                  onClick={(event) =>
                                    this.showSharedopen(event, index)
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
                                      <TableContainer>
                                        <Table aria-label="customized table">
                                          <TableHead>
                                            <TableRow>
                                              <TableCell>
                                                <b>Shared with</b>
                                              </TableCell>
                                              <TableCell>
                                                <b>Acces level</b>
                                              </TableCell>
                                            </TableRow>
                                          </TableHead>
                                          <TableBody>
                                            {row.shared_folder_details.map(
                                              (r, index) => (
                                                <TableRow key={index}>
                                                  <TableCell>
                                                    {r.user}
                                                  </TableCell>
                                                  <TableCell>
                                                    {r.access_level}
                                                  </TableCell>
                                                </TableRow>
                                              )
                                            )}
                                          </TableBody>
                                        </Table>
                                      </TableContainer>
                                    </Box>
                                  </Fade>
                                </Modal>
                              </div>
                            </Tooltip>
                          )}
                        </TableCell>
                        <TableCell align="right">
                          {row.is_file === true && (
                            <a
                              className="links"
                              href={row.file_url}
                              target="_blank"
                            >
                              {row.owner}
                            </a>
                          )}
                          {row.is_file === false && (
                            <a className="links" target="_blank">
                              {row.owner}
                            </a>
                          )}
                        </TableCell>
                        <TableCell align="right">
                          {" "}
                          {row.is_file === true && (
                            <a
                              className="links"
                              href={row.file_url}
                              target="_blank"
                            >
                              {row.updated_at}
                            </a>
                          )}
                          {row.is_file === false && (
                            <a className="links" target="_blank">
                              {row.updated_at}
                            </a>
                          )}
                        </TableCell>
                        <TableCell align="right">
                          {row.is_file === true && (
                            <a
                              className="links"
                              href={row.file_url}
                              target="_blank"
                            >
                              {row.file_size}
                            </a>
                          )}
                          {row.is_file === false && (
                            <a className="links" target="_blank">
                              --
                            </a>
                          )}
                        </TableCell>
                        <TableCell
                          sx={{ color: "#828282" }}
                          align="right"
                        ></TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },

            // mb:2,
          }}
        >
          {this.DesplayPath()}
          {this.state.selected.length === 1 && this.x == "Profile" && (
            <Tooltip title="Rename" enterDelay={500}>
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
                          label="Rename"
                          value={this.state.NewFileName}
                          validations={required}
                          placeholder="new File name"
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
                            Rename
                          </button>
                        </div>
                      </Typography>
                    </Box>
                  </Fade>
                </Modal>
              </div>
            </Tooltip>
          )}

          {this.state.selected.length == 1 &&
            (this.state.selectedType == ".xlsx" ||
              this.state.selectedType == ".xls") && (
              <Tooltip title="view" enterDelay={500}>
                <div>
                  <IconButton
                    aria-label="view file"
                    component="span"
                    onClick={this.openviewModal}
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <Modal
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
                            placeholder="new File name"
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
                              Rename
                            </button>
                          </div>
                        </Typography>
                      </Box>
                    </Fade>
                  </Modal>
                </div>
              </Tooltip>
            )}
          {this.x == "Bin" && this.state.selected.length > 0 && (
            <Tooltip title="Restore from Bin" enterDelay={500}>
              <IconButton onClick={this.Onrestore}>
                <RestoreIcon />
              </IconButton>
            </Tooltip>
          )}
          {this.displaymove()}

          {this.state.selected.length > 0 && this.x == "Profile" && (
            <Tooltip title="Share" enterDelay={500}>
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
                    <Box sx={style}>
                      <Typography
                        id="transition-modal-title5"
                        variant="h5"
                        component="h3"
                      >
                        <ValidationTextField
                          id="outlined-name2"
                          fullWidth
                          label="User"
                          value={this.state.shareName}
                          validations={required}
                          placeholder="new File name"
                          onChange={this.onShareNamechange}
                          sx={{ marginBottom: "10px" }}
                        />
                      </Typography>
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-disabled-label">
                          operation
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-disabled-label"
                          id="demo-simple-select-disabled"
                          value={this.state.operation}
                          label="operation"
                          onChange={this.handleoperation}
                        >
                          <MenuItem value={"add_user"}>ADD</MenuItem>
                          <MenuItem value={"delete_user"}>DELETE</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-disabled-label1">
                          permission
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-disabled-label1"
                          id="demo-simple-select-disabled1"
                          value={this.state.permission}
                          label="permission"
                          onChange={this.handlepermission}
                        >
                          <MenuItem value={"read"}>Read</MenuItem>
                          <MenuItem value={"write"}>Write</MenuItem>
                        </Select>
                      </FormControl>
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
                            Share files
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
              <Tooltip title="Delete" enterDelay={500}>
                <IconButton onClick={this.onDeleteToolbar}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            )}
          {this.state.selected.length > 0 && this.x == "Shared" && (
            <Tooltip title="Delete" disabled enterDelay={500}>
              <IconButton onClick={this.onDeleteToolbar}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          )}

      
          {this.x == "Profile" && this.y == "true" && (
            <Tooltip title="close serach" enterDelay={500}>
              <IconButton onClick={this.closeSearch}>
                <CloseSharpIcon />
              </IconButton>
            </Tooltip>
          )}
          {this.x == "Bin" && this.state.selected.length > 0 && (
            <Tooltip title="Delete" enterDelay={500}>
              <IconButton onClick={this.onDeleteToolbar} disabled>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          )}
          <Tooltip title="add file" enterDelay={500} size="small">
          <div>
          <IconButton   id="demo-customized-button"
          aria-controls={
            this.state.openColorButton ? "demo-customized-menu" : undefined
          }
          aria-haspopup="true"
          aria-expanded={this.state.openColorButton ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={this.handleClick1}
          className="w-100">
                <AddIcon />
              </IconButton>
              <StyledMenU
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={this.state.anchorE4}
        open={this.state.openColorButton}
        onClose={this.handleClose1}
      >
        <MenuItem disableRipple>
          <label style={{ fontSize: "10px" }}>
            <StyledIcon
              aria-label="upload picture"
              component="span"
              sx={{ fontSize: "14px" }}
              onClick={this.handleOpenFM}
            >
              <CreateNewFolderOutlinedIcon
                sx={{ width: "25px", height: "25px" }}
              />
              Add Folder
            </StyledIcon>

            <Modal
              aria-labelledby="transition-modal-title1"
              aria-describedby="transition-modal-description1"
              open={this.state.openFM}
              onClose={this.handleCloseFM}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={this.state.openFM}>
                <Box sx={style}>
                  <Typography
                    id="transition-modal-title1"
                    variant="h5"
                    component="h3"
                  >
                    <ValidationTextField
                      id="outlined-name1"
                      fullWidth
                      label="Folder Name"
                      validations={[required]}
                      placeholder="Folder Name"
                      onChange={this.onFolderNameChange}
                      sx={{ marginBottom: "10px" }}
                    />
                  </Typography>
                  <Typography id="transition-modal-description1" sx={{ mt: 2 }}>
                    <div className="form-group">
                      <button
                        variant="contained"
                        className="btn btn-primary btn-block"
                        onClick={this.onFolderCreate}
                      >
                        Add Folder
                      </button>
                    </div>
                  </Typography>
                </Box>
              </Fade>
            </Modal>
          </label>
        </MenuItem>
        <Divider />
        <MenuItem disableRipple>
          <label style={{ fontSize: "10px" }}>
            <StyledIcon
              aria-label="upload file"
              component="span"
              sx={{ fontSize: "14px" }}
              onClick={this.handleOpenFileM}
            >
              <UploadFileOutlinedIcon sx={{ width: "25px", height: "25px" }} />
              File Upload
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
                <Box sx={style}>
                  <Typography id="transition-modal-description3" sx={{ mt: 2 }}>
                    <div className="form-group">
                      <label htmlFor="icon-button-file">
                        <IconButton
                          aria-label="upload picture"
                          component="span"
                          sx={{ fontSize: "14px" }}
                        >
                          <UploadFileOutlinedIcon
                            sx={{ width: "25px", height: "25px" }}
                          />
                          select File
                          <Input
                            id="icon-button-file"
                            validations={[required]}
                            onChange={this.onFileChange}
                            type="file"
                          />
                        </IconButton>
                      </label>
                      <button
                        variant="contained"
                        className="btn btn-primary btn-block"
                        onClick={this.onFileUpload}
                      >
                        Add File
                      </button>
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
              <UploadFileOutlinedIcon sx={{ width: "25px", height: "25px" }} />
              Open Upload with link
            </StyledIcon>
            <Modal
              aria-labelledby="transition-modal-title5"
              aria-describedby="transition-modal-description5"
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
                    id="transition-modal-title5"
                    variant="h6"
                    component="h2"
                  >
                    <ValidationTextField
                      id="outlined-name"
                      fullWidth
                      label="url"
                      defaultValue=""
                      validations={[required]}
                      placeholder="link"
                      onChange={this.onLinkChange}
                      sx={{ marginBottom: "10px" }}
                    />
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    <div className="form-group">
                      <button
                        variant="contained"
                        className="btn btn-primary btn-block"
                        onClick={this.onFileUploadURL}
                      >
                        Upload
                      </button>
                    </div>
                  </Typography>
                </Box>
              </Fade>
            </Modal>
          </label>
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={this.handleClose1} disableRipple>
          Terms and policy
        </MenuItem>
      </StyledMenU>
           </div>
          </Tooltip>
          
        </Toolbar>
        <nav className="navbar mt-2 navbar-expand navbar-dark bg-dark">
        <Button onClick={(event )=>{
          EventBus.dispatch("logout")
        }} className="nav-link">
                Log out
              </Button>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Button onClick={this.onDriveClick} className="nav-link">
                My drive
              </Button>
            </li>
          </div>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Button onClick={(event)=>{
                    history.push("/profileFa");
                  }} className="nav-link">
                FA
              </Button>
            </li>
          </div>

          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Button onClick={this.onShareClick} className="nav-link">
                shared
              </Button>
            </li>

            <li className="nav-item">
              <Button onClick={this.onBinClick} className="nav-link">
                bin
              </Button>
            </li>
          </div>
        </nav>
        <Snackbar
          open={this.state.snackopen}
          autoHideDuration={6000}
          onClose={this.handleClosesnack}
        >
          <Alert
            onClose={
              this.state.loadfile
                ? (event) => {
                    this.state.source.cancel();
                    this.handleClosesnack();
                  }
                : (event) => {
                    this.handleClosesnack();
                  }
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
                file uploading
              </div>
            ) : (
              <div>{this.state.content}</div>
            )}
          </Alert>
        </Snackbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Profile_mobile);
