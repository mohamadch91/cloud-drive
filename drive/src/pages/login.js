
import { FormControl, Grid } from "@mui/material";
import { InputLabel } from "@mui/material";
import Input from "@mui/material/Input";
import { FormHelperText } from "@mui/material";
import { alpha, styled } from '@mui/material/styles';
import  "./login.css";
import { TextField } from "@mui/material";
import * as  React from "react";
import Button from "@mui/material/Button";
const ValidationTextField = styled(TextField)({
    
    // on hover on input
    '&input:hover +fieldset': {
        // borderColor: '#4285f4',
        // borderWidth: '1px',
        // borderStyle: 'solid',
        // borderRadius: '5px',
        outline: 'none',
        borderColor:'red',
    },
    '& input:valid + fieldset': {
    //   borderColor: 'blu',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 3,
    },
    '& input:valid:focus + fieldset': {
      borderWidth:3 // override inline-style
    },
  });
  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 20px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
function Auth_User() {

    // write function to change grids when button clicked
    
    const [name, setName] = React.useState('mamad@gmail.com');
    const handleChange = (event) => {
      setName(event.target.value);
    };
    return (
        <Grid container  >
            <Grid item xs={4.52}>
             </Grid>   
            <Grid item xs={2.7} >
                <div className="login-form">
                        <div className="logos">
                            <div className="logo">
                            <img src={require("../assest/svg/Google_2015_logo.svg.png")} alt="logo" width="20%" />
                            </div>
                            <br/>
                           <div id="sign_text">Sign in </div>
                            <br/>
                            <div id="continue_text">to continue to Google Drive </div>
                        </div>
                        <div className="input_box">
                                
                                            <ValidationTextField
                                            id="outlined-name"
                                            fullWidth
                                            label="Email or Phone"
                                            value={name}
                                            defaultValue="a@gmail.com"
                                            required
                                            placeholder="Email or Phone"
                                            onChange={handleChange}
                                            sx={{marginBottom: '10px'}}
                                            />
                                            <a id="forgot_email" href="google.com">
                                                 Forgot email?
                                                
                                            </a>
                               
                        </div>
                        <div id="help_text">
                        Not your computer? Use Guest mode to sign in privately. 
                        <br/>
                        <a id="forgot_email" href="google.com">
                        Learn more
                                                
                         </a>
                        </div>
                        <div id="sumbit">
                        <a id="account" href="google.com">
                         Create account
                                                
                         </a>

                         <BootstrapButton variant="contained" disableRipple>
                            next
                        </BootstrapButton>

                        </div>


                                     
                </div>
                <div id="helps">
                    <div className="text"> Help</div>
                    <div className="text" >  Privacy</div>
                    <div className="text"> Terms</div>

                </div>
      </Grid>
      </Grid>
    );
}

export default Auth_User;
