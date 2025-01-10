import React from 'react';

const SessionCard = ({ image, title, description, instagramLink }) => {
  return (
    <div
      style={{
        width: '350px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
        }}
      />
      <div
        style={{
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexGrow: 1,
        }}
      >
        <h3
          style={{
            fontSize: '1.6rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: '#333',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            whiteSpace: 'normal',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: '1rem',
            color: '#555',
            marginBottom: '1.5rem',
            flexGrow: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
          }}
        >
          {description}
        </p>
      </div>
      <a
        href={instagramLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
          color: '#fff',
          backgroundColor: '#E4405F',
          padding: '0.8rem 1.2rem',
          borderRadius: '5px',
          textAlign: 'center',
          fontWeight: '600',
          fontSize: '1.1rem',
          transition: 'background-color 0.3s ease',
          marginTop: '1rem',
          marginLeft: '3rem',
          marginRight: '3rem',
          marginBottom: '2rem',
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8B0000'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E4405F'}
      >
        Visit Instagram
      </a>
    </div>
  );
};

export default SessionCard;
