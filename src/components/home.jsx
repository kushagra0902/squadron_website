import React, { useState, useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.waves.min';
import cropped from '../assets/cropped(2).png';
import { useSpring, animated } from '@react-spring/web';

const MyComponent = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  const fadeInStyle = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 200,
  });

  const slideUpStyle = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 400,
  });

  const textStyle = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1.2)' },
    delay: 600,
  });

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div>
      <animated.div
        style={{
          ...fadeInStyle,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          height: '60vh',
          position: 'fixed',
          left: 0,
          top: '8vh'
        }}
        ref={myRef}
      >
        <animated.img src={cropped} alt="" style={{ width: 250, position: 'relative', bottom: 30 }} />
        <animated.p
          className='jersey-15-regular'
          style={{
            ...textStyle,
            fontSize: 50,
            position: 'relative',
            bottom: 20,
            color: ''
          }}
        >
          DELTA SQUADRON
        </animated.p>
      </animated.div>

      <animated.div
        style={{
          ...slideUpStyle,
          backgroundColor: '#f0c7c5',
          height: '32vh',
          position: 'fixed',
          bottom: 0,
          width: '100vw',
          left: 0,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <p className="bebas-neue-regular" style={{ color: 'black', fontSize: 30 }}>WHO ARE WE?</p>
        <p
          className='dancing-script'
          style={{
            color: 'black',
            fontSize: 30
          }}
        >
          We are a group of passionate and enthusiastic students driven by curiosity and guided by capable mentors. Together, we explore diverse fields, strive for excellence, and foster meaningful connections with our alumni and seniors. Through their invaluable experiences and inspiring stories, we continue to learn, grow, and strengthen our bonds.
        </p>
      </animated.div>
    </div>
  );
}

export default MyComponent;
