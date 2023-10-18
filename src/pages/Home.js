import React from 'react'
import Nav from '../components/Nav';
import Story from '../components/Stories';
import Posts from '../components/Posts';
import Contect from '../components/Contect';
import  { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {  
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("token")

  useEffect(() => {
    axios.get("http://16.170.173.197/posts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setPosts(response.data.posts)
    }).catch((error) => {
      console.log("Error Fedching Posts", error)
    })
  }, []) 
    return (
        <div>
<div style={{display:"flex", justifyContent:"space-evenly"}}>
<Nav setPosts={setPosts}></Nav>
        <div style={{width:"650px"}}> 
       
        <Story/>
        <Posts posts={posts} setPosts = {setPosts} token = {token}/>
        </div>
        <Contect></Contect>
    </div>
     </div>
    )
}

export default Home