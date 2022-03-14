import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Form from "react-validation/build/form";
import { FormControl, Grid } from "@mui/material";
import { InputLabel } from "@mui/material";
import Input from "@mui/material/Input";
import { FormHelperText } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import './cmp_css/login.css';
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";
// import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import Alert from '@mui/material/Alert';
import { Link } from "react-router-dom";
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
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class LoginFA extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.state = {
      username: "",
      password: "",
      loading: false,
      name:"",
      values:{
      showPassword: false
      }
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
      name: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    this.form.validateAll();

    const { dispatch, history } = this.props;

    if (this.checkBtn.context._errors.length === 0) {
      dispatch(login(this.state.username, this.state.password))
        .then(() => {
          history.push("/profile");
          window.location.reload();
        })
        .catch(() => {
          this.setState({
            loading: false
          });
        });
    } else {
      this.setState({
        loading: false,
      });
    }
  }


  

  handleClickShowPassword = () => {
    this.setState({
      values: {
        ...this.state.values,
        showPassword: !this.state.values.showPassword,
      }
    });
    // setValues({
    //   ...values,
    //   showPassword: !values.showPassword,
    // });
  }

   handleMouseDownPassword (event)  {
    event.preventDefault();
  }

  render() {
    const { isLoggedIn, message } = this.props;

    // if (isLoggedIn) {
    //   return <Redirect to="/profile" />;
    // }

    return (
        <Grid container>
        <Grid item xs={4.52}></Grid>
        <Grid item xs={3}>
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
            <Form
            onSubmit={this.handleLogin}
            ref={(c) => {
              this.form = c;
            }}
          >
            <div className="input_box_fa">
              <ValidationTextField
                id="outlined-name"
                fullWidth
                label="ایمیل یا تلفن همراه"
                value={this.state.name}
                defaultValue="a@gmail.com"
                validations={[required]}
                placeholder="ایمیل یا تلفن همراه"
                onChange={this.onChangeUsername}
                sx={{ marginBottom: "10px" }}
              />
              <a id="forgot_email" href="google.com">
                رمز خود را فراموش کزده اید؟
              </a>
            </div>
            <div className="input_box_fa">
            <ValidationTextField
              id="outlined-adornment-password"
              fullWidth
              label="رمز عبور"
              value={this.state.password}
              defaultValue="a@gmail.com"
              type={this.state.values.showPassword ? "text" : "رمز عبور"}
              validations={[required]}
              placeholder="رمز عبور"
              onChange={this.onChangePassword}
              
              sx={{ marginBottom: "10px" }}
            />
              <div className="show_pass">
                <Checkbox
                  aria-label="toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword}
                >
                  {this.state.values.showPassword ? <VisibilityOff /> : <Visibility />}
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
              <div className="form-group">
            <button variant="contained" className="btn btn-primary btn-block"  disabled={this.state.loading}>
              next
              {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
            </button>
              </div>
              
      
            {/* <div>
            {message && (
              <Alert severity="error">{message}</Alert>
            )}
            </div> */}
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
          </div>
          </Form>
          </div>
          <div id="helps_fa">
            <div className="text"> کمک</div>
            <div className="text">حریم شخصی </div>
            <div className="text"> مقررات</div>
            <div className="text">
              <Link to={"/LoginFa"} className="text">
                فا 
              </Link>
             /<Link to={"/Login"} className="text">
                    ان
              </Link>
              
            </div>
           
          </div>
        </Grid>
      </Grid>
     
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message
  };
}

export default connect(mapStateToProps)(LoginFA);
