import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/login.component";
import LoginFa from "./components/loginFa.component";
import LoginmFa from "./components/loginmobilefa.component";
import Register from "./components/register.component";
import Profile_mobile from "./components/mobile.component";
import Profile_mobileFa from "./components/mobileFa.component";
import LoginM from "./components/loginmobile.component";
import Main from "./pages/main";
import Main_fa from "./pages/main_fa";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import Notfound from "./pages/404"
import Construction from "./pages/construction"
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from "./helpers/history";
import EventBus from "./common/EventBus";
import { ThemeProvider, createMuiTheme } from '@mui/material/styles';
/**
 * Define alert component from material ui
 * @param {*} props
 * @returns {*} alert component with input props
 */
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" sx={{direction:"rtl"}} {...props} />;
});
/**
 * Define App component
 * render the app
 * assemble all components to render
 * @param {*} props
 * @returns {*} App component
 */
class App extends Component {
  constructor(props) {
    super(props);
    
    {/**
      * Define state of App component
      * @param {*} props
      * @param currentUser current logged in user if logout or session end then currentUser is undefined
      * @param {*} snackopen true if snackbar is open
      * @param {*} content content of snackbar
  */}

    this.state = {
      currentUser: undefined,
      content:"",
      type:"error",
      snackopen:false,

    };
    {/**
    * when Url change then clear message
  */}
    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  /**
  * @function handleClosesnack
  * @description close snackbar
  * @returns {void}
  * @memberof App
  * @public
  * @param {reason} reason of close
  * @param {event} event of close
  */
  handleClosesnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    {/**
      * set snackbar to close
  */}
    this.setState({snackopen:false})
  };
  /**
   * @function componentDidMount
   * @description when component mount then check if user is logged in
   * @returns {void}
   * @memberof App
   * @public
   */
  componentDidMount() {
    // localStorage.setItem("Folders",JSON.stringify([]));
    const user = this.props.user;
    
    if (user) {
      this.setState({
        currentUser: user,

      });
    }
    
    /**
     * Define event bus event when logout
     * 
     */
    EventBus.on("logout", () => {
      this.logOut();
    });
    /** 
     * Define event bus event when session end
     * alert user that session end
     * logout user
     */
    EventBus.on("sessionend", () => {
      this.alerthandle("نشست کاربری به اتمام رسیده است.","error")
      this.logOut();
    });
    
  }
  /**
   * 
   * @param {String} message alert message
   * @param {String} type  alert type
   */
  alerthandle(message,type){
    this.setState({content:message,type:type,snackopen:true})
  }
  /**
   * @function componentWillUnmount 
   * @description when component unmount then remove event bus events
   */
  componentWillUnmount() {
    EventBus.remove("logout");
    EventBus.remove("sessionend");
    
  }
  /**
   * @function logOut
   * @description logout user
   * @returns {void}
   */
  logOut() {
    this.props.dispatch(logout());
    this.setState({
      // showModeratorBoard: false,
      // showAdminBoard: false,
      currentUser: undefined,
    });
  }
  /**
   * 
   * @returns {*} render app return app component JSX code
   * @memberof App
   * @public
   */
  render() {
    const { currentUser } =  this.state;
    
    return (
      /**
       * Router for all pages
       */
      <Router history={history}>
        {/**
         * Switch for Routing beetween pages
         */}
        <Switch>
          {/**
           * uncomment this part if you want home page come first
           */}
          {/* <Route exact path={["/", "/homefa"]}>

          </Route>
          <Route exact path={["/fa", "/homefa"]}>
           
          </Route> */}
            {/* {window.screen.width  >768 ?(<Route exact path="/" component={Homefa} />):(<Route exact path="/" component={Homefa} />)} */}
          {/** 
           * check screen size and render login page for mobile or desktop
           */}
          {window.screen.width  >768 ?(<Route exact path="/" component={LoginFa} />):(<Route exact path="/" component={LoginmFa} />)}
          <Route exact path="/register" component={Register} />
         {/**
          * check screen size and render English login page for mobile or desktop
          */}
          {window.screen.width < 768 ?(<Route exact path="/loginEn" component={LoginM} />):(<Route exact path="/loginEn" component={Login} />)}
          {/**
           * check screen size and render English Profile page for mobile or desktop
        */}
          {window.screen.width < 768 ?(<Route exact path="/profileEn" component={Profile_mobile} />):(
          
          <Route exact path="/profileEn" component={Main} />
          )}
          {/**
           * check screen size and render Persian Profile page for mobile or desktop
          * */}

           {window.screen.width > 768 ?(<Route exact path="/profile" component={Main_fa} />):(<Route exact path="/profile" component={Profile_mobileFa} />)}
          {/**
           * under construction page
           * if site is under construction then render under construction page and comment all other pages
           * don't forget to change path to  "/"
           * */}
           <Route exact path="/under-construction" component={Construction}/>
           <Route component={Notfound}/>
          
        </Switch>
        {/**
         * snackbar for alerts
         * @param {*} props MUI alert props
         * @param {*} open true if snackbar is open
         * @param {*} content content of snackbar
         * @param {*} type type of alert
         * @param {*} handleClose handle close of snackbar
         * 
         */}
        <Snackbar open={this.state.snackopen} 
        autoHideDuration={3500} onClose={this.handleClosesnack}  anchorOrigin={{ vertical:'bottom', horizontal:'right' }}>
         
        <Alert action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              sx={{marginRight:"25px"}}
              onClick={(
          (event)=>{
              
                this.handleClosesnack()
              })}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }  severity={this.state.type} sx={{ width: '100%' }}>
         
            <div>
              {this.state.content}
            </div>

          
        </Alert>
      </Snackbar>
      </Router>
    );
  }
}
/**
 * 
 * @param {*} state 
 * @returns {*} return state of redux store
 * @returns {object} user object
 * connect redux store to app component
 */
function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}
/**
 * export app component
 */
export default connect(mapStateToProps)(App);
