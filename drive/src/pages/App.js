
import Header from '../components/Header.js';
import DrawerLeft from '../components/Drawer.js';
import Grid from '@mui/material/Grid';
function App() {
  return (
    <div className="App">
      <div style={{display:"block"}}>
      <Header />
      
      </div>
      <Grid container spacing={3}>
          <Grid item xs={2} md={2} sm={2}>
              <div style={{display:"block"}}>    
                  <DrawerLeft />
              </div>
          </Grid> 
          <Grid item xs={9} md={9} sm={9}>
              <div style={{display:"block"}}>

                </div>
          </Grid>
      </Grid>
    </div>
  );
}

export default App;
