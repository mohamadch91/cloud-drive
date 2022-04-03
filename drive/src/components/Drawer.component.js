import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SdStorageOutlinedIcon from "@mui/icons-material/SdStorageOutlined";
import profile from "./profile.component"
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
import EventBus from "../common/EventBus";
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
  borderRadius: 50,
  boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
  backgroundColor: "white",
  color: "black",
  fontSize: "14px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#F8F9FA",
    // borderColor: '#0062cc',
    // color:'black',
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
const ColorButtons = styled(Button)(({ theme }) => ({
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
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
//   const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);
let flag;
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
      selectedFile: null,
      content: "",
      anchorEl1: null,
      link: "",
      open1: false,
      openm: false,
      storage:0,
      totalStorage:0,
     
    };
  }
  
  
   handleClick1 = (event) => {
    
    this.setState({ anchorEl1: event.currentTarget,open1:true });
  };
  CalcStorage = () => {
    
    return (this.state.storage/this.state.totalStorage)*100;
  }
   handleClose1 = () => {
    this.setState({ anchorEl1: null,open1:false });
  };
  handleOpenm = () => {
    this.setState({ openm: true });
  };
  handleClosem = () => {
    this.setState({ openm: false });
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
   const data={file_url:this.state.link}
   UserService.uploadUrlFile(data).then(
      (response) => {
        this.updateStorage();
        EventBus.dispatch("updaterow");
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
        // this.updaterows();
        EventBus.dispatch("updaterow");
        // console.log(response.data);
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
  onBinClick = () => {
    localStorage.setItem("Page", "Bin");
    localStorage.setItem("Folders",JSON.stringify([]))
    EventBus.dispatch("updaterow");
    // Change_();
  }
  onDriveClick = () => {
    localStorage.setItem("Page", "Profile");
    localStorage.setItem("Path","");
    localStorage.setItem("Folders",JSON.stringify([]))
    UserService.changepath("");
    EventBus.dispatch("updaterow");

    // Change_();
  }
  onShareClick = () => {
    localStorage.setItem("Page", "Shared");
    EventBus.dispatch("updaterow");
    // Change_();
  }
  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
  async updateStorage (num) {
      num=num||1;
    if(flag==0){
    // await this.sleep(100).then(() => {
    //   // console.log("done");
    // });
  }
    UserService.getStorage().then(
      (response) => {
        // console.log(response.data);
        this.setState({
          storage: response.data.used_size,
          totalStorage: response.data.total_permitted_size,
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
    this.updateStorage();
    
    
  }
  
  render(){
    
   
  return (
    <section className="drawer-left" style={{ overflow: "auto" }}>
      <div className="left_drawer">
        <ColorButton
          id="demo-customized-button"
          aria-controls={this.state.open1 ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={this.state.open1 ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={this.handleClick1}
          sx={{
            width: "50%",
            height: "17%",
            marginTop: "5%",
            marginLeft: "5%",
          }}
        >
          <AddIcon
            sx={{
              width: "40px",
              height: "40px",
              marginRight: "10%",
              marginLeft: "-20%",
              color: "red",
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
          <MenuItem  disableRipple>
            <label htmlFor="icon-button-file">
            <Input
                      onChange={this.onFileChange}
                      id="upload_folder"
                      type="file"
                      sx={{ display: "none", visibility: "hidden" }}
                    />
              <IconButton
                aria-label="upload picture"
                component="span"
                sx={{ fontSize: "14px" }}
              >
                <CreateNewFolderOutlinedIcon
                  sx={{ width: "25px", height: "25px" }}
                />{" "}
                Folder
              </IconButton>
            </label>
          </MenuItem>
          <Divider />
          <MenuItem disableRipple>
            <label htmlFor="icon-button-file">
            <Input
                      id="icon-button-file"
                      onChange={this.onFileChange}
                      type="file"
                      sx={{ display: "none" }}
                    />
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
            </label>
          </MenuItem>

          <MenuItem  disableRipple>
            <label htmlFor="icon-button-file" style={{ fontSize: "10px" }}>
            <Input
                      onChange={this.onFileChange}
                      id="upload_folder"
                      type="file"
                      sx={{ display: "none", visibility: "hidden" }}
                    />
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
          <MenuItem onClick={this.handleClose1} disableRipple>
            Terms and policy
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={this.handleClose1} disableRipple>
                  <ColorButtons onClick={this.onFileUpload} sx={{color:"#606469"}}>Sumbit to Upload</ColorButtons>
            </MenuItem>
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
                marginLeft: "4%",
                marginRight: "7%",
                color: "#5F6368",
              }}
            />
            My Drive
          </MenuItem>
          <MenuItem disableRipple sx={{ fontSize: "14px", marginTop: "2%" }}>
            <DevicesOutlinedIcon
              sx={{
                width: "25px",
                height: "25px",
                marginLeft: "4%",
                marginRight: "7%",
                color: "#5F6368",
              }}
            />
            Computers
          </MenuItem>

          <MenuItem disableRipple sx={{ fontSize: "14px", marginTop: "2%" }}>
            <PeopleAltOutlinedIcon
              sx={{
                width: "25px",
                height: "25px",
                marginLeft: "4%",
                marginRight: "7%",
                color: "#5F6368",
              }}
            />
            Shared With me
          </MenuItem>

          <MenuItem disableRipple sx={{ fontSize: "14px", marginTop: "2%" }}>
            <AccessTimeOutlinedIcon
              sx={{
                width: "25px",
                height: "25px",
                marginLeft: "4%",
                marginRight: "7%",
                color: "#5F6368",
              }}
            />
            Recent
          </MenuItem>
          <MenuItem disableRipple sx={{ fontSize: "14px", marginTop: "2%" }}>
            <StarBorderOutlinedIcon
              sx={{
                width: "25px",
                height: "25px",
                marginLeft: "4%",
                marginRight: "7%",
                color: "#5F6368",
              }}
            />
            Starred
          </MenuItem>
          <MenuItem onClick={this.onBinClick} disableRipple sx={{ fontSize: "14px", marginTop: "2%" }}>
            <DeleteOutlineOutlinedIcon
              sx={{
                width: "25px",
                height: "25px",
                marginLeft: "4%",
                marginRight: "7%",
                color: "#5F6368",
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
                marginLeft: "4%",
                marginRight: "7%",
                color: "#5F6368",
              }}
            />
            Storage
          </MenuItem>
          
          <BorderLinearProgress variant="determinate" value={this.CalcStorage()} />
          <span
            style={{ marginLeft: "11%", fontSize: "13px ", color: "#5F6368" }}
          >
           {this.state.storage} MB of {this.state.totalStorage} MB used
          </span>
          <Button
            size="small"
            variant="outlined"
            sx={{ marginLeft: "12%", marginTop: "3.5%", fontSize: "14px " }}
          >
            {" "}
            Buy Storage{" "}
          </Button>
          <div style={{marginTop:"2%",marginLeft:"12%"}}>
          <Link to={"/profileFa"} className="">FA
          </Link>
          <Link to={"/profile"} className="">/EN
          </Link>
          </div>
        </StyledMenu>
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

export default connect(mapStateToProps)(DrawerLeft);