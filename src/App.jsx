
import './App.css'
import Home from './components/home'
import Team from './components/team'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/navMenu'
import Events from './components/events'
import { BrowserRouter } from 'react-router-dom'

import React, { Component } from 'react';
import { useEffect } from 'react'
function App() {
 
  return (
  <div >
 
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/team' element={<Team />}></Route>
        <Route path ='/events' element ={ <Events />}></Route>
      </Routes>
      </BrowserRouter>
 </div>
 )
}

export default App
