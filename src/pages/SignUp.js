import React, { useState } from "react";
import Box from "@mui/material/Box";
import iphone from "../assets/iPhoneScreen.png";
import android from "../assets/androidScreen.png";
import { Button , Grid, TextField } from "@mui/material";
import InstagramLogo from "../assets/instagram-logo.png";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
export default function OverlappingPhotosLayout() {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: ""
  });
  
  function handleSubmit(e) {
    e.preventDefault()

    axios.post("http://16.170.173.197/users/signup", userData)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token)
        navigate("/home")

      }).catch((error) => {
        console.log(error)
      })
  }
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "black",
      }}
    >
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "black",
        }}
      >
        <div style={{ position: "relative" }}>
          <img
            src={iphone}
            alt="First"
            style={{
              
              width: "300px",
            height: "500px",
              position: "absolute",
              top: "50px",
              left: "250px",
              zIndex:"2"
            }}
          />

          <img
            src={android}
            alt="Second"
            style={{ width: "200px", height: "400px", position: "absolute" ,top:"45px",  left: "220px" }} 
          />
        </div>

        

      </Box>
      <Box
        sx={{
          backgroundColor: "black", 
          marginTop:"45px",
          marginRight:"30px"

        }}
      >
        <Box
          sx={{
            backgroundColor: "#1D1D1D", 
            marginLeft: "0px",
            marginRight: "200px",
            marginTop: "15px",
            borderRadius: "10px",
            padding: "15px",
            width: "500px",
          }}
        >
          <img src={InstagramLogo} alt="instagram" width={"150px"} style={{textAlign:"center", marginLeft:"155px"}} ></img>
          <p style={{marginLeft:"100px", textAlign:"center",width:"55%" ,color:"gray"}}>Sign up to see photos and videos
 from your friends </p>
 <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{backgroundColor:"#0095F6", color :"white"}}
            
            sx={{ mt: 3, mb: 2 }}
          >
            <FacebookOutlinedIcon style={{marginRight:"3px"}}></FacebookOutlinedIcon> Login with Facebook
          </Button>
          <p className="or">Or</p>
          <form noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={userData.email}
                  onChange={(e) => {
                    setUserData({ ...userData, email: e.target.value })
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  value={userData.userName}
                  onChange={(e) => {
                    setUserData({ ...userData, userName: e.target.value })
                  }}
                  
                />
              </Grid>
              <Grid item xs={12} >
              <FormControl sx={{ m: 1, width: '98%' }} variant="outlined" >
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton 
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            
            value={userData.password}
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value })
            }}
          />
        </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{backgroundColor:"#0095F6", color :"white",fontWeight:"600"}}

              sx={{ mt: 3, mb: 2 }}
            >
                Sign Up
            </Button>
          </form>
         

          <div
            style={{
              borderRadius: "10px",
              padding: "10px",
            }}
          >
           <p style={{textAlign:"center",width:"70%", marginLeft:"80px" ,color :"grey"}}> By signing up, you agree to our Terms, Data
Policy and Cookies Police</p>
          </div>
        </Box>
        <div style={{
            backgroundColor: "#1D1D1D", 
            color:"gray",
            marginLeft: "0px",
            marginRight: "200px",
            marginTop: "15px",
            borderRadius: "10px",
            padding: "15px",
            width: "500px",
            textAlign:"center"
          }}>
           <p > Have an account?  <a href="/login" style={{color:"#0095F6" , textDecoration:"none"}}>Log In</a></p>
            </div>
      </Box>
    </div>
  );
}
