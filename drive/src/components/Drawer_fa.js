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
import { Link } from "react-router-dom";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

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
      fontSize: 22,
      "& .MuiSvgIcon-root": {
        fontSize: 20,
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
    direction: "rtl",
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
  direction: "rtl",
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
//   const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);
export default function DrawerLeft_fa() {
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  return (
    <section className="drawer-left" style={{ overflow: "auto" }}>
      <div className="left_drawer">
        <ColorButton
          id="demo-customized-button"
          aria-controls={open1 ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open1 ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick1}
          sx={{
            width: "50%",
            height: "17%",
            marginTop: "5%",
            paddingRight: "5%",
            fontSize: "20px",
            marginRight: "25px",
            marginLeft: "10%",
          }}
        >
          <AddIcon
            sx={{
              width: "40px",
              height: "40px",
              
              color: "red",
            }}
            s
          />
          جدید
        </ColorButton>
        <StyledMenU
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl1}
          open={open1}
          onClose={handleClose1}
        >
          <MenuItem onClick={handleClose1} disableRipple>
            <label htmlFor="icon-button-file">
              <Input accept="image/*" id="icon-button-file" type="file" />
              <IconButton
                aria-label="upload picture"
                component="span"
                sx={{ fontSize: "18px" }}
              >
                <CreateNewFolderOutlinedIcon
                  sx={{ width: "25px", height: "25px",marginLeft:"10%" }}
                />{" "}
                پوشه
              </IconButton>
            </label>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose1} disableRipple>
            <label htmlFor="icon-button-file">
              <Input accept="image/*" id="icon-button-file" type="file" />
              <IconButton
                aria-label="upload picture"
                component="span"
                sx={{ fontSize: "18px" }}
              >
                <UploadFileOutlinedIcon
                  sx={{ width: "25px", height: "25px" ,marginLeft:"10%" }}
                />
               آپلود فایل
              </IconButton>
            </label>
          </MenuItem>

          <MenuItem onClick={handleClose1} disableRipple>
            <label htmlFor="icon-button-file" style={{ fontSize: "10px" }}>
              <Input accept="image/*" id="icon-button-file" type="file" />
              <IconButton
                aria-label="upload picture"
                component="span"
                sx={{ fontSize: "18px" }}
              >
                <DriveFolderUploadOutlinedIcon
                  sx={{ width: "25px", height: "25px", fontSize: "10px" ,marginLeft:"10%" }}
                />
                آپلود فولدر
              </IconButton>
            </label>
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleClose1} disableRipple>
            قوانین
          </MenuItem>
        </StyledMenU>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
        >
          <MenuItem disableRipple sx={{ fontSize: "14px", marginTop: "2%" }}>
            <SdStorageOutlinedIcon
              sx={{
                width: "25px",
                height: "25px",
                marginLeft: "4%",
                marginRight: "7%",
                color: "#5F6368",
              }}
            />
            فضای من
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
            دستگاه های من
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
            اشتراک گذاری
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
            قبلی ها
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
            ستاره دار ها
          </MenuItem>
          <MenuItem disableRipple sx={{ fontSize: "14px", marginTop: "2%" }}>
            <DeleteOutlineOutlinedIcon
              sx={{
                width: "25px",
                height: "25px",
                marginLeft: "4%",
                marginRight: "7%",
                color: "#5F6368",
              }}
            />
            سطل زباله
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
                marginRight: "10%",
                color: "#5F6368",
              }}
            />
            فضای باقی مانده
          </MenuItem>
          <BorderLinearProgress
            sx={{ marginRight: "10%", direction: "rtl" }}
            variant="determinate"
            value={50}
          />
          <span
            style={{ marginRight: "11%", fontSize: "13px ", color: "#5F6368" }}
          >
            7.5 GB of 15 GB used
          </span>
          <Button
            size="small"
            variant="outlined"
            sx={{ marginRight: "12%", marginTop: "3.5%", fontSize: "14px " }}
          >
            {" "}
            خرید فضای اضافی{" "}
          </Button>
          <div style={{marginTop:"2%",marginRight:"12%"}}>
          <Link to={"/profileFa"} className="">فارسی
          </Link>
          <Link to={"/profile"} className="">/انگیلیسی
          </Link>
          </div>
        </StyledMenu>
      </div>
    </section>
  );
}
