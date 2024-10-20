// EventInformation.tsx
import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import GameDevImage from '../assets/game-dev.png';
import EventTypeImage from '../assets/event-type.png';
import { ContainerTitle as Title } from './common/StyledComponents';

// TypeScript Interfaces
interface EventData {
  title: string;
  content: string;
  imageUrl: string;
}

interface EventItemProps {
  data: EventData;
  index: number;
}

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 60vh;
  align-items: flex-start;
  padding: 2rem;
  margin-bottom: 10vw;
  background-color: var(--background-color);
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    margin-bottom: 5vw;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding-left: 5%;
  display: flex;
  flex-direction: column;
  text-align: left;
  position: relative;

  @media (max-width: 768px) {
    padding-left: 0;
    margin-top: 1rem;
  }
`;

const Number = styled.div`
  font-size: 4rem;
  font-family: 'Gobold High Bold', Arial, sans-serif;
  color: transparent;
  -webkit-text-stroke: 0.1rem #ffffff;
  position: absolute;
  top: 0;
  left: 2.5%;

  @media (max-width: 768px) {
    left: 0;
    font-size: 2.5rem;
  }
`;

const TitleContainer = styled.div`
  margin-top: 5vw;

  @media (max-width: 768px) {
    margin-top: 2.5vw;
  }
`;

const Content = styled.div`
  font-size: 1.5rem;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  margin-top: 1.5rem;

  & a {
    color: var(--link-color);
    text-decoration: none;
  }

  & a:hover {
    color: var(--link-hover-color);
    text-decoration: underline;
  }

  & strong {
    font-weight: bold;
  }

  & em {
    font-style: italic;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  padding: 1rem;

  img {
    width: 80%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.2);
    object-fit: cover;

    @media (max-width: 768px) {
      width: 100%;
      margin-top: 1rem;
    }
  }
`;

// EventItem Component: Renders individual event information
const EventItem: React.FC<EventItemProps> = ({ data, index }) => (
  <Container>
    <TextContainer>
      <Number>{index + 1}</Number>
      <TitleContainer>
        <Title>{data.title}</Title>
        <Content>
          <ReactMarkdown>{data.content}</ReactMarkdown>
        </Content>
      </TitleContainer>
    </TextContainer>
    <ImageContainer>
      <img src={data.imageUrl} alt={data.title} />
    </ImageContainer>
  </Container>
);

// Main Component: Renders a list of EventItem components
const EventInformation: React.FC = () => {
  const eventData: EventData[] = [
    {
      title: '比賽主題',
      content:
        '這場黑客松的主題是「遊戲開發」，希望參賽者在創意與技術的碰撞中創造出精彩的作品。',
      imageUrl: GameDevImage,
    },
    {
      title: '比賽型式',
      content:
        '這是一場以遊戲開發為主題的馬拉松式創作比賽。參賽者將在30小時內，自由組隊（3至6人一隊），從頭開始設計、編程和完成一款遊戲作品。比賽現場會有導師支援，並安排相關課程，幫助參賽者解決技術問題和提升創作能力。',
      imageUrl: EventTypeImage,
    },
  ];

  return (
    <div>
      {eventData.map((data, index) => (
        <EventItem key={index} data={data} index={index} />
      ))}
    </div>
  );
};

export default EventInformation;
