import React from "react";
import "./cmp_css/Header.css";
import { Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import TuneIcon from "@mui/icons-material/Tune";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
import OfflinePinOutlinedIcon from "@mui/icons-material/OfflinePinOutlined";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Divider from "@mui/material/Divider";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import EventBus from "../common/EventBus";

/*
in this file we write header part code

*/
/**
 * first design new component for header
 * styled menu is used for styling menu
 * @param {Menu} menu
 * @param {MenuItem} menuItem
 * @param {Grid} grid
 * @param {IconButton} iconButton
 * @param {Avatar} avatar
 * @param {ListItemIcon} listItemIcon
 * @param {PersonAdd} personAdd
 * @param {Settings} settings
 * @param {Logout} logout
 * @param {FormControl} formControl
 * @param {FormControlLabel} formControlLabel
 * @param {Switch} switch
 * @param {HelpOutlineOutlinedIcon} helpOutlineOutlinedIcon
 * @param {SettingsOutlinedIcon} settingsOutlinedIcon
 * @param {AppsOutlinedIcon} appsOutlinedIcon
 * @param {Divider} divider
 * @param {TuneIcon} tuneIcon
 * @param {SearchIcon} searchIcon
 * @param {OfflinePinOutlinedIcon} offlinePinOutlinedIcon
 * @param {Tooltip} tooltip
 * style mui components with sx prop
 */
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
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 200,
    color:"#404040",
    fontWeight:"400",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -0.5%",
    "& .MuiMenu-list": {
      color:"#404040",
    fontWeight:"400",
      padding: "3px 0",
    },
    "& .MuiMenuItem-root": {
      color:"#404040",
      fontWeight:"400",
      "& .MuiSvgIcon-root": {
        fontSize: 16,
        color: "#7F7F7F",
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

/*
 * this is the header component
 */
export default function Header() {
  //four similar function to handle click event
  //set up hook
  const [anchorEl, setAnchorEl] = React.useState(null);
  //boolean to check the state of menu
  const open = Boolean(anchorEl);
  //handle click event and change the state of menu and open the menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  //handle close event and change the state of menu and close the menu
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const open3 = Boolean(anchorEl3);
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorEl3(null);
  };
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const open4 = Boolean(anchorEl4);
  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };
  //handle click on the search bar for change search bar style
  const Search = () => {
    const header_mid = document.getElementById("search");

    header_mid.style.backgroundColor = "#fff";

    //border bottom select
    header_mid.style.border = "1px solid #ccc";
    //select shadow like google drive serach
    header_mid.style.boxShadow =
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;";
  };
  //this function handle the event when close search bar and change style of search box again
  const Search_out = () => {
    const header_mid = document.getElementById("search");
    header_mid.style.backgroundColor = "#F1F3F4";
    header_mid.style.boxShadow = "none";
    header_mid.style.border = "none";
  };
  const logoutUser=()=>{
    EventBus.dispatch("logout");
  }
  const [input,setInput]=React.useState("");
  const changeInput=(e)=>{
    setInput(e.target.value);
  }
  const handleSearch=()=>{
    localStorage.setItem("search_addres",input);
    localStorage.setItem("search",true);
    window.gety();
    EventBus.dispatch("updaterow");
  
  }

  return (
    <section className="Header_section">
      <div className="Header d-flex">
        {/* this is header part first logo and its text  */}
       
            <div className="col-3 col-md-3 col-sm-3 d-flex Header_left" >

            <div className="w-15">
            <img
              src={require("../assest/svg/Drive-Logo.svg")}
              alt="logo"
              id="logo"
            />
             </div>
          <div id="logo_text">
            <div className="logo_text_main">Drive</div>
            <div className="logo_text_sub">Data Lake of The Situtaion Room</div>
          </div>


            </div>
          
        
            {/* then design serach box */}
            <div className=" col-lg-6 col-md-5 col-sm-6 offsl-2 Header_search" id="search_en">
              <Tooltip title="Search" enterDelay={500} size="small">
                <IconButton
                  aria-label="serach"
                  sx={{
                    width: "40px",
                    height: "40px",
                    marginTop: "0.2%",
                    marginLeft: "0.5%",
                  }}
                  onClick={handleSearch}
                >
                  <SearchIcon sx={{ width: "25px", height: "25px" }} />
                </IconButton>
              </Tooltip>
              {/* know on focus on element */}

              <input
                type="text"
                placeholder="Search in Drive"
                id="search_input"
                onFocus={Search}
                onChange={changeInput}
                onBlur={Search_out}
                onKeyPress={(e)=>{
                 
                  if(e.key==="Enter"){
                    handleSearch();
                  }
                }}
              />
             <Tooltip title="close serach" enterDelay={500}>
              <IconButton sx={{
                width: "40px",
                height: "40px",
                marginTop: "0.2%",
              }} onClick={(event)=>{
                 localStorage.setItem("search", "false");
                 localStorage.setItem("search_addres", "");
                 window.gety();
                 setInput("");
                 EventBus.dispatch("updaterow");
              }}>
                <CloseSharpIcon sx={{ width: "25px", height: "25px" }} />
              </IconButton>
            </Tooltip>
            </div>
         
         
            {/* icons of right side of the header here */}
            <div className="Header_right col-2">
              {/* MUI icon buttons used for icons and TOOl tips used for tooltips */}
              
              {/* used styled menu like google drive original web site */}
              {/* similar to first part icon button same as all  */}
              <IconButton
                id="icon_en"
                aria-controls={open2 ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open2 ? "true" : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick2}
                sx={{
                  width: "40px",
                  height: "40px",
                  marginTop: "0.5%",
                  PaddingRight: "0.5%!important",
                }}
              >
                <Tooltip title="support" enterDelay={500} size="small">
                  <SettingsOutlinedIcon
                    sx={{ width: "25px", height: "25px" }}
                  />
                </Tooltip>
              </IconButton>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl2}
                open={open2}
                onClose={handleClose2}
              >
                <MenuItem onClick={handleClose2} disableRipple>
                  Setting
                </MenuItem>
                <MenuItem onClick={handleClose2} disableRipple>
                  Get drive for Desktop
                </MenuItem>

                <MenuItem onClick={handleClose2} disableRipple>
                  Keyboard shortcuts
                </MenuItem>
              </StyledMenu>

              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick4}
                  size="small"
                   sx={{
                width: "40px",
                height: "40px",
                marginTop: "0.5%",
              }}
                  aria-controls={open4 ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open4 ? "true" : undefined}
                >
                  <Avatar
                    sx={{
                      width: 38,
                      height: 38,
                      backgroundColor: "#01579B",
                      paddingTop: "5%",
                    }}
                  >
                    M
                  </Avatar>
                </IconButton>
              </Tooltip>

              <Menu
                anchorEl={anchorEl4}
                id="account-menu"
                open={open4}
                onClose={handleClose4}
                onClick={handleClose4}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 0.5% 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: 0,
                      mr: 1,
                      backgroundColor: "#01579B",
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
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
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={logoutUser}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
              </Menu>
            </div>
       
      </div>
    </section>
  );
}
