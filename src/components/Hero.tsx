/*
  Hero Component
  Displays the hero section with the main title and the HeroUFO component.
  Updated to use CSS variables for colors.
*/

import React from 'react';
import styled from 'styled-components';
import HeroUFO from './HeroUFO';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  position: relative;
  overflow-x: hidden;

  @media (max-width: 1000px) {
    height: auto;
  }

  @media (max-width: 800px) {
    height: auto;
    padding: 20px 0;
  }

  @media (max-width: 500px) {
    padding: 10px;
  }
`;

const TitleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-family: 'Audiowide', sans-serif;
  top: -100px;
  left: -20px;

  @media (max-width: 1000px) {
    top: -80px;
    left: -10px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    top: 0;
    left: 0;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    top: 0;
    left: 0;
  }
`;

const Title = styled.h1`
  font-size: clamp(24px, 5vw, 72px);
  color: var(--text-color);
  text-align: center;
`;

const UFOWrapper = styled.div`
  position: absolute;
  top: 0;
  right: -150px;
  transform: translate(-50%, -50%);

  @media (max-width: 1000px) {
    width: 80px;
    right: -100px;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <TitleContainer>
        <Title>Counterspell Taiwan</Title>
        <UFOWrapper>
          <HeroUFO />
        </UFOWrapper>
      </TitleContainer>
    </HeroContainer>
  );
};

export default Hero;
