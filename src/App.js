import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/login.component";
import LoginFa from "./components/loginFa.component";
import LoginmFa from "./components/loginmobilefa.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Homefa from "./components/homefa.component";
import Profile_mobile from "./components/mobile.component";
import Profile_mobileFa from "./components/mobileFa.component";

import LoginM from "./components/loginmobile.component";
import Main from "./pages/main";
import Main_fa from "./pages/main_fa";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import { ThemeProvider, createMuiTheme } from '@mui/material/styles';

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
    };
    
    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  componentDidMount() {
    // localStorage.setItem("Folders",JSON.stringify([]));
    const user = this.props.user;
    
    if (user) {
      this.setState({
        currentUser: user,
        //     showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        //     showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
   

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
    
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
            {window.screen.width  >768 ?(<Route exact path="/" component={HomeFa} />):(<Route exact path="/" component={HomeFa} />)}
          
{/*           
          {window.screen.width  >768 ?(<Route exact path="/" component={LoginFa} />):(<Route exact path="/" component={LoginmFa} />)}
          <Route exact path="/register" component={Register} /> */}
{/*          
          {window.screen.width < 768 ?(<Route exact path="/loginEn" component={LoginM} />):(<Route exact path="/loginEn" component={Login} />)}
          {window.screen.width < 768 ?(<Route exact path="/profileEn" component={Profile_mobile} />):(
          
          <Route exact path="/profileEn" component={Main} />
          )}
           {window.screen.width > 768 ?(<Route exact path="/profile" component={Main_fa} />):(<Route exact path="/profile" component={Profile_mobileFa} />)} */}
          
        </Switch>

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
