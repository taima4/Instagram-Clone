import React from 'react'
import Nav from '../components/Nav';
import Story from '../components/Stories';
import Posts from '../components/Posts';
import Contect from '../components/Contect';

function Home() {   
    return (
        <div>
<div style={{display:"flex", justifyContent:"space-evenly"}}>
        <Nav/>
        <div style={{width:"650px"}}> 
        <Story/>
        <Posts></Posts>
        </div>
        <Contect></Contect>
    </div>
     </div>
    )
}

export default Home