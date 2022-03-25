import React from 'react';
// import { Container, Typography, TextField, Button, } from '@mui/material';
// import { Grid } from '@mui/material';
// import login from '../../images/bannerBg.png';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";



const Login = () => {
    const theme = createTheme();
    return (
        <div>
      
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 14,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
      
          }}
        >
         
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" sx={{'width': '60%'}}>
            <TextField 
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, 'backgroundColor': '#B06E6E ' }}
            >
              Sign In
            </Button>
            
              <Typography>
                  "Don't have an account? <Link to = "/register"><span sx={{'textDecoration': 'none', }}> Sign Up</span></Link>"
              </Typography>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>



           {/* <Container  sx={{ margin: '120px' }} >
            <Grid  sx={{ marginLeft: '250px', marginRight: '300px' }} >
              
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form>
                        <TextField
                            sx={{ width: '50%', m: 2 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            variant="standard" 
                            />
                           
                        <TextField
                            sx={{ width: '50%', m: 2 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"

                            variant="standard" />

                        <Button sx={{ width: '50%', m: 2 }} type="submit" variant="contained">Login</Button>
                
                    </form>
                    </Grid>
        </Container> */}
                  
                {/* <Grid item xs={12} md={6}>
                    <img style={{ width: '600px', height: '500px' }} src={login} alt="" />
                </Grid> */}


          
        </div>
    );
};

export default Login;