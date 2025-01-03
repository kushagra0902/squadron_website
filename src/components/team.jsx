import React from 'react';


 import lnLink from './ln link.png'
 import instaLink from './insta link.png'
 import kush from './kushagra.jpg';
 import tharak from './tharak.jpg';
 import Yuvraj from './yuvraj.jpg';
 import Abhishek from './abhishek_team.jpg'
 import Tejas from './tejas.png'

const TeamMember = ({ image, name, insta, linkedin }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '2rem',
    width: '300px',
    padding: '1rem'
  }}>
    <div style={{
      width: '200px',
      height: '200px',
      marginBottom: '1rem'
    }}>
      <img 
        src={image} 
        alt={name} 
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          border: '1px solid white',
          objectFit: 'cover'
        }}
      />
    </div>
    <p style={{
      fontSize: '1.25rem',
      marginBottom: '0.5rem'
    }}>{name}</p>
    <div style={{
      display: 'flex',
      gap: '0.5rem'
    }}>
      <a href={insta}>
        <img 
          src={instaLink} 
          alt="Instagram" 
          style={{
            width: '25px',
            height: '25px'
          }}
        />
      </a>
      <a href={linkedin}>
        <img 
          src={lnLink} 
          alt="LinkedIn" 
          style={{
            width: '25px',
            height: '25px'
          }}
        />
      </a>
    </div>
  </div>
);

const Team = () => {
  const sectionStyle = {
    marginBottom: '4rem'
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '2rem'
  };

  const subHeadingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '2rem'
  };

  const flexCenterStyle = {
    display: 'flex',
    justifyContent: 'center'
  };

  const flexWrapStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem 1rem'
    }}>
      <h1 style={headingStyle}>Our Team</h1>
      
      {/* Vice President Section */}
      <section style={sectionStyle}>
        <h2 className='jersey-15-regular' style={subHeadingStyle}>Vice-President</h2>
        <div style={flexCenterStyle}>
          <TeamMember image={tharak} name="Tharakadatta Hegde" insta="https://www.instagram.com/tharak_hegde/" linkedin="https://www.linkedin.com/in/tharakadatta-hegde-1b6041256/" />
        </div>
      </section>

      {/* Overall Coordinators Section */}
      <section style={sectionStyle}>
        <h2 className="jersey-15-regular" style={subHeadingStyle}>Overall Co-ordinators</h2>
        <div style={flexCenterStyle}>
          <TeamMember image={Yuvraj} name="Yuvraj Saran" insta ="https://www.instagram.com/yuvrajsrn/" linkedin ="https://www.linkedin.com/in/yuvrajsrn/" />
        </div>
      </section>

      {/* Squadron Coordinators Section */}
      <section style={sectionStyle}>
        <h2 className="jersey-15-regular" style={subHeadingStyle}>Squadron Coordinators</h2>
        <div style={flexWrapStyle}>
          <TeamMember image={Tejas} name="Tejas Joshi" insta="https://www.instagram.com/tejas._.joshi/" linkedin="" />
          <TeamMember image={Abhishek} name="Abhishek Garg" insta="https://www.instagram.com/garg_abhishek_06/" linkedin="https://www.linkedin.com/in/abhishek-garg-003340219/" />
          
        </div>
      </section>

      {/* Deltas Section */}
      <section style={sectionStyle}>
        <h2 className='jersey-15-regular' style={subHeadingStyle}>DELTAS</h2>
        {/* Add Delta team members here using the same TeamMember component */}
      </section>
    </div>
  );
};

export default Team;