import React, { useState, useEffect, useRef } from 'react';
import saaLogo from '../assets/SAAlogo.png';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false); // Close the menu if clicked outside
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  const navContainerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    boxShadow: scrolled ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
    backgroundColor: scrolled || isMenuOpen ? 'rgba(255, 255, 255, 0.8)' : '#ffffff',
    zIndex: 1000,
    transition: 'background-color 0.3s, box-shadow 0.3s',
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 1rem',
    height: '8vh',
  };

  const logoStyle = {
    height: '8vh',
    zIndex: 1000,
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '2rem',
  };

  const buttonStyle = {
    position: 'relative',
    background: 'none',
    color: '#333',
    border: 'none',
    padding: '0',
    fontSize: '18px',
    fontWeight: '500',
    cursor: 'pointer',
    outline: 'none',
    transition: 'color 0.3s ease-in-out',
  };

  const underlineStyle = {
    content: '""',
    position: 'absolute',
    left: '0',
    bottom: '-2px',
    width: '0%',
    height: '2px',
    backgroundColor: 'purple',
    transition: 'width 0.3s ease-in-out',
  };

  const handleMouseEnter = (e) => {
    const underline = e.target.querySelector('span');
    e.target.style.color = 'purple';
    if (underline) underline.style.width = '100%';
  };

  const handleMouseLeave = (e) => {
    const underline = e.target.querySelector('span');
    e.target.style.color = '#333';
    if (underline) underline.style.width = '0%';
  };

  const goToHome = () => navigate('/');
  const goToTeam = () => navigate('/team');
  const goToEvent = () => navigate('/event');
  const goToSAA = () => window.open('https://saa.iitj.ac.in', '_blank');
  const goToIITJ = () => window.open('https://iitj.ac.in', '_blank');

  const navButtons = [
    { label: 'Home', onClick: goToHome },
    { label: 'Team', onClick: goToTeam },
    { label: 'Events', onClick: goToEvent },
    { label: 'SAA', onClick: goToSAA },
    { label: 'Visit IITJ', onClick: goToIITJ },
  ];

  const handleHamburgerClick = (event) => {
    event.stopPropagation();  // Prevent the click from propagating
    setIsMenuOpen(!isMenuOpen);  // Toggle the menu
  };

  return (
    <div style={navContainerStyle}>
      <div style={navStyle}>
        <img src={saaLogo} alt="SAA Logo" style={logoStyle} />
        {!isMobile ? (
          <div style={buttonContainerStyle}>
            {navButtons.map((button, index) => (
              <button
                key={index}
                style={buttonStyle}
                onClick={button.onClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {button.label}
                <span style={underlineStyle}></span>
              </button>
            ))}
          </div>
        ) : (
          <button
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={handleHamburgerClick} // Use the updated handler here
          >
            <div style={{ width: '30px', height: '3px', backgroundColor: '#333', margin: '5px 0' }}></div>
            <div style={{ width: '30px', height: '3px', backgroundColor: '#333', margin: '5px 0' }}></div>
            <div style={{ width: '30px', height: '3px', backgroundColor: '#333', margin: '5px 0' }}></div>
          </button>
        )}
      </div>

      {/* Sliding Menu (Only on Small Screens) */}
      {isMobile && (
        <div
          ref={menuRef}
          style={{
            position: 'absolute',
            top: '8vh',
            left: 0,
            right: 0,
            backgroundColor: 'white',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1rem',
            transform: isMenuOpen ? 'translateY(0)' : 'translateY(-200%)',
            transition: 'transform 0.3s ease-out',
            zIndex: 999,
            visibility: isMenuOpen ? 'visible' : 'hidden',
          }}
        >
          {navButtons.map((button, index) => (
            <button
              key={index}
              style={buttonStyle}
              onClick={() => {
                button.onClick();
                setIsMenuOpen(false);
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {button.label}
              <span style={underlineStyle}></span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavBar;
