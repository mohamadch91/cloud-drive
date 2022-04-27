import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Form from "react-validation/build/form";
import { FormControl, Grid } from "@mui/material";
import { InputLabel } from "@mui/material";
import Input from "@mui/material/Input";
import { FormHelperText } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import "./cmp_css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import EventBus from "../common/EventBus";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
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

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};
const ValidationTextField = styled(TextField)({
  // on hover on input
  "& .MuiFormLabel-root": {
    direction:"rtl",
    width:"120%!important",
    textAlign: "start!important",
  },
  "& .MuiOutlinedInput-notchedOutline legend":{
      width:"40%",
      direction:"ltr",
      textAlign:"start",
  },
  "& .MuiFormLabel-root:focus":{
    textAlign:"end!important"
  },
  "&input::placeholder": {
    justifyContent: "center",

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
      name: "",
      values: {
        showPassword: false,
      },
      snackopen: false,
      loadfile: false,
      type: "success",
      progress: 0,
      source: null,
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
      name: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  alerthandle(message, type) {
    this.setState({ content: message, type: type, snackopen: true });
  }
  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    this.form.validateAll();
    if (this.state.username == "") {
      this.alerthandle("نام کاربری را وارد کنید", "error");
      this.setState({
        loading: false,
      });
      return;
    }
    if (this.state.password == "") {
      this.alerthandle("پسورد را وارد کنید", "error");
      this.setState({
        loading: false,
      });
      return;
    }
    const { dispatch, history } = this.props;

    if (this.checkBtn.context._errors.length === 0) {
      dispatch(login(this.state.username, this.state.password))
        .then(() => {
          this.alerthandle("ورود موفق", "success");
          history.push("/profile");
          window.location.reload();
        })
        .catch(() => {
          this.alerthandle("ورود ناموفق ", "error");
          this.setState({
            loading: false,
          });
        });
    } else {
      this.alerthandle("ورود ناموفق", "error");
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
      },
    });
    // setValues({
    //   ...values,
    //   showPassword: !values.showPassword,
    // });
  };

  handleMouseDownPassword(event) {
    event.preventDefault();
  }
  handleClosesnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ snackopen: false });
  };
  render() {
    const { isLoggedIn, message } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/profile" />;
    }

    return (
      <div className=" ms-4 offset-4 offset-md-4 offset-sm-0 col-3 col-md-3 col-sm-11">
        <div className="login-form-fa">
          <div className="logos">
            <div className="logo">
              <img
                src={require("../assest/svg/Drive-Logo.svg")}
                alt="logo"
                width="20%"
              />
            </div>
 
            <div id="sign_text">دادگان</div>

            <div id="continue_text">ورود به انبار داده‌های اتاق وضعیت</div>
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
                validations={[required]}
                placeholder="ایمیل یا تلفن همراه"
                onChange={this.onChangeUsername}
              />
              <a id="forgot_email" href="google.com">
                رمز خود را فراموش کرده اید؟
              </a>
            </div>
            <div className="input_box_fa">
              <ValidationTextField
                id="outlined-adornment-password"
                fullWidth
                label="رمز عبور"
                value={this.state.password}
                type={this.state.values.showPassword ? "text" : "password"}
                validations={[required]}
                placeholder="رمز عبور"
                onChange={this.onChangePassword}
              />
              <div className="show_pass">
                <Checkbox
                  aria-label="toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword}
                >
                  {this.state.values.showPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </Checkbox>

                <span id="pass_text_fa">نشان دادن رمز</span>
              </div>
            </div>

            <div id="sumbit_fa">
              <a id="account_fa" href="google.com">
                ساختن اکانت جدید
              </a>
              <div className="form-group flex ">
                <button
                  variant="contained"
                  className="btn btn-primary btn-block"
                  disabled={this.state.loading}
                >
                  ورود
                  {this.state.loading && (
                    <span className="pt-2 spinner-border spinner-border-sm"></span>
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
          <div className="text">
            <Link to={"/"} className="text">
              فارسی
            </Link>
          </div>
          <div className="text">
            <Link to={"/LoginEn"} className="text">
              انگیلیسی
            </Link>
          </div>
        </div>
        <Snackbar
          open={this.state.snackopen}
          autoHideDuration={6000}
          onClose={this.handleClosesnack}
        >
          <Alert
            onClose={
              this.state.loadfile
                ? (event) => {
                    this.handleClosesnack();
                  }
                : (event) => {
                    this.handleClosesnack();
                  }
            }
            severity={this.state.type}
            sx={{ width: "100%" }}
          >
            {this.state.loadfile ? (
              <div className="d-flex text-white">
                <CircularProgressWithLabel
                  value={this.state.progress}
                  color="primary"
                />
                file uploading
              </div>
            ) : (
              <div>{this.state.content}</div>
            )}
          </Alert>
        </Snackbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message,
  };
}

export default connect(mapStateToProps)(LoginFA);
