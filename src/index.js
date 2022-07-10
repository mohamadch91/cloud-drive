import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider, createMuiTheme } from '@mui/material/styles';
/**
 * create a theme for persian fonts support
 */
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Vazirmatn',
      'sens-serif',
    ].join(','),
    fontFeatureSettings: "ss01",
  },
   input:{
    fontFamily: [
      'Vazirmatn',
      'sens-serif',
    ].join(','),
    fontFeatureSettings: "ss01",
   } });
   /**
    * render the app
    */
ReactDOM.render(
  <Provider store={store}>
    {/**
     * theme provider for persian fonts support
     */}
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can chađinge
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// use in online mode
serviceWorker.unregister();
