import React, { useState } from "react";
import Box from "@mui/material/Box";
import iphone from "../assets/iPhoneScreen.png";
import android from "../assets/androidScreen.png";
import { Link, useNavigate } from "react-router-dom";

import { Button,   Grid, TextField } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import InstagramLogo from "../assets/instagram-logo.png";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import Visibility from '@mui/icons-material/Visibility';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from "axios";

export default function OverlappingPhotosLayout() {

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });
  
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault()

    axios.post("http://16.170.173.197/users/login", userData)
      .then((response) => {
        console.log("🚀 ~ file: SignIn.jsx:57 ~ .then ~ response:", response)
        const token = response.data.token;
        localStorage.setItem("token", token)
        navigate("/")

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
            padding: "20px",
            width: "500px",
          }}
        >
          <img src={InstagramLogo} alt="instagram" width={"150px"} style={{textAlign:"center", marginLeft:"155px"}}></img>

          <form noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Mobile Number or Email"
                  name="email"
                  autoComplete="email"
                  value={userData.email}
                  onChange={(e) => {
                    setUserData({ ...userData, email: e.target.value })
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
                Login
            </Button>
          </form>
          <p className="or">Or</p>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{backgroundColor:"#0095F6", color :"white"}}
            
            sx={{ mt: 3, mb: 2 }}
          >
        <FacebookOutlinedIcon style={{marginRight:"3px"}}></FacebookOutlinedIcon> Login with Facebook
          </Button>

          <div
            style={{
              borderRadius: "10px",
              padding: "10px",
            }}
          >
           <a href="#" style={{textAlign:"center" ,color :"grey"}}> Forget Password?</a>
          </div>
        </Box>      
               <Link to="/signup" variant="body2">

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
           <p > Don’t have an account? <a href="/SignUp" style={{color:"#0095F6" , textDecoration:"none"}}>Sign Up</a></p>
            </div>
            </Link>
      </Box>
    </div>
  );
}
