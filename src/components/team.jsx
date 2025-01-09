import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

import kush from '../assets/kushagra.jpg';
import tharak from '../assets/tharak.jpg';
import Yuvraj from '../assets/yuvraj.jpg';
import Abhishek from '../assets/abhishek_team.jpg';
import Tejas from '../assets/tejas.png';
import kushagra from '../assets/kushagra2.jpg';
import arsh from '../assets/arsh.jpg';
import dhruv from '../assets/dhruv.jpg';
import palak from '../assets/palak.jpg';
import pandey from '../assets/pandey.jpg';
import prajwal from '../assets/prajwal.jpg';
import pranav from '../assets/pranav.png';
import tanishka from '../assets/tanishka.jpg';
import nayan from '../assets/nayan.png';

const TeamMember = ({ image, name, insta, linkedin }) => {
  const fadeInStyle = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
  });

  return (
    <animated.div
      style={{
        ...fadeInStyle,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '2rem',
        width: '250px',
        padding: '1rem',
        borderRadius: '8px',
      }}
    >
      <div
        style={{
          width: '180px',
          height: '180px',
          marginBottom: '1rem',
          transition: 'transform 0.3s ease',
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '3px solid #fff',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
      </div>
      <p
        style={{
          fontSize: '1.25rem',
          marginBottom: '0.5rem',
          fontWeight: 'bold',
          color: '#333',
        }}
      >
        <span
          style={{
            position: 'relative',
            display: 'inline-block',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, opacity 0.3s ease',
          }}
          onMouseEnter={(e) => {
            const underline = e.target.querySelector('span');
            underline.style.transform = 'scaleX(1)';
            underline.style.opacity = '1';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            const underline = e.target.querySelector('span');
            underline.style.transform = 'scaleX(0)';
            underline.style.opacity = '0';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {name}
          <span
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '2px',
              backgroundColor: '#333',
              transform: 'scaleX(0)',
              transformOrigin: 'bottom left',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              opacity: 0,
            }}
          />
        </span>
      </p>
      <div style={{ display: 'flex', gap: '0.8rem' }}>
        {insta && (
          <a
            href={insta}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(90deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(0)';
            }}
          >
            <FaInstagram size={30} color="#E4405F" />
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <FaLinkedin size={30} color="#0A66C2" />
          </a>
        )}
      </div>
    </animated.div>
  );
};

const Team = () => {
  const sectionStyle = { marginBottom: '4rem' };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '3rem',
    color: '#333',
  };

  const subHeadingStyle = {
    fontSize: '2.5rem',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#444',
  };

  const flexCenterStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const flexWrapStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
  };

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 1rem',
        backgroundColor: '#f8f9fa',
      }}
    >
      <h1 style={headingStyle}>Our Team</h1>

      {/* Vice President Section */}
      <section style={sectionStyle}>
        <h2 className="jersey-15-regular" style={subHeadingStyle}>
          Vice-President
        </h2>
        <div style={flexCenterStyle}>
          <TeamMember
            image={tharak}
            name="Tharakadatta Hegde"
            insta="https://www.instagram.com/tharak_hegde/"
            linkedin="https://www.linkedin.com/in/tharakadatta-hegde-1b6041256/"
          />
        </div>
      </section>

      {/* Overall Coordinators Section */}
      <section style={sectionStyle}>
        <h2 className="jersey-15-regular" style={subHeadingStyle}>
          Overall Co-ordinators
        </h2>
        <div style={flexCenterStyle}>
          <TeamMember
            image={Yuvraj}
            name="Yuvraj Saran"
            insta="https://www.instagram.com/yuvrajsrn/"
            linkedin="https://www.linkedin.com/in/yuvrajsrn/"
          />
        </div>
      </section>

      {/* Squadron Coordinators Section */}
      <section style={sectionStyle}>
        <h2 className="jersey-15-regular" style={subHeadingStyle}>
          Squadron Coordinators
        </h2>
        <div style={flexWrapStyle}>
          <TeamMember image={Tejas} name="Tejas Joshi" insta="https://www.instagram.com/tejas._.joshi/" linkedin="" />
          <TeamMember
            image={Abhishek}
            name="Abhishek Garg"
            insta="https://www.instagram.com/garg_abhishek_06/"
            linkedin="https://www.linkedin.com/in/abhishek-garg-003340219/"
          />
        </div>
      </section>

      {/* Deltas Section */}
      <section style={sectionStyle}>
        <h2 className="jersey-15-regular" style={subHeadingStyle}>
          DELTAS
        </h2>
        <div style={flexWrapStyle}>
          <TeamMember image={kushagra} name="Kushagra Kinra" insta="" linkedin="" />
          <TeamMember image={arsh} name="Arsh Goyal" insta="" linkedin="" />
          <TeamMember image={dhruv} name="Dhruv" insta="" linkedin="" />
          <TeamMember image={palak} name="Palak Mishra" insta="" linkedin="" />
          <TeamMember image={pandey} name="Priyanshu Pandey" insta="" linkedin="" />
          <TeamMember image={kushagra} name="Khushvendra Singh" insta="" linkedin="" />
          <TeamMember image={nayan} name="Khushvendra Singh" insta="" linkedin="" />
          <TeamMember image={prajwal} name="Prajwal Shenoy" insta="" linkedin="" />
          <TeamMember image={pranav} name="Pranav Nair" insta="" linkedin="" />
          <TeamMember image={tanishka} name="Tanishka Trivedi" insta="" linkedin="" />
        </div>
      </section>
    </div>
  );
};

export default Team;
