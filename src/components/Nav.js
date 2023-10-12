import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from '@mui/material/Divider';

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import ReelsIcon from "@mui/icons-material/Slideshow";
import MessagesIcon from "@mui/icons-material/Chat";
import NotificationIcon from "@mui/icons-material/FavoriteBorder";
import CreateIcon from "@mui/icons-material/AddCircleOutline";
import YourProfileImage from "../assets/av.jpg";
import InstagramIcon from '@mui/icons-material/Instagram';
import InstagramLogo from '../assets/instagram-logo.png';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import SettingsIcon from '@mui/icons-material/Settings';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ArchiveIcon from '@mui/icons-material/Archive';
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import QrCode from '@mui/icons-material/QrCodeScanner';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "./style.css";
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

 
  export default function PositionedMenu() {
    const [openNav, setOpen] = React.useState(false);



    const handleDrawerClose = () => {
      setOpen(!openNav);
    };
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
  return (
   <div className="nav">
  

 
      <Drawer  variant="permanent" open={!openNav} >
      
      <DrawerHeader 
        sx={{
        display: 'block'} }
        >
  <img
    src={InstagramLogo}
    alt="instagram logo"
    style={{ width: '149px', height: '37px', marginTop:'20px' }} 
    
    
  />
</DrawerHeader >


        <List >
          {[
            "Home",
            "Search",
            "Explore",
            "Reels",
            "Messages",
            "Notification",
            "Create",
            "taima",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon style={{ color: "#ffffff"}}>
                  {text === "Home" &&   <HomeIcon/>}
                  {text === "Search" &&  <SearchIcon />}
                  {text === "Explore" && <ExploreIcon />}
                  {text === "Reels" && <ReelsIcon />}
                  {text === "Messages" && <MessagesIcon />}
                  {text === "Notification" && <NotificationIcon />}
                  {text === "Create" && <CreateIcon />}
                  {text === "taima" && (
                    <img
                      src={YourProfileImage}
                      alt="Your Profile"
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                      }}
                    />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>      
         





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

