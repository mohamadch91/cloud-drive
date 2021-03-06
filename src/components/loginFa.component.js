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

import Modal from '@mui/material/Modal';

/**
 * define component for alerts handle
 * @component 
 * @returns Mui alert components
 * 
 */
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
/**
 * component upload progress bar
 * @component
 * @param {style} props 
 * @returns {JSX.Element} return box with circular progress bor
 */
 const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};
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

/**
 * overwrite MUI TextField
 * @extends TextField 
 */
const ValidationTextField = styled(TextField)({
  // on hover on input
  "& .MuiFormLabel-root": {
    direction: "rtl",
    width: "123%!important",
    textAlign: "start!important",
  },
  "& .MuiOutlinedInput-notchedOutline legend": {
    width: "max-content!important",
    direction: "ltr",
    textAlign: "start",
  },
  "& .MuiFormLabel-root:focus": {
    textAlign: "end!important",
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
/**
 * function for check input is not empty
 * @function
 * @param string  value input value
 * @returns {JSX.element} return error message if input is empty or return null
 */
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
/**
 * component for login page
 * @component
 * 
 */
class LoginFA extends Component {
  /**
   * 
   * @param {props} props props of component
   */
  constructor(props) {
    super(props);
    /**
     * bind functions to this
     */
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.openmodal = this.openmodal.bind(this);
    this.closemodal = this.closemodal.bind(this);
    window.alerthandle = this.alerthandle.bind(this);
    /**
     * define state for component
     */
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
      open:false
    };
  }
  openmodal(){
    this.setState({open:true})
  }
  closemodal(){
    this.setState({open:false})
  }
/**
 * user name change handler
 * @param {event} e event of click
 */
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
      name: e.target.value,
    });
  }
/**
 * password change handler
 * @param {event} e event of click
 */
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  /**
   * alert handle function
   * @param {string} message message to show
   * @param {string} type type of message
   */
  alerthandle(message, type) {
    this.setState({ content: message, type: type, snackopen: true });
  }
  /**
   * send login data to server
   * @param {event} e sumbit form event 
   * @returns promise
   */
  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    this.form.validateAll();
    if (this.state.username == "") {
      this.alerthandle("?????? ???????????? ???? ???????? ????????", "error");
      this.setState({
        loading: false,
      });
      return;
    }
    if (this.state.password == "") {
      this.alerthandle("????????????????? ???? ???????? ????????", "error");
      this.setState({
        loading: false,
      });
      return;
    }
    const { dispatch, history } = this.props;

    if (this.checkBtn.context._errors.length === 0) {
      dispatch(login(this.state.username, this.state.password))
        .then(() => {
          this.alerthandle("???????? ????????", "success");
          history.push("/profile");
          // window.location.reload();

          window.location.reload();
        })
        .catch(() => {
          this.alerthandle(" ???????? ???????????? ?????? ", "error");
          this.setState({
            loading: false,
          });
        });
    } else {
      this.alerthandle("???????? ???????????? ??????", "error");
      this.setState({
        loading: false,
      });
    }
  }
/**
 * handle show password check box
 * @function
 */
  handleClickShowPassword = () => {
    this.setState({
      values: {
        ...this.state.values,
        showPassword: !this.state.values.showPassword,
      },
    });
   
  };
/**
 * handle mouse down password
 * @function
 * @param {event} e event of click
 */
  handleMouseDownPassword(event) {
    event.preventDefault();
  }
  /**
   * close alert snack
   * @param {event} event event of click 
   * @param {*} reason reason of close
   * @returns null
   */
  handleClosesnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ snackopen: false });
  };
   /**
   * convert numbers to persian nambers
   * @param {string} str input string
   * @returns converted to persian string
   */
    stringconvertor = (str) => {
      let newstr = "";
      for (let i = 0; i < str.length; i++) {
        if (str[i] === "1") {
          newstr += "??";
        } else if (str[i] === "2") {
          newstr += "??";
        } else if (str[i] === "3") {
          newstr += "??";
        } else if (str[i] === "4") {
          newstr += "??";
        } else if (str[i] === "5") {
          newstr += "??";
        } else if (str[i] === "6") {
          newstr += "??";
        } else if (str[i] === "7") {
          newstr += "??";
        } else if (str[i] === "8") {
          newstr += "??";
        } else if (str[i] === "9") {
          newstr += "??";
        } else if (str[i] === ".") {
          newstr += ".";
        } else if (str[i] === "0") {
          newstr += "??";
        } else {
          newstr += str[i];
        }
      }
      // console.log("new"+newstr)
      return newstr;
    };
  render() {
    /**
     * check if user is logged in
     */
    const { isLoggedIn, message } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/profile" />;
    }

    return (
      <section className=" ms-4  col-35  ">
        <div className="login-form-fa">
          <div className="logos">
            <div className="logo_title_fa">
              <div className="logo">
                <img
                  src={require("../assest/png/logo.png")}
                  alt="logo"
                  width="100%"
                />
              </div>

              <div id="sign_text">??????????????</div>
            </div>
            <div id="continue_text">???????? ???? ?????????? ????????????????? ???????? ??????????</div>
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
                label=" ?????? ????????????"
                value={this.state.name}
                validations={[required]}
                placeholder="?????? ????????????"
                onChange={this.onChangeUsername}
              />
               <button type="button" onClick={this.openmodal}    id="forgot_email" >
                 ???????????? ???? ???????????? ???????? ????????
                </button>
                <Modal
        open={this.state.open}
        onClose={this.closemodal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h4">
           { this.stringconvertor(" ?????? ???????????? ???? ???????????? ?????????????????, ????????????????????? ?? ????????????????? ?????? ???? ???? ?????? ?????????? (???????? ?????????????????????: 09939924509) ?????????? ????????.")}
         
          </Typography>
         
          
        </Box>
      </Modal>
            </div>
            <div className="input_box_fa">
              <ValidationTextField
                id="outlined-adornment-password"
                fullWidth
                label="????????? ????????"
                value={this.state.password}
                type={this.state.values.showPassword ? "text" : "password"}
                validations={[required]}
                placeholder="????????? ????????"
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

                <span id="pass_text_fa">???????? ???????? ??????</span>
              </div>
            </div>

            <div id="sumbit_fa">
              <div id="create-ac-fa">
                <a
                  style={{ pointerEvents: "none" }}
                  id="account_fa"
                  href="drive.sitroom.ir"
                >
           
                </a>
              </div>
              <div className=" flex ">
                <button
                  variant="contained"
                  className="btn btn-primary btn-block"
                  disabled={this.state.loading}
                >
                  ????????
                  {this.state.loading && (
                    <span className="pt-2 spinner-border spinner-border-sm"></span>
                  )}
                </button>
              </div>
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
            <Link to={"/LoginEn"} className="text">
              English
            </Link>
          </div>
        </div>
        <Snackbar
          open={this.state.snackopen}
          autoHideDuration={3500}
          onClose={this.handleClosesnack}
          anchorOrigin={{ vertical:'bottom', horizontal:'right' }}
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
      </section>
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
