/**
 * EventIntroductionLayout Component
 * A reusable layout component for displaying event introduction sections with a customizable title and description.
 */

import React from 'react';
import styled from 'styled-components';

// Container for the entire section, flexibly arranging content.
const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 100px 50px 50px;
  height: 100vh;
  box-sizing: border-box;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 20px;
    height: auto;
    margin: 25vh 0; /* Add vertical margin when screen width is less than 800px */
  }
`;

// Container for text content on the left side.
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 20px;

  @media (max-width: 800px) {
    align-items: center;
    margin-right: 0;
  }
`;

// Title styling with responsive scaling and word wrapping.
const Title = styled.h1`
  font-size: clamp(32px, 5vw, 48px); /* Dynamic scaling */
  font-family: 'Arial', sans-serif;
  margin-bottom: 20px;
  word-wrap: break-word; /* Ensure text wraps properly on smaller screens */

  @media (max-width: 800px) {
    text-align: center;
  }
`;

// Description styling with dynamic text alignment for smaller screens.
const Description = styled.p`
  font-size: clamp(14px, 2vw, 18px); /* Dynamic scaling */
  line-height: 1.6;
  text-align: left;
  max-width: 700px;
  word-wrap: break-word;
  margin-bottom: 20px;

  @media (max-width: 800px) {
    text-align: center;
  }
`;

// Placeholder for animations or images on the right side.
const RightColumn = styled.div`
  width: clamp(200px, 20vw, 300px); /* Keep aspect ratio while scaling */
  height: clamp(200px, 20vw, 300px); /* Ensure the same width and height scaling */
  background-color: lightgray;

  @media (max-width: 800px) {
    display: none; /* Hide the animation on screens smaller than 800px */
  }
`;

// Props interface to accept title and description.
interface EventIntroductionLayoutProps {
  title: React.ReactNode;
  description: string;
}

const EventIntroductionLayout: React.FC<EventIntroductionLayoutProps> = ({
                                                                           title,
                                                                           description,
                                                                         }) => {
  return (
    <SectionContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContainer>
      <RightColumn />
    </SectionContainer>
  );
};

export default EventIntroductionLayout;
