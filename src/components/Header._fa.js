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

 const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width:"25%",
  height: "80%",
    overflowY: "scroll",
  outline: "none",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

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
  const [user , setUser] = React.useState(JSON.parse(localStorage.getItem("user")));
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
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = (event) => {
    event.stopPropagation();
    event.preventDefault();
  
    setOpenModal(true);
  };
const handleCloseModal = (event) => {
  event.stopPropagation();
    event.preventDefault();
    update_user_info();
    handleClose4();
  setOpenModal(false);
};
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
  const [content, setContent] = React.useState("");
  const [type, setType] = React.useState("");
  const [snackopen, setSnackopen] = React.useState(false);
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
  const logoutUser = () => {
    EventBus.dispatch("logout");
  };
  const [input, setInput] = React.useState("");
  const changeInput = (e) => {
    setInput(e.target.value);
  };
  const handleSearch = () => {
    let input_serach = input;
    if(file_type!==""){
      input_serach+="&file_type="+file_type
    }
    if(file_data!==""){
      input_serach+="&form_data="+file_data;
    }
    localStorage.setItem("search_addres", input_serach);
    localStorage.setItem("search", true);
    window.gety();
    EventBus.dispatch("updaterow");
  };
  const [profile_img, setProfile_img] = React.useState(false);
  const [profile_src, setProfile_src] = React.useState("");
  const [profile_image,setProfile_image]=React.useState(null);
  const src_creator = (src) => {
   
    if(typeof src === "object" ){
      const objectUrl = URL.createObjectURL(src)
      setProfile_src(objectUrl)
}
else{
  setProfile_src(src) ;
}

  }
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
   const [file_type, setFile_type] = React.useState("");
   const [file_data, setFile_data] = React.useState("");
   const handleTypeChange =(event)=>{
    setFile_type(event.target.value);
    }
    const handleDateChange =(unix, formatted)=>{
      
      setFile_data(moment(formatted,'jYYYY-jMM-jDD').format('YYYY-MM-DD'));
     
      }
      const DatePickerInput=(props)=> {
        return <input className="popo data_input" {...props} />;
      }
      const  stringconvertor = (str) => {
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
        // console.log(newstr)
        return newstr;
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
                  disableAutoFocus={true}
                  open={openModal}
                  onClose={
                    (event) => {
                    handleCloseModal(event)}}
                  // closeAfterTransition
                  // BackdropComponent={Backdrop}
                  // BackdropProps={{
                  //   timeout: 500,
                  // }}
                >
                    
                  <Fade disableAutoFocus={true} in={openModal}>
                  
                    <Box disableAutoFocus={true} className="box_style">
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
                          autoFocus={false}
                          variant="outlined"
                          label="نام "
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
                          autoFocus={false}
                          variant="outlined"
                          label="نام خانوادگی"
                          
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
                          autoFocus={false}
                          variant="outlined"
                          label="نام نمایشی"
                          
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
                          autoFocus={false}
                          variant="outlined"
                          label="نام کاربری"
                          
                         
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
                          autoFocus={false}
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
