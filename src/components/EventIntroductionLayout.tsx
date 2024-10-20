/**
 * EventIntroductionLayout Component
 * A reusable layout component for displaying event introduction sections with a customizable title and description.
 * Updated to use CSS variables for background colors.
 */

import React from 'react';
import styled from 'styled-components';

import { ContainerTitle } from './common/StyledComponents.tsx'

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 100px 50px 100px;
  min-height: 70vh;
  box-sizing: border-box;
  background-color: var(--background-color);

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 20px;
    height: auto;
    margin: 25vh 0;
  }
`;

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

const Description = styled.p`
  font-size: clamp(14px, 2vw, 18px);
  line-height: 1.6;
  text-align: left;
  max-width: 700px;
  word-wrap: break-word;
  margin-bottom: 20px;
  color: var(--text-color);

  @media (max-width: 800px) {
    text-align: center;
  }
`;

const RightColumn = styled.div`
  width: clamp(200px, 20vw, 300px);
  height: clamp(200px, 20vw, 300px);
  background-color: var(--background-color);

  @media (max-width: 800px) {
    display: none;
  }
`;

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
        <ContainerTitle>{title}</ContainerTitle>
        <Description>{description}</Description>
      </TextContainer>
      <RightColumn />
    </SectionContainer>
  );
};

export default EventIntroductionLayout;
