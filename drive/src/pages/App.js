
import Header from '../components/Header.js';
import DrawerLeft from '../components/Drawer.js';
import Middle from '../components/middle.js';
import DrawerRight from '../components/right_drawer.js';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
function App() {
  return (
    <div className="App">
      <div style={{display:"block"}}>
      <Header />
      
      </div>
      <Grid container spacing={1}>
          <Grid item xs={2} md={2} sm={2}>
              <div style={{display:"block"}}>    
                  <DrawerLeft />
              </div>
          </Grid> 
          <Grid item xs={9.5} md={9.5} sm={9}>
              <div style={{display:"block"}}>
                  <Middle/>
                </div>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={0.5} md={0.4} sm={0.5}>
              <div style={{display:"block"}}>
                  <DrawerRight />
              </div>
            </Grid>
      </Grid>
    </div>
  );
}

export default App;
