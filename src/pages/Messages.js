import React from 'react'
import Nav from '../components/Nav';
import MassagesList from '../components/MassagesList';
import MassagesImg from '../components/MassagesImg';

export default function Messages() {
  return (
    <div><div style={{display:"flex", justifyContent:"space-between" , alignItems:"center"}}>
        <Nav></Nav> 
      
<MassagesList></MassagesList>
<MassagesImg></MassagesImg>
    </div>
    </div>
  )
}
