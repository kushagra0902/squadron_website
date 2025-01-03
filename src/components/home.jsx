import React from 'react';
import Delta from './Delta_Squad.png';
import { useState } from 'react';
import logo from './SAAlogo.png'


function Home() {

  const [opa, setOpa]= useState(0.5)
  const [opa2, setOpa2]= useState(0)
  const [transY,setTransY]= useState(100)
  const scrolling = (event)=>{
    const {scrollTop, scrollHeight,clientHeight}=event.target
    const scrollRatio=scrollTop/(scrollHeight-clientHeight)
    setOpa(0.5-scrollRatio/2)
    setOpa2(scrollRatio)
   setTransY(Math.max(50,80-scrollRatio*100))
  };
  return (
    <div style={{overflowY:'scroll',height:'100vh'}} onScroll={scrolling}>
      <div style={{display:'flex', flexDirection:'column', justifyContent: 'center'}}>
     

        <img src={Delta} alt="" 
        style={{
          position: 'fixed',
          top:0,
          left:0,
          zIndex:-1,
          opacity:opa,
          height:100+'vh',
          width:100+'vw',
          
        }}/>
        <img src={logo} alt="" 
        style={{
          position: 'fixed',
          top:0,
          left:0,
          zIndex:-1,
          opacity:opa2,
          height:100+'vh',
          width:100+'vw',
        }}
        />
        <div style={{marginTop: 150}}> 
        <p style={{ textAlign: 'center', fontSize: 80, flexShrink:1}}>SAA</p>
        <p style={{ textAlign: 'center',fontSize:20, flexShrink:1 }}>presents</p>
        <p className='dancing-script' style={{ textAlign: 'center',color:'pink',fontSize:80, flexShrink:1}}>DELTA SQUADRON</p>
        </div>
      </div>
     
      <div style={{transform: `translateY(${transY}vh)`,transition:'transform 0.1s ease-out', minHeight:100+'vh'}}>
            <p>
                <span style={{textAlign:'center', fontSize: 40,marginBottom:100,color:'darkBlue'}}>Who Are We?</span>
                <br></br>
                <span className='playwrite-au-sa' style={{color:'#4a2775', fontSize:20}}>We are a group of passionate and enthusiastic students driven by curiosity and guided by capable mentors. Together, we explore diverse fields, strive for excellence, and foster meaningful connections with our alumni and seniors. Through their invaluable experiences and inspiring stories, we continue to learn, grow, and strengthen our bonds.
                  <br/>

                Welcome to our page! Here, you’ll discover everything about us, our journey, and the exciting events we have in store. Join us as we embark on this incredible adventure!
                </span>
            </p>

        </div>
    </div>
  );
}

export default Home;
