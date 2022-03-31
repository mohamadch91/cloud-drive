import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/login.component";
import LoginFa from "./components/loginFa.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile_mobile from "./components/mobile.component";
import Test from "./components/test.component";
import LoginM from "./components/loginmobile.component";
import Main from "./pages/main";
import Main_fa from "./pages/main_fa";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";
import {check,change} from "./helpers/history.js"
// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

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
    const user = this.props.user;
    
    if (user) {
      this.setState({
        currentUser: user,
        //     showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        //     showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    if(!check){
      this.logOut();
      change();
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
    change();
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
    console.log(check);
    

    // console.log(currentUser);
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <Link to={"/"} className="navbar-brand">
                cloud drive
              </Link>
              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/home"} className="nav-link">
                    Home
                  </Link>
                </li>

                {/* {showModeratorBoard && (
                  <li className="nav-item">
                    <Link to={"/mod"} className="nav-link">
                      Moderator Board
                    </Link>
                  </li>
                )} */}

                {/* {showAdminBoard && (
                  <li className="nav-item">
                    <Link to={"/admin"} className="nav-link">
                      Admin Board
                    </Link>
                  </li>
                )} */}

                {currentUser && (
                  <li className="nav-item">
                    <Link to={"/profile"} className="nav-link">
                      User
                    </Link>
                  </li>
                )}
              </div>

              {currentUser ? (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/profile"} className="nav-link">
                      {currentUser.username}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="/login" className="nav-link" onClick={this.logOut}>
                      LogOut
                    </a>
                  </li>
                </div>
              ) : (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                      Login
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to={"/register"} className="nav-link">
                      Sign Up
                    </Link>
                  </li>
                </div>
              )}
            </nav>
            <Home />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/loginFa" component={LoginFa} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/loginm" component={LoginM} />
          <Route exact path="/profile" component={Main} />
          <Route exact path="/profile_m" component={Profile_mobile} />
          <Route exact path="/profileFa" component={Main_fa} />
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
