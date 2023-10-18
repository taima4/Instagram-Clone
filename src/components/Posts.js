import React, { useState } from 'react';
import { Avatar, Box, Button, List, Modal, Paper, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

import axios from 'axios';
import { Navigate } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import driver from "../assets/StoriesAvatars/driver.png";
import farmer from "../assets/StoriesAvatars/farmer-avatar.png";
import female from "../assets/StoriesAvatars/female-chef.png";
import flight from "../assets/StoriesAvatars/flight-attendant.png";
import graduated from "../assets/StoriesAvatars/graduated-student.png";
import saleswoman from "../assets/StoriesAvatars/saleswoman.png";

function generateRandomAvatar() {
  const avatarImages = [
    driver,
    farmer,
    graduated,
    female,
    flight,
    saleswoman,
 ,
  ];
  const randomIndex = Math.floor(Math.random() * avatarImages.length);
  return avatarImages[randomIndex];
}

 
function Posts({ posts, setPosts, token }) {
  const generateRandomData = () => {
    const randomAvatar = generateRandomAvatar();
    return { avatar: randomAvatar };
  };
  const sortedPosts = [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

 

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPost(null);
  };




  const handleDeletePost = (postId) => {
    axios
      .request({
        method: "delete",
        url: `http://16.170.173.197/posts/${postId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const updatedPosts = posts.filter((post) => post.id !== postId);
        setPosts(updatedPosts);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
      closeModal();
  };
  

  const handleEditPost = (postId) => {
    const newDescription = prompt("Please add the new description"+postId);
  
    axios
      .request({
        method: "put",
        url: `http://16.170.173.197/posts/${postId}`,
        data: {
          description: newDescription,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error editing post:", error);
      });
      closeModal();
  };

  


  return (
    
    <List style={{ width: '500px',  marginLeft: '30px', minHeight: '1000px' }}>
      {
      sortedPosts.map((post) => {
        const randomData = generateRandomData();
        return (
          <div key={post.id}>
            
          
             <Box
              style={{
                display: 'flex',
                alignItems: 'self-start',
                marginTop: '10px',
              }}
            >
              <span><Avatar
                alt={post.description}
                src={randomData.avatar}
                style={{  width: '50px', height: '50px', marginBottom:'10px' }}
              /></span>
              <Typography
              variant="caption"
              color="white"
              style={{
                width: '100px',
                
                marginTop: '10px',
                marginBottom: '5px',
                marginLeft: '10px',
                whiteSpace: 'nowrap', // Add this property
              }}
              >
              {post.user.userName}
</Typography>

              <span><MoreVertIcon style={{ color: 'white', marginLeft: '340px' }} onClick={() => openModal(post.id)}  ></MoreVertIcon> </span>
            </Box>

            <img
              alt={post.description}
              src={post.image}
              style={{  width: '500px', height: '560px' }}
            />


            <Box
              style={{
                display: 'flex',
                alignItems: 'self-start',
                width: '100px',
                marginTop: '10px',
              }}
            >
              <span><FavoriteBorderIcon style={{ color: 'white' }} /></span>
              <span><ModeCommentOutlinedIcon style={{ color: 'white', marginLeft: '10px' }} /></span>
              <span><SendOutlinedIcon style={{ color: 'white', marginLeft: '10px' }} /></span>
              <span><BookmarkBorderOutlinedIcon style={{ color: 'white', marginLeft: '380px' }} /></span>
            </Box>
            <Box
              style={{
                display: 'flex',
                alignItems: 'self-start',
                color: 'white',
                marginTop: '10px',
              }}>
 {post.likes ? post.likes.length : 0} likes
             </Box>
             <Box
              style={{
                display: 'flex',
                alignItems: 'self-start',
                justifyContent: 'start',
                color: 'white',
                width: '460px',
                marginTop: '10px',
                marginBottom: '20px'
              }}>
              {post.user.userName}
            </Box>
            <Box
              style={{
                display: 'flex',
                alignItems: 'self-start',
                justifyContent: 'start',
                color: 'white',
                width: '460px',
                marginTop: '10px',
                marginBottom: '60px'
              }}>
              {post.description}
            </Box>
          </div>
        );
      })}
      <Modal open={isModalOpen} onClose={closeModal} >
  <Paper style={{ position: 'absolute', top: '25%', left: '58.5%', justifyContent: 'center', alignItems: 'center' , textAlign:"center", width:"80px" }}>
    <Button  onClick={() => handleEditPost(selectedPost)} style={{color:"white"}}>Edit</Button>
    <hr></hr>
 
    <Button  onClick={() => handleDeletePost(selectedPost)} style={{color:"white"}}>Delete</Button>
  </Paper>
</Modal>

    </List>
  );
}

export default Posts;