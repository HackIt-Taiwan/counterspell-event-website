/**
 * EventIntroTransition Component
 * Displays a transition section with animated text and an arrow image to guide user navigation.
 */

import React from 'react';
import styled, { keyframes } from 'styled-components';
import ArrowImage from '../assets/arrow.svg';

// Fade-in animation for smooth appearance.
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Container for the transition section.
const TransitionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: left;
  position: relative;
`;

// Container for the text elements.
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-right: 50px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    align-items: center;
    margin-right: 0;
  }
`;

// Title styling with dynamic scaling.
const Title = styled.h1`
  font-size: clamp(40px, 8vw, 90px); /* Minimum 40px, scales with screen width */
  animation: ${fadeIn} 1.5s ease-out;
  font-family: 'Arial', sans-serif;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`;

// Subtitle styling with dynamic scaling.
const Subtitle = styled.h2`
  font-size: clamp(20px, 5vw, 40px); /* Minimum 20px, scales with screen width */
  color: #666;
  animation: ${fadeIn} 2s ease-out;
  font-family: 'Arial', sans-serif;
`;

// Arrow image styling, hidden on small screens.
const Arrow = styled.img`
  width: clamp(30px, 4vw, 50px); /* Minimum 30px, scales with screen width */
  height: auto;
  margin-top: clamp(30px, 8vw, 90px); /* Adjusts top margin dynamically */
  transform: scaleY(1.5);

  @media (max-width: 800px) {
    display: none; /* Hide arrow on screens smaller than 800px */
  }
`;

const EventIntroTransition: React.FC = () => {
  return (
    <TransitionContainer>
      <TextContainer>
        <Title>活動介紹</Title>
        <Subtitle>About Counterspell Taiwan</Subtitle>
      </TextContainer>
      <Arrow src={ArrowImage} alt="Arrow" />
    </TransitionContainer>
  );
};

export default EventIntroTransition;
