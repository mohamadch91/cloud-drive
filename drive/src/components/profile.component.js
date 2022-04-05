import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import UserService, { ADD_URL, GET_URL, Path } from "../services/user.service";
// import React from 'react';
import "./cmp_css/middle.css";
import a from "../assest/png/images.jpg";
import { Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import TuneIcon from "@mui/icons-material/Tune";
import Grid from "@mui/material/Grid";
import RestoreIcon from "@mui/icons-material/Restore";
import Menu from "@mui/material/Menu";
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
import Form from "react-validation/build/form";
import { waitFor } from "@testing-library/react";
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
// import * as React from 'react';
import PropTypes from "prop-types";
// import { alpha } from '@mui/material/styles';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
import TablePagination from "@mui/material/TablePagination";
// import TableRow from '@mui/material/TableRow';
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
import Checkbox from "@mui/material/Checkbox";
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EventBus from "../common/EventBus";
import Popover from "@mui/material/Popover";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import InputLabel from "@mui/material/InputLabel";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ConstructionOutlined } from "@mui/icons-material";

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
  top: "50%",
  left: "40%",
  marginTop:"7%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 200,
  bgcolor: "background.paper",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  display: "flex",
  boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  p: 4,
};
const boxStylemove = {
  position: "block",
  bottom: "50%",
  right: "40%",
  marginTop:"2%",
  marginLeft:"15%",
  width: 300,
  height: 100,
  bgcolor: "background.paper",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  display: "flex",
  boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
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
    // paddingLeft: "10px",
    // paddingRight: "10px",
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
    "&:after": {
      color: "red",
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
  id,
  owner,
  is_file,
  file_type,
  file_size,
  file_url,
  created_at,
  updated_at,
  name,
  parent
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
  };
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
  // console.log(orderBy);
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
    // console.log(a[1], b[1]);
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
    label: "Last modified",
    align: false,
  },
  {
    id: "file_size",
    numeric: false,
    disablePadding: false,
    label: "File Size",
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
    <TableHead stickyHeader sx={{ marginTop: "2px", paddingTop: "2px" }}>
      <TableRow>
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
        <TableCell align="right" sx={{ color: "#828282" }}></TableCell>
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

class Profile extends Component {
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
      openPath: false,
      openColorButton: false,
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
      selectedmoveFolder:"",
    };
  }
  timer = 0;
  delay = 200;
  prevent = false;

  x = localStorage.getItem("Page");
  y = localStorage.getItem("search");
  getx(){
    this.x=localStorage.getItem("Page");
  }
  gety(){
    this.y=localStorage.getItem("search");
  }
  isSelectedfolder= (id)=> this.state.selectedmoveFolder==id;
  handleRequestSort = (event, property) => {
    console.log(this.state.orderBy);
    // console.log(property);
    const isAsc = this.state.orderBy === property && this.state.order === "asc";
    this.setState({ order: isAsc ? "desc" : "asc" });
    this.setState({ orderBy: property });
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
    // console.log(event);
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
    this.setState({ selected: newSelected });
    this.fileType();

    // console.log(this.state.selected)
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
      // let y = response.data[i].filename.split(".")[0];
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
          response.data[i].parent
        )
      );
    }

    console.log(row);
    this.setState({ rows: [] });
    this.setState({ rows: row });
    // console.log(this.state.rows);
  };
  updaterows(num) {
    //wait for the data to load set time out
    // this.setState({selected:[]});
    num = num || 0;
    if (num === 0) {
      // await this.sleep(500).then(() => {
      //   // console.log("done");
      // });
    }

    let x = localStorage.getItem("Page");
    let y = localStorage.getItem("search_addres");
    let z = localStorage.getItem("search");
    console.log(y, z);
    if (x === "Profile") {
      if (z === "true") {
        console.log("search");
        let address = "?q=" + y;
        if (this.state.FolderParent != null) {
          address = address + "&folder=" + this.state.FolderParent;
        }
        UserService.Search(address).then(
          (response) => {
            console.log(response);
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
    // Change_();
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
    // this.updaterows();
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
    UserService.uploadUrlFile(data).then(
      (response) => {
        console.log(response);
        this.updaterows();
        this.handleClose1();
        window.updateStorage();
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
    this.setState({ openm: false });
  };
  FolderClick = (id, file, url, name) => {
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
    if (name == "My drive") {
      localStorage.setItem("Path", "");
      localStorage.setItem("Folders", JSON.stringify([]));
      this.setState({ FolderParent: null });
      UserService.changepath("");
    } else {
      //  let new_id=id.toString();
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
  onFileUpload = () => {
    // console.log(this.state.selectedFile);
    let formData = new FormData();
    formData.append("data", this.state.selectedFile);
    // console.log(formData);
    UserService.uploadUserFile(formData).then(
      (response) => {
        this.updaterows();
        window.updateStorage();
        this.handleClose1();
        this.setState({
          content: "salam",
        });
      },
      (error) => {
        // console.log(error);
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
  onFolderCreate = () => {
    const data = {
      name: this.state.FolderName,
      parent: this.state.FolderParent,
    };
    UserService.AddFolder(data).then(
      (response) => {
        this.updaterows();
        this.handleClose1();
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
    this.setState({ openFM: false });
  };
  onRename = (id, name) => {
    const data = { f_id: id, new_name: name };
    UserService.Rename(data).then(
      (response) => {
        this.updaterows();
        this.setState({ selected: [] });
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
  onRestore = (id) => {
    const data = { f_id: id };
    UserService.Restore(data).then(
      (response) => {
        this.updaterows();
        this.setState({ selected: [] });
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
  onDelete = (id) => {
    // const data = { f_id: id
    //  };
    UserService.Delete(id).then(
      (response) => {
        this.updaterows();
        this.setState({ selected: [] });
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
  onShare = (id, operation, user, permission_level) => {
    let data = {
      f_id: id,
      operation: operation,
      user: user,
      permission_level: permission_level,
    };
    UserService.sharefile(data).then(
      (response) => {
        this.updaterows();
        this.setState({ selected: [] });
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

  handleFolderSelect = (event, name, id) => {
    const sf = {
      name: name,
      id: id,
    };
    if(this.state.selectedFolder!=null){
    if(this.state.selectedFolder.name==sf.name){

      this.setState({ selectedFolder: null });
    this.setState({ newparent: "" });
    this.setState({selectedmoveFolder:""})
    }
  }
    this.setState({ selectedFolder: sf });
    this.setState({ newparent: id });
    this.setState({selectedmoveFolder:id})
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
            parent:response.data[i].parent,
          };
          content.push(cell);
        }
        // console.log(content);
        this.setState({ moveRow: content });
      },
      (error) => {
        console.log(error);
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
    if (this.state.currentparent.id == "") {
      id = null;
    } else {
      id = this.state.currentparent.id;
    }
    let data = {
      name: this.state.NewFM,
      parent: id,
    };
    let way = "?folder=" + id;
    UserService.AddFoldermove(data, way).then(
      (response) => {
        this.updateMoveRow();
        this.updaterows();
        this.setState({ openCFM: false });
      },
      (error) => {
        console.log(error);
      }
    );
  };
  closeCFM = () => {
    this.setState({ openCFM: false });
  };
  gotoFolder = (event,name, id,parent) => {
    this.setState({ selectedFolder: null });
    this.setState({ newparent: id });
    this.setState({selectedmoveFolder:""})
    // console.log("karim")
    event.preventDefault();
    event.stopPropagation();

    const mp = "?folder=" + id;
    localStorage.setItem("MovePath", mp);
    UserService.changemovepath(mp)
    this.setState({ movepath: mp });
    this.updateMoveRow();
    const x = {
      name: name,
      id: parent,
     
    };
    

    console.log("x", x);
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
    // console.log("x",x)
    // console.log(fp)
    // console.log("lastparent",lastparent);
    // console.log("currentparent",currentparent);
    this.setState({ currentparent: x })
    // coole.log("lastparent",lastparent);
    console.log("currentparent on go ",this.state.currentparent);
    
    
    this.setState({ Folderpath: fp });
    console.log("on go",this.state.Folderpath);
  };
  folderBack = () => {
    let fp = this.state.Folderpath;
    console.log("currentparent back",this.state.currentparent);
    console.log("on back",this.state.Folderpath);
    fp.pop();
    const fpp = fp;
    let movep;
    if(this.state.currentparent.id==null){
       movep="";
    }
    else{
     movep = "?folder=" + this.state.currentparent.id;
    }
    const mp=movep;
    this.setState({ movepath: mp });
    localStorage.setItem("MovePath", mp);
    UserService.changemovepath(mp)
    this.updateMoveRow();
    if (fpp.length == 0) {
      this.setState({ currentparent: null });
      this.setState({ Folderpath: [] });
    }
    else {
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
    UserService.moveFiles(data).then(
      (response) => {
        this.updateMoveRow();
        this.updaterows();
        this.setState({openmove:false})
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  moveclick = () => {
    this.state.selected.forEach((item) => {
      let file =this.state. rows.filter((obj) => obj.id === item);
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
  };

  movemenu = () => {
    if((this.state.moveRow.length==0)&&(this.state.currentparent==null)){
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
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
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
        <Card sx={{ minWidth: 450, minHeight: 350 }}>
          <CardHeader
            sx={{
              backgroundColor: "#F1F1F1",
              height: "50px",
              textWrapper: {
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              },
            }}
            avatar={
              this.state.currentparent!=null ? (
                <IconButton onClick={this.folderBack}>
                  <ArrowBackIcon />
                </IconButton>
              ) : (
                undefined
              )
            }
            action={
              <IconButton
                sx={{ marginTop: "-10px" }}
                aria-label="close"
                onClick={this.handleClosemove}
              >
                <CloseSharpIcon />
              </IconButton>
            }
            title={this.state.currentparent==null?"My Drive":this.state.currentparent.name}
            // subheader="Move to folder"
          />

          <CardContent>
            <TableContainer>
              <Table aria-labelledby="tableTitle1">
                <TableBody>
                  {this.state.moveRow.length == 0 && (  <Box style={boxStylemove}>
              <span className="w-100  text-black font-weight-bold text-center h1 fs-1 ">
                There is no file
              </span>
              </Box>
            )}
                  {this.state.moveRow.map((row, index) => {
                    const isItemSelected = this.isSelectedfolder(row.id);
                    const disabled=row.is_file
                    const labelId = `enhanced-table-checkbox-${index}`;
                    // console.log(row);
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
                          <Tooltip title={"Go to " + row.name} >
                            <IconButton
                              onClick={(event) =>{
                                this.gotoFolder(event,row.name, row.id,row.parent)
                                this.updateMoveRow()
                              }
                              }
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
    localStorage.setItem("MovePath", "");
    UserService.changemovepath("")
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
      // console.log(item)
      let file = this.state.rows.filter((obj) => obj.id === item);
      console.log(file);
      this.onDelete(file[0].id);
    });
  };
  Onrestore = () => {
    this.state.selected.forEach((item) => {
      let file = this.state.rows.filter((obj) => obj.id === item);
      console.log(file);
      this.onRestore(file[0].id);
    });
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
                this.setState({openShare: false})

  };
  Onrename = () => {
    let file = this.state.rows.filter((obj) => obj.id === this.state.selected[0]);

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
        <MenuItem disableRipple>
          <label style={{ fontSize: "10px" }}>
            <IconButton
              aria-label="upload picture"
              component="span"
              sx={{ fontSize: "14px" }}
              onClick={this.handleOpenFM}
            >
              <CreateNewFolderOutlinedIcon
                sx={{ width: "25px", height: "25px" }}
              />
              Add Folder
            </IconButton>
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
                        {/* {this.state.loading && (
                          <span className="spinner-border spinner-border-sm"></span>
                        )} */}
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
            <IconButton
              aria-label="upload file"
              component="span"
              sx={{ fontSize: "14px" }}
              onClick={this.handleOpenFileM}
            >
              <UploadFileOutlinedIcon sx={{ width: "25px", height: "25px" }} />
              File Upload
            </IconButton>
            {/* {console.log("salam", openFileModal)} */}
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
                        {/* {this.state.loading && (
                          <span className="spinner-border spinner-border-sm"></span>
                        )} */}
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
            <IconButton
              aria-label="upload file"
              component="span"
              sx={{ fontSize: "14px" }}
              onClick={this.handleOpenm}
            >
              <UploadFileOutlinedIcon sx={{ width: "25px", height: "25px" }} />
              Open Upload with link
            </IconButton>
            {/* {console.log(openUrlModal)} */}
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
  fileType = () => {
    if (this.state.selected.length == 1) {
      console.log(this.state.selected)
      let file = this.state.rows.filter((obj) => obj.id === this.state.selected[0]);
      console.log(file);
      this.Type = file[0].file_type;
    }
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
    // console.log(Folders);
    const Folders = JSON.parse(localStorage.getItem("Folders"));
    if (Folders.length == 0) {
      return (
        <div style={{ display: "flex", flex: "1 1 50%" }}>
          {this.x == "Bin" && this.lastpathButton("Drive Bin")}
          {this.x == "Profile" && this.lastpathButton("My Drive")}
          {this.x == "Shared" && this.lastpathButton("Shared With me")}
        </div>
      );
    } else if (Folders.length > 0 && Folders.length < 4) {
      console.log(Folders);
      return (
        <div style={{ display: "flex", flex: "1 1 50%" }}>
          {this.x == "Bin" && this.pathButton("Drive Bin","")}
          {this.x == "Profile" && this.pathButton("My Drive","")}
          {this.x == "Shared" && this.pathButton("Shared With me","")}

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
          {this.x == "Bin" && this.pathButton("Drive Bin","")}
          {this.x == "Profile" && this.pathButton("My Drive","")}
          {this.x == "Shared" && this.pathButton("Shared With me","")}
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
  render() {
    const { user: currentUser } = this.props;
    // console.log(currentUser);
    // localStorage.setItem("Path",this.state.Path);
    // console.log(this.state.Path);
    if (!currentUser) {
      return <Redirect to="/" />;
    }

    // console.log(this.state.rows)
    return (
      <section className="Middle">
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
            (this.Type == ".xslx" || this.Type == ".xls") && (
              <Tooltip title="View" enterDelay={500}>
                <IconButton onClick={this.Onrestore}>
                  <VisibilityIcon />
                </IconButton>
              </Tooltip>
            )}
          {this.x == "Bin" && this.state.selected.length > 0 && (
            <Tooltip title="Restore from Bin" enterDelay={500}>
              <IconButton onClick={this.Onrestore}>
                <RestoreIcon />
              </IconButton>
            </Tooltip>
          )}
          { this.displaymove()}

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
            this.x != "Bin" && this.x != "Shared" && (
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

          {/* //  ) : (
    //     <Tooltip title="Filter list">
    //       <IconButton>
    //         <FilterListIcon />
    //       </IconButton>
    //     </Tooltip>
    //   )} */}
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
          <Tooltip title="grid view" enterDelay={500} size="small">
            <IconButton
              aria-label="grid view"
              sx={{
                marginRight: "15px",
                color: "#707070",
              }}
            >
              <CalendarViewMonthOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="view details" enterDelay={500} size="small">
            <IconButton aria-label="view details" sx={{ color: "#707070" }}>
              <InfoOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>

        <div className="Middle_body" style={{ color: "#606469" }}>
          <Divider />
          <br></br>
          <span style={{ marginTop: "20px" }}> Suggested</span>

          <div classname="gallery_image" style={{ marginBottom: "20px" }}>
            <div class="gallery">
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
                  some things here
                  <PictureAsPdfOutlinedIcon
                    size="small"
                    sx={{ marginTop: "10px", width: "2  5px", height: "25px" }}
                  />
                </div>

                <span sx={{ marginTop: "2px" }}>
                  {" "}
                  there is information about files{" "}
                </span>
              </div>
            </div>
            <div class="gallery">
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
                  some things here
                  <PictureAsPdfOutlinedIcon
                    size="small"
                    sx={{ marginTop: "10px", width: "2  5px", height: "25px" }}
                  />
                </div>

                <span sx={{ marginTop: "2px" }}>
                  {" "}
                  there is information about files{" "}
                </span>
              </div>
            </div>
            <div class="gallery">
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
                  some things here
                  <PictureAsPdfOutlinedIcon
                    size="small"
                    sx={{ marginTop: "10px", width: "2  5px", height: "25px" }}
                  />
                </div>

                <span sx={{ marginTop: "2px" }}>
                  {" "}
                  there is information about files{" "}
                </span>
              </div>
            </div>
            <div class="gallery">
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
                  some things here
                  <PictureAsPdfOutlinedIcon
                    size="small"
                    sx={{ marginTop: "10px", width: "2  5px", height: "25px" }}
                  />
                </div>

                <span sx={{ marginTop: "2px" }}>
                  {" "}
                  there is information about files{" "}
                </span>
              </div>
            </div>
            <div class="gallery">
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
                  some things here
                  <PictureAsPdfOutlinedIcon
                    size="small"
                    sx={{ marginTop: "10px", width: "2  5px", height: "25px" }}
                  />
                </div>

                <span sx={{ marginTop: "2px" }}>
                  {" "}
                  there is information about files{" "}
                </span>
              </div>
            </div>
          </div>

          <div
            className="Middle_body_table"
            style={{
              marginLeft: "25px",
              marginTop: "20px",
              paddingTop: "45px",
              color: "#606469",
            }}
          >
            {this.state.selected.length > 0 && (
              <Typography
                sx={{ ml: 2 }}
                color="inherit"
                variant="subtitle1"
                component="div"
              >
                {this.state.selected.length} selected
              </Typography>
            )}

            {this.state.rows.length == 0 ? (
              <Box style={boxStyle}>
              <span className="w-100  text-black font-weight-bold text-center h1 fs-1 ">
                There is no file
              </span>
              </Box>
            ) : (
              <TableContainer sx={{ maxHeight: 1000 }}>
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

                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          onClick={(event) =>
                            this.FolderClick(
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
                            onClick={(event) =>
                              this.handleClickT(event, row.id)
                            }
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
                            {row.is_file === true &&
                              row.file_type === ".pdf" && (
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
                            {row.is_file === true &&
                              row.file_type === ".mp3" && (
                                <LibraryMusicIcon
                                  size="small"
                                  sx={{ color: "#82C4E4", marginRight: "5px" }}
                                />
                              )}
                            {row.is_file === true &&
                              row.file_type === ".zip" && (
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

export default connect(mapStateToProps)(Profile);
