import React from "react";
import "./cmp_css/Header.css";
import { Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import TuneIcon from "@mui/icons-material/Tune";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import {
  DatePicker,
  DateTimePicker,
  DateRangePicker,
  DateTimeRangePicker
} from "react-advance-jalaali-datepicker";
import moment from "jalali-moment";
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';

import EditIcon from '@mui/icons-material/Edit';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import UserService from "../services/user.service";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";
import Fade from "@mui/material/Fade";
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { styled, alpha } from "@mui/material/styles";
import OfflinePinOutlinedIcon from "@mui/icons-material/OfflinePinOutlined";
import EventBus from "../common/EventBus";
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from "@mui/material/Switch";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import FormControlLabel from "@mui/material/FormControlLabel";
import { history } from "../helpers/history";
import FormControl from "@mui/material/FormControl";
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Divider from "@mui/material/Divider";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Typography from "@mui/material/Typography";
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded';
/*
in this file we write header part code

*/
/**
 * first design new component for header
 * styled menu is used for styling menu
 * @param {Menu} menu
 * @param {MenuItem} menuItem
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


/**
 * define component for alerts handle
 * @component 
 * @returns Mui alert components
 * 
 */
const Alert = React.forwardRef(function Alert(props, ref) {
  return (
    <MuiAlert
      elevation={6}
      ref={ref}
      variant="filled"
      sx={{ direction: "rtl",zIndex:9999 }}
      {...props}
    />
  );
});

/**
 * overwrite MUI TextField
 * @extends TextField 
 */
 const ValidationTextField = styled(TextField)({
  // on hover on input
  "& .MuiFormLabel-root": {
    direction:"rtl",
    width:"125%!important",
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
 * re Design MUi menu for icons menu
 * @extends MuiMenu
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
/*
 * this is the header component
 */

export default function Header_fa() {
  //four similar function to handle click event
  //set up hook
  /**
   * define user for profile details
   * @constant user
   */
  const [user , setUser] = React.useState(JSON.parse(localStorage.getItem("user")));
/**
 * @constant openmodal for open user profile modal
 */
  const [openModal, setOpenModal] = React.useState(false);
  /**
   * function for open user profile modal
   * @param {event} event 
   */
  const handleOpenModal = (event) => {
    event.stopPropagation();
    event.preventDefault();
  
    setOpenModal(true);
  };
  /**
   * function for close profile modal
   * @param {event} event 
   */
const handleCloseModal = (event) => {
  event.stopPropagation();
    event.preventDefault();
    update_user_info();
    handleClose4();
  setOpenModal(false);
};
/**
 * function for styled menus open and closes
 */
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const open4 = Boolean(anchorEl4);
  const [anchorEl5, setAnchorEl5] = React.useState(null);
  const open5 = Boolean(anchorEl5);
  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };
  const handleClick5 = (event) => {
    setAnchorEl5(event.currentTarget);
  };
  /**
   * handle user form sumbit for send user data to server and update user profile
   * @function 
   * @public
   * 
   */
  const handlesumbit =()=>{
    
    let formData = new FormData();
    formData.append("image_url", user.image_url);
    formData.append("username", user.username);
    formData.append("email", user.email);
    formData.append("first_name", user.first_name);
    formData.append("last_name", user.last_name);
    formData.append("full_name", user.full_name);
    UserService.updateProfile(formData).then(res=>{
      if(res.status===200){
        alerthandle("تغییر اطلاعات موفقیت آمیز بود.","success");
        UserService.getProfile().then(res=>{
          user.email=res.data.email;
          user.full_name=res.data.full_name;
          user.last_name=res.data.last_name;
          user.username=res.data.username;
          user.first_name=res.data.first_name;
          user.image_url=res.data.image_url;
            src_creator(res.data.image_url);
          localStorage.setItem("user",JSON.stringify(user));
        setOpenModal(false);
        })
      }
    })
  }
  /**
   * alert content and type state define
   * @constant content
   * @constant type
   */
  const [content, setContent] = React.useState("");
  const [type, setType] = React.useState("");
  const [snackopen, setSnackopen] = React.useState(false);
  /**
   * create new alert with given message and type
   * @param {string} message alert message
   * @param {string} type alert type
   */
  const alerthandle= (message, type)=> {
    setContent(message);
    setType(type);
    setSnackopen(true);
  }
  const handleClose4 = () => {
    setAnchorEl4(null);
  };
  const handleClose5 = () => {
    setAnchorEl5(null);
  };
  //handle click on the search bar for change search bar style
  /**
   * change serach input style on click
   * @function
   * @public
   */
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
  /**
   * change input style when serach out
   * @function
   * @public
   */
  const Search_out = () => {
    const header_mid = document.getElementById("search");
    header_mid.style.backgroundColor = "#F1F3F4";
    header_mid.style.boxShadow = "none";
    header_mid.style.border = "none";
  };
  /**
   * log out user and dispatch event from event bus
   */
  const logoutUser = () => {
    EventBus.dispatch("logout");
  };
  /**
   * define state for serach input
   */
  const [input, setInput] = React.useState("");
  const changeInput = (e) => {
    setInput(e.target.value);
  };
  /**
   * handle user serach and set query params
   */
  const handleSearch = () => {
    let input_serach = input;
    if(file_type!==""){
      input_serach+="&file_type="+file_type
    }
    if(file_data!==""){
      input_serach+="&from_date="+file_data;
    }
    localStorage.setItem("search_addres", input_serach);
    localStorage.setItem("search", true);
    window.gety();
    EventBus.dispatch("updaterow");
  };
  /**
   * define profile image modal state 
   * define profile_src for give to img  tag src
   */
  const [profile_img, setProfile_img] = React.useState(false);
  const [profile_src, setProfile_src] = React.useState("");
  /**
   * create fake url for user image to give to img tag
   * @function
   * @param {url} src 
   */
  const src_creator = (src) => {
   
    if(typeof src === "object" ){
      const objectUrl = URL.createObjectURL(src)
      setProfile_src(objectUrl)
}
else{
  setProfile_src(src) ;
}

  }
  /**
   * upload user photo to server
   */
  const photo_upload =()=>{
    if(user.image_url===""){
      alerthandle("لطفا تصویر را انتخاب کنید","error");
    }
    else{
      let formData = new FormData();
      formData.append("img", user.image_url);
      formData.append("operation", "add_image_profile");
      UserService.profileImage(formData).then(res=>{
        if(res.status===200){
          alerthandle("تغییر تصویر موفقیت آمیز بود.","success");
          UserService.getProfile().then(res=>{
            user.image_url=res.data.image_url;
            console.log(user)
            localStorage.setItem("user",JSON.stringify(user));
            UserService.getProfilePic(res.data.image_url).then(res=>
              {
                console.log(res)
              })
            setProfile_img(false);
            src_creator(res.data.image_url);
          })
        }
        else{
          alerthandle("خطا در آپلود تصویر","error");
        
        }
      })
      }
    }
    /**
     * remove user photo from server and update user state
     */
    const photo_delete =()=>{
      let formData = new FormData();
      formData.append("operation", "delete_image_profile");
      UserService.profileImage(formData).then(res=>{
        if(res.status===200){
          alerthandle("حذف تصویر موفقیت آمیز بود.","success");
          UserService.getProfile().then(res=>{
            user.image_url=res.data.image_url;
            localStorage.setItem("user",JSON.stringify(user));
            setProfile_img(false);
            src_creator(res.data.image_url);
            update_user_info();
          })
        }
        else{
          alerthandle("خطا در حذف تصویر","error");
          }
      })
      }
      /**
       * update user info getdatas from server
       */
     const update_user_info =()=>{
       UserService.getProfile().then(res=>{
        user.email=res.data.email;
        user.full_name=res.data.full_name;
        user.last_name=res.data.last_name;
        user.username=res.data.username;
        user.first_name=res.data.first_name;
        user.image_url=res.data.image_url;
        src_creator(res.data.image_url);
        localStorage.setItem("user",JSON.stringify(user));
       })
      }
      /**
       * file type state and file data state for serach
       */
   const [file_type, setFile_type] = React.useState("");
   const [file_data, setFile_data] = React.useState("");
   /**
    * change state of file type when changed
    * @param {event} event input event
    */
   const handleTypeChange =(event)=>{
    setFile_type(event.target.value);
    }
    /**
     * 
     * @param {*} unix data unix 
     * @param {*} formatted data formatted 
     * @example 
     * formatted jYYYY-jMM-jDD means data given in jalali calender
     */
    const handleDateChange =(unix, formatted)=>{
      
      setFile_data(moment(formatted,'jYYYY-jMM-jDD').format('YYYY-MM-DD'));
     
      }
      /**
       * return input tag for jalali data picker
       * @param {style} props 
       * @returns {JSX.Element} input tag with function props
       */
      const DatePickerInput=(props)=> {
        return <input className="popo data_input" {...props} />;
      }
      const handletab = (event)=>{
        if(event.key==="Tab"){
          event.stopPropagation();
        }
      }
      const [openpass,setOpenPass]=React.useState(false);
      const hanleclosepass =()=>{
        setOpenPass(false);
      }
      const handleopenpass=()=>{
        setOpenPass(true)
      }
      const [oldpass,setOldpass]=React.useState("");
      const [newpass,setNewpass]=React.useState("");
      const [confpass,setConfpass]=React.useState("");
      const change_pass =()=> {
        const poorRegExp = /[a-z]/;
         const weakRegExp = /(?=.*?[0-9])/;;
         const poorPassword= poorRegExp.test(newpass);
         const weakPassword= weakRegExp.test(newpass);
            if(newpass.length<8){
            alerthandle("طول رمز کمتر از ۸ کاراکتر است.","error")
          }
          else if (!weakPassword){
            alerthandle("رمز باید شامل اعداد باشد","error")
          }
          else if (newpass!==confpass){
            alerthandle("تکرار رمز اشتباه است.","error")
          }
          else{
             const data={
              old_password:oldpass,
              new_password:newpass,
             }
             UserService.changePassword(data).then(
              (response) => {
               alerthandle("تغییر رمز موفقیت آمیز بود.","success")
              },
              (error) => {
                // console.log(error);
                if (error.response.status === 401) {
                  EventBus.dispatch("sessionend");
                } else {
                  alerthandle("تعییر رمز با شکست مواجه شد.", "error");
                }
              }
            );  

          }
      }
  return (
    <section className="Header_section">
      <div className="Header d-flex">
        {/* this is header part first logo and its text  */}
        <div className="col-3m  d-flex   Header_left_fa">
          <div className="w-15">
            <img
              src={require("../assest/png/logo.png")}
              alt="logo"
              id="logo_fa"
            />
          </div>
          <div id="logo_text_fa">
            <div className="logo_text_fa_main mb-2">دادگـان</div>
            <div className="logo_text_fa_sub">انبار داده‌های اتاق وضعیت</div>
          </div>
        </div>

        {/* then design serach box */}
        <div
          className=" col-lg-6 col-md-5 col-sm-6 offs-2 Header_search"
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
              onClick={handleSearch}
            >
              <SearchIcon sx={{ width: "25px", height: "25px" }} />
            </IconButton>
          </Tooltip>
          {/* know on focus on element */}

          <input
            type="text"
            placeholder="جستجو "
            value={input}
            id="search_input"
            onFocus={Search}
            onBlur={Search_out}
            onChange={changeInput}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch();
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
               handleClick5(event);
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
                setFile_data("");
                setFile_type("");
                setInput("");
                window.gety();
                EventBus.dispatch("updaterow");
              }}
            >
              <CloseSharpIcon sx={{ width: "25px", height: "25px" }} />
            </IconButton>
          </Tooltip>
          <StyledMenu
            anchorEl={anchorEl5}
            id="account-menu"
            open={open5}
            onClose={handleClose5}
          
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
          value={file_type}
          
          label="نوع فایل"
          onChange={handleTypeChange}
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
          onChange={handleDateChange}
            
          
          id="datePicker"
          preSelected={(moment().format("jYYYY-jMM-jDD").toString())}
        />
       </div>
</MenuItem>
          </StyledMenu>
        </div>
        {/* icons of right side of the header here */}
        <div className="Header_right col-2 ">
          {/* MUI icon buttons used for icons and TOOl tips used for tooltips */}

          {/* similar to first part icon button same as all  */}
         
          <Tooltip title="نمایه">
            <IconButton
              onClick={handleClick4}
              size="small"
              // sx={{  }}
              aria-controls={open4 ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open4 ? "true" : undefined}
              sx={{
                width: "40px",
                height: "40px",
                marginTop: "5%",
              }}
            >
              <Avatar
                sx={{
                  width: 38,
                  height: 38,
                  backgroundColor: "#01579B",
                  
                }}
                src={user.image_url}
              >
                {user.first_name[0]}
              </Avatar>
            </IconButton>
          </Tooltip>

          <StyledMenu
            anchorEl={anchorEl4}
            id="account-menu"
            open={open4}
            onClose={handleClose4}
                onKeyDown={(e) => {
                  handletab(e);
                }}
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
            <MenuItem onClick={
              (event) => {
              handleOpenModal(event)}}>
              <Avatar
              sx={(profile_src==="" || user.image_url==="")?{
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
              
                
                src={user.image_url}
              />{" "}
              نمایه
            </MenuItem>
            <Modal
                  aria-labeledby="transition-modal-title1"
                  aria-describedby="transition-modal-description1"
                  role="dialog"
                 
                  open={openModal}
                  onClose={
                    (event) => {
                    handleCloseModal(event)}}
                    onKeyDown={(e) => {
                      handletab(e);
                    }}
               
                >
                    
                  <Fade  in={openModal}>
                  
                    <Box className="box_style">
                     <div onMouseEnter={(event)=>{
                       setProfile_img(true)
                     
                      }} 
                      onMouseLeave={(event)=>{
                        setProfile_img(false)
                      }}
                      className="avatar">  
                    
{profile_img?(
 <Avatar
 alt={user.first_name}
 src={profile_src}
 sx={{ width: 60, height: 60, marginBottom: "3%", marginLeft: "0.5%" }}
 
>

<div>
    <label>
          <EditIcon/>
          <input style={{display:"none"}}  onChange={(event)=>{
                            user.image_url=event.target.files[0]
                            src_creator(user.image_url)
                            handleOpenModal(event)
                            }} type="file" name="file"  >
                             
                              </input>
    </label>

                              </div>
                              </Avatar>
                              ):( <Avatar
  alt={user.first_name}
  src={user.image_url===""?src_creator:user.image_url}
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
                          inputProps={{ tabIndex: "1 " }}
                          variant="outlined"
                          label="نام "
                          autoFocus={false} 
                          disabled={user.first_name!==""}
                          placeholder={user.first_name}
                          value={user.first_name
                            !=""?user.first_name:undefined}
                          onChange={(event)=>{
                             user.first_name=event.target.value 

                          }}
                          sx={{ marginBottom: "10px" }}
                        />
                          <ValidationTextField
                          id="outlined-name2"
                          fullWidth
                          key={1}
                          // value={this.state.FolderName}
                          inputProps={{ tabIndex: "2" }}
                          variant="outlined"
                          label="نام خانوادگی"
                          autoFocus={false}
                          disabled={user.last_name!==""}
                          placeholder={user.last_name}
                          value={user.last_name
                            !=""?user.last_name:undefined}
                          sx={{ marginBottom: "10px" }}
                          onChange={(event)=>{
                            user.last_name=event.target.value 

                         }}
                        />
                          <ValidationTextField
                          id="outlined-name3"
                          fullWidth
                          key={5}
                          // value={this.state.FolderName}
                          inputProps={{ tabIndex: "3" }}
                          variant="outlined"
                          label="نام نمایشی"
                          autoFocus={false}   
                          disabled={user.full_name!==""}
                          placeholder={user.full_name}
                          value={user.full_name
                            !=""?user.full_name:undefined}
                          onChange={(event)=>{
                            user.full_name=event.target.value 

                         }}
                          sx={{ marginBottom: "10px" }}
                        />
                        
                        <ValidationTextField
                          id="outlined-name4"
                          fullWidth
                          key={3}
                          // value={this.state.FolderName}
                        
                          variant="outlined"
                          label="نام کاربری"
                          inputProps={{ tabIndex: "4" }}
                         
                          disabled={user.username!==""}
                          placeholder={user.username}
                          value={user.username
                            !=""?user.username:undefined}
                          onChange={(event)=>{
                            user.username=event.target.value 

                         }}
                          sx={{ marginBottom: "10px" }}
                        />
                        <ValidationTextField
                          id="outlined-name5"
                          fullWidth
                          key={4}
                          // value={this.state.FolderName}
                          inputProps={{ tabIndex: "5" }}
                          variant="outlined"
                          label="ایمیل "
                          disabled={user.email!==""}
                          placeholder={user.email}
                          value={user.email
                            !=""?user.email:undefined}
                         
                          onChange={(event)=>{
                            user.email=event.target.value 

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
                            onClick={photo_upload}
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
                            onClick={photo_delete}
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
                            onClick={handlesumbit}
                          >
                            ثبت
                            اطلاعات
                          </button>
                        </div>
                      </Typography>
                        
                    </Box>
                  </Fade>
                </Modal>

                <MenuItem  onClick={
              (event) => {
              handleopenpass(event)}}> 
              <ListItemIcon>
                <VpnKeyRoundedIcon sx={{
               
               marginBottom: "10%",
             }} fontSize="small" />
              </ListItemIcon>
              تغییر رمزعبور
            </MenuItem>
<Modal
                  aria-labeledby="transition-modal-title10"
                  aria-describedby="transition-modal-description10"
                  role="dialog"
                 
                  open={openpass}
                  onClose={
                    (event) => {
                      hanleclosepass(event)}}
                    onKeyDown={(e) => {
                      handletab(e);
                    }}
               
                >
                    
                  <Fade  in={openpass}>
                  
                    <Box className="box_style_pass">
             
                        <ValidationTextField
                          id="outlined-name10"
                          fullWidth
                          key={0}
                          // value={this.state.FolderName}
                          inputProps={{ tabIndex: "1 " }}
                          variant="outlined"
                          label="رمزعبور فعلی "
                          type="password"
                          autoFocus={false} 
                          onChange={(event)=>{
                             setOldpass(event.target.value)

                          }}
                          sx={{ marginBottom: "10px" }}
                        />
                          <ValidationTextField
                          id="outlined-name20"
                          fullWidth
                          key={1}
                          // value={this.state.FolderName}
                          inputProps={{ tabIndex: "2" }}
                          variant="outlined"
                          label="رمزعبور جدید"
                          type="password"
                          autoFocus={false}
                         
                        
                          
                          sx={{ marginBottom: "10px" }}
                          onChange={(event)=>{
                            setNewpass(event.target.value) 

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
                            setConfpass(event.target.value) 

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
                            onClick={change_pass}
                          >
                            تغییر رمز
                          </button>
                        </div>
                      </Typography>
                 
                    </Box>
                  </Fade>
                </Modal>

            <MenuItem>
              <ListItemIcon>
                <LocalLibraryRoundedIcon sx={{
               
               marginBottom: "10%",
             }} fontSize="small" />
              </ListItemIcon>
              راهنما
            </MenuItem>
            <MenuItem onClick={(event)=>{
              history.push("/profileEn")
            }}>
              <ListItemIcon>
                <LanguageRoundedIcon sx={{
               
               marginBottom: "10%",
             }} fontSize="small" />
              </ListItemIcon>
              English
            </MenuItem>
            <MenuItem onClick={logoutUser}>
              <ListItemIcon>
                <LogoutRoundedIcon fontSize="small" />
              </ListItemIcon>
              خروج
            </MenuItem>
          </StyledMenu>
        </div>
      </div>
      <Snackbar
          open={snackopen}
          autoHideDuration={ 3500 }
          onClose={()=>{ setSnackopen(false);}}
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
                  
                  (event) => {
                       setSnackopen(false);
                      }
                }
              >
                {content}
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            severity={type}
            sx={{ width: "100%" }}
          >
           
          </Alert>
        </Snackbar>
    </section>
  );
}
