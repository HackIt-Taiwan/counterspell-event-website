/**
 * TransitionUFOAnimation Component
 * Displays an animated UFO that transitions across the screen during scrolling.
 */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UFOImage from '../assets/ufo.png';

// Define the initial height for easier configuration
const initialHeight = 1800; // Initial height for larger screens

// Styled component for the UFO animation section
const UFOContainer = styled.div<{ height: number }>`
  position: relative;
  width: 100%;
  height: ${({ height }) => height}px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styled component for the UFO image
const UFO = styled.img<{ width: number }>`
  width: ${({ width }) => width}px;
  height: auto;
`;

// TransitionUFOAnimation Component
const TransitionUFOAnimation: React.FC = () => {
  const [containerHeight, setContainerHeight] = useState(initialHeight);
  const [ufoWidth, setUFOWidth] = useState(300); // Initial width for larger screens

  // Detect window resize to dynamically adjust height and UFO size
  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;

      // Adjust container height dynamically for smaller screens
      if (newWindowWidth < 800) {
        setContainerHeight(initialHeight * 0.7); // Shrink height for small screens
      } else {
        setContainerHeight(initialHeight);
      }

      // Calculate the new width for the UFO image if it exceeds screen width minus 20px
      const maxWidth = newWindowWidth - 20;
      if (ufoWidth > maxWidth) {
        setUFOWidth(maxWidth); // Shrink UFO width to fit within screen width
      } else {
        setUFOWidth(300); // Default width for larger screens
      }
    };

    window.addEventListener('resize', handleResize);

    // Call resize handler initially to set correct sizes
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [ufoWidth]);

  return (
    <UFOContainer height={containerHeight}>
      <UFO src={UFOImage} width={ufoWidth} alt="UFO Image" />
    </UFOContainer>
  );
};

export default TransitionUFOAnimation;
