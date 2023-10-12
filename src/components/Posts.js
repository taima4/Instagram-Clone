import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Card,
  Grid,
  CardContent,
  CardActions,
  Box,
  CardHeader,
  Typography,
  CardMedia,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

import driver from "../assets/StoriesAvatars/driver.png";
import farmer from "../assets/StoriesAvatars/farmer-avatar.png";
import female from "../assets/StoriesAvatars/female-chef.png";
import flight from "../assets/StoriesAvatars/flight-attendant.png";
import graduated from "../assets/StoriesAvatars/graduated-student.png";
import saleswoman from "../assets/StoriesAvatars/saleswoman.png";

import postImg1 from "../assets/postimg/post-img1.png";
import postImg2 from "../assets/postimg/post-img2.png";
import postImg3 from "../assets/postimg/post-img3.png";
import postImg4 from "../assets/postimg/post-img4.png";
import postImg5 from "../assets/postimg/post-img5.png";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 128,
  },
}));

const postArray = [
  {
    username: "ali",
    image: driver,
    postImage:postImg1,
    likes: 771,
    caption:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    username: "moath",
    image: farmer,
    postImage:postImg2,

    likes: 201,
    caption:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    username: "obada",
    image: graduated,
    postImage:postImg3,

    likes: 100,
    caption:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    username: "wead",
    image: flight,
    postImage:postImg4,

    likes: 111,
    caption:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    username: "sham",
    image: female,
    postImage:postImg5,

    likes: 471,
    caption:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    username: "nada",
    image: saleswoman,
    postImage:postImg2,

    likes: 551,
    caption:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  // Add more post data here
]; 
 const ITEM_HEIGHT = 48;

const options = [
    'edit',
    'delete',
  ];

export default function ProminentAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
  return (
    <div>
      {postArray.map((post, index) => (
        <Box key={index} style={{ marginLeft: "-50px" }}>
          <AppBar
            position="static"
            style={{
              backgroundColor: "#121212",
              borderTop: ".5px solid #232323",
              width: "81.575%",
              boxShadow: "none",
            }}
          >
            <Toolbar style={{ backgroundColor: "#121212" }}>
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{ flexGrow: 1, alignSelf: "flex-end" }}
              >
                <SwiperSlide
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    marginBottom: "5px",
                  }}
                >
                  <div
                    style={{
                      width: "55px",
                      height: "55px",
                      border: "0px solid",
                      backgroundImage:
                        "linear-gradient( #ff3c3f, #ff2848,#eb1381 ,#ff6c29,#fc7334) ",
                      borderRadius: "50%",
                      marginRight: "15px",
                    }}
                  >
                    <img
                      src={post.image}
                      style={{ width: "50px" }}
                      className="wavy-border"
                    />
                  </div>
                  <Typography component="span">{post.username}</Typography>
                </SwiperSlide>
              </Typography>

        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
     
                </Toolbar>
          </AppBar>

          <Box
            sx={{
              width: 571.568,
              height: 512,
            }}
          >
            <img
              src={post.postImage}
              style={{ width: "571.568px", height: "512px" }}
              className="post-bady"
            />
          </Box>

          <div>
            <CardActions disableSpacing>
              <Box style={{ display: "flex" }}>
                <Box>
                  <IconButton aria-label="add to favorites">
                    <FavoriteBorderIcon />
                  </IconButton>

                  <IconButton aria-label="share">
                    <ModeCommentOutlinedIcon />
                  </IconButton>

                  <IconButton aria-label="share">
                    <SendOutlinedIcon />
                  </IconButton>
                </Box>

                <Box style={{ marginLeft: "400px" }}>
                  <IconButton aria-label="share">
                    <BookmarkBorderOutlinedIcon />
                  </IconButton>
                </Box>
              </Box>
            </CardActions>

            <CardContent>
              <Typography style={{ marginTop: "-20px" }}>
                {post.likes} likes
              </Typography>
              <Typography>{post.username}</Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ width: "550px" }}
              >
                {post.caption}
              </Typography>
            </CardContent>
          </div>
        </Box>
      ))}
    </div>
  );
}



  
  

  
 