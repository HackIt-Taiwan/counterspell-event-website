/*
  Workshop Component
  Provides information about the game development workshop offered by Counterspell Taiwan.
  Updated to use CSS variables for colors and background.
*/

import React from 'react';
import styled from 'styled-components';
import JoinButton from '../components/JoinButton';
import LearnBox from '../components/LearnBox';

const WorkshopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 2rem 2rem 2rem;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: var(--background-color-light);

  @media (max-width: 800px) {
    padding: 100px 1rem 1rem 1rem;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: var(--text-color);
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 0.5rem;

  @media (max-width: 800px) {
    font-size: 2rem;
    margin-top: 1rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  color: var(--text-color);
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 800px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const EventInfoBox = styled.div`
  text-align: center;
  color: var(--text-color);
  margin-top: 1rem;
  font-size: 1.5rem;

  p {
    font-family: Arial, sans-serif;
    margin: 0.5rem 0;
  }

  @media (max-width: 800px) {
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }
`;

const Workshop: React.FC = () => {
  return (
    <WorkshopContainer>
      <Content>
        <Title>Counterspell Taiwan</Title>
        <SubTitle>遊戲入門開發工作坊</SubTitle>
        <JoinButton />
        <EventInfoBox>
          <p>活動時間: 2024/11/29 20:00 - 21:00</p>
          <p>地點: 台北市</p>
        </EventInfoBox>
      </Content>
      <LearnBox />
    </WorkshopContainer>
  );
};

export default Workshop;
