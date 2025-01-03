import React, { Component } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Router, useNavigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function NavMenu(){

const navigate= useNavigate();

function goToHome(){
navigate('/')
}
function goToTeam(){
   navigate('/team')
}
function goToEvents(){
   navigate('/events')
}

return(
<div>


<NavigationMenu style={{position:'fixed',color: 'black', top:0, right:0}}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>EXPLORE US!!</NavigationMenuTrigger>
          <NavigationMenuContent>
          <NavigationMenuLink><a href='' onClick={goToHome} style={{color: 'black', margin: 10}}>Home</a></NavigationMenuLink>
          <br></br>
            <NavigationMenuLink><a href='' onClick={goToTeam} style={{color: 'black', margin: 10}}>Team</a></NavigationMenuLink>
            <br></br>
            <NavigationMenuLink><a href='' onClick={goToEvents} style={{color: 'black', margin: 10}}>Events</a></NavigationMenuLink>
            <br></br>
            <NavigationMenuLink><a href='https://saa.iitj.ac.in/home.html' style={{color: 'black', margin: 10}}>SAA</a></NavigationMenuLink>
            <br></br>
            <NavigationMenuLink><a href='https://www.iitj.ac.in/' style={{color: 'black', margin: 10}}>IITJ </a></NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    
</div>
)
     
}

export default NavMenu