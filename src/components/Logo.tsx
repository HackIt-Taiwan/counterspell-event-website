// Logo Component
// Displays a circular logo image with error handling and responsive design.

import React, { useState } from 'react';
import styled from 'styled-components';

// Props interface for Logo component.
interface LogoProps {
  src?: string;
  alt?: string;
  size?: string;
}

// Container for the logo, ensuring a circular shape and responsive size.
const LogoContainer = styled.div<{ size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  overflow: hidden;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;

  @media (max-width: 768px) {
    width: calc(${(props) => props.size} * 0.75);
    height: calc(${(props) => props.size} * 0.75);
    margin: 25px;
  }
`;

// Styled image for the logo.
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Logo Component
const Logo: React.FC<LogoProps> = ({ src, alt = 'Logo', size = '100px' }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <LogoContainer size={size}>
      {src && !imageError ? (
        <Image src={src} alt={alt} onError={() => setImageError(true)} />
      ) : (
        <Fallback />
      )}
    </LogoContainer>
  );
};

// Fallback component when image fails to load.
const Fallback = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ccc;
`;

export default Logo;
