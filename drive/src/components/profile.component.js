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
import RestoreIcon from '@mui/icons-material/Restore';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Divider from "@mui/material/Divider";
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import Button from "@mui/material/Button";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import CalendarViewMonthOutlinedIcon from "@mui/icons-material/CalendarViewMonthOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
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
import PropTypes from 'prop-types';
// import { alpha } from '@mui/material/styles';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import EventBus from "../common/EventBus";
export let rows=[];
export const update = ()=>{

}
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
      color:"red",
    }

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
  return order === 'desc'
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
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'name',
    align:true,
  },
  {
    id: 'owner',
    numeric: false,
    disablePadding: false,
    label: 'Owner',
    align:false,
  },
  {
    id: 'updated_at',
    numeric: false,
    disablePadding: false,
    label: 'Last modified',
    align:false,
  },
  {
    id: 'file_size',
    numeric: false,
    disablePadding: false,
    label: 'File Size',
    align:false,
  },

];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
   
    onRequestSort(event, property);
  };

  return (
    <TableHead stickyHeader  sx={{marginTop:"2px",paddingTop:"2px"}}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align===true? 'left':'right'}
           
            sortDirection={orderBy === headCell.id ? order : false}
          >
            
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell align="right" sx={{color:"#828282"}}>
          </TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { selected,rows,deleteSelected,rename,restore,Folders,removeFolder } = props;
  let x=localStorage.getItem('Page');
  let y=localStorage.getItem('search');
  const [open, setOpen] = React.useState(false);
  const [NewFileName, setNewFileName] = React.useState('');
  // let NewFileName='';
  const onDelete = ()  => {
   selected.forEach((item) => {
     
     let file=rows.filter(obj => obj.name===item);
     console.log(file)
     deleteSelected(file[0].id);
    });
  };
  const Onrestore = ()  => {
    selected.forEach((item) => {
     
      let file=rows.filter(obj => obj.name===item);
      console.log(file)
      restore(file[0].id);
     });
  };
  const Onrename = ()  => {
  
    
   let file=rows.filter(obj => obj.name === selected[0]);
   

    rename(file[0].id,NewFileName);
    setOpen(false);

   
  };
  const openRenameModalf=()=>{
    setOpen(true);
    setNewFileName('');
  };
  const closeRenameModal=()=>{
    setOpen(false);
  };
  const onFileNameChange=(e)=>{
    setNewFileName(e.target.value);
  };
  const closeSearch=()=>{
    localStorage.setItem('search','false');
    localStorage.setItem('search_addres','');
    EventBus.dispatch('updaterows');
  };
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        
        // mb:2,
       
      }}
    >
      {selected.length > 0 ? (
        <Typography
          sx={{ flex: '1 1 80%'}}
          color="inherit"
          
          variant="subtitle1"
          component="div"
        >
          {selected.length} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 80%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          My Files
        </Typography>
      )}
       {selected.length ===1 &&(
        <Tooltip title="Rename">
          <div>
        <IconButton aria-label="Rename file"
                      component="span"
                      
                      onClick={openRenameModalf}>
          <DriveFileRenameOutlineIcon />


          
        </IconButton>
        <Modal
                      aria-labelledby="transition-modal-title2"
                      aria-describedby="transition-modal-description2"
                      open={open}
                      onClose={closeRenameModal}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 500,
                      }}
                    >
                      <Fade in={open}>
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
                              value={NewFileName}
                              
                              validations={required}
                              placeholder="new File name"
                              onChange={onFileNameChange}
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
                                disabled={!NewFileName}
                                onClick={Onrename}
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
      {(x=="Bin" && selected.length > 0) &&(
        <Tooltip title="Restore from Bin">
        <IconButton onClick={Onrestore}>
          <RestoreIcon />
        </IconButton>
      </Tooltip>
      )}
      {(selected.length > 0 && x!="Bin") && (
        <div>
           <Tooltip title="Share">
          <IconButton >
            <PersonAddAltOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Move To">
          <IconButton>
            <DriveFileMoveOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
        <IconButton onClick={onDelete}>
          <DeleteIcon  />
        </IconButton>
      </Tooltip>
       
        </div>
     
      )}

    {/* //  ) : (
    //     <Tooltip title="Filter list">
    //       <IconButton>
    //         <FilterListIcon />
    //       </IconButton>
    //     </Tooltip>
    //   )} */}
      {(x=="Profile" && y=="true") &&(
        <Tooltip title="close serach">
        <IconButton onClick={closeSearch} >
          <CloseSharpIcon  />
        </IconButton>
      </Tooltip>
     
      )}
      {(x=="Bin" && selected.length > 0) &&(
        <Tooltip title="Delete">
        <IconButton onClick={onDelete} disabled>
          <DeleteIcon  />
        </IconButton>
      </Tooltip>
     
      )}
     

     
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  selected: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  deleteSelected: PropTypes.func.isRequired,
  rename: PropTypes.func.isRequired,
  restore:PropTypes.func.isRequired,
  Folders:PropTypes.array.isRequired,
  removeFolder:PropTypes.func.isRequired,
};
class Profile extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);
    this.updaterows = this.updaterows.bind(this);
    window.updaterows=this.updaterows.bind(this);
    this.onFileUploadURL = this.onFileUploadURL.bind(this);
    this.handleRequestSort = this.handleRequestSort.bind(this);
    this.handleSelectAllClick = this.handleSelectAllClick.bind(this);
    this.handleClickT = this.handleClickT.bind(this);
    this.FolderClick = this.FolderClick.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onRename = this.onRename.bind(this);
    this.onRestore = this.onRestore.bind(this);
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
      rows: [],
      order:'asc',
      orderBy:'name',
      selected:[],
      click:0,
      Folders:[],
    };
  }
  timer = 0;
  delay = 200;
  prevent = false;
  
  handleRequestSort = (event, property) => {
    console.log(this.state.orderBy);
    // console.log(property);
    const isAsc = this.state.orderBy === property && this.state.order === 'asc';
    this.setState({ order: isAsc ? 'desc' : 'asc' });
    this.setState({ orderBy: property });
    
  };
  handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = this.state.rows.map((n) => n.name);
      this.setState({ selected: newSelecteds });
     
      return;
    }
    this.setState({ selected: [] });
  };
  
  handleClickT = (event, name) => {
    event.preventDefault()
    event.stopPropagation()
        // console.log(event);
        const selectedIndex = this.state.selected.indexOf(name);
        let newSelected = [];
    
        if (selectedIndex === -1) {
          newSelected = newSelected.concat(this.state.selected, name);
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(this.state.selected.slice(1));
        } else if (selectedIndex === this.state.selected.length - 1) {
          newSelected = newSelected.concat(this.state.selected.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            this.state.selected.slice(0, selectedIndex),
            this.state.selected.slice(selectedIndex + 1),
          );
        }
        this.setState({ selected: newSelected });
      
    
   
    // console.log(this.state.selected)
    
  };
  

  isSelected = (name) => this.state.selected.indexOf(name) !== -1;

 
  handleOpenm = () => {
    this.setState({ openm: true,link:"" });
  };
  handleClosem = () => {
    this.setState({ openm: false });
  };
  handleOpenFM = () => {
    this.setState({ openFM: true,FolderName:"" });
  };
  handleCloseFM = () => {
    this.setState({ openFM: false });
  };
  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
  UpdateHelper=(response)=>{
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
      if(x===0){
        x=x.toString();
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
  }
  async updaterows(num) {
    //wait for the data to load set time out
    // this.setState({selected:[]});
    num=num||0;
    if(num===0){
    // await this.sleep(500).then(() => {
    //   // console.log("done");
    // });
  }
    
    let x = localStorage.getItem("Page");
    let y = localStorage.getItem("search_addres");
    let z = localStorage.getItem("search");
    console.log(y,z);
    if (x === "Profile") {
      if(z==="true"){
        console.log("search");
           let address="?q="+y;
           if(this.state.FolderParent!=null){
            address=address+"&folder="+this.state.FolderParent;
           }
           UserService.Search(address).then((response) => {
             console.log(response);
             this.UpdateHelper(response);
            }
            ,
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
      else{
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
    this.setState({selected:[]});
    this.updaterows();
    EventBus.on("updaterow", () => {
      this.updaterows();
    });
  }
  componentWillUnmount(){
    // this.updaterows();
    EventBus.remove("updaterow");
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
  onFolderNameChange = (e) => {
    // Update the state
    this.setState({ FolderName: e.target.value });
  };
  onFileUploadURL = () => {
    const data = { file_url: this.state.link };
    UserService.uploadUrlFile(data).then(
      (response) => {
        this.updaterows();
        window.upupdateStorage();
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
  FolderClick = (id, file, url,name) => {
    
    if (file) {
      window.open(url);
    } else {
      let way = "?folder=" + id;
      let way2 = name+"/"
      localStorage.setItem("Path", way);
      
      this.setState({FolderParent: id});
      let folder={name:name,id:id};
      this.setState({Folders:this.state.Folders.concat(folder)});
      UserService.changepath(way);
      this.updaterows();
      let x = window.location.pathname;
      // console.log(x);
    }
  };
  onFileUpload = () => {
    // console.log(this.state.selectedFile);
    let formData = new FormData();
    formData.append("data", this.state.selectedFile);
    // console.log(formData);
    UserService.uploadUserFile(formData).then(
      (response) => {
        this.updaterows();
        window.upupdateStorage();
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
  onRename(id, name) {
    const data = { f_id: id,
    new_name
  :name };
    UserService.Rename(data).then(
      (response) => {
        this.updaterows();
        this.setState({selected:[]});
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
  onRestore(id) {
    const data = { f_id: id,
     };
    UserService.Restore(data).then(
      (response) => {
        this.updaterows();
        this.setState({selected:[]});
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
  onDelete(id) {
    // const data = { f_id: id
    //  };
    UserService.Delete(id).then(
      (response) => {
        this.updaterows();
        this.setState({selected:[]});
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
  render() {
    const { user: currentUser } = this.props;
    // console.log(currentUser);
    // localStorage.setItem("Path",this.state.Path);
    // console.log(this.state.Path);
    if (!currentUser) {
      return <Redirect to="/login" />;
    }
    
 
   
    // console.log(this.state.rows)
    return (
      <section className="Middle">
        <div className="Middle_header">
          <Grid container spacing={0}>
            <Grid item xs={2} md={2} sm={2}>
              <ColorButton
                id="demo-customized-button"
                aria-controls={
                  this.state.open ? "demo-customized-menu" : undefined
                }
                aria-haspopup="true"
                aria-expanded={this.state.open ? "true" : undefined}
                variant="contained"
                disableElevation
                onClick={this.handleClick}
                endIcon={<ArrowDropDownOutlinedIcon />}
              >
                My Drive
              </ColorButton>
              <StyledMenU
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={this.state.anchorEl}
                open={this.state.open}
                onClose={this.handleClose}
              >
                <MenuItem disableRipple>
                  <label
                    
                    style={{ fontSize: "10px" }}
                  >
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
                              value={this.state.FolderName}
                              
                              validations={[required]}
                              placeholder="Folder Name"
                              onChange={this.onFolderNameChange}
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
                                disabled={this.state.loading}
                                onClick={this.onFolderCreate}
                              >
                                Add Folder
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
                <Divider />
                <MenuItem disableRipple>
                  <label htmlFor="icon-button-file">
                    <IconButton
                      aria-label="upload picture"
                      component="span"
                      sx={{ fontSize: "14px" }}
                    >
                      <UploadFileOutlinedIcon
                        sx={{ width: "25px", height: "25px" }}
                      />
                      File Upload
                    </IconButton>
                    <Input
                      id="icon-button-file"
                      onChange={this.onFileChange}
                      type="file"
                      sx={{ display: "none" }}
                    />
                  </label>
                </MenuItem>

                <MenuItem disableRipple>
                  <label
                    htmlFor="icon-button-file"
                    style={{ fontSize: "10px" }}
                  >
                    <Input id="icon-button-file" type="file" />
                    <IconButton
                      aria-label="upload picture"
                      component="span"
                      sx={{ fontSize: "14px" }}
                    >
                      <DriveFolderUploadOutlinedIcon
                        sx={{ width: "25px", height: "25px", fontSize: "10px" }}
                      />
                      Folder Upload
                    </IconButton>
                  </label>
                </MenuItem>
                <MenuItem disableRipple>
                  <label
                    htmlFor="icon-button-file"
                    style={{ fontSize: "10px" }}
                  >
                    <Button onClick={this.handleOpenm}>
                      Open Upload with link
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
                                Upload
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
                  Terms and policy
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={this.handleClose} disableRipple>
                  <ColorButton
                    onClick={this.onFileUpload}
                    sx={{ color: "#606469" }}
                  >
                    Sumbit to Upload
                  </ColorButton>
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
              <Tooltip title="Grid view" enterDelay={500} size="small">
                <IconButton
                  aria-label="grid view"
                  sx={{
                    width: "25px",
                    height: "25px",
                    marginRight: "15px",
                    color: "#707070",
                  }}
                >
                  <CalendarViewMonthOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="view details" enterDelay={500} size="small">
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
          <span style={{ marginTop: "20px" }}> Suggested</span>

          <div classname="gallery_image" style={{marginBottom:"20px"}}>
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
              <EnhancedTableToolbar selected={this.state.selected} rows={this.state.rows} deleteSelected={this.onDelete} rename={this.onRename} restore={this.onRestore} Folders={this.state.Folders} />
         {(this.state.rows.length == 0) ? (
           <div className="w-100  text-black font-weight-bold text-center h1 fs-1 ">There is no file</div>
         ):(   
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
              {stableSort(this.state.rows, getComparator(this.state.order, this.state.orderBy))
                
                .map((row, index) => {
                  const isItemSelected = this.isSelected(row.name);

                  const labelId = `enhanced-table-checkbox-${index}`;
                  
                  return (
                    <TableRow
                      hover

                      
                      onClick={(event)=>this.FolderClick(row.id,row.is_file)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell onClick={(event) => this.handleClickT(event, row.name)}  padding="checkbox">

                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
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
                        {row.is_file === true && row.file_type === ".xlsx" && (
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
                        {((row.is_file === true && row.file_type === ".json") ||
                          row.file_type === ".jpeg" ||
                          row.file_type === ".png" ||
                          row.file_type === ".jpg") && (
                          <ImageIcon
                            size="small"
                            sx={{ color: "#FAD165", marginRight: "5px" }}
                          />
                        )}
                        {((row.is_file === true && row.file_type === ".mp4") ||
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
                      <TableCell align="right">{row.is_file === true && (
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
                        )}</TableCell>
                      <TableCell align="right"> {row.is_file === true && (
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
                      <TableCell align="right">{row.is_file === true && (
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
                        )}</TableCell>
                        <TableCell  sx={{color:"#828282"}} align="right">
                          
                        </TableCell>
                      
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
