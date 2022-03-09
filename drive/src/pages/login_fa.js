import { FormControl, Grid } from "@mui/material";
import { InputLabel } from "@mui/material";
import Input from "@mui/material/Input";
import { FormHelperText } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import "./login.css";
import { TextField } from "@mui/material";
import * as React from "react";
import Button from "@mui/material/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";
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
const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 20px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});
function Auth_User_fa() {
  // write function to change grids when button clicked

  const [name, setName] = React.useState("admin");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange1 = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid container>
      <Grid item xs={4.52}></Grid>
      <Grid item xs={2.7}>
        <div className="login-form-fa">
          <div className="logos">
            <div className="logo">
              <img
                src={require("../assest/svg/Google_2015_logo.svg.png")}
                alt="logo"
                width="20%"
              />
            </div>
            <br />
            <div id="sign_text">ورود </div>
            <br />
            <div id="continue_text">برای ادامه به سامانه </div>
          </div>
          <div className="input_box_fa">
            <ValidationTextField
              id="outlined-name"
              fullWidth
              label="ایمیل یا تلفن همراه"
              value={name}
              defaultValue="a@gmail.com"
              required
              placeholder="ایمیل یا تلفن همراه"
              onChange={handleChange}
              sx={{ marginBottom: "10px" }}
            />
            <a id="forgot_email" href="google.com">
              رمز خود را فراموش کزده اید؟
            </a>
          </div>
          <div className="input_box_fa">
            <FormControl sx={{  width: "100%" }} variant="outlined">
              <InputLabel sx={{direction:"rtl"}} htmlFor="outlined-adornment-password">
                رمز عبور
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "رمز عبور"}
                value={values.password}
                onChange={handleChange1("password")}
                label="رمز عبور"
                sx={{ direction: "rtl" }}
              />
            </FormControl>
            <div className="show_pass">
              <Checkbox
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </Checkbox>

              <span id="pass_text">نشان دادن رمز</span>
            </div>
          </div>
          <div id="help_text">
            دستگاه شما نیست به صورت مخفیانه وارد شوید
            <br />
            <a id="forgot_email" href="google.com">
              بیشتر بدانید
            </a>
          </div>
          <div id="sumbit_fa">
            <a id="account_fa" href="google.com">
              ساختن اکانت جدید
            </a>

            <BootstrapButton variant="contained" disableRipple>
              ادامه
            </BootstrapButton>
          </div>
        </div>
        <div id="helps_fa">
          <div className="text"> کمک</div>
          <div className="text">حریم شخصی </div>
          <div className="text"> مقررات</div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Auth_User_fa;
