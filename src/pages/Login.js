import React from "react";
import Box from "@mui/material/Box";
import iphone from "../assets/iPhoneScreen.png";
import android from "../assets/androidScreen.png";
import { Link } from "react-router-dom";
import { Button, Divider, Grid, TextField } from "@mui/material";
import InstagramLogo from "../assets/instagram-logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
export default function OverlappingPhotosLayout() {
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

          <form noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Mobile Number or Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth

                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                />
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
        <FacebookIcon style={{marginRight:"3px"}}></FacebookIcon> Login with Facebook
          </Button>

          <div
            style={{
              borderRadius: "10px",
              padding: "10px",
            }}
          >
           <p style={{textAlign:"center" ,color :"grey"}}> Forget Password?</p>
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
           <p > Don’t have an account? <a href="../pages/SignUp" style={{color:"#0095F6" , textDecoration:"none"}}>Sign Up</a></p>
            </div>
      </Box>
    </div>
  );
}
