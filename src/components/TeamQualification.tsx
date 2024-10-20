/*
  TeamQualification Component
  Displays qualifications required to form a team, with animated checkmarks.
  Updated to use CSS variables for colors and background.
*/

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HandDrawnCheckmark from '../assets/hand-drawn-checkmark.svg';
import {ContainerTitle} from "./common/StyledComponents.tsx";

const SectionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 100vw;
  padding: 50px;
  height: 70vh;
  box-sizing: border-box;
  background-color: var(--background-color);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const LeftContentContainer = styled.div`
  flex: 0 0 auto;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
  margin-left: 5vw;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;

const RightContentContainer = styled.div`
  flex: 0 0 auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 769px) {
    max-width: 500px;
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

const SmallText = styled.p`
  font-size: clamp(16px, 4vw, 20px);
  font-family: 'Arial', sans-serif;
  margin-bottom: 20px;
  text-align: left;
  color: var(--text-color);

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const CheckmarkSVG = styled.img<{ checked: boolean }>`
  width: 30px;
  height: 30px;
  opacity: ${({ checked }) => (checked ? 1 : 0)};
  transition: opacity 0.4s ease-in-out;
  margin-right: 10px;
`;

const CheckboxLabel = styled.span`
  font-size: clamp(18px, 5vw, 30px);
  font-family: 'Arial', sans-serif;
  line-height: 1.5;
  vertical-align: middle;
  color: var(--text-color);
`;

const TeamQualification: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState([false, false]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const triggerHeight = windowHeight * 0.9;

      if (scrollPosition > triggerHeight) {
        setCheckedItems([true, true]);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <SectionContainer>
      <LeftContentContainer>
        <ContainerTitle>組隊資格</ContainerTitle>
      </LeftContentContainer>

      <RightContentContainer>
        <SmallText>要參加活動，你需要...</SmallText>
        <CheckboxContainer>
          <CheckmarkSVG checked={checkedItems[0]} src={HandDrawnCheckmark} alt="Checkmark" />
          <CheckboxLabel>全國各級高中職學生</CheckboxLabel>
        </CheckboxContainer>
        <CheckboxContainer>
          <CheckmarkSVG checked={checkedItems[1]} src={HandDrawnCheckmark} alt="Checkmark" />
          <CheckboxLabel>每組 3 - 6 人</CheckboxLabel>
        </CheckboxContainer>
      </RightContentContainer>
    </SectionContainer>
  );
};

export default TeamQualification;
