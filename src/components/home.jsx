import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.waves.min'
import Delta from './Delta_Squad.png'
import cropped from './cropped(2).png'



const MyComponent = (props) => {
  const home_top={
    display:'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh'
  }
  
  const top_content={
    display:'flex',
    flexDirection:'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  }
  
  
  const aboutDiv={
    display: 'flex',
    flexDirection: 'column',
    flexWrap:'wrap',
    backgroundColor: 'white',
    height:'25vh',
  width:'100vh',
  position: 'absolute',
  
  bottom:0 
    
  }
  
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
  <div>
  <div style={{display:'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center', width: '100vw', height:'60vh', position:'fixed', left:0, top: '10vh'}} ref={myRef}>
  <img src={cropped} alt="" style={{width: 250, position:'relative', bottom: 50 }}/>

    <p className='jersey-15-regular' style={{fontSize:50, position:'relative', bottom:20, color: ''}}>DELTA SQUADRON</p>

  </div>

  <div style={{backgroundColor:'#f0c7c5', height: '30vh', position: 'fixed', bottom: 0, width: '100vw', left: 0, display:'flex', flexDirection:'column'}}>
<p className =" bebas-neue-regular" style={{color:'black', fontSize:30}}>WHO ARE WE?</p>

<p className='dancing-script' style={{color: 'black', fontSize: 30}}>We are a group of passionate and enthusiastic students driven by curiosity and guided by capable mentors. Together, we explore diverse fields, strive for excellence, and foster meaningful connections with our alumni and seniors. Through their invaluable experiences and inspiring stories, we continue to learn, grow, and strengthen our bonds.
</p>
  </div>

  </div>)

}

export default MyComponent