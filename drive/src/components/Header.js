import React from "react";
import "./cmp_css/Header.css";
import { Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import TuneIcon from "@mui/icons-material/Tune";
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
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -0.5%",
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
    console.log("salam");
    EventBus.dispatch("logout");
  }
  const [input,setInput]=React.useState("");
  const changeInput=(e)=>{
    setInput(e.target.value);
  }
  const handleSearch=()=>{
    localStorage.setItem("search_addres",input);
    localStorage.setItem("search",true);
    EventBus.dispatch("updaterow");
  
  }

  return (
    <section className="Header_section">
      <div className="Header">
        {/* this is header part first logo and its text  */}
        <Grid container spacing={1} direction="row">
          <Grid item xs={1} md={2} sm={1}>
            <div className="Header_left" style={{ marginLeft: "4.5%" }}>
              <Tooltip title="Drive" followCursor enterDelay={500} size="small">
                <a id="logo_address">
                  <img
                    src={require("../assest/png/drive_2020q4_48dp.png")}
                    alt="logo"
                    id="logo"
                  />
                  <span id="logo_text">Drive</span>
                </a>
              </Tooltip>
            </div>
          </Grid>
          <Grid item xs={5} md={8} sm={5}>
            {/* then design serach box */}
            <div className="Header_search" id="search">
              <Tooltip title="Search" enterDelay={500} size="small">
                <IconButton
                  aria-label="serach"
                  sx={{
                    width: "40px",
                    height: "40px",
                    marginTop: "0.5%",
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
              />
              <Tooltip title="Search option" enterDelay={500} size="small">
                <IconButton id="icon_tune" aria-label="serach">
                  <TuneIcon />
                </IconButton>
              </Tooltip>
            </div>
          </Grid>
          <Grid item xs={5} md={2} sm={2}>
            {/* icons of right side of the header here */}
            <div className="Header_right">
              {/* MUI icon buttons used for icons and TOOl tips used for tooltips */}
              <IconButton
                id="icon"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                disableElevation
                onClick={handleClick}
                sx={{ width: "40px", height: "40px", marginTop: "0.7%" }}
              >
                <Tooltip
                  title="Ready for offline"
                  enterDelay={500}
                  size="small"
                >
                  <OfflinePinOutlinedIcon
                    sx={{ width: "25px", height: "25px" }}
                  />
                </Tooltip>
              </IconButton>
              {/* used styled menu like google drive original web site */}
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} disableRipple>
                  <FormControl component="fieldset">
                    <FormControlLabel
                      value="offline preview"
                      control={<Switch color="default" />}
                      label="offline preview"
                      labelPlacement="start"
                    />
                  </FormControl>
                </MenuItem>
              </StyledMenu>
              <IconButton
                id="icon"
                aria-controls={open1 ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open1 ? "true" : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick1}
                sx={{
                  width: "40px",
                  height: "40px",
                  marginTop: "0.5%",
                  marginLeft: "0.5%",
                }}
              >
                <Tooltip title="support" enterDelay={500} size="small">
                  <HelpOutlineOutlinedIcon
                    sx={{ width: "25px", height: "25px" }}
                  />
                </Tooltip>
              </IconButton>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl1}
                open={open1}
                onClose={handleClose1}
              >
                {/* menu items and handle when pressed
                 */}
                {/*
                                 
                                 @TODO : complete implementation of close handle functions
                                 */}
                <MenuItem onClick={handleClose1} disableRipple>
                  Help
                </MenuItem>
                <MenuItem onClick={handleClose1} disableRipple>
                  Training
                </MenuItem>

                <MenuItem onClick={handleClose1} disableRipple>
                  Updates
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose1} disableRipple>
                  Terms and policy
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose1} disableRipple>
                  Send feedback to Google
                </MenuItem>
              </StyledMenu>
              {/* similar to first part icon button same as all  */}
              <IconButton
                id="icon"
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
                  marginLeft: "0.5%",
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
              <IconButton
                id="icon_app"
                aria-controls={open3 ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open3 ? "true" : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick3}
                sx={{
                  width: "40px",
                  height: "40px",
                  marginTop: "0.5%",
                  marginLeft: "25px",
                }}
              >
                <Tooltip title="more apps" enterDelay={500} size="small">
                  <AppsOutlinedIcon sx={{ width: "25px", height: "25px" }} />
                </Tooltip>
              </IconButton>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl3}
                open={open3}
                onClose={handleClose3}
              >
                <MenuItem onClick={handleClose3} disableRipple>
                  nothing
                </MenuItem>
              </StyledMenu>

              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick4}
                  size="small"
                  // sx={{  }}
                  aria-controls={open4 ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open4 ? "true" : undefined}
                >
                  <Avatar
                    sx={{ width: 32, height: 32, backgroundColor: "#01579B" }}
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
                <MenuItem>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  <a href="/" className="nav-link" onClick={logoutUser} >
                    LogOut
                  </a>
                </MenuItem>
              </Menu>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
