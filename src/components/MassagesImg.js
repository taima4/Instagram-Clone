import React from 'react'
import messengarlogo from "../assets/messengar-logo.png";
import Button from '@mui/material/Button';

export default function MassagesImg() {
  return (
    <div>
        <div style={{width:"900px" , textAlign:"center"}}>
        <img src={messengarlogo} width={"130px"} style={{marginLeft:"30px" , marginTop:"-30px"}}></img>
        <p style={{fontSize:"30px", fontWeight:"700"}}> Your Messages</p>
        <p style={{color:"#969696" , fontSize:"20px"}}> Send private photos and messages to a friend or group </p>
        <Button variant="contained" style={{borderRadius:"20px" ,color:"#ffff",background: "#0095F6"}}>SEND MESSAGE</Button>

        </div>
    </div>
  )
}
