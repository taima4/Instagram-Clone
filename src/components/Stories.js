// MyComponent.js

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Grid, Typography } from "@mui/material";

import driver from "../assets/StoriesAvatars/driver.png";
import farmer from "../assets/StoriesAvatars/farmer-avatar.png";
import female from "../assets/StoriesAvatars/female-chef.png";
import flight from "../assets/StoriesAvatars/flight-attendant.png";
import graduated from "../assets/StoriesAvatars/graduated-student.png";
import saleswoman from "../assets/StoriesAvatars/saleswoman.png";

import "./style.css";

const avatarImages = [
  driver,
  farmer,
  graduated,
  female,
  flight,
  saleswoman,
  driver,
  farmer,
  female,
  saleswoman,
  graduated,
  female,
];

const names = [
  "ali",
  "moath",
  "obada",
  "wead",
  "dalal",
  "nada",
  "adel",
  "ahmad",
  "nada",
  "sham",
  "ali",
  "hala",
];

export default function Stories() {
  return (
    <div style={{ marginLeft: "-50px" ,marginTop:"30px" , width:"1400px", paddingBottom:"30px", 
  }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={7}
            sx={{ width: "100" }}
          >
            {avatarImages.map((image, index) => (
              <SwiperSlide
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    border: "0px solid",
                    backgroundImage:
                      "linear-gradient( #ff3c3f, #ff2848,#eb1381 ,#ff6c29,#fc7334)",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={image}
                    style={{ width: "55px" }}
                    className="wavy-border"
                    alt={names[index]}
                  />
                </div>
                <Typography component="span">{names[index]}</Typography>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </div>
  );
}
