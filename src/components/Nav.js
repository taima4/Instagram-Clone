import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {Input, Modal, Typography,Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import ReelsIcon from "@mui/icons-material/Slideshow";
import MessagesIcon from "@mui/icons-material/Chat";
import NotificationIcon from "@mui/icons-material/FavoriteBorder";
import CreateIcon from "@mui/icons-material/AddCircleOutline";
import YourProfileImage from "../assets/av.jpg";
import InstagramLogo from '../assets/instagram-logo.png';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SendIcon from '@mui/icons-material/Send';

import SettingsIcon from '@mui/icons-material/Settings';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ArchiveIcon from '@mui/icons-material/Archive';
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import QrCode from '@mui/icons-material/QrCodeScanner';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "./style.css";

import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import axios from 'axios';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  color:"#fffffff"
  
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  color:"#fffffff"

});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 830,
  height:600,
  borderRadius:"10px",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
  export default function Nav({setPosts}) {
    const [openNav] = React.useState(false);
    const [openM, setOpenM] = React.useState(false);
    const handleOpenM = () => setOpenM(true);
    const handleCloseM = () => setOpenM(false);


   
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const [openModal, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const [description, setdescription] = React.useState("");
    const [image, setImage] = React.useState(null)
    const [imageCover, setImageCover] = React.useState(null);
  
    const token = localStorage.getItem("token")
  
    const handledescriptionChange = (event) => {
      setdescription(event.target.value);
    };
  
    const handleImageChange = (event) => {
      if (event.target && event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
      setImage(file);
  
      const reader = new FileReader();
      reader.onload = () => {
        setImageCover(reader.result);
      };
      reader.readAsDataURL(file);
    }
    };
  
    let formData = new FormData();
  
    formData.append("description", description)
    formData.append("image", image)
    
    function handleSubmit(event) {
      event.preventDefault();
  
  
      axios.post("http://16.170.173.197/posts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      }).then((response) => {
        console.log("🚀 ~ file: CreatePost.jsx:59 ~ handleSubmit ~ response:", response)
        setPosts((prevPosts) => [...prevPosts, response.data])
      }).catch((error) => {
        console.log("Error:", error)
      })
  
      handleCloseM()
    }
  return (
    <div className="nav">
      <Drawer variant="permanent" open={!openNav}>
        <DrawerHeader
          sx={{
            display: "block",
          }}
        >
          <img
            src={InstagramLogo}
            alt="instagram logo"
            style={{ width: "149px", height: "37px", marginTop: "20px" }}
          />
        </DrawerHeader>

        <List>
  {[
    { text: "Home", icon: <HomeIcon />, link: "/" },
    { text: "Search", icon: <SearchIcon />, link: "/search" },
    { text: "Explore", icon: <ExploreIcon />, link: "/explore" },
    { text: "Reels", icon: <ReelsIcon />, link: "/reels" },
    { text: "Messages", icon: <MessagesIcon />, link: "/messages" },
    { text: "Notification", icon: <NotificationIcon />, link: "/notification" },
   { text: "Create", icon: <CreateIcon  onClick={handleOpenM} style={{width:"230px", paddingRight:"205px",marginRight:"-200px", textAlign:"end"}}/> },
    { text: "taima", icon: <img src={YourProfileImage} alt="Your Profile" style={{ width: "24px", height: "24px", borderRadius: "50%" } }/>, link: "/Profile" },
  ].map((item, index) => (
    <ListItem key={item.text} disablePadding>
      <ListItemButton>
        <ListItemIcon style={{ color: "#ffffff" }}>{item.icon}</ListItemIcon>
        <a href={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemText primary={item.text} />
        </a>
      </ListItemButton>
    </ListItem>
  ))}
</List>



<div>



<Modal
  open={openM}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "#f2f2f2",
      boxShadow: 24,
      p: 4,
      borderRadius: "20px",
      backgroundColor:'#1D1D1D'
    }}
  >
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Create a New Post
      <hr />
    </Typography>
    <form>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center content horizontally
          justifyContent: "center", // Center content vertically
          backgroundColor:'#1D1D1D'
        }}
      >
        Description
        <Input
          type="text"
          placeholder=""
          value={description}
          onChange={handledescriptionChange}
          required
          fullWidth
          sx={{
            mb: 2,
            backgroundColor: "#353535",
            borderRadius: "10px",
            height: "120px",
          }}
        />
        {imageCover && (
          <img
            src={imageCover}
            alt="Uploaded"
            style={{ width: "100%", marginBottom: "1rem" }}
          />
        )}

<input
  type="file"
  id="image-upload"
  onChange={handleImageChange}
  style={{ display: 'none' }}
/>
<label htmlFor="image-upload">
  <Button
    variant="contained"
    component="span"
    sx={{
      fontFamily: 'Signika',
      width: '100%',
      textAlign: 'left',
      fontWeight: 900,
      marginBottom: '5px',
      paddingTop: '5px',
      paddingBottom: '5px',
      borderRadius: '10px',
      fontSize: '14px',
      color: 'white',
      backgroundColor: '#0095F6',
      ':hover': {
        bgcolor: '#0095F70',
        color: 'white',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0095F6',
        color: 'white',
      },
    }}
  >
    Choose Image
  </Button>
</label>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{
            fontWeight: 900,
            paddingTop: "5px",
            fontFamily: "Signika",
            paddingBottom: "5px",
            borderRadius: "10px",
            fontSize: "14px",
            color: "white",
            backgroundColor: "#0095F6",
            ":hover": {
              bgcolor: "#0095F71",
              color: "white",
            },
            "&:active": {
              boxShadow: "none",
              backgroundColor: "#0095F6",
              color: "white",
            },
          }}
        >
          Post
        </Button>
      </Box>
    </form>
  </Box>
        </Modal>
  </div>















    <div  >
      <MenuIcon
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{position:"absolute ", bottom:"20px" ,left:"10px"}}
      >
          
               </MenuIcon> <p style={{fontSize:"15px"  ,position:"absolute", bottom:"7px", left:"40px" ,color: "#ffffff" }} >Menu</p>
               <Menu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple style={{width:"223px"}}>
          <SettingsIcon style={{marginRight:"10px"}} />
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <QueryBuilderIcon style={{marginRight:"10px"}}/>
          your activity
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon style={{marginRight:"10px"}}/>
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
        <BookmarkBorderOutlinedIcon style={{marginRight:"10px"}}/>
        saved
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <QrCode style={{marginRight:"10px"}}/>
          QrCode
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <PeopleOutlineIcon style={{marginRight:"10px"}}/>
          supervision
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FormatListBulletedIcon style={{marginRight:"10px"}}/>
          closeFriend
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <StarBorderIcon style={{marginRight:"10px"}}/>
          favorites
        </MenuItem>
      </Menu>
    </div>
 
      </Drawer>
    </div>
  );
}

