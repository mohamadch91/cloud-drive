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

// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import { ThemeProvider, createMuiTheme } from '@mui/material/styles';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" sx={{direction:"ltr"}} {...props} />;
});
const theme1 = createMuiTheme({
  typography: {
    direction:"rtl",
  }});
class App extends Component {
  constructor(props) {
    super(props);
    

    this.state = {
      // showModeratorBoard: false,
      // showAdminBoard: false,
      currentUser: undefined,
      content:"",
      type:"error",
      snackopen:false,

    };
    
    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }
  handleClosesnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({snackopen:false})
  };
  componentDidMount() {
    // localStorage.setItem("Folders",JSON.stringify([]));
    const user = this.props.user;
    
    if (user) {
      this.setState({
        currentUser: user,

      });
    }
   

    EventBus.on("logout", () => {
      this.logOut();
    });
    EventBus.on("sessionend", () => {
      this.alerthandle("نشست کاربری به اتمام رسیده است.","error")
      this.logOut();
    });
    
  }
  alerthandle(message,type){
    this.setState({content:message,type:type,snackopen:true})
  }
  componentWillUnmount() {
    EventBus.remove("logout");
    EventBus.remove("sessionend");
    
  }

  logOut() {
    this.props.dispatch(logout());
    this.setState({
      // showModeratorBoard: false,
      // showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser } =  this.state;
    
    

    // console.log(currentUser);
    return (
      <Router history={history}>
        <Switch>
          {/* <Route exact path={["/", "/homefa"]}>

          </Route>
          <Route exact path={["/fa", "/homefa"]}>
           
          </Route> */}
            {/* {window.screen.width  >768 ?(<Route exact path="/" component={Homefa} />):(<Route exact path="/" component={Homefa} />)} */}
          {/*  */}
          
          {window.screen.width  >768 ?(<Route exact path="/" component={LoginFa} />):(<Route exact path="/" component={LoginmFa} />)}
          <Route exact path="/register" component={Register} />
         
          {window.screen.width < 768 ?(<Route exact path="/loginEn" component={LoginM} />):(<Route exact path="/loginEn" component={Login} />)}
          {window.screen.width < 768 ?(<Route exact path="/profileEn" component={Profile_mobile} />):(
          
          <Route exact path="/profileEn" component={Main} />
          )}
           {window.screen.width > 768 ?(<Route exact path="/profile" component={Main_fa} />):(<Route exact path="/profile" component={Profile_mobileFa} />)}
           <Route exact path="/under-construction" component={Construction}/>
           <Route component={Notfound}/>
          
        </Switch>
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
        {/* <AuthVerify logOut={this.logOut}/> */}
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);
