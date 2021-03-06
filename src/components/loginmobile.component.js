import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Form from "react-validation/build/form";
import { alpha, styled } from "@mui/material/styles";
import "./cmp_css/login.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import CheckButton from "react-validation/build/button";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import PropTypes from "prop-types";
import CircularProgress from '@mui/material/CircularProgress';
import { Grid } from "@mui/material";
/**
 * english login mobile component
 * docs similar to persian component loginFA
 * @component LoginM
 * 
 */
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
      width:"32%",
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

class LoginM extends Component {
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
      snackopen:false,
      loadfile:false,
      type:"success",
      progress:0,
      source:null,
    };
  }
  alerthandle(message,type){
    this.setState({content:message,type:type,snackopen:true})
  }
  onChangeUsername(e) {
    console.log(e.target.value);
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

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    this.form.validateAll();
    if(this.state.username==""){
      this.alerthandle("Username is required","error")
      this.setState({
        loading: false,
      });
      return;

    }
    if(this.state.password==""){
      this.alerthandle("Password is required","error")
      this.setState({
        loading: false,
      });
      return;
    }
    const { dispatch, history } = this.props;

    if (this.checkBtn.context._errors.length === 0) {
      dispatch(login(this.state.username, this.state.password))
        .then(() => {
           
          this.alerthandle("Login Successful","success");
          history.push("/profileEn");
          window.location.reload();
        })
        .catch(() => {
          this.alerthandle("Login failed ","error")
          this.setState({
            loading: false,
          });
        });
    } else {
      this.alerthandle("Login failed ","error")
      this.setState({
        loading: false,
      });
    }
  }
  handleClosesnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({snackopen:false})
  };
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

  render() {
    const { isLoggedIn, message } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/profileEn" />;
    }

    return (
      <Grid>
        <Grid item xs={0}></Grid>
        <Grid item xs={12}>
          <div className="login-formm">
            <div className="logos">
              <div className="logo">
                <img
                  src={require("../assest/png/drive.png")}
                  alt="logo"
                  width="40%"
                />
              </div>
              <br />
              <div id="sign_text">Sign in </div>
              <br />
              <div id="continue_text">to continue to Google Drive </div>
            </div>
            <Form
              onSubmit={this.handleLogin}
              ref={(c) => {
                this.form = c;
              }}
            >
              <div className="input_box">
                <ValidationTextField
                  id="outlined-name"
                  fullWidth
                  label="Email or Phone"
                  value={this.state.name}
                  defaultValue="a@gmail.com"
                  validations={[required]}
                  placeholder="Email or Phone"
                  onChange={this.onChangeUsername}
                  sx={{ marginBottom: "10px" }}
                />
                <a id="forgot_email" href="google.com">
                  Forgot email?
                </a>
              </div>
              <div className="input_box">
                <ValidationTextField
                  id="outlined-adornment-password"
                  fullWidth
                  label="password"
                  value={this.state.password}
                  defaultValue="a@gmail.com"
                  type={this.state.values.showPassword ? "text" : "password"}
                  validations={[required]}
                  placeholder="password"
                  onChange={this.onChangePassword}
                  sx={{ marginBottom: "10px" }}
                />
                {/* <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={this.state.values.showPassword ? "text" : "password"}
                value={this.state.values.password}
                onChange={this.handleChange1("password")}
                label="Password"
              /> */}

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

                  <span id="pass_text">Show password</span>
                </div>
              </div>
              <div id="help_text">
                Not your computer? Use Guest mode to sign in privately.
                <br />
                <a id="forgot_email" href="google.com">
                  Learn more
                </a>
              </div>
              <div id="sumbit">
                <a id="account" href="google.com">
                  Create account
                </a>
                <div className="form-group">
                  <button
                    variant="contained"
                    className="btn btn-primary btn-block"
                    disabled={this.state.loading}
                  >
                    next
                    {this.state.loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                  </button>
                </div>

                {/* <div>
                  {message && <Alert severity="error">{message}</Alert>}
                </div> */}
                <CheckButton
                  style={{ display: "none" }}
                  ref={(c) => {
                    this.checkBtn = c;
                  }}
                />
              </div>
            </Form>
            <div id="helps" className="mt-1">
              <div className="text"> Help</div>
              <div className="text"> Privacy</div>
              <div className="text"> Terms</div>
              <div className="text">
                <Link to={"/LoginFa"} className="text">
                  FA
                </Link>

                <Link to={"/Login"} className="text">
                  /EN
                </Link>
              </div>
            </div>
          </div>
          <Snackbar open={this.state.snackopen} 
        autoHideDuration={6000} onClose={this.handleClosesnack}>
         
        <Alert onClose={this.state.loadfile?(  (event)=>{
                
                this.handleClosesnack()
              }):(
          (event)=>{
              
                this.handleClosesnack()
              })} severity={this.state.type} sx={{ width: '100%' }}>
          {this.state.loadfile?( <div className="d-flex text-white">
            <CircularProgressWithLabel value={this.state.progress} color="primary" />
            file uploading
             
          </div>):
          (
            <div>
              {this.state.content}
            </div>

          )}
        </Alert>
      </Snackbar>
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
    message,
  };
}

export default connect(mapStateToProps)(LoginM);
