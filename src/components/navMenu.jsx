import React, { Component } from 'react';
import saaLogo from './SAAlogo.png'
import { useNavigate } from 'react-router-dom'

function NavBar(){

const navigate = useNavigate();

const nav_style={
  display:'flex',
  flexDirection: 'row',
  flexWrap:'wrap',
  height:'10vh',
  width: '100vw',
  backgroundColor: 'white'
}

const button_style={
  backgroundColor: 'white',
  color: 'black'
}

const goToHome = ()=> {
  navigate("/")
}

const goToTeam = ()=>{
  navigate("/team")
}

const goToEvent =()=>{
  navigate("/event")
}

  return(
    <div style={{position:'fixed', top:0,left:0}}>
      <div style={nav_style}>
       <img src={saaLogo} alt="" style={{height:'10vh'}}/>
        <button style={button_style} onClick={goToHome}>Home</button>
        <button style={button_style} onClick={goToTeam}>Team</button>
        <button style={button_style} onClick={goToEvent}>Events</button>
        <button style={button_style} >SAA</button>
        <button style={button_style} >Visit IITJ</button>
      </div>
    </div>
  )
}
export default NavBar